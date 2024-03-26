import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faViber,faTelegram,faTwitter } from '@fortawesome/free-brands-svg-icons';

import kbzImage from "../../assets/kbz.png";
import waveImage from "../../assets/wave.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const SecondFooter = () => {
  const [isMobile, setIsMobile] = useState(false);


 
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
  
    <div key={0} className=" rounded-lg p-4 flex">
      <div>
        <h2 className="text-lg font-semibold mb-2">Payment</h2>
        <div className="flex">
        <img src={kbzImage} alt="KBZpay" className="w-[50px] h-[50px] mr-5"/>
        <img src={waveImage} alt="WAVEpay" className="w-[50px] h-[50px] rounded-md"/>
        </div>
      </div>
    </div>,
    <div key={1} className=" rounded-lg p-4">
      <div>
        <h2 className="text-lg font-semibold mb-2">Follow Us On</h2>
        <FontAwesomeIcon icon={faFacebook} size="2x" color="blue" className="mr-5"/>
        <FontAwesomeIcon icon={faInstagram} size="2x" color="red" className="mr-5"/>
        <FontAwesomeIcon icon={faViber} size="2x" color="#793BAA" className="mr-5"/>
        <FontAwesomeIcon icon={faTelegram} size="2x" color="#26A5E4" className="mr-5"/>
        <FontAwesomeIcon icon={faTwitter} size="2x" color="#1DA1F2" className="mr-5"/>
      </div>
      
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
        <h2 className="text-center mb-10"><FontAwesomeIcon icon={faCopyright} className="mr-1"/>Copyright 2023 C by D Co.,Ltd.All rights reserved.</h2>
      </div>
      
    </>
  );
};

export default SecondFooter;
