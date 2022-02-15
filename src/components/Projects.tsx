import React from "react";
import ProjectItem from "./ProjectItem";

const Project = ({ data, title }: any) => {
  return (
    <section id="projects" className="container h-full mx-auto my-5">
      <h1 className="p-7 text-2xl h-fit font-medium">{title}</h1>
      <div className="sm:masonry-2 px-7">
        {data.projects.map((projects: any) => (
          <ProjectItem key={projects.id} {...projects} />
        ))}
      </div>
    </section>
  );
};

export default Project;
