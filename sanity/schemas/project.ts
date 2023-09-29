const project = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      require,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "repository",
      title: "Repository",
      type: "url",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "livesite",
      title: "Livesite",
      type: "url",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["fullstack", "frontend", "backend"],
      },
    },
  ],
};

export default project;
