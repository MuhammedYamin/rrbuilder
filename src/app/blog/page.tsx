import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Real Estate Blog | Property Trends, Investment Tips & Market Insights",
  description:
    "Stay ahead in real estate with expert insights, market trends, property investment strategies, and home-buying tips. Get the latest updates from RR Builder Mangalore.",
  keywords: [
    "real estate blog",
    "property investment tips",
    "real estate market trends",
    "home buying guide",
    "construction news",
    "Mangalore real estate",
    "RR Builder Mangalore",
    "commercial property insights",
    "luxury apartments",
    "property development",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Real Estate Blog | Property Trends, Investment Tips & Market Insights",
    description:
      "Explore the latest real estate news, market updates, investment strategies, and home-buying tips on the RR Builder Mangalore blog.",
    url: "", // Replace with actual URL
    type: "website",
    images: [
      {
        url: "", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Real Estate Blog - Market Trends & Investment Tips",
      },
    ],
  },
};


const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Blog"
        description="Explore expert insights, market trends, and property investment tips to make informed real estate decisions."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {blogData.map((blog, index) => (
              <div key={`${blog.id}-${index}`}>
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
