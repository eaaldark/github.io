import React from "react";
import SkillItem from "./SkillItem";

const Skills = ({ data, title }: any) => {
     console.log(data.skills);
     
  return (
    <section id="skills" className="container h-full mx-auto my-5">
      <h1 className="p-7 text-2xl h-fit font-medium">{title}</h1>

      <div className="px-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data.skills.map((experience: any) => (
          <SkillItem key={experience.id} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
