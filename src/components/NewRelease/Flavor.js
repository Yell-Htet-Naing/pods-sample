import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import podImage from "../../assets/pen.webp";
import NewFlavor from "./NewFlavor";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

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
    <div key={0} className="bg-yellow-500 rounded-lg p-4 flex text-left">
      <div className="text-white">
        <h2 className="text-lg font-semibold mt-16">
          Citrus Mon: 20,000 pul Disposable 3 Percent
        </h2>
        <p>30,000 MMK</p>
      </div>
      <img src={podImage} alt="he" />
    </div>,
     <div key={1} className="bg-pink-500 rounded-lg p-4 flex text-left">
     <div className="text-white">
       <h2 className="text-lg font-semibold mt-16">
         Strawberry yogurt with Refreshing flavor Nic 3 Percent
       </h2>
       <p>30,000 MMK</p>
     </div>
     <img src={podImage} alt="he" />
   </div>,
    <div key={2} className="bg-blue-500 rounded-lg p-4 flex text-left">
    <div className="text-white">
      <h2 className="text-lg font-semibold mt-16">
        Strawberry yogurt with Refreshing flavor Nic 3 Percent
      </h2>
      <p >30,000 MMK</p>
    </div>
    <img src={podImage} alt="he" />
  </div>,
   <div key={3} className="bg-green-500 rounded-lg p-4 flex text-left">
   <div className="text-white">
     <h2 className="text-lg font-semibold mt-16">
       Strawberry yogurt with Refreshing flavor Nic 3 Percent
     </h2>
     <p>30,000 MMK</p>
   </div>
   <img src={podImage} alt="he" />
 </div>,
  ];

  
  return (
    <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left overflow-hidden">
      <div className="text-center ">
        <h5 className="text-5xl font-bold mt-10">
          <span className="text-red-500">New</span> Released
        </h5>
        <p className="text-lg pt-2 pb-8">Try Our Latest Flavors Here</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Desktop view */}
        {!isMobile && desktopDivs}

        {/* Mobile view */}
        {isMobile && (
          <div className="sm:hidden">
            <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
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
      <div className="text-center mt-5 mb-10">
      <button className="bg-gray-500 hover:bg-gray-700 bg-opacity-50 text-black font-bold py-2 px-20 rounded-full mt-10 mb-20">
          View More<FontAwesomeIcon icon={faGreaterThan} className="ml-3"/>

        </button>
      </div>
      
    </div>
    <NewFlavor/>
    </>
  );
};

export default FourDivs;
