"use client";

import { useState } from "react";

const EMICalculator = () => {
  const [formData, setFormData] = useState({
    principal: "",
    downPayment: "",
    rate: "",
    tenure: "",
  });

  const [result, setResult] = useState({
    emi: 0,
    totalPayment: 0,
    interestAmount: 0,
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(""); // Clear error when user starts typing
  };

  const validateInputs = () => {
    const { principal, rate, tenure } = formData;
    if (!principal || !rate || !tenure) {
      setError("Asking Price, Interest Rate, and Tenure are required.");
      return false;
    }
    if (
      parseFloat(principal) <= 0 ||
      parseFloat(rate) <= 0 ||
      parseFloat(tenure) <= 0
    ) {
      setError("Please enter positive values for Asking Price, Interest Rate, and Tenure.");
      return false;
    }
    return true;
  };

  const calculateEMI = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateInputs()) return;

    const principal = parseFloat(formData.principal);
    const downPayment = parseFloat(formData.downPayment) || 0;
    const rate = parseFloat(formData.rate);
    const tenure = parseFloat(formData.tenure);

    const loanAmount = principal - downPayment;
    if (loanAmount <= 0) {
      setError("Down Payment must be less than the Asking Price.");
      return;
    }

    const monthlyRate = rate / (12 * 100);
    const months = tenure * 12;
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayment = emi * months;
    const interestAmount = totalPayment - loanAmount;

    setResult({
      emi: parseFloat(emi.toFixed(2)),
      totalPayment: parseFloat(totalPayment.toFixed(2)),
      interestAmount: parseFloat(interestAmount.toFixed(2)),
    });
  };

  return (
    
    <section className="overflow-hidden py-16 md:py-20 lg:py-28">
      <style jsx>{`
        /* Remove number input spinners */
        input[type=number]::-webkit-outer-spin-button,
        input[type=number]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type=number] {
          -moz-appearance: textfield;
        }
      `}</style>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Planning Your Budget
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Please enter the details below:
              </p>
              <form onSubmit={calculateEMI}>
                <div className="-mx-4 flex flex-wrap">
                  {/* Asking Price */}
                  <div className="w-full px-4 md:w-1/3">
                    <div className="mb-8">
                      <label
                        htmlFor="principal"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Loan amount (Rs):
                      </label>
                      <input
                        type="number"
                        name="principal"
                        value={formData.principal}
                        onChange={handleChange}
                        placeholder="Enter asking price in Rs"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  {/* Down Payment */}
                  <div className="w-full px-4 md:w-1/3">
                    <div className="mb-8">
                      <label
                        htmlFor="downPayment"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Down Payment (Rs):
                      </label>
                      <input
                        type="number"
                        name="downPayment"
                        value={formData.downPayment}
                        onChange={handleChange}
                        placeholder="Enter down payment (optional)"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  {/* Interest Rate */}
                  <div className="w-full px-4 md:w-1/3">
                    <div className="mb-8">
                      <label
                        htmlFor="rate"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Interest Rate (in %):
                      </label>
                      <input
                        type="number"
                        name="rate"
                        value={formData.rate}
                        onChange={handleChange}
                        placeholder="Enter annual interest rate"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  {/* Tenure */}
                  <div className="w-full px-4 md:w-1/3">
                    <div className="mb-8">
                      <label
                        htmlFor="tenure"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Tenure (in Years):
                      </label>
                      <input
                        type="number"
                        name="tenure"
                        value={formData.tenure}
                        onChange={handleChange}
                        placeholder="Enter tenure in years"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="mb-8 text-center text-red-500">{error}</div>
                )}

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                  >
                    Calculate EMI
                  </button>
                </div>

                {result.emi > 0 && (
                  <div className="mt-8 rounded-sm bg-[#f8f8f8] p-6 dark:bg-[#2C303B]">
                    <h3 className="mb-4 text-xl font-semibold text-dark dark:text-white">
                      Results
                    </h3>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="text-center">
                        <h4 className="mb-2 text-lg font-semibold text-dark dark:text-white">
                          Estimated EMI
                        </h4>
                        <p className="text-body-color dark:text-body-color-dark">
                          ₹{result.emi.toLocaleString()}
                        </p>
                      </div>
                      <div className="text-center">
                        <h4 className="mb-2 text-lg font-semibold text-dark dark:text-white">
                          Interest Amount
                        </h4>
                        <p className="text-body-color dark:text-body-color-dark">
                          ₹{result.interestAmount.toLocaleString()}
                        </p>
                      </div>
                      <div className="text-center">
                        <h4 className="mb-2 text-lg font-semibold text-dark dark:text-white">
                          Total Amount Payable
                        </h4>
                        <p className="text-body-color dark:text-body-color-dark">
                          ₹{result.totalPayment.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;
