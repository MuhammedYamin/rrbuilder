const globalOtpStore = global.otpStore || new Map();

// Function to clean up expired OTPs every minute
setInterval(() => {
  const now = Date.now();
  globalOtpStore.forEach((data, email) => {
    if (data.expiresAt < now) {
      globalOtpStore.delete(email);
    }
  });
}, 60 * 1000); // Runs every 1 minute

global.otpStore = globalOtpStore;
export default globalOtpStore;
