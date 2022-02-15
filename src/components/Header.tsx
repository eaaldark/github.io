import React from "react";

const Header = () => {
  return (
    <header
      id="home"
      className="w-full h-[20rem] 2xl:h-[30rem] md:h-[25rem] bg-sanFrancisco bg-cover bg-center bg-black"
    >
      <div className="w-full h-full backdrop-brightness-50 flex flex-col lg:flex-row text-center content-center justify-center place-items-center md:space-x-10 space-y-7">
        <div className="lg:w-60 lg:h-60 md:w-44 md:h-44 w-36 h-36 rounded-full bg-michiPsicologo bg-cover bg-center border-4"></div>
        <div className="text-center flex-col items-center w-3/4 md:w-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            Edgar Andres Angrino Lafaux
          </h1>
          <p className="md:text-lg text-white">
            Fullstack Developer, Micro-Services
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
