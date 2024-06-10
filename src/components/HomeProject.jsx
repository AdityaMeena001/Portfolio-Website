import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projectData = [
  {
    id:0,
    name:"Chess Ai",
    title:"React Chess Game with AI opponent",
    github_url:"https://github.com/AdityaMeena001/Chess-AI",
    deployed_url:"https://chess-ai.aditya-meena.live/",
    screenshot_url:"chess-ai.png"
  },
  {
    id: 1,
    name: "WonderNook",
    title: "Full Stack Web App",
    github_url: "https://github.com/AdityaMeena001/WonderNook",
    deployed_url: "https://wonder-nook.aditya-meena.live/",
    screenshot_url: "wonder-nook.png",
  },
  {
    id: 2,
    name: "Comic Gen",
    title: "Ai Comic Creator",
    github_url: "https://github.com/AdityaMeena001/Engineer-Product-Assignment",
    deployed_url: "https://comic-gen.aditya-meena.live/",
    screenshot_url: "comic-gen.png",
  },
  {
    id: 3,
    name: "KanBan Board ",
    title: "Quicksell FrontEnd Assignment",
    github_url:
      "https://github.com/AdityaMeena001/Quicksell-Frontend-Assignment",
    deployed_url: "https://quicksell.aditya-meena.live/",
    screenshot_url: "quick-sell.png",
  },
  {
    id: 4,
    name: "Portfolio Website",
    title: "Branding / Personal Portfolio",
    github_url: "https://github.com/AdityaMeena001",
    deployed_url: "https://portfolio.aditya-meena.live/",
    screenshot_url: "portfolio.png",
  },
  {
    id: 5,
    name: "Creative Coding",
    title: "Collection of My Code Sketches",
    github_url: "https://github.com/AdityaMeena001/Creative-Coding",
    deployed_url: "",
    screenshot_url: "creative-coding.png",
  },
];

const HomeProject = () => {
  return (
    <div className="px-full py-8 border">
      <div className="flex justify-center pb-8  ">
        <h2>Projects</h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className=" justify-between grid gap-6 grid-cols-1  lg:grid-cols-2 w-full "
      >
        {projectData.map((project) => (
          <ProjectCard project={project} />
        ))}
      </motion.div>
    </div>
  );
};

export default HomeProject;
