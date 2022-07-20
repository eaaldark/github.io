import icons from "../icons/icons";
import { openInNewTab } from "../utils/openLink";
const SumaryDom = (props: any) => {
  const { Instagram, Github, Gmail, Telegram } = icons;
  return (
    <div className="w-full h-full my-auto flex flex-col space-y-4 text-white">
      <h1 className="text-center font-bold text-2xl">Contacto</h1>
      <div className="flex flex-row items-center justify-center gap-10">
        <div className="text-center">
          <button
            onClick={() => {
              openInNewTab("https://www.instagram.com/eaaldark");
            }}>
            <img src={Instagram} className="w-32" alt="Instagram" />
          </button>
        </div>
        <div className="text-center">
          <button
            onClick={() => {
              openInNewTab("https://github.com/eaaldark");
            }}>
            <img src={Github} className="w-32" alt="Github" />
          </button>
        </div>
        <div className="text-center">
          <button
            onClick={() => {
              openInNewTab(
                "mailto:eaangrino@misena.edu.co?subject=Tengo%20interes%20en%20usted!&body=Hola%20Edgar%20Angrino"
              );
            }}>
            <img src={Gmail} className="w-32" alt="Gmail" />
          </button>
        </div>
        <div className="text-center">
          <button
            onClick={() => {
              openInNewTab("https://t.me/eaaldark");
            }}>
            <img src={Telegram} className="w-32" alt="Telegram" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SumaryDom;
