"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Project 1",
        description: "Project 1 description",
        image: "/images/projects/zaglushka.png",
        tag: ["All", "Video"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Project 2",
        description: "Project 2 description",
        image: "/images/projects/zaglushka.png",
        tag: ["All", "Video"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Project 3",
        description: "Project 3 description",
        image: "/images/projects/zaglushka.png",
        tag: ["All", "Video"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Project 4",
        description: "Project 4 description",
        image: "/images/projects/zaglushka.png",
        tag: ["All", "Video"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "Project 5",
        description: "Project 5",
        image: "/images/projects/zaglushka.png",
        tag: ["All", "Video"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "Project 6",
        description: "Project 5 description",
        image: "/images/projects/zaglushka.png",
        tag: ["All", "Video"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 7,
        title: "Project 7",
        description: "Project 7 description",
        image: "/images/projects/zaglushka.png",
        tag: ["All", "Video"],
        gitUrl: "/",
        previewUrl: "/",
      },
      {
        id: 8,
        title: "Project 8",
        description: "Project 8 description",
        image: "/images/projects/zaglushka.png",
        tag: ["All", "Video"],
        gitUrl: "/",
        previewUrl: "/",
      },
      {
        id: 9,
        title: "Project 9",
        description: "Project 9 description",
        image: "/images/projects/zaglushka.png",
        tag: ["All", "Video"],
        gitUrl: "/",
        previewUrl: "/",
      },
      {
        id: 10,
        title: "Project 10",
        description: "Project 10 description",
        image: "/images/projects/zaglushka.png",
        tag: ["All", "Video"],
        gitUrl: "/",
        previewUrl: "/",
      },
      {
      id: 11,
      title: "Project 11",
      description: "Project 11 description",
      image: "/images/projects/zaglushka.png",
      tag: ["All", "Video"],
      gitUrl: "/",
      previewUrl: "/",
      },
      {
        id: 12,
        title: "Project 12",
        description: "Project 12 description",
        image: "/images/projects/zaglushka.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
        },
  ];

  const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };
  
    return (
      <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Video"
            isSelected={tag === "Video"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default ProjectsSection;