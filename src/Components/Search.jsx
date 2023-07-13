import React from "react";

export default function Search() {
  return (
    <div className="flex rounded mr-14">
      <input
        type="text"
        className=" mr-4 block w-full px-4 py-2 text-black bg-yellow-100 border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder="Search..."
      />
      <button className="px-4 text-black bg-yellow-500 border-l rounded ">
        Search
      </button>
    </div>
  );
}
