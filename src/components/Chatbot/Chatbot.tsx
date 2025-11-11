"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaHeadset } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Chatbot = () => {
  const [messages, setMessages] = useState([{ text: "Hi! How can I assist you?", fromBot: true }]);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showContactFormButton, setShowContactFormButton] = useState(false);
  const [showTalkOptions, setShowTalkOptions] = useState(false);
  const [showNumberInput, setShowNumberInput] = useState(false);
  const [userNumber, setUserNumber] = useState("");
  const [showTyping, setShowTyping] = useState(false);
  const [showInitialOptions, setShowInitialOptions] = useState(false);



  const router = useRouter();

  const simulateBotResponse = (text, callback = null) => {
    setShowTyping(true);
    setTimeout(() => {
      setShowTyping(false);
      setMessages((prev) => [...prev, { text, fromBot: true }]);
      if (callback) callback();
    }, 1000);
  };

  const handleBotClick = () => {
    setShowOptions(true);
  };

  const handleClose = () => {
    setShowOptions(false);
  };

  const handleOptionSelect = (option) => {
    setMessages((prev) => [...prev, { text: option, fromBot: false }]);

    if (option === "Interested in 2BHK or 3BHK") {
      simulateBotResponse("What are you interested in?");
    } else if (option === "Get Property Info") {
      simulateBotResponse("We have an ongoing apartment construction in BC Road.", () => {
        setShowContactFormButton(true);
      });
    } else if (option === "Talk to the Team") {
      simulateBotResponse("Would you like to Call or WhatsApp?", () => {
        setShowTalkOptions(true);
      });
    }
  };

  const handlePropertySelection = (property) => {
    setSelectedProperty(property);
    setMessages((prev) => [...prev, { text: property, fromBot: false }]);

    simulateBotResponse("Please fill the contact form so that our team can contact you.", () => {
      setShowContactFormButton(true);
    });
  };

  const handleTalkSelection = (method) => {
    setMessages((prev) => [...prev, { text: method, fromBot: false }]);
    setShowTalkOptions(false);

    if (method === "Call") {
      simulateBotResponse(
        'You can call us directly by clicking this number: ',
        () => {
          simulateBotResponse(
            '<a href="tel:+916361352189" class="text-blue-600 underline">📞 +916361352189</a>'
          );
        }
      );
    } else if (method === "WhatsApp") {
      setTimeout(() => {
        window.open("https://wa.me/+916361352189", "_blank");
      }, 1000);
    }
  };

  const handleNumberSubmit = () => {
    if (userNumber) {
      setMessages((prev) => [...prev, { text: userNumber, fromBot: false }]);
      setShowNumberInput(false);

      simulateBotResponse("Thank you! Our team will contact you soon.");

      const whatsappMessage = `New customer request:\n\nPhone: ${userNumber}`;
      window.open(`https://wa.me/+917760476139?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300"
        onClick={handleBotClick}
      >
        <FaHeadset size={28} /> {/* Matches WhatsApp icon size */}
      </button>



      {showOptions && (
        <div className="fixed bottom-20 right-4 sm:right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-[90%] sm:w-80 max-h-[400px] overflow-auto flex flex-col">
          <div className="sticky top-0 bg-white dark:bg-gray-800 z-10 flex justify-between items-center pb-2 border-b border-gray-300 dark:border-gray-600 p-2">
            <span className="text-lg font-semibold text-gray-800 dark:text-white">RR Assistant</span>
            <button onClick={handleClose} className="text-gray-600 dark:text-gray-300">
              <IoClose size={22} />
            </button>
          </div>


          <div className="flex flex-col space-y-2 mt-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.fromBot ? "items-start" : "justify-end"}`}
              >
                {msg.fromBot && (
                  <FaHeadset className="text-blue-600 mr-2 mt-1" size={20} />
                )}
                {msg.fromBot ? (
                  <span
                    className="px-3 py-2 rounded-lg text-sm bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                    dangerouslySetInnerHTML={{ __html: msg.text }}
                  />
                ) : (
                  <span className="px-3 py-2 rounded-lg text-sm bg-blue-500 text-white">
                    {msg.text}
                  </span>
                )}
              </div>
            ))}

            {showTyping && (
              <div className="flex items-start">
                <FaHeadset className="text-blue-600 mr-2 mt-1" size={20} />
                <div className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg max-w-[75%] text-black dark:text-white animate-pulse">
                  ...
                </div>
              </div>
            )}
          </div>

          {messages.length === 1 && (
            <div className="flex flex-col mt-3 gap-2">
              <button onClick={() => handleOptionSelect("Interested in 2BHK or 3BHK")} className="bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded-lg transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-500"
              >
                Interested in 2BHK or 3BHK 🏠
              </button>
              <button onClick={() => handleOptionSelect("Get Property Info")} className="bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded-lg transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-500"
              >
                Get Property Info 📄
              </button>
              <button onClick={() => handleOptionSelect("Talk to the Team")} className="bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded-lg transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-500"
              >
                Talk to the Team 📞
              </button>
            </div>
          )}

          {messages.some((m) => m.text === "What are you interested in?") && selectedProperty === null && (
            <div className="flex gap-2 mt-3">
              <button onClick={() => handlePropertySelection("2BHK")} className="bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded-lg transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-500"
              >
                2BHK
              </button>
              <button onClick={() => handlePropertySelection("3BHK")} className="bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded-lg transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-500"
              >
                3BHK
              </button>
            </div>
          )}

          {showContactFormButton && (
            <button onClick={() => router.push("/contact")} className="bg-gray-200 dark:bg-gray-600 px-3 py-1 mt-3 rounded-lg transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-500"
            >
              Fill Contact Form
            </button>
          )}

          {showTalkOptions && (
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => handleTalkSelection("Call")}
                className="bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded-lg transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-500"
              >
                Call 📞
              </button>
              <button
                onClick={() => handleTalkSelection("WhatsApp")}
                className="bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded-lg transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-500"
              >
                WhatsApp 💬
              </button>
            </div>
          )}


          {showNumberInput && (
            <div className="mt-3">
              <input type="text" placeholder="Please enter your number" value={userNumber} onChange={(e) => setUserNumber(e.target.value)} className="w-full p-2 border rounded" />
              <button onClick={handleNumberSubmit} className="bg-gray-200 dark:bg-gray-600 px-3 py-1 mt-3 rounded-lg transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-500"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
