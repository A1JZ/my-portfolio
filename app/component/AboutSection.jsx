"use client";
import React, { useState, useTransition } from 'react'
import Image from 'next/image';
import TabButton from './TapButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Adobe Premiere Pro 2024</li>
        <li>Adobe After Effects 2024</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>React</li>
        <li>NextJS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Learning in MIREA — RUSSIAN TECHNOLOGICAL UNIVERSITY</li>
        <li>Videoediting courses</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
  <section className='text-white'>
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <Image
      className='rounded-2xl'
      src="/images/About-me.webp"
      width={500}
      height={500}
      />
      <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
        <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
        <p className="text-base lg:text-lg">
          I'm a videoeditor and university student. Also I'm interested in frontend-development. 
          I really like to do some beautiful stuff. But I just get started and I don't know too much. But I am a quick learner and I am always looking to expand my knowledge and skill set.
          Also I'm trying to stay positive and kind to everyone.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;