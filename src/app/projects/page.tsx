import Breadcrumb from "@/components/Common/Breadcrumb";
import Projects from "@/components/Projects";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | RR Builder Mangalore - Real Estate & Construction",
  description:
    "Explore our completed and ongoing real estate projects at RR Builder Mangalore. Discover residential and commercial developments tailored to your needs.",
  keywords: [
    "RR Builder projects",
    "real estate projects Mangalore",
    "construction projects Mangalore",
    "residential projects RR Builder",
    "commercial real estate Mangalore",
    "luxury apartments Mangalore",
    "property development Mangalore",
    "ongoing projects RR Builder",
    "completed real estate projects",
    "apartment construction Mangalore"
  ],
  robots: "index, follow",
  openGraph: {
    title: "Our Projects | RR Builder Mangalore - Real Estate & Construction",
    description:
      "Discover a range of high-quality real estate projects by RR Builder Mangalore, including residential apartments and commercial developments.",
    url: "", 
    type: "website",
    images: [
      {
        url: "", 
        width: 1200,
        height: 630,
        alt: "RR Builder Mangalore - Our Projects"
      }
    ]
  }
};

const ProjectsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Projects"
        description="Explore our diverse range of real estate projects, from luxury apartments to commercial spaces, built with excellence and innovation."
      />

      <Projects />
    </>
  );
};

export default ProjectsPage;
