import React from "react";
import podImage from "../../assets/pen.webp";
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Membership = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
      <div class="grid grid-cols-12 gap-2">
        <div class="col-span-12 md:col-span-6 bg-gray-950 rounded-lg p-4">
        <div className="w-36 h-auto md:h-80"> <img src={podImage} alt="he" /></div>
          <h1 className="text-3xl font-bold">Membership Program</h1>
          <p className="text-md font-normal">Be a vape Pi member and get our special exclusive offers</p>
          
          <button className="bg-gray-500 hover:bg-gray-700 bg-opacity-50 text-white font-bold py-2 px-20 rounded-full mt-2 ">
            View
          </button>
        </div>

        <div class="col-span-12 md:col-span-3 bg-gray-950 rounded-lg p-4">
            <div className="w-36 h-auto md:h-80"> <img src={podImage} alt="he" /></div>
          <p className="text-2xl font-bold pt-16">Devices<FontAwesomeIcon icon={faGreaterThan} className="lg:ml-36 ml-5" /></p>
          <p>find the best for you here!</p>
        </div>

        <div class="col-span-12 md:col-span-3 ">
          <div className="flex md:flex-col sm:flex-row gap-2 sm:justify-center" >
            <div className="bg-gray-950 rounded-lg p-4">
              <img src={podImage} alt="he" className="w-36 h-36"/>
              <p className="text-2xl font-bold">Pods<FontAwesomeIcon icon={faGreaterThan} className="lg:ml-36 ml-5"/></p>
              <p>Variety of choices available</p>
            </div>
            <div className="bg-gray-950 rounded-lg p-4">
              <img src={podImage} alt="he" className="w-36 h-36"/>
              <p className="text-2xl font-bold">Diposable<FontAwesomeIcon icon={faGreaterThan} className="lg:ml-24 ml-5"/></p>
              <p>Eazy clean & superb flavor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
