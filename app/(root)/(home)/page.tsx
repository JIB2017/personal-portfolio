import { Btn1, Btn2 } from "@/components/button";
import { BackgroundAnimation } from "@/components/BackgroundAnimation"
import TypingAnimation from '@/components/TypingAnimation';
import Filters from "@/components/Filters";

const Page = () => {
  return (
    <main className="flex-center flex-col paddings w-full mx-auto">
      <section className="flex-center flex-row nav-padding w-full">
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

      <Filters />
      <section className="text-white">Proyectos</section>
    </main>
  );
};

export default Page;
