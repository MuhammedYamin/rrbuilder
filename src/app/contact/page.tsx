import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact RR Builder Mangalore | Real Estate & Construction Experts",
  description:
    "Get in touch with RR Builder Mangalore for expert real estate guidance, property consultation, and construction services. Contact us for residential and commercial projects in Mangalore.",
  keywords: [
    "contact RR Builder Mangalore",
    "real estate consultation Mangalore",
    "property developers Mangalore",
    "construction services Mangalore",
    "builders in Mangalore",
    "property investment Mangalore",
    "real estate agents Mangalore",
    "apartment booking Mangalore",
    "commercial real estate Mangalore",
    "luxury homes in Mangalore",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Contact RR Builder Mangalore | Real Estate & Construction Experts",
    description:
      "Looking for real estate experts in Mangalore? Contact RR Builder Mangalore for property consultation, residential projects, and construction services.",
    url: "", // Replace with actual URL
    type: "website",
    images: [
      {
        url: "", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Contact RR Builder Mangalore - Real Estate & Construction Services",
      },
    ],
  },
 
};


const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Have questions about our real estate projects or construction services? our team is here to help. Reach out today, and let's turn your vision into reality!."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
