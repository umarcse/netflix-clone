import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between z-[100] w-full p-4 absolute">
        <h2 className="text-red-500 text-4xl cursor-pointer items-center">
          NETFLIX
        </h2>
        <div>
          <button className="text-white pr-4">Sign In</button>
          <button className="bg-red-500 text-white rounded px-4 py-1">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
