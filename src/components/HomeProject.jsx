import React from "react";

let img_src =
  "https://cdn.dribbble.com/userupload/4445323/file/original-9816669df5eeaeb702238ea158d31158.png?resize=1200x900";

const HomeProject = () => {
  const projs = [1, 2, 3, 4, 5];

  return (
    <div className="px-full py-8 border">
      <div className="flex justify-between  ">
        <h2>Featured Projects</h2>
        <div className="flex items-center gap-2 px-5 py-2 border border-[#101010]">
          <p>View all</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full ">
        {projs.map((key) => (
          <div className="w-full flex items-center">
            <img
              src={img_src}
              alt="image"
              className="h-[400px] w-1/2 object-cover "
            />

            <div className="p-8">
              <h1>{key}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProject;
