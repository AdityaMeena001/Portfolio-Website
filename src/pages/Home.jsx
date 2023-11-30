import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeProject from "../components/HomeProject";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <div className="text-black bg-[#FAFAFA] w-full max-w-[1880px]">
      <Navbar />

      <div className="w-full items-center border p-8 h-96 px-full flex justify-center">
        <div className="flex flex-col items-center">
          <h4 className=" sm:text-lg" >Hi, I'm Aditya Meena</h4>
          <h1 className=" text-center">
            Creative Developer <br />
            based in India.
          </h1>
          {/* <p>Write something here.</p> */}
        </div>
        {/* <div className=" w-full mt-4 lg:m-0 md:w-3/4 lg:w-1/2 h-full rounded-full bg-red-300"></div> */}
      </div>

      <div id="Projects">
      <HomeProject />
      </div>
{/* 
      <Blog />

      <Footer /> */}

    </div>
  );
};

export default Home;
