import React, { useState } from "react"
import { Link } from "react-router-dom"
import { XIcon, MenuIcon } from "@heroicons/react/solid"

const navigator: any[] = [
  { link: "/", text: "Inicio", id: 0 },
  { link: "/about", text: "Acerca de", id: 1 },
  { link: "/sumary", text: "Resumen", id: 2 },
  { link: "/skill", text: "Habilidades", id: 3 },
  { link: "/project", text: "Proyectos", id: 5 },
  { link: "/contact", text: "Contacto", id: 4 },
]

const NavbarDom = (props: any) => {
  const [isClicked, setIsClicked] = useState<boolean>(true)

  const onClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <nav className='h-14'>
      <div
        className={`text-center flex flex-col text-white sm:hidden w-full ${
          isClicked ? "bg-gray-800" : "bg-gray-700"
        } fixed`}>
        {isClicked ? (
          <>
            <MenuIcon
              className={`${
                isClicked ? "" : "hidden"
              } text-white h-8 p-3 cursor-pointer hover:bg-slate-700`}
              onClick={onClick}
            />
          </>
        ) : (
          <>
            <XIcon
              className={`${
                isClicked ? "hidden" : ""
              } text-white h-8 p-3 cursor-pointer hover:bg-slate-700`}
              onClick={onClick}
            />
          </>
        )}
        {navigator.map((item: any) => {
          return (
            <Link
              className={`${isClicked ? "hidden" : ""} p-2 m-2 hover:border-b`}
              to={item.link}
              onClick={onClick}
              key={item.id}>
              {item.text}
            </Link>
          )
        })}
      </div>

      <div className='flex-row text-white gap-2 hidden sm:flex'>
        <div className='flex-1'></div>
        {navigator.map((item: any) => {
          return (
            <Link
              className='p-2 m-2 hover:border-b hover:border-white/30'
              to={item.link}
              key={item.id}>
              {item.text}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default NavbarDom
