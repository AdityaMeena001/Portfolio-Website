import { motion } from "framer-motion";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.002 }}
      className="bg-white relative group "
      initial={{ opacity: 0.99, scale: 0.99 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
      }}
      drag="x"
      dragConstraints={{ left: -1, right: 1 }}
    >
      <div class="absolute inset-0 bg-gradient-to-br blur-sm opacity-30 group-hover:opacity-50 group-hover:blur-md transition duration-500 rounded-3xl from-blue-700 to-pink-600"></div>
      <div className=" relative rounded-3xl bg-white p-4">
        <img
          src={ require(`../Images/${project.screenshot_url}`) }
          alt={project.name}
          className=" rounded-xl w-full h-80 object-cover object-center"
        />
        <div className=" h-20 pt-4 z-10 flex justify-between items-center w-full ">
          <div>
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p>{project.title}</p>
          </div>
          <div className="flex gap-3 items-center text-gray-600">
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <p>GitHub</p>
            </a>
            <a
              href={project.deployed_url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <p>Website</p>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
