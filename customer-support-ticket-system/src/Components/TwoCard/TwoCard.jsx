import React from "react";
import Vector1 from "../../assets/Vector1.png";

const TwoCard = ({ inProgressCount = 0, completedCount = 0 }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-10 sm:mt-20 px-4">
      <div className="card w-full sm:w-[708px] h-[180px] sm:h-[230px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] items-center justify-center rounded-2xl shadow-lg flex flex-row">
        <img
          src={Vector1}
          alt="Vector1"
          className="mx-2 sm:mx-auto mt-2 sm:mt-4 w-8 sm:w-auto"
        />
        <div className="text-center text-white">
          <h1 className="text-lg sm:text-xl mb-3 sm:mb-6">In-Progress</h1>
          <h1 className="text-4xl sm:text-6xl font-bold">{inProgressCount}</h1>
        </div>
        <img
          src={Vector1}
          alt="Vector1"
          className="mx-2 sm:mx-auto mt-2 sm:mt-4 transform scale-x-[-1] w-8 sm:w-auto"
        />
      </div>
      <div className="card w-full sm:w-[708px] h-[180px] sm:h-[230px] bg-[linear-gradient(90deg,rgba(84,207,104,1),rgba(0,130,122,1)_100%)] text-white p-4 sm:p-6 rounded-lg items-center justify-center rounded-2xl shadow-lg flex flex-row">
        <img
          src={Vector1}
          alt="Vector1"
          className="mx-2 sm:mx-auto mt-2 sm:mt-4 w-8 sm:w-auto"
        />
        <div className="text-center text-white">
          <h1 className="text-lg sm:text-xl mb-3 sm:mb-6">Completed</h1>
          <h1 className="text-4xl sm:text-6xl font-bold">{completedCount}</h1>
        </div>
        <img
          src={Vector1}
          alt="Vector1"
          className="mx-2 sm:mx-auto mt-2 sm:mt-4 transform scale-x-[-1] w-8 sm:w-auto"
        />
      </div>
    </div>
  );
};

export default TwoCard;
