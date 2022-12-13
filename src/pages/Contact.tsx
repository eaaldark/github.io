// import Tooltip from "../components/Tooltip";
import Tooltip from "../components/Tooltip"
import icons from "../icons/icons"
import { openInNewTab } from "../utils/openLink"

const buttons: any[] = [
  {
    icon: icons.Instagram,
    tootipMessage: "Nada importante pero puedes contactarme",
    link: "https://www.instagram.com/eaaldark",
    alt: "Instagram",
  },
  {
    icon: icons.Github,
    tootipMessage: "Proyectos que he realizado",
    link: "https://github.com/eaaldark",
    alt: "Github",
  },
  {
    icon: icons.Gmail,
    tootipMessage: "Escribe un correo detallado por favor",
    link: "mailto:eaangrino@misena.edu.co?subject=Tengo%20interes%20en%20usted!&body=Hola%20Edgar%20Angrino",
    alt: "Gmail",
  },
  {
    icon: icons.LinkedIn,
    tootipMessage: "Perfil Laboral",
    link: "https://www.linkedin.com/in/681787194/",
    alt: "Linked In",
  },
]

const SumaryDom = ({ ...props }: any) => {
  return (
    <div className='w-full h-full my-auto flex flex-col space-y-4 text-white'>
      <div className='p-5 space-y-5'>
        <h1 className='text-center font-bold text-2xl'>Contacto</h1>
        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
          {buttons.map((item: any) => {
            return (
              <div className='text-center'>
                {/* <Tooltip tooltipMessage={item.alt}> {item.tootipMessage} </Tooltip>  */}
                <button
                  onClick={() => {
                    openInNewTab(item.link)
                  }}>
                  <img
                    src={item.icon}
                    className='w-32 hover:border hover:border-black/30 rounded-lg hover:bg-gray-500'
                    alt={item.alt}
                  />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SumaryDom
