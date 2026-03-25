"use client";

import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <div className="sm:paragraph-semibold md:base-bold text-gradient-grey mt-2 py-4 whitespace-nowrap nonselect">
      <TypeAnimation
        sequence={[
          "Web Scraper Engineer",
          1000,
          "Backend Engineer",
          1000,
          "Cybersecurity Enthusiast",
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
