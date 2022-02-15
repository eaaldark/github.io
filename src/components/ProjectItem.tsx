import React from "react";

const ProjectItem = ({ img, projectTitle, description, link }: any) => {
  return (
    <div className="break-inside border-gray-200 shadow-gray-200 shadow-md border rounded-xl">
      <div className="flex flex-col lg:flex-row">
        <img
          src={img}
          alt="boy with camera"
          className="rounded-tl-xl rounded-tr-xl lg:rounded-tr-none w-full lg:w-60 object-cover"
        />
        <div className="p-8 w-full">
          <h3 className="font-bold text-2xl mb-5">{projectTitle}</h3>
          <p>{description}</p>

          {Array.isArray(link) ? (
            <>
              <a
                href={`https://github.com/eaaldark/${link[0]}`}
                target={"_blank"}
                className="mt-5 ml-2 float-right rounded-lg px-4 py-2 bg-blue-500 text-blue-50 shadow hover:shadow-xl duration-300"
                rel="noreferrer"
              >
                Back
              </a>
              <a
                href={`https://github.com/eaaldark/${link[1]}`}
                target={"_blank"}
                className="mt-5 float-right rounded-lg px-4 py-2 bg-blue-500 text-blue-50 shadow hover:shadow-xl duration-300"
                rel="noreferrer"
              >
                Front
              </a>
            </>
          ) : (
            <a
              href={`https://github.com/eaaldark/${link}`}
              target={"_blank"}
              className="mt-5 float-right rounded-lg px-4 py-2 bg-blue-500 text-blue-50 shadow hover:shadow-xl duration-300"
              rel="noreferrer"
            >
              Ver en Github
            </a>
          )}
        </div>
      </div>
      <div className="rounded-b-lg bg-gray-100 text-sm text-gray-500 px-8 py-3 text-right">
        ...
      </div>
    </div>
  );
};

export default ProjectItem;
