import { Btn1 } from "@/components/button";

const CTA = () => {
  return (
    <section className="relative flex-center paddings w-full mt-52" id="contact">
      <div className="absolute w-full max-w-[1440px] h-[200px] bg-landing-linear-spectrum bg-center bg-no-repeat bg-[length:1200px] blur-[128px] opacity-30 translate-y-0 translate-x-0 -z-10"></div>
      <div className="relative flex-center flex-col paddings gap-16 w-[50rem] h-96 bgfooter2 border border-blue-700/40 rounded-xl">
        <div className="absolute flex-center w-full h-full bg-pixeles bg-center bg-cover bg-repeat bg-fixed z-[5]"></div>
        <h1 className="md:heading2 xs:heading3 text-gradient-grey text-center leading-[10rem] z-10 nonselect">
          ¡Listo para cualquier desafío!
        </h1>
        <Btn1
          text="Contacto"
          destiny="https://www.linkedin.com/in/juan-ignacio-blacutt-web-design/"
          target="blank"
        />
      </div>
    </section>
  );
};

export default CTA;
