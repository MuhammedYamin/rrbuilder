import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Facilities in and Around BC Road",
    slug: "facilities-around-bcroad",
    paragraph: "BC Road offers a variety of modern facilities, making it a convenient and thriving hub for residents and visitors alike.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Mohammed Rihan",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "16-02-2025",
  },
  {
    id: 2,
    title: "Notable Places in and Around BC Road",
    slug: "notable-places-around-bcroad",
    paragraph: "BC Road is home to a blend of historical, cultural, and modern attractions, making it a key destination for both locals and visitors.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Arvin Suvarna",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "05-01-2025",
  },
  {
    id: 3,
    title: "Sustainable and Eco-Friendly Construction.",
    slug: "sustainable-ecofriendly-construction",
    paragraph: "Sustainable construction integrates eco-friendly materials and smart technologies to minimize environmental impact and enhance efficiency.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Kelvin Dmello",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "25-02-2025",
  },
  {
    id: 4,
    title: "Building Your Vision with Excellence",
    slug: "building-vision-with-excellence",
    paragraph: "Purchasing a new home is a major investment. Here are five key factors to consider before making your decision.",
    image: "/images/blog/blog-04.jpg",
    author: {
      name: "Varun Shetty",
      designation: "Real Estate Expert",
    },
    tags: ["real estate", "home buying"],
    publishDate: "04-03-2025",
  },
];
export default blogData;
