"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Tab {
  title: string;
  id: string;
  content: JSX.Element;
}
const dataTab: Tab[] = [
  {
    title: "Educacion",
    id: "educacion",
    content: (
      <ul className="list-none pl-2">
        <li><span className="text-white">Full Stack Developer Bootcamp</span> - Henry</li>
        <li><span className="text-white">Tecnicatura en Desarrollo Web</span> - UNLAM</li>
      </ul>
    ),
  },
  {
    title: "Certificaciones",
    id: "certificaciones",
    content: (
      <ul className="list-none pl-2">
        <li><span className="text-white">Full Stack Web Developer</span> - HENRY</li>
        <li><span className="text-white">Bot Builder Rocketbot Expert</span> - ROCKETBOT</li>
        <li><span className="text-white">Salesforce Dev Edition</span> - LABSXD</li>
      </ul>
    ),
  },
];

const AboutMe = () => {
  const [active, setActive] = useState<string>("educacion");
  const cont = dataTab.find((tab: Tab) => tab.id === active);

  return (
    <section className="relative md:grid md:grid-cols-2 w-full paddings mt-52 gap-8 z-10" id="about">
      <div className="absolute w-full max-w-[1440px] h-[200px] bg-landing-linear-spectrum bg-center bg-no-repeat bg-[length:1200px] blur-[128px] opacity-30 translate-y-40 translate-x-60"></div>
      <Image
        src="/about-me-image.png"
        alt="computer"
        width={500}
        height={500}
        className="bg-center bg-no-repeat bg-contain z-10 2xl:translate-x-20"
      />
      <div className="flex-start flex-col text-left h-full xs:mt-12 md:mt-4 z-10">
        <h2 className="heading3 text-gradient-grey mb-2 nonselect">Sobre Mi</h2>
        <p className="text-white-500 mt-4">
          Hola! Si, como ya te habrás dado cuenta soy desarrollador Fullstack, pero... <br />
          ¿Te estás preguntando si puedo ser un <span className="font-bold text-gradient_purple-blue">activo valioso</span> para tu empresa? <br />
          Un desarrollador web que además de la programación está entusiasmado por
          las últimas novedades en <span className="font-bold text-gradient_purple-blue">blockchain, inteligencia artificial y marketing digital</span>. <br />
          Disfruté mucho el armar este portafolio pero, ¿sabes qué me gustaría mas? <br />
          Trabajar en grandes proyectos ambiciosos y con un equipo, <span className="font-bold text-gradient_purple-blue">dandolo todo</span>.
        </p>
        <div className="flex-start flex-col mt-8">
          <ul className="flex-start flex-row gap-8">
            <div className="group relative">
              <p
                className={`${
                  active === "educacion" ? "text-white" : "text-white-500"
                } cursor-pointer`}
                onClick={() => setActive("educacion")}
              >
                Educación
              </p>
              <div
                className={`absolute w-full h-px rounded-full gradient_blue-purple bottom-0 left-0 ${
                  active === "educacion"
                    ? "scale-x-100 text-white"
                    : "scale-x-0"
                } transform origin-left transition-transform group-hover:scale-x-100 group-active:scale-x-100`}
              ></div>
            </div>
            <div className="group relative">
              <p
                className={`${
                  active === "certificaciones" ? "text-white" : "text-white-500"
                } cursor-pointer`}
                onClick={() => setActive("certificaciones")}
              >
                Certificaciones
              </p>
              <div
                className={`absolute w-full h-px rounded-full gradient_blue-purple bottom-0 left-0 ${
                  active === "certificaciones"
                    ? "scale-x-100 text-white"
                    : "scale-x-0"
                } transform origin-left transition-transform group-hover:scale-x-100 group-active:scale-x-100`}
              ></div>
            </div>
          </ul>
          <div className="flex-start mt-8 text-white-500 w-full transition-all">
            {cont ? cont.content : ""}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
