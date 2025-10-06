import React from "react";
import Vector1 from "../../assets/Vector1.png";

const TwoCard = ({ inProgressCount = 0, completedCount = 0 }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-10 sm:mt-20 px-4 max-w-full overflow-x-hidden">
      <div className="card w-full sm:max-w-[708px] h-[180px] sm:h-[230px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] items-center justify-center rounded-2xl shadow-lg flex flex-row min-w-0">
        <img
          src={Vector1}
          alt="Vector1"
          className="mx-2 sm:mx-auto mt-2 sm:mt-4 w-6 sm:w-8 lg:w-auto flex-shrink-0"
        />
        <div className="text-center text-white flex-1 min-w-0">
          <h1 className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 lg:mb-6">
            In-Progress
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
            {inProgressCount}
          </h1>
        </div>
        <img
          src={Vector1}
          alt="Vector1"
          className="mx-2 sm:mx-auto mt-2 sm:mt-4 transform scale-x-[-1] w-6 sm:w-8 lg:w-auto flex-shrink-0"
        />
      </div>
      <div className="card w-full sm:max-w-[708px] h-[180px] sm:h-[230px] bg-[linear-gradient(90deg,rgba(84,207,104,1),rgba(0,130,122,1)_100%)] text-white p-4 sm:p-6 rounded-2xl shadow-lg flex flex-row min-w-0 items-center justify-center">
        <img
          src={Vector1}
          alt="Vector1"
          className="mx-2 sm:mx-auto mt-2 sm:mt-4 w-6 sm:w-8 lg:w-auto flex-shrink-0"
        />
        <div className="text-center text-white flex-1 min-w-0">
          <h1 className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 lg:mb-6">
            Completed
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
            {completedCount}
          </h1>
        </div>
        <img
          src={Vector1}
          alt="Vector1"
          className="mx-2 sm:mx-auto mt-2 sm:mt-4 transform scale-x-[-1] w-6 sm:w-8 lg:w-auto flex-shrink-0"
        />
      </div>
    </div>
  );
};

export default TwoCard;
