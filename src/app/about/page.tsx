import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About RR Builder Mangalore | Trusted Construction & Real Estate Developer",
  description: "RR Builder Mangalore is a construction and real estate company specializing in premium residential and commercial projects. With a commitment to quality, innovation, and customer satisfaction, we build homes and spaces that stand the test of time.",
  keywords: "RR Builder Mangalore, construction company Mangalore, real estate developer Mangalore, luxury apartments Mangalore, residential projects, commercial real estate, trusted builders in Mangalore, home construction, property development",
  robots: "index, follow",
  openGraph: {
    title: "About RR Builder Mangalore | Trusted Construction & Real Estate Developer",
    description: "Learn more about RR Builder Mangalore, a trusted name in construction and real estate. We specialize in high-quality residential and commercial projects with a focus on innovation and customer satisfaction.",
    url: "https://www.rrbuildermangalore.com/about-us", // Replace with actual URL
    type: "website",
    images: [
      {
        url: " ", // Replace with an actual image URL
        width: 1200,
        height: 630,
        alt: "RR Builder Mangalore - Trusted Construction & Real Estate Developer",
      },
    ],
  },
};


const AboutPage = () => {
  return (
    <>
      <Breadcrumb
  pageName="About RR Builder"
  description="RR Builder Mangalore is committed to delivering high-quality real estate and construction services. With a focus on premium apartments and commercial spaces, we ensure excellence, innovation, and customer satisfaction in every project."
/>

      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
