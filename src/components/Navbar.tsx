import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faTimesCircle,
  faComments,
  faUserAlt,
  faFolder,
  faHome,
  faCode,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false);

  const showSideMenu = () => {
    isSideMenuOpen ? setisSideMenuOpen(false) : setisSideMenuOpen(true);
  };

  return (
    <nav className="w-full h-fit flex flex-col bg-white lg:flex-row justify-center items-center sticky top-0 shadow-md z-50">
      <ul className="hidden menu-list lg:flex lg:flex-row md:text-base font-bold">
        <li className="menu-list-item navbar-option">
          <a href="#home">Inicio</a>
        </li>
        <li className="menu-list-item navbar-option">
          <a href="#aboutme">Acerca de mi</a>
        </li>
        <li className="menu-list-item navbar-option">
          <a href="#sumary">Resumen</a>
        </li>
        <li className="menu-list-item navbar-option">
          <a href="#skills">Habilidades</a>
        </li>
        <li className="menu-list-item navbar-option">
          <a href="#projects">Proyectos</a>
        </li>
        <li className="menu-list-item navbar-option">
          <a href="#contact">Contactame</a>
        </li>
        {/* <li className="menu-list-item p-5 items-center">
          <a href="#perra">Contacto</a>
        </li> */}
      </ul>

      <button
        onClick={() => {
          showSideMenu();
        }}
        className="lg:hidden menu-button h-12"
      >
        {isSideMenuOpen ? (
          <FontAwesomeIcon size="lg" icon={faTimesCircle} />
        ) : (
          <FontAwesomeIcon size="lg" icon={faBars} />
        )}
      </button>
      {isSideMenuOpen ? (
        <div className="w-full lg:hidden transition duration-200 group-active:">
          <ul className="menu-list flex flex-col font-bold text-lg p-5">
            <li className="menu-list-item navbar-option-responsive">
              <FontAwesomeIcon size="lg" className="w-10" icon={faHome} />
              <a
                className="w-full"
                href="#home"
                onClick={() => {
                  showSideMenu();
                }}
              >
                Inicio
              </a>
            </li>
            <li className="menu-list-item navbar-option-responsive">
              <FontAwesomeIcon size="lg" className="w-10" icon={faUserAlt} />
              <a
                className="w-full"
                href="#aboutme"
                onClick={() => {
                  showSideMenu();
                }}
              >
                Acerca de mi
              </a>
            </li>
            <li className="menu-list-item navbar-option-responsive">
              <FontAwesomeIcon
                size="lg"
                className="w-10"
                icon={faClipboardList}
              />
              <a
                className="w-full"
                href="#sumary"
                onClick={() => {
                  showSideMenu();
                }}
              >
                Resumen
              </a>
            </li>
            <li className="menu-list-item navbar-option-responsive">
              <FontAwesomeIcon size="lg" className="w-10" icon={faCode} />
              <a
                className="w-full"
                href="#skills"
                onClick={() => {
                  showSideMenu();
                }}
              >
                Habilidades
              </a>
            </li>
            <li className="menu-list-item navbar-option-responsive">
              <FontAwesomeIcon size="lg" className="w-10" icon={faFolder} />
              <a
                className="w-full"
                href="#projects"
                onClick={() => {
                  showSideMenu();
                }}
              >
                Proyectos
              </a>
            </li>
            <li className="menu-list-item navbar-option-responsive">
              <FontAwesomeIcon size="lg" className="w-10" icon={faComments} />
              <a
                className="w-full"
                href="#contact"
                onClick={() => {
                  showSideMenu();
                }}
              >
                Contactame
              </a>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
