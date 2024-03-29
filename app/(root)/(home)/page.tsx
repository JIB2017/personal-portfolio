import { Btn1, Btn2 } from "@/components/button";
import { BackgroundAnimation } from "@/components/BackgroundAnimation"
import TypingAnimation from '@/components/TypingAnimation';
import Filters from "@/components/Filters";
import { getProjects } from "@/sanity/actions";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import MouseTrack from "@/components/MouseTrack";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined };
};

const Page = async ({ searchParams }: Props) => {
  const projects = await getProjects({
    category: searchParams?.category || "",
    page: "1",
  });

  return (
    <main className="flex-center flex-col w-full mt-20 mx-auto">
      <MouseTrack />
      {/* <Scroll /> */}
      <section id="hero" className="flex-center flex-row paddings w-full z-10">
        <div className="xs:flex-center md:flex-start flex-col w-full h-auto">
          <h1 className="xs:heading3 md:heading2 text-gradient_purple-blue py-4 whitespace-nowrap nonselect">
            Juan Ignacio Blacutt
          </h1>
          <TypingAnimation />
          <div className="flex justify-between xs:flex-col xs:justify-center md:flex-row flex-wrap gap-12 mt-12">
            <Btn1 text="Ver proyectos!" destiny="#projects"/>
            <Btn2 text="Ver curriculum" />
          </div>
        </div>
        <div className="flex-center w-full z-20 xs:hidden 2xl:flex">
          <BackgroundAnimation />
        </div>
      </section>

      <h2 id="projects" className="heading2 text-gradient-grey pt-36 pb-16 z-10 nonselect">Proyectos</h2>
      <Filters />
      {/* Proyectos */}
      <section className="relative flex-center flex-row text-white w-full flex-wrap gap-8 paddings mt-8 mb-32 z-10">
          {projects && projects?.map((card: {[key: string]: string}, i: number) => (
            <ProjectCard key={`${card._id}-${i.toString()}`} delay={i} title={card.title} image={card.image} technologies={card.technologies} description={card.description} repository={card.repository} livesite={card.livesite}/>
            ))}
      </section>

      {/* Skills */}
      <Skills />
      {/* Blob effect mousetrack */}
      <div id="blob" className="xs:hidden 3xl:flex">
        <div />
      </div>

      {/* About me */}
      <AboutMe />
      {/* CTA */}
      <CTA />

      <div className="w-full py-20"/>
      {/* Pie de página */}
      <Footer />
    </main>
  );
};

export default Page;
