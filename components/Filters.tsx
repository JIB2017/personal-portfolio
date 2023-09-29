"use client";

import React, { useState } from "react";

const Filters = () => {
  const filters = ["fullstack", "frontend", "backend"];
  const [active, setActive] = useState("");

  const handlerFilter = (filter: string) => {
    setActive(filter);
    if (active === filter) {
        setActive("");
    }
  };

  return (
    <div className="flex-center w-full mx-auto text-white-800 no-scrollbar gap-2 py-12">
      <ul className="flex-between w-full">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handlerFilter(filter)}
            className={`${active === filter ? "bg-landing-rainbow" : ""} whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
          >
            {filter}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
