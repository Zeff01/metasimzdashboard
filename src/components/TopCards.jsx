import React from "react";

const TopCards = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-[#47e6c0] flex justify-between w-full p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold text-[#233785]">$7,841</p>
          <p className="text-[#e046ba] font-bold">Daily Revenue</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">+17%</span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-[#47e6c0] flex justify-between w-full p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold text-[#233785]">$2,217,8431</p>
          <p className="text-[#e046ba] font-bold">YTD Revenue</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">+3%</span>
        </p>
      </div>
      <div className=" bg-[#47e6c0]  flex justify-between w-full p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold text-[#233785]">7,831</p>
          <p className="text-[#e046ba] font-bold">Customers</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">+20%</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
