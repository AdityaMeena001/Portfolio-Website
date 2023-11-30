import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projectData = [
  {
    id: 1,
    name: "WonderNook",
    title: "Full Stack Web App",
    github_url: "https://github.com/AdityaMeena001/WonderNook",
    deployed_url: "https://yourweatherapp.com",
    screenshot_url:
      "wonder-nook.png",
  },
  {
    id: 2,
    name: "Comic Gen",
    title: "Ai Comic Creator",
    github_url: "https://github.com/AdityaMeena001/Engineer-Product-Assignment",
    deployed_url: "https://comic-gen.aditya-meena.live/",
    screenshot_url:
      "comic-gen.png",
  },
  {
    id: 3,
    name: "KanBan Board ",
    title: "Quicksell FrontEnd Assignment",
    github_url: "https://github.com/AdityaMeena001/Quicksell-Frontend-Assignment",
    deployed_url: "https://quicksell.aditya-meena.live/",
    screenshot_url:
      "quick-sell.png",
  },
  {
    id: 4,
    name: "Portfolio Website",
    title: "Full stack Web app",
    github_url: "https://github.com/AdityaMeena001",
    deployed_url: "https://aditya-meena.live",
    screenshot_url:
      "wonder-nook.png",
  },
];

const HomeProject = () => {
  
  return (
    <div className="px-full py-8 border">
      <div className="flex justify-center pb-8  ">
        <h2>Projects</h2>
      </div>

      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className=" justify-between grid gap-6 grid-cols-1  lg:grid-cols-2 w-full ">
        {projectData.map((project) => (
          <ProjectCard project={project} />
        ))}
      </motion.div>
    </div>
  );
};

export default HomeProject;
