import React from "react";
import SumaryItem from "./SumaryItem";

const Sumary = ({ data, title }: any) => {
  
  return (
    <section id="sumary" className="container mx-auto my-5">
      <h1 className="p-7 text-2xl h-fit font-medium">{title}</h1>
      <div className="sm:masonry-2 xl:masonry-3 px-7">
        {data.experience.map((experience: any) => (
          <SumaryItem key={experience.id} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default Sumary;
