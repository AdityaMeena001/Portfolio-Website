import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="px-full h-20 items-center flex justify-between border">
      <h4>Aditya Meena</h4>
      <div className="flex gap-6 ">
        <p>Home</p>
        <p>About</p>
        <p>Work</p>
        <p>Resume</p>
      </div>
    </div>
  );
};

export default Navbar;
