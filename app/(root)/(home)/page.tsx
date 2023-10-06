import { Btn1, Btn2 } from "@/components/button";
import { BackgroundAnimation } from "@/components/BackgroundAnimation"
import TypingAnimation from '@/components/TypingAnimation';
import Filters from "@/components/Filters";
import { getProjects } from "@/sanity/actions";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import MouseTrack from "../../MouseTrack";

export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined };
};

const Page = async ({ searchParams }: Props) => {
  const projects = await getProjects({
    category: searchParams?.category || "",
    page: "1",
  });

  //console.log(projects);

  return (
    <main className="flex-center flex-col paddings w-full mx-auto">
      <div></div>
      <MouseTrack />
      <section id="hero" className="flex-center flex-row nav-padding w-full">
        <div className="flex-start flex-col w-full h-auto">
          <h1 className="heading2 text-gradient_purple-blue py-4">
            Juan Ignacio Blacutt
          </h1>
          <TypingAnimation />
          {/* <span className="heading2 text-gradient-grey mt-2">
            Fullstack Developer
          </span> */}
          <div className="flex-between flex-row gap-12 mt-12">
            <Btn1 />
            <Btn2 />
          </div>
        </div>
        <div className="flex-center w-full z-20">
          <BackgroundAnimation />
          {/* <Image src="/BackgroundAnimation.svg" alt="background-animation" width={150} height={150} className="w-full"/> */}
        </div>
      </section>

      <h2 id="projects" className="heading2 text-gradient-grey p-4 mt-4">Proyectos</h2>
      <Filters />
      {/* Proyectos */}
      <section className="flex-center flex-row text-white w-full flex-wrap gap-8 mt-8 mb-8">
          {projects && projects?.map((card: any) => (
            <ProjectCard key={card._id} title={card.title} image={card.image} description={card.description} repository={card.repository} livesite={card.livesite}/>
            ))}
      </section>

      {/* Skills */}
      <h2 id="skills" className="heading2 text-gradient-grey p-4 mt-12">Skills</h2>
      <Skills />
      <div id="blob">
        <div></div>
      </div>
    </main>
  );
};

export default Page;
