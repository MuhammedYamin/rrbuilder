"use client";

import SectionTitle from "../Common/SectionTitle";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    project: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("/api/submitForm", formData);
      alert("Thank you for filling out the form! Our team will contact you soon.");
      setFormData({ name: "", phone: "", project: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex justify-center overflow-hidden py-16 md:py-20 lg:py-28">

      <div className="container flex flex-col lg:flex-row justify-between items-center">

        <div className="w-full lg:w-1/2 px-4">
          <div className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-0 lg:px-8 xl:p-[55px]">
            <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              Get in touch!
            </h2>
            <p className="mb-6 text-base font-medium text-body-color">
              Our support team will get back to you ASAP.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-dark dark:text-white">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-4 py-2 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6">
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-dark dark:text-white">
                      Phone Number
                    </label>
                    <div className="flex">
                      <span className="flex items-center rounded-l-sm bg-gray-200 px-3 py-2 text-dark dark:bg-[#2C303B] dark:text-white">
                        +91
                      </span>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your number"
                        pattern="\d{10}"
                        maxLength={10}
                        required
                        className="border-stroke w-full rounded-r-sm border bg-[#f8f8f8] px-4 py-2 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full px-4">
                  <div className="mb-6">
                    <label htmlFor="project" className="mb-2 block text-sm font-medium text-dark dark:text-white">
                      Project of Interest
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      required
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-4 py-2 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-white"
                    >
                      <option value="">Select an option</option>
                      <option value="2BHK">2BHK</option>
                      <option value="3BHK">3BHK</option>
                    </select>
                  </div>
                </div>

                <div className="w-full px-4">
                  <div className="mb-6">
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-dark dark:text-white">
                      More Info
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Enter your Message"
                      className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-4 py-2 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-white"
                    ></textarea>
                  </div>
                </div>

                <div className="flex w-full justify-center px-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="rounded-sm bg-primary px-6 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-4">
          <div className="mb-12 rounded-sm bg-white px-8 py-6 shadow-three dark:bg-gray-dark sm:p-[45px] lg:mb-0 lg:px-6 xl:p-[45px]">
            <h3 className="text-lg font-bold text-black dark:text-white text-center">RR Builders</h3>

            <hr className="my-3 border-t border-gray-300 dark:border-gray-600 w-16 mx-auto" />

            <div className="text-center text-sm text-body-color dark:text-body-color-dark">
              <p className="font-medium text-black dark:text-white">📞 +91 6361 352 189</p>
              <p className="text-black dark:text-white">✉️ msayeed@bbdsacc.com</p>

              <p className="mt-2 mb-8">
                D No. 19-10-512/27/1, 3rd Floor, Paradigm Complex, <br />
                A.B. Shetty Circle, Mangalore, Dakshina Kannada - 575002, <br />
                Karnataka, India
              </p>
            </div>

            <div className="mt-4">
              <iframe
                className="w-full h-72 rounded"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.2886170213586!2d74.839976!3d12.866004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b5fb1b5b5b5%3A0x5b5b5b5b5b5b5b5!2sParadigm%20Complex!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="mt-4 flex justify-center">
              <a
                href="https://maps.app.goo.gl/4EmKxvpYdTAFPszB9"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-primary px-6 py-2 text-sm font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
              >
                📍 Get Directions
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
