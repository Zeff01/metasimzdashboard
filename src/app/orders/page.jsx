import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../../data/data";

const orders = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="flex justify-between px-4 pt-4">
        <h2 className="text-white font-bold">Orders</h2>
        <h2 className="text-white">Welcome Back, Zeff</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-[#252525] border-[#e911e9d2] overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span className="text-white">Order</span>
            <span className="sm:text-left text-right text-white">Status</span>
            <span className="hidden md:grid text-white">Last Order</span>
            <span className="hidden sm:grid text-white">Method</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className="bg-[#47e6c0] hover:bg-[#19a584] rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex">
                  <div className="bg-[#c013b7] p-3 rounded-lg">
                    <FaShoppingBag className="text-white" />
                  </div>
                  <div className="pl-4">
                    <p className="text-gray-800 font-bold">
                      ${order.total.toLocaleString()}
                    </p>
                    <p className="text-gray-800 text-sm">{order.name.first}</p>
                  </div>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  <span
                    className={
                      order.status == "Processing"
                        ? "bg-green-200 p-2 rounded-lg"
                        : order.status == "Completed"
                        ? "bg-blue-200 p-2 rounded-lg"
                        : "bg-yellow-200 p-2 rounded-lg"
                    }
                  >
                    {order.status}
                  </span>
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

export default orders;
