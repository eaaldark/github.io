import { CubeTransparentIcon } from "@heroicons/react/solid";

const ProjectDom = (props: any) => {
  return (
    <div className="w-full h-full my-auto flex justify-center text-white">
      <div className="text-center space-y-4">
        <h1 className="font-bold text-2xl">Proyectos</h1>
        <div className="">
          <CubeTransparentIcon className="w-60" />
        </div>
        <p>En progreso...</p>
      </div>
    </div>
  );
};

export default ProjectDom;
