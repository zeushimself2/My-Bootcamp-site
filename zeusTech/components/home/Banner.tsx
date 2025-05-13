// import { FaTruckMoving } from "react-icons/fa"

import { Delicious_Handrawn } from "next/font/google";
import { CiDeliveryTruck, CiLaptop } from "react-icons/ci";

export const Banner = () => {
  return (
    <div className="bg-indigo-600 h-8 flex items-center ">
      <div className="flex gap-1 items-center">
        <div>
          <CiLaptop className="w-6 h-6 gap-x-2 mx-4 text-white" />
        </div>
        <p className="text-white text-center ">Solutions for the future</p>
      </div>
    </div>
  );
};