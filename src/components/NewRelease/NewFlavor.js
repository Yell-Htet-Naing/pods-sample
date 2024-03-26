import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import homeImage from "../../assets/header.jpg";
const TextOverImageCarousel = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white overflow-hidden">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
      >
        {/* Slide 1 */}
        <div className="relative ">
          <img src={homeImage} alt="he" className="h-52 rounded-lg" />
          <div className="flex">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
              <div className="sm:pl-96 sm:ml-40">
                <h1 className="font-bold text-5xl">Try New Flavor</h1>
                <p>Citrus Monster</p>
                <button className="bg-gray-500 hover:bg-gray-700 bg-opacity-50 text-white font-bold py-2 px-4 rounded-full mt-2 ">
                  View
                </button>
              </div>
            </div>
            
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img src={homeImage} alt="he" className="h-52 rounded-lg" />
          <div className="flex">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
              <div className="sm:pl-96 sm:ml-40">
              <h1 className="font-bold text-5xl">Try New Flavor</h1>
                <p>Citrus Monster</p>
                <button className="bg-gray-500 hover:bg-gray-700 bg-opacity-50 text-white font-bold py-2 px-4 rounded-full mt-2 ">
                  View
                </button>
              </div>
            </div>
            
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img src={homeImage} alt="he" className="h-52 rounded-lg" />
          <div className="flex">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
              <div className="sm:pl-96 sm:ml-40">
              <h1 className="font-bold text-5xl">Try New Flavor</h1>
                <p>Citrus Monster</p>
                <button className="bg-gray-500 hover:bg-gray-700 bg-opacity-50 text-white font-bold py-2 px-4 rounded-full mt-2 ">
                  View
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default TextOverImageCarousel;
