import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeProject from "../components/HomeProject";

const Home = () => {
  return (
    <div className="text-black bg-[#FAFAFA]">
      <Navbar />

      <div className="w-full items-center p-8 h-96 px-full flex justify-between">
        <div>
          <h4>Hi, I'm Aditya Meena</h4>
          <h1>
            Creative Developer <br />
            based in India.
          </h1>
          <p>Write something here.</p>
        </div>
        <div className=" w-1/2 h-full rounded-full bg-red-300"></div>
      </div>

      <HomeProject/>
      
      <Footer />
    </div>
  );
};

export default Home;
