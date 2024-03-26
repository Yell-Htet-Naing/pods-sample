import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import podImage from "../../assets/pen.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
const DisposableCaro = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{clickable:true}}
        spaceBetween={50}
        slidesPerView={4}
        breakpoints={{
            0: {
                slidesPerView: 1,     
              },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 5,
              spaceBetween: 40
            }
          }}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: false }}
        
      >
        <SwiperSlide>
          <div className="text-white">
            <div className="bg-gray-200 rounded-lg w-50 h-50">
              <img src={podImage} alt="he" />
            </div>
            <p>Refreshing Mint</p>
            <p>30,000MMK</p>
           
             <p className="text-amber-400 font-medium"><FontAwesomeIcon icon={faStar} className="mr-1" />600 Points</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-white">
            <div className="bg-gray-200 rounded-lg lg:w-50 h-50">
              <img src={podImage} alt="he" />
            </div>
            <p>Refreshing Mint</p>
            <p>30,000MMK</p>
           
             <p className="text-amber-400 font-medium"><FontAwesomeIcon icon={faStar} className="mr-1" />600 Points</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-white">
            <div className="bg-gray-200 rounded-lg w-50 h-50">
              <img src={podImage} alt="he" />
            </div>
            <p>Refreshing Mint</p>
            <p>30,000MMK</p>
           
             <p className="text-amber-400 font-medium"><FontAwesomeIcon icon={faStar} className="mr-1" />600 Points</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-white">
            <div className="bg-gray-200 rounded-lg w-50 h-50">
              <img src={podImage} alt="he" />
            </div>
            <p>Refreshing Mint</p>
            <p>30,000MMK</p>
           
             <p className="text-amber-400 font-medium"><FontAwesomeIcon icon={faStar} className="mr-1" />600 Points</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-white">
            <div className="bg-gray-200 rounded-lg w-50 h-50">
              <img src={podImage} alt="he" />
            </div>
            <p>Refreshing Mint</p>
            <p>30,000MMK</p>
           
             <p className="text-amber-400 font-medium"><FontAwesomeIcon icon={faStar} className="mr-1" />600 Points</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-white">
            <div className="bg-gray-200 rounded-lg w-50 h-50">
              <img src={podImage} alt="he" />
            </div>
            <p>Refreshing Mint</p>
            <p>30,000MMK</p>
           
             <p className="text-amber-400 font-medium"><FontAwesomeIcon icon={faStar} className="mr-1" />600 Points</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-white">
            <div className="bg-gray-200 rounded-lg w-50 h-50">
              <img src={podImage} alt="he" />
            </div>
            <p>Refreshing Mint</p>
            <p>30,000MMK</p>
           
             <p className="text-amber-400 font-medium"><FontAwesomeIcon icon={faStar} className="mr-1" />600 Points</p>
          </div>
        </SwiperSlide>
      </Swiper>
      
    </div>
  );
};

export default DisposableCaro;
