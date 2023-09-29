"use client";

import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <div className="base-bold text-gradient-grey mt-2 py-4">
      <TypeAnimation
        sequence={[
          "Fullstack Developer",
          1000,
          "Frontend Developer",
          1000,
          "Backend Developer",
          1000,
          "Web Developer",
          1000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
      />
    </div>
  );
};

export default TypingAnimation;
