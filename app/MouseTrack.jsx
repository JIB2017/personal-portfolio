"use client"

import { useEffect } from "react";

const MouseTrack = () => {
  useEffect(() => {
    const blob = document.getElementById("blob");

    window.onpointermove = (event) => {
      const { clientX, clientY } = event;

      const scrollX = window.scrollX || window.pageXOffset;
      const scrollY = window.scrollY || window.pageYOffset;
      if (blob) {
        blob.animate({
            left: `${clientX + scrollX}px`,
            top: `${clientY + scrollY}px`
        }, { duration: 3000, fill: "forwards" })
        // blob.style.left = `${clientX + scrollX}px`;
        // blob.style.top = `${clientY + scrollY}px`;
      }
    };
});
return null;
};

export default MouseTrack;
