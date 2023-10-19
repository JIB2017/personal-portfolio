"use client"
import Image from 'next/image';
import React, { useState } from 'react';

interface Tab {
  title: string,
  id: string,
  content: JSX.Element
}
const dataTab: Tab[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-none pl-2'>
        <li>Typescript</li>
        <li>Nextjs</li>
        <li>Tailwind CSS</li>
      </ul>
    )
  },
  {
    title: "Educacion",
    id: "educacion",
    content: (
      <ul className='list-none pl-2'>
        <li>Henry Full Stack Developer Bootcamp</li>
        <li>Universidad Nacional de la Matanza</li>
      </ul>
    )
  },
  {
    title: "Certificaciones",
    id: "certificaciones",
    content: (
      <ul className='list-none pl-2'>
        <li>Full Stack Web Developer - HENRY</li>
        <li>Bot Builder Rocketbot Expert - ROCKETBOT</li>
        <li>Salesforce Dev Edition - LABSXD</li>
      </ul>
    )
  }
];

const AboutMe = () => {
  const [active, setActive ] = useState<string>("skills");
  const cont = dataTab.find((tab: Tab) => tab.id === active);

  return (
    <section className='relative md:grid md:grid-cols-2 w-full paddings mt-52 gap-8 z-10'>
      {/* <div className="gradients">
        <div className="circle radial-orange-center"></div>
        <div className="circle radial-purple-center"></div>
        <div className="circle radial-yellow-center"></div>
      </div> */}
      <div className="absolute w-full max-w-[1440px] h-[200px] bg-landing-linear-spectrum bg-center bg-no-repeat bg-[length:1200px] blur-[128px] opacity-30 translate-y-40 translate-x-60"></div>
      <Image src="/about-me-image.png" alt="computer" width={500} height={500} className='bg-center bg-no-repeat bg-contain '/>
      <div className='flex-start flex-col text-left h-full sm:mt-12 md:mt-4'>
        <h2 className='heading3 text-gradient-grey nonselect'>Sobre Mi</h2>
        <p className='text-white-500 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor venenatis iaculis. Vestibulum auctor hendrerit massa. Mauris ullamcorper tortor non libero aliquet, eu congue tortor molestie. Cras egestas mollis turpis. Nam pulvinar ac nisl luctus sodales. Proin sit amet lacus nunc. In dictum cursus diam, sit amet venenatis quam elementum luctus. Nunc magna enim, molestie sed leo eget, tristique consectetur ipsum.</p>
        <div className='flex-start flex-col mt-12'>
          <ul className='flex-start flex-row gap-8'>
            <div className='group relative'>
              <p className={`${active === "skills" ? "text-white" : "text-white-500"} cursor-pointer`} onClick={() => setActive("skills")}>Skills</p>
              <div className={`absolute w-full h-px rounded-full gradient_blue-purple bottom-0 left-0 ${active === "skills" ? "scale-x-100 text-white" : "scale-x-0"} transform origin-left transition-transform group-hover:scale-x-100 group-active:scale-x-100`}></div>
            </div>
            <div className='group relative'>
              <p className={`${active === "educacion" ? "text-white" : "text-white-500"} cursor-pointer`} onClick={() => setActive("educacion")}>Educación</p>
              <div className={`absolute w-full h-px rounded-full gradient_blue-purple bottom-0 left-0 ${active === "educacion" ? "scale-x-100 text-white" : "scale-x-0"} transform origin-left transition-transform group-hover:scale-x-100 group-active:scale-x-100`}></div>
            </div>
            <div className='group relative'>
              <p className={`${active === "certificaciones" ? "text-white" : "text-white-500"} cursor-pointer`} onClick={() => setActive("certificaciones")}>Certificaciones</p>
              <div className={`absolute w-full h-px rounded-full gradient_blue-purple bottom-0 left-0 ${active === "certificaciones" ? "scale-x-100 text-white" : "scale-x-0"} transform origin-left transition-transform group-hover:scale-x-100 group-active:scale-x-100`}></div>
            </div>
          </ul>
          <div className='flex-start mt-12 text-white-500 w-full'>
            {cont ? cont.content : ""}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe