import React from "react";
import { aboutData } from "../data";

const AboutDom = (props: any) => {
  return (
    <div className="w-full my-auto py-6 flex flex-col justify-center">
      <div className="flex flex-col md:flex-row text-center content-center justify-center place-items-center gap-6">
        <div className="bg-michiPsicologo bg-cover bg-center w-52 xs:w-60 h-52 xs:h-60 border-4 rounded-full"></div>
        <div className="text-white w-10/12 md:w-6/12 flex flex-col gap-y-5">
          <h1 className="text-2xl">Un poco sobre mi</h1>
          <p>
            {aboutData}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutDom;
