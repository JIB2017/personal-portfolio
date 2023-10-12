"use client"

import { useEffect } from "react";

const MouseTrack = () => {
  useEffect(() => {

    const blob = document.getElementById("blob");

    let clientX = (screen.availWidth)/2;
    let clientY = (screen.availHeight)/2;
    let isMoving = false;

    function mouseTracker() {

      const scrollX = window.scrollX || window.pageXOffset;
      const scrollY = window.scrollY || window.pageYOffset;
      if (blob && isMoving) {
        blob.animate({
            left: `${clientX + scrollX}px`,
            top: `${clientY + scrollY}px`
        }, { duration: 3000, fill: "forwards" })
      } else if (blob) {
        blob.animate({
          left: `${clientX + scrollX}px`,
          top: `${clientY + scrollY}px`
      }, { duration: 0, fill: "forwards" })
      }

      requestAnimationFrame(mouseTracker);// Con esto se actualizará, en este caso, cuando hagamos scroll
    };

    function handleMouseMove(event: { clientX: number; clientY: number; }) {
      clientX = event.clientX;
      clientY = event.clientY;
      isMoving = true;
    }

    function handleScroll() {
      isMoving = false;
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    mouseTracker();
});
return null;
};

export default MouseTrack;
