import { readClient } from "./lib/client";
import { groq } from "next-sanity";
import { buildQuery } from "./utils";

interface GetProjectParams {
  category: string;
  page: string;
}

export const getProjects = async (params: GetProjectParams) => {
  const { category, page } = params;
  try {
    const projects = await readClient.fetch(
      groq`${buildQuery({
        type: "project",
        category,
        page: parseInt(page),
      })}{
        title,
        _id,
        description,
        repository,
        livesite,
        "image": poster.asset->url,
        slug,
        category,
        technologies,
        }`
    );

    return projects;
  } catch (error) {
    console.log(error);
  }
};
