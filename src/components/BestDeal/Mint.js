

import React, { useState, useEffect } from "react";
import Membership from "./Membership";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import podImage from "../../assets/pen.webp";

import { faGreaterThan,faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FourDivs = () => {
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
    <div key={0}>
      <div className="bg-gray-200 rounded-lg">
        <p className="text-white ml-14 mr-14 bg-orange-600">25% off</p>
        <img src={podImage} alt="he" />
      </div>
      <p>Refreshing Mint</p>
      <p>30,000MMK</p>
      <p className="line-through font-thin">30,000MMK</p>
      <p className="text-amber-400 font-medium"><FontAwesomeIcon icon={faStar} className="mr-1"/>600 points</p>
    </div>,
    <div key={1}>
      <div className="bg-gray-200 rounded-lg">
        <p className="text-white ml-14 mr-14 bg-orange-600">25% off</p>
        <img src={podImage} alt="he" />
      </div>
      <p>Refreshing Mint</p>
      <p>30,000MMK</p>
      <p className="line-through font-thin">30,000MMK</p>
      <p className="text-amber-400 font-medium"><FontAwesomeIcon icon={faStar} className="mr-1"/>600 points</p>
    </div>,
    <div key={2}>
      <div className="bg-gray-200 rounded-lg">
        <p className="text-white ml-14 mr-14 bg-orange-600">25% off</p>
        <img src={podImage} alt="he" />
      </div>
      <p>Refreshing Mint</p>
      <p>30,000MMK</p>
      <p className="line-through font-thin">30,000MMK</p>
      <p className="text-amber-400 font-medium"><FontAwesomeIcon icon={faStar} className="mr-1"/>600 points</p>
    </div>,
    <div key={3}>
      <div className="bg-gray-200 rounded-lg">
        <p className="text-white ml-14 mr-14 bg-orange-600">25% off</p>
        <img src={podImage} alt="he" />
      </div>
      <p>Refreshing Mint</p>
      <p>30,000MMK</p>
      <p className="line-through font-thin">30,000MMK</p>
      <p className="text-amber-400 font-medium"><FontAwesomeIcon icon={faStar} className="mr-1"/>600 points</p>
    </div>,
    <div key={4}>
      <div className="bg-gray-200 rounded-lg">
        <p className="text-white ml-14 mr-14 bg-orange-600">25% off</p>
        <img src={podImage} alt="he" />
      </div>
      <p>Refreshing Mint</p>
      <p>30,000MMK</p>
      <p className="line-through font-thin">30,000MMK</p>
      <p className="text-amber-400 font-medium"><FontAwesomeIcon icon={faStar} className="mr-1"/>600 points</p>
    </div>,
    <div key={5}>
      <div className="bg-gray-200 rounded-lg">
        <p className="text-white ml-14 mr-14 bg-orange-600">25% off</p>
        <img src={podImage} alt="he" />
      </div>
      <p>Refreshing Mint</p>
      <p>30,000MMK</p>
      <p className="line-through font-thin font-small">30,000MMK</p>
      <p className="text-amber-400 font-medium"><FontAwesomeIcon icon={faStar} className="mr-1"/>600 points</p>
    </div>,
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-center mt-10">
          <h5 className="text-3xl font-bold">
            Best Deals
          </h5>
          <p className="text-lg pt-2 pb-4">Just For You</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1">
          {/* Desktop view */}
          {!isMobile && desktopDivs}

          {/* Mobile view */}
          {isMobile && (
            <div className="sm:hidden">
              <Carousel
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                infiniteLoop={true}
              >
                {/* Repeat this block for each div */}
                {desktopDivs.map((_, index) => (
                  <div key={index} className="bg-gray-200 rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-2">
                      {desktopDivs[index]}
                    </h2>
                  </div>
                ))}

                {/* End of repeat block */}
              </Carousel>
            </div>
          )}
        </div>

        <button className="bg-gray-500 hover:bg-gray-700 bg-opacity-50 text-black font-bold py-2 px-20 rounded-full mt-10 mb-20">
          View More<FontAwesomeIcon icon={faGreaterThan} className="ml-3"/>

        </button>
      </div>
      <Membership />
    </>
  );
};

export default FourDivs;
