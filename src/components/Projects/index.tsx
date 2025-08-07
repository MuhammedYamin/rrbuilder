"use client";

import { useRouter } from "next/navigation";

const ApartmentDetails = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/contact");
  };

  return (
    <section className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-12 rounded-sm bg-white px-8 py-11 shadow-lg dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              {/* Flex container for responsive layout */}
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Left Column */}
                <div className="w-full lg:w-2/3 flex flex-col">
                  {/* Heading and paragraph always first */}
                  <div>
                    <h2 className="mb-3 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                      Apartment Coming Soon in BC Road!
                    </h2>
                    <p className="mb-6 text-lg font-medium text-body-color">
                      Discover premium living with modern amenities and a prime location.
                    </p>
                  </div>

                  {/* Images only visible in small screens here */}
                  <div className="lg:hidden flex flex-col gap-6 mb-10">
                    <img src="images/project1.jpg" alt="Project 1" className="rounded-lg shadow-md" />
                    <img src="images/project2.jpg" alt="Project 2" className="rounded-lg shadow-md" />
                  </div>

                  {/* Project Highlights */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Project Highlights</h3>
                    <ul className="space-y-4 text-lg">
                      <li>🏢 <strong>2 Towers:</strong> 5 floors each + Exclusive Penthouse on the 6th floor</li>
                      <li>🚗 <strong>Parking:</strong> Ample space for residents</li>
                      <li>🛗 <strong>Lift:</strong> Modern elevator access to all floors</li>
                      <li>🏠 <strong>Lobby:</strong> Spacious and welcoming</li>
                      <li>🎠 <strong>Kids Play Area:</strong> Dedicated section for children</li>
                      <li>💪 <strong>Nearby Gyms:</strong> For your fitness needs</li>
                      <li>📏 <strong>Property Size:</strong> 22 Sents</li>
                    </ul>

                    <h3 className="text-2xl font-semibold mt-10 mb-6">Prime Location Benefits</h3>
                    <ul className="space-y-4 text-lg">
                      <li>🚶‍♂️ <strong>Bus Stop:</strong> 200 meters</li>
                      <li>🏫 <strong>School & Supermarket:</strong> Within 50-100 meters</li>
                      <li>🏥 <strong>Hospital:</strong> 200 meters</li>
                      <li>🚗 <strong>Main Road Access:</strong> 50 meters</li>
                    </ul>

                    <h3 className="text-2xl font-semibold mt-10 mb-6">Location</h3>
                    <ul className="space-y-4 text-lg">
                      <li>📍
                        <strong>
                          <a
                            href="https://maps.app.goo.gl/4EmKxvpYdTAFPszB9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary"
                          >
                            Near Arafa Masjid Mithabail BC Road Bantwal Mangalore
                          </a>
                        </strong>
                      </li>
                    </ul>



                    <div className="mt-12 text-center lg:text-left">
                      <p className="text-xl font-medium mb-6">Secure your dream home today!</p>
                      <button
                        className="rounded-sm bg-blue-600 px-9 py-4 text-lg font-medium text-white shadow-lg hover:bg-blue-700"
                        onClick={handleNavigate}
                      >
                        Register Your Interest
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column - Images (only on large screens) */}
                <div className="w-full lg:w-1/3 hidden lg:flex flex-col gap-6">
                  <img src="images/project1.jpg" alt="Project 1" className="rounded-lg shadow-md" />
                  <img src="images/project2.jpg" alt="Project 2" className="rounded-lg shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApartmentDetails;
