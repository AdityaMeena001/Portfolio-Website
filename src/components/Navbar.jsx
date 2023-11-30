import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="px-full h-20 items-center flex justify-between border">
      <h2 className=" text-2xl">adityameena.</h2>
      <div className="flex gap-6 ">
        {/* <link rel="stylesheet" href="" /> */}
        {/* <a href="#projects">Projects</a> */}
        {/* <p>Home</p>
        <p>About</p>
        <p>Work</p>
        <p>Resume</p> */}
      </div>
    </div>
  );
};

export default Navbar;
