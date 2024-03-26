import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRotateLeft,
  faLocationDot,
  faLock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import qrImage from "../../assets/qr.png";
const FirstFooter = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedOption, setSelectedOption] = useState("English");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    // Function to update isMobile state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Adjust your mobile breakpoint if needed
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial state
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const desktopDivs = [
    <div key={0} className="rounded-lg p-4 flex">
      <div>
        <h2 className="text-lg font-semibold mb-2">Customer Services</h2>
        <p className="text-gray-600 mb-3">
          <FontAwesomeIcon icon={faLock} className="mr-5" />
          Terms & Privacy Policy
        </p>
        <p className="text-gray-600">
          <FontAwesomeIcon icon={faArrowRotateLeft} className="mr-5" />
          Return Policy
        </p>
      </div>
    </div>,
    <div key={1} className=" rounded-lg p-4">
      <div>
        <h2 className="text-lg font-semibold mb-2">Languages</h2>
      </div>
      <div className="flex flex-col">
        <label className="inline-flex items-center mt-4">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-600"
            name="option"
            value="Myanmar(Unicode)"
            checked={selectedOption === "Myanmar(Unicode)"}
            onChange={handleRadioChange}
          />
          <span className="ml-2">Myanmar(Unicode)</span>
        </label>
        <label className="inline-flex items-center mt-4">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-600"
            name="option"
            value="Myanmar(Zawgyi)"
            checked={selectedOption === "Myanmar(Zawgyi)"}
            onChange={handleRadioChange}
          />
          <span className="ml-2">Myanmar(Zawgyi)</span>
        </label>
        <label className="inline-flex items-center mt-4">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-600"
            name="option"
            value="English"
            checked={selectedOption === "English"}
            onChange={handleRadioChange}
          />
          <span className="ml-2">English</span>
        </label>
      </div>
    </div>,
    <div key={2} className=" rounded-lg p-4 flex">
      <div>
        <h2 className="text-lg font-semibold mb-2">Contact us</h2>

        <p className="text-gray-600 flex mb-3">
          <FontAwesomeIcon icon={faLocationDot} className="mr-5 mt-2" />
          Lay Dunt Kan Main Road, Cashmere Stop, Near Zawana, Thinggyun
          Tsp,Yangon.
        </p>
        <p className="text-gray-600">
          <FontAwesomeIcon icon={faPhone} className="mr-5" />
          09458489458
        </p>
      </div>
    </div>,
    <div key={3} className=" rounded-lg p-4">
      <div>
        <h2 className="text-lg font-semibold mb-2">Download Our App</h2>
      </div>
      <img src={qrImage} alt="he" className="w-[120px] h-auto" />
    </div>,
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Desktop view */}
          {!isMobile && desktopDivs}

          {/* Mobile view */}
          {isMobile && desktopDivs}
        </div>
      </div>
    </>
  );
};

export default FirstFooter;
