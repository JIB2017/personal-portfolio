"use client";

import { useState } from "react";
import { formUrlQuery } from "@/sanity/utils";
import { useParams, useRouter } from "next/navigation";

const Filters = () => {
  const filters = ["fullstack", "frontend", "backend"];
  const [active, setActive] = useState<string>("");
  const searchParams = useParams();
  const router = useRouter();

  const handlerFilter = (filter: string) => {
    let newUrl = "";

    if (active === filter) {
      setActive("");
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["category"],
      });
    } else {
      setActive(filter);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "category",
        value: filter.toLocaleLowerCase(),
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="flex-center mx-auto text-white-800 no-scrollbar py-12">
      <div className="gradients">
        <div className="circle radial-orange"></div>
        <div className="circle radial-purple"></div>
        <div className="circle radial-yellow"></div>
      </div>
      <ul className="group flex-between w-full sm:gap-4 md:gap-14 transition-all">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handlerFilter(filter)}
            className={`${
              active === filter ? "gradient_purple-blue" : ""
            } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize hover:scale-105 bg-transparent transition-all`}
          >
            {filter}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
