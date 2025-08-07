import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facilities in and Around BC Road | Real Estate & Infrastructure",
  description:
    "Explore the top facilities in and around BC Road, including educational institutions, healthcare centers, shopping malls, transportation hubs, and more.",
  keywords: [
    "BC Road",
    "Mangalore",
    "real estate",
    "infrastructure",
    "schools",
    "hospitals",
    "transportation",
    "shopping centers",
    "hotels",
    "restaurants",
  ],
  openGraph: {
    title: "Facilities in and Around BC Road | Real Estate & Infrastructure",
    description:
      "Discover the key amenities and infrastructure available in BC Road, from healthcare and education to shopping and dining options.",
    type: "article",
    publishedTime: "2025-01-20",
    images: [
      {
        url: "", // Add your blog image URL here
        width: 1200,
        height: 630,
        alt: "Facilities in and Around BC Road",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "", // Add the canonical URL here
  },
};


const FacilitiesinandAroundBCRoad = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Facilities in and Around BC Road
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4"></div>
                      <div className="w-full">
                        <span className="mb-1 text-base font-medium text-body-color">
                          By <span>Mohammed Rihan</span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            className="fill-current"
                          >
                            <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                            <path d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z" />
                            <path d="M8.93828 8.67529H8.14963C8.00624 8.67529 7.91064 8.77089 7.91064 8.91428V9.67904C7.91064 9.82243 8.00624 9.91802 8.14963 9.91802H8.93828C9.08167 9.91802 9.17727 9.82243 9.17727 9.67904V8.91428C9.17727 8.77089 9.08167 8.67529 8.93828 8.67529Z" />
                            <path d="M11.4715 8.67529H10.6828C10.5394 8.67529 10.4438 8.77089 10.4438 8.91428V9.67904C10.4438 9.82243 10.5394 9.91802 10.6828 9.91802H11.4715C11.6149 9.91802 11.7105 9.82243 11.7105 9.67904V8.91428C11.7105 8.77089 11.591 8.67529 11.4715 8.67529Z" />
                            <path d="M3.89531 11.1606H3.10666C2.96327 11.1606 2.86768 11.2562 2.86768 11.3996V12.1644C2.86768 12.3078 2.96327 12.4034 3.10666 12.4034H3.89531C4.03871 12.4034 4.1343 12.3078 4.1343 12.1644V11.3996C4.1343 11.2562 4.03871 11.1606 3.89531 11.1606Z" />
                            <path d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z" />
                            <path d="M8.93828 11.1606H8.14963C8.00624 11.1606 7.91064 11.2562 7.91064 11.3996V12.1644C7.91064 12.3078 8.00624 12.4034 8.14963 12.4034H8.93828C9.08167 12.4034 9.17727 12.3078 9.17727 12.1644V11.3996C9.17727 11.2562 9.08167 11.1606 8.93828 11.1606Z" />
                            <path d="M11.4715 11.1606H10.6828C10.5394 11.1606 10.4438 11.2562 10.4438 11.3996V12.1644C10.4438 12.3078 10.5394 12.4034 10.6828 12.4034H11.4715C11.6149 12.4034 11.7105 12.3078 11.7105 12.1644V11.3996C11.7105 11.2562 11.591 11.1606 11.4715 11.1606Z" />
                            <path d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z" />
                          </svg>
                        </span>
                        16 Feb 2025
                      </p>
                     
                    </div>
                  </div>
                  <div className="mb-5">
                    <a
                      className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                    >
                      Place
                    </a>
                  </div>
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    BC Road and its surrounding areas offer a mix of cultural,
                    educational, and recreational landmarks that cater to
                    residents and visitors alike. From scenic landscapes to
                    historic temples and modern commercial centers, the region
                    provides a vibrant blend of tradition and development. Below
                    are some key places that define the essence of BC Road and
                    its connectivity to Mangalore.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/blog-details-01.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <ul className="mb-10 list-inside list-disc text-body-color">
                      <li className="mb-2">
                        Educational Institutions: BC Road is home to reputed
                        schools, colleges, and coaching centers, providing
                        quality education to students of all age groups.
                      </li>
                      <li className="mb-2">
                        Healthcare Centers: Well-equipped hospitals, clinics,
                        and pharmacies ensure comprehensive medical care and
                        emergency services.
                      </li>
                      <li className="mb-2">
                        Shopping Malls & Markets: Multiple shopping centers,
                        retail outlets, and local markets cater to all your
                        daily and luxury shopping needs.
                      </li>
                      <li className="mb-2">
                        Transportation Hubs: BC Road is a major transit point
                        with well-connected bus stands, railway stations, and
                        taxi services, making travel easy and efficient.
                      </li>
                      <li className="mb-2">
                        Restaurants & Cafés: A variety of dining options, from
                        traditional South Indian eateries to multi-cuisine
                        restaurants and cafés, provide delightful culinary
                        experiences.
                      </li>
                      <li className="mb-2">
                        Banks & ATMs: Leading banks and ATMs are available
                        throughout the area, ensuring seamless financial
                        transactions.
                      </li>
                      <li className="mb-2">
                        Parks & Recreational Spaces: Public parks, fitness
                        centers, and recreational areas offer relaxation and
                        leisure opportunities for families and individuals.
                      </li>
                      <li className="mb-2">
                        Religious Places: Temples, churches, and mosques cater
                        to the spiritual needs of diverse communities.
                      </li>
                      <li className="mb-2">
                        Hotels & Lodging: A range of accommodations, from budget
                        hotels to premium stays, provide comfortable lodging
                        options for travelers.
                      </li>
                      <li className="mb-2">
                        Government & Administrative Offices: Various government
                        offices serve the administrative needs of residents and
                        businesses.
                      </li>
                    </ul>
                  </div>

                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <span className="text-primary underline dark:text-white"></span>
                  </p>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight"></h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"></p>

                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"></p>
                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="mb-3 text-sm font-medium text-body-color dark:text-white">
                        Popular Tags:
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium text-body-color dark:bg-gray-700 dark:text-white">
                          Design
                        </span>
                        <span className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium text-body-color dark:bg-gray-700 dark:text-white">
                          Development
                        </span>
                        <span className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium text-body-color dark:bg-gray-700 dark:text-white">
                          Info
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FacilitiesinandAroundBCRoad;
