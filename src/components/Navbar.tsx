import React from "react";
import { Link } from "react-router-dom";

const navigator: any[] = [
  { link: "/", text: "Inicio" },
  { link: "/about", text: "Acerca de" },
  { link: "/sumary", text: "Experiencia" },
  { link: "/skill", text: "Habilidades" },
  { link: "/contact", text: "Contacto" },
];

const NavbarDom = (props: any) => {
  return (
    <nav className="">
      {/* <div className="w-full h-full bg-gradient-to-r to-white from-transparent opacity-5"></div> */}
      <div className="flex flex-row text-white gap-16">
        <div className="flex-1"></div>
        {navigator.map((item: any) => {
          return (
            <div className="hover:bg-black p-2 m-2">
              <Link to={item.link}>{item.text}</Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default NavbarDom;
