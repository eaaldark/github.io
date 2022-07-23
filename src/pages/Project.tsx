import { projects } from "../data";
import { openInNewTab } from "../utils/openLink";

const ProjectDom = (props: any) => {
  return (
    <div className="w-full h-full my-auto flex justify-center text-white">
      <div className="p-5 space-y-5">
        <h1 className="font-bold text-2xl text-center">Proyectos</h1>

        <div className="grid grid-project gap-5">
          {projects.map((item: any) => {
            return (
              <div className="grid gap-2 border border-white/10">
                <div className="w-full h-32 items-center justify-center bg-white"></div>
                <div className="text-center px-5 space-y-2">
                  <h4 className="font-semibold text-lg">
                    {item.title}
                  </h4>
                  <p>{item.paragraph}</p>
                </div>
                <div className="p-5">
                  <button
                    onClick={() => {
                      openInNewTab(item.link);
                    }}
                    className="float-right rounded-lg px-4 py-2 bg-white text-black shadow hover:shadow-xl duration-300">
                    Ver
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectDom;
