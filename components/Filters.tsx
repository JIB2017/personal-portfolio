"use client";

import { useState } from "react";
import { formUrlQuery } from "@/sanity/utils";
import { useParams, useRouter } from "next/navigation";

const Filters = () => {
  const filters = ["fullstack", "frontend", "backend"];
  const [active, setActive] = useState("");
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
    <div className="flex-center mx-auto text-white-800 no-scrollbar  py-12">
      <ul className="flex-between w-full gap-14">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handlerFilter(filter)}
            className={`${
              active === filter ? "bg-landing-rainbow" : ""
            } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
          >
            {filter}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
