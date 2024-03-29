"use client";

import Image from "next/image";
import logos from "@/components/IconSkills";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const skills = [
    "Typescript",
    "Tailwind",
    "Next",
    "Redux",
    "SCSS",
    "React",
    "HTML",
    "CSS",
    "Javascript",
    "MySQL",
    "PostgreSQL",
    "Node",
    "Express",
    "Sanity",
    "Auth0",
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="flex-center flex-col z-10">
      {/* Title */}
      {/* Gradients */}
      <div className="gradients">
        <div className="circle right-auto md:-top-128 xs:-top-188 cirle-purple"></div>
      </div>
      <h2 id="skills" className="heading2 text-gradient-grey p-4 my-20 z-10 nonselect">Skills</h2>
      <div id="cards" ref={ref}>
      {/* Cards */}
      {skills.map((skill, i) => (
        <motion.div
          key={skill}
          initial={{
            opacity: 0,
            translateX: i % 2 === 0 ? -50 : 50,
            translateY: -50,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            translateX: isInView ? 0 : i % 2 === 0 ? -50 : 50,
            translateY: isInView ? 0 : -50,
          }}
          transition={{
            duration: 0.5,
            delay: i * 0.2,
          }}
        >
          <div className="card cursor-pointer transition-all duration-100">
            {" "}
            {/* Card */}
            <div className="card-content flex-center flex-col gap-3">
              <div className="h-fit w-full flex-center flex-col">
                <Image
                  src={skill in logos ? logos[skill] : ""}
                  alt="logo"
                  width={60}
                  height={60}
                  className="h-full object-cover"
                />
              </div>
              <p className="body-semibold text-gradient-grey2">{skill}</p>
            </div>
          </div>
        </motion.div>
      ))}
      </div>
    </section>
  );
};

export default Skills;
