import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fqvnthjeclpjuvbhfrfn.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// In-memory fallback for local development (won't work reliably in production)
const globalOtpStore = global.otpStore || new Map();

// Clean up expired OTPs from database every 5 minutes
setInterval(async () => {
  try {
    const now = new Date().toISOString();
    await supabase
      .from("otp_store")
      .delete()
      .lt("expires_at", now);
    console.log("Cleaned up expired OTPs from database");
  } catch (error) {
    console.error("Error cleaning up expired OTPs:", error);
  }
}, 5 * 60 * 1000);

// Local in-memory cleanup (for development)
setInterval(() => {
  const now = Date.now();
  globalOtpStore.forEach((data, email) => {
    if (data.expiresAt < now) {
      globalOtpStore.delete(email);
    }
  });
}, 60 * 1000);

global.otpStore = globalOtpStore;

export const otpStoreDB = {
  // Set OTP in database (production) and memory (fallback)
  async set(email, otp, expiresAt) {
    try {
      // Store in Supabase (production-safe)
      await supabase.from("otp_store").upsert(
        {
          email,
          otp: String(otp),
          expires_at: new Date(expiresAt).toISOString(),
          created_at: new Date().toISOString(),
        },
        { onConflict: "email" }
      );
    } catch (error) {
      console.error("Error storing OTP in database:", error);
      // Fallback to memory if database fails
      globalOtpStore.set(email, { OTP: otp, expiresAt });
    }
    // Also store in memory for local dev
    globalOtpStore.set(email, { OTP: otp, expiresAt });
  },

  // Get OTP from database (production) and memory (fallback)
  async get(email) {
    try {
      // Try database first (production)
      const { data, error } = await supabase
        .from("otp_store")
        .select("otp, expires_at")
        .eq("email", email)
        .single();

      if (error && error.code !== "PGRST116") {
        throw error;
      }

      if (data) {
        return {
          OTP: data.otp,
          expiresAt: new Date(data.expires_at).getTime(),
        };
      }
    } catch (error) {
      console.warn("Error fetching OTP from database, trying memory:", error.message);
    }

    // Fallback to memory (local dev)
    return globalOtpStore.get(email);
  },

  // Delete OTP from database and memory
  async delete(email) {
    try {
      await supabase.from("otp_store").delete().eq("email", email);
    } catch (error) {
      console.error("Error deleting OTP from database:", error);
    }
    globalOtpStore.delete(email);
  },
};

export default globalOtpStore;
