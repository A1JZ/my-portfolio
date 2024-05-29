"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "NAYA PLATFORM, NAYE AVSAR | Apni JOURNEY SHURU KARO mere saath aur EXNOVA ke saath",
        description: "Trading platform advertisment on Hindi",
        image: "/images/projects/1.png",
        tag: ["All", "Video"],
        gitUrl: "https://www.youtube.com/watch?v=AWQ1H_0PgVc",
    },
    {
        id: 2,
        title: "3 Rules for Successful Life | Kaise AI BOT Mujhe Millionaire Banata Hai",
        description: "Channel advertisment on Hindi",
        image: "/images/projects/zaglushka.png",
        tag: ["All", "Video"],
        gitUrl: "https://www.youtube.com/watch?v=3HmBFlCe6CM&t=41s",
    },
    {
        id: 3,
        title: "Enhance Your Trading with Our AI Bot: Discover How in the Video Description",
        description: "Trading video on English",
        image: "/images/projects/zaglushka.png",
        tag: ["All", "Video"],
        gitUrl: "https://www.youtube.com/watch?v=V0BZM4gUuAE&t=65s",
    },
    {
        id: 4,
        title: "Qué dice la gente sobre mí? Reseñas e impresiones de suscriptores sobre IA BOT",
        description: "Video with reviews on Spanish",
        image: "/images/projects/zaglushka.png",
        tag: ["All", "Video"],
        gitUrl: "https://www.youtube.com/watch?v=9mpap01aNXA&t=26s",
    },
    {
        id: 5,
        title: "Bienvenido al Futuro IA Bot - Secretos Para Lograr la Riqueza",
        description: "Trading video on Spanish",
        image: "/images/projects/zaglushka.png",
        tag: ["All", "Video"],
        gitUrl: "https://www.youtube.com/watch?v=ZwQE-lCV5OA&t=562s",
    },
    {
        id: 6,
        title: "Cómo Automatiza sus Operaciones de Mercado? He Encontrado la Mejor Solución",
        description: "Advertisment on Spanish",
        image: "/images/projects/zaglushka.png",
        tag: ["All", "Video"],
        gitUrl: "https://www.youtube.com/watch?v=d-ZoqaR8CK8&t=21s",
    },
    {
        id: 7,
        title: "Mercado Alcista. Una Estrategia Para el éxito",
        description: "Trading on Spanish (another channel)",
        image: "/images/projects/zaglushka.png",
        tag: ["All", "Video"],
        gitUrl: "https://www.youtube.com/watch?v=VejbN3MItjM",
      },
      {
        id: 8,
        title: "Interview",
        description: "Test version of interview video with colorcorrection and retouching",
        image: "/images/projects/8.png",
        tag: ["All", "Video"],
        gitUrl: "https://drive.google.com/file/d/1g_mSkG7YTQS-9yRJj19ZP5X3pxtot1QG/view",
      },
      {
        id: 9,
        title: "Review video",
        description: "Video review on some goods",
        image: "/images/projects/9.png",
        tag: ["All", "Video"],
        gitUrl: "https://drive.google.com/file/d/1Jlop0ifoyZle1SRT4p_QqpE1PBtOHufj/view?usp=drive_link",
      },
      {
        id: 10,
        title: "YouTube short",
        description: "YouTube short with the features demonstration",
        image: "/images/projects/10.png",
        tag: ["All", "Video"],
        gitUrl: "https://drive.google.com/file/d/14Ohc2PGX_-SFlzdZudbHs1uYCBQ_RhBL/view?usp=drive_link",
      },
      {
      id: 11,
      title: "Project 11",
      description: "Project 11 description",
      image: "/images/projects/11.png",
      tag: ["All", "Video"],
      gitUrl: "https://drive.google.com/file/d/1XfuMiboZbo-_rx3hdzaVnGsx1Vcb7DkZ/view?usp=drive_link",
      },
      {
        id: 12,
        title: "Project 12",
        description: "Project 12 description",
        image: "/images/projects/Website.png",
        tag: ["All", "Web"],
        gitUrl: "http://localhost:3000/",
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