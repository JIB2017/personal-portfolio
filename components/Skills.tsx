"use client"

import Image from 'next/image';
import { useEffect } from 'react';
const Skills = () => {
    const skills = ["HTML", "CSS", "Javascript", "Typescript", "Tailwind CSS", "React", "Redux", "Next", "SCSS", "MySQL", "PostgreSQL", "Node", "Express", ];

    useEffect(() => {
      const cardsElement = document.getElementById("cards");
    
      if (cardsElement) {
        cardsElement.onmousemove = (e) => {
          for (const card of document.getElementsByClassName("card")) {
            const cardElement = card as HTMLElement;
            const rect = cardElement.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;
    
            cardElement.style.setProperty("--mouse-x", `${x}px`);
            cardElement.style.setProperty("--mouse-y", `${y}px`);
          }
        };
      }
    }, []);
    

  return (
    <div id='cards'> {/* Cards */}
          {skills.map((skill) => (
              <div key={skill} className='card'> {/* Card */}
                  <div className='card-content'>
                      {/* <div className='h-fit w-full flex-center flex-col'>
                          <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg" alt="logo" width={60} height={60} className='h-full object-cover cursor-pointer'/>
                      </div>
                      <p className='body-semibold text-white-500'>{skill}</p> */}
                  </div>
              </div>
          ))}
      </div>
  )
}

export default Skills