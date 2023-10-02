import Link from "next/link";

export const Btn1 = () => {
  return (
    <Link
      href="#projects"
      className="group appearance-none focus:outline-none block relative text-bg-jib hover:no-underline hover:text-bg-jib z-[1] "
    >
      {/* Animacion */}
      <div className="absolute -left-0.5 -top-0.5 blur overflow-hidden rounded-lg w-[calc(100%+0.25rem)] h-[calc(100%+0.25rem)] z-[-1] ">
        <div className="absolute w-[125%] aspect-square h-auto left-[-12.5%] top-[-120px] bg-landing-rainbow animate-spin-slow  animation-paused group-hover:animation-running" />
      </div>
      {/* Contenido */}
      <div className="bg-white-0 rounded-lg px-10 py-4">
        <div className="gap-2 flex items-center justify-center group-hover:scale-105 duration-100 ease-in-out transition-transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M6.138 4.335a2.654 2.654 0 0 1 2.638.033l9.143 5.4A2.594 2.594 0 0 1 19.199 12c0 .92-.49 1.765-1.28 2.232l-9.143 5.4c-.81.479-1.817.491-2.638.033A2.595 2.595 0 0 1 4.8 17.4V6.6c0-.943.515-1.807 1.338-2.265Zm1.824 1.41a1.054 1.054 0 0 0-1.045-.013.995.995 0 0 0-.517.868v10.8c0 .354.193.687.517.868.325.18.725.176 1.045-.013l9.143-5.4A.995.995 0 0 0 17.6 12a.995.995 0 0 0-.495-.855l-9.143-5.4Z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="body-semibold">Ver proyectos!</span>
        </div>
      </div>
    </Link>
  );
};

export const Btn2 = () => {
  return (
    <Link
      href="https://drive.google.com/file/d/1QN-bNMh5QxO_hCMuhGenpnQ9R-uVUcgb/view?usp=sharing"
      className="relative text-bg-jib hover:no-underline hover:text-gray-0 z-[1] group  "
      target="blank"
    >
      {/* Animacion */}
      <div className="absolute -left-[1.5px] -top-[1.5px] overflow-hidden rounded-lg w-[calc(100%+2.5px)] h-[calc(100%+2.5px)] z-[-1]">
        <div className="absolute w-[125%] aspect-square h-auto left-[-12.5%] top-[-120px] bg-landing-ghost animate-spin-slow animation-slow-speed" />
      </div>
      {/* Contenido */}
      <div className="bg-jib rounded-lg px-10 py-4 ">
        <div className="gap-2 flex-center group-hover:scale-105 duration-100 ease-in-out transition-transform">
          <svg
            className="text-btn2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill="currentColor"
              d="M8.8 12.8a.8.8 0 0 1 .8-.8h4.8a.8.8 0 0 1 0 1.6H9.6a.8.8 0 0 1-.8-.8ZM9.6 15.2a.8.8 0 0 0 0 1.6H12a.8.8 0 0 0 0-1.6H9.6Z"
            ></path>
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M5.6 6.4A2.4 2.4 0 0 1 8 4h4.937a2.4 2.4 0 0 1 1.697.703l3.063 3.063a2.4 2.4 0 0 1 .703 1.697V17.6A2.4 2.4 0 0 1 16 20H8a2.4 2.4 0 0 1-2.4-2.4V6.4ZM8 5.6a.8.8 0 0 0-.8.8v11.2a.8.8 0 0 0 .8.8h8a.8.8 0 0 0 .8-.8V9.463a.8.8 0 0 0-.234-.566l-3.063-3.063a.8.8 0 0 0-.566-.234H8Z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="body-semibold text-btn2">Ver cv ahoraaa!</span>
        </div>
      </div>
    </Link>
  );
};

