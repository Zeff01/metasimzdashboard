import React from "react";
import { data } from "../data/data.js";
import { FaShoppingBag } from "react-icons/fa";

const RecentOrders = () => {
  return (
    <div
      className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border border-[#e911e9d2] rounded-lg bg-[#252525] overflow-y-scroll scrollbar "
      id="scrollbarStyle"
    >
      <h1 className="text-white">Recent Orders</h1>
      <ul>
        {data.map((order, id) => (
          <li
            key={id}
            className="bg-[#23ffb6] hover:bg-[#3ce7ae] rounded-lg my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="bg-[#000000] rounded-lg p-3">
              <FaShoppingBag className="text-purple-300" />
            </div>
            <div className="pl-4">
              <p className="text-[#233785] font-bold">${order.total}</p>
              <p className="text-[#e046ba] font-bold text-sm">
                {order.name.first}
              </p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm">
              {order.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
