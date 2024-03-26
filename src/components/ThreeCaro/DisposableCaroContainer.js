import React from "react";
import DisposableCaro from "../ThreeCaro/DisposableCaro"
import podImage from "../../assets/pen.webp";
const DisposableCaroContainer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left rounded-lg bg-slate-500 lg:flex overflow-hidden my-5">
      <div className="flex p-4 items-center">
      <div className="w-40 h-40 md:h-80 sm:p-auto">
          <img src={podImage} alt="he" className="md:mt-28" />
        </div>
        <div>
          <p className="font-bold text-3xl">Disposable</p>
          <p>Eazy & clean, and superb flavor</p>
        </div>
      </div>
      <div>
        <DisposableCaro />
      </div>
    </div>
  );
};

export default DisposableCaroContainer;
