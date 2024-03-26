import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homeImage from "../../assets/header.jpg";
import mobilePhoto from "../../assets/mobile.jpg";
import { useMediaQuery } from 'react-responsive';
import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <Slider {...settings} ref={sliderRef}>
        <div>
          <div className="relative">
          <img src={isMobile ? mobilePhoto : homeImage} className="w-full h-screen" alt="Slide 1" />
            {/* <img src={homeImage} alt="Slide 1" className="w-full h-screen" /> */}
            <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-4">
              <h2 className="text-xl">The Best Look</h2>
              <h2 className="text-5xl font-bold pb-4">Anytime Anywhere</h2>
              <p className="text-xl">Starts from 10,000 MMK</p>
              <button className="bg-gray-500 hover:bg-gray-700 bg-opacity-50 text-white font-bold py-2 px-4 rounded-full mt-2 ">
                View
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
          <img src={isMobile ? mobilePhoto : homeImage} className="w-full h-screen" alt="Slide 2" />
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-4">
              <h2 className="text-xl">The Best Look</h2>
              <h2 className="text-5xl font-bold pb-4">Anytime Anywhere</h2>
              <p className="text-xl">Starts from 10,000 MMK</p>
              <button className="bg-gray-500 hover:bg-gray-700 bg-opacity-50 text-white font-bold py-2 px-4 rounded-full mt-2 ">
                View
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
          <img src={isMobile ? mobilePhoto : homeImage} className="w-full h-screen" alt="Slide 3" />
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-4">
              <h2 className="text-xl">The Best Look</h2>
              <h2 className="text-5xl font-bold pb-4">Anytime Anywhere</h2>
              <p className="text-xl">Starts from 10,000 MMK</p>
              <button className="bg-gray-500 hover:bg-gray-700 bg-opacity-50 text-white font-bold py-2 px-4 rounded-full mt-2 ">
                View
              </button>
            </div>
          </div>
        </div>
      </Slider>

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-white px-4 py-2 rounded-md z-10"
        onClick={goToPrevSlide}
      >
        <div className="bg-gray-800 bg-opacity-50 w-10 h-20  rounded-md"><p className="pt-5 pl-1"><FontAwesomeIcon icon={faArrowLeft} /></p></div>
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-white px-4 py-2 rounded-md z-10"
        onClick={goToNextSlide}
      >
       <div className="bg-gray-800 bg-opacity-50 w-10 h-20 rounded-md"><p className="pt-5 pl-1"><FontAwesomeIcon icon={faArrowRight} /></p></div>
      </button>
    </div>
  );
};

export default Header;
