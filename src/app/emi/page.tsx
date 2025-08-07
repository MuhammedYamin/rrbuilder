import Breadcrumb from "@/components/Common/Breadcrumb";
import Emi from "@/components/Emi";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EMI Calculator | RR Builder Mangalore - Plan Your Home Loan",
  description:
    "Use our EMI calculator to estimate your monthly installments for home loans. Plan your budget effectively with RR Builder Mangalore's real estate solutions.",
  keywords: [
    "EMI calculator",
    "home loan calculator",
    "loan EMI calculator",
    "real estate EMI calculator",
    "RR Builder Mangalore EMI calculator",
    "home loan payment calculation",
    "property financing calculator",
    "mortgage calculator Mangalore",
    "apartment EMI calculation",
    "real estate financing RR Builder"
  ],
  robots: "index, follow",
  openGraph: {
    title: "EMI Calculator | RR Builder Mangalore - Plan Your Home Loan",
    description:
      "Accurately calculate your monthly EMI for home loans. Use RR Builder Mangalore's EMI calculator for easy property financing estimates.",
    url: "", 
    type: "website",
    images: [
      {
        url: "", 
        width: 1200,
        height: 630,
        alt: "EMI Calculator - RR Builder Mangalore"
      }
    ]
  }
};

const EMICalculatorPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="EMI Calculator"
        description="Estimate your home loan EMI easily with our calculator. Plan your real estate investment effectively with RR Builder Mangalore."
      />

      <Emi />
    </>
  );
};

export default EMICalculatorPage;
