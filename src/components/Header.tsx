import React from "react";
import backgroundImage from "../assets/header.png";

export const Header = () => {
  return (
    <header
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="h-[256px] relative"
    >
      <p className="px-3 py-2 bg-white absolute left-1/2 transform -translate-x-1/2 rounded-b-xl s2">
        Nasze stanowisko
      </p>
      <div className="absolute left-1/2 -bottom-[48px] transform -translate-x-1/2 flex flex-col items-center gap-2">
        <p className=" w-[80px] h-[80px] bg-green-600 rounded-xl flex justify-center items-center">
          <span className="h1 text-white">GW</span>
        </p>
        <div className="h5 text-typography700">Grudzień Warzywa</div>
      </div>
    </header>
  );
};
