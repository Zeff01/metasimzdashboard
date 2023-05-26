import React from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../../data/data";

const page = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="flex justify-between p-4">
        <h2 className="text-white font-bold">Customers</h2>
        <h2 className="text-white">Welcome Back, Zeff</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-[#252525] border-[#e911e9d2] overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span className="text-white">Name</span>
            <span className="sm:text-left text-right text-white">Email</span>
            <span className="hidden md:grid text-white">Last Order</span>
            <span className="hidden md:grid text-white">Method</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className="bg-[#47e6c0] hover:bg-[#19a584] rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="bg-[#c013b7] p-3 rounded-lg">
                    <BsPersonFill className="text-white" />
                  </div>
                  <p className="pl-4">
                    {order.name.first + " " + order.name.last}
                  </p>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  {order.name.first}@gmail.com
                </p>
                <p className="hidden md:flex">{order.date}</p>
                <div className="sm:flex hidden justify-between items-center">
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
