import React from "react";
import PodsCaro from "../../components/ThreeCaro/PodsCaro";
import podImage from "../../assets/pen.webp";
const PodsCaroContainer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left rounded-lg bg-slate-500 lg:flex overflow-hidden my-5">
      <div className="flex p-4 items-center lg:pr-[40px]">
        <div className="w-40 h-40 md:h-80 sm:p-auto">
          <img src={podImage} alt="he" className="md:mt-28" />
        </div>
        <div>
          <p className="font-bold text-3xl">Pods</p>
          <p>Variety of choices available</p>
        </div>
      </div>
      <div>
        <PodsCaro />
      </div>
    </div>
  );
};

export default PodsCaroContainer;
