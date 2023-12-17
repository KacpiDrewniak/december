import React from "react";
import infoWhite from "./../assets/infoWhite.svg";

export const ShopInfo = () => {
  return (
    <div className="px-[36px] py-[32px] bg-typography300 flex flex-col items-center">
      <div className="flex flex-col gap-4 items-center  max-w-[320px] ">
        <div className="bg-green-600 rounded p-2">
          <img src={infoWhite} />
        </div>
        <div className="gap-2 flex flex-col">
          <div className="h5 text-center">Asortyment na żywo</div>
          <div className="s2 text-center">
            Wszystkie produkty, które wyświetlane są na stronie są u nas
            dostępne.
          </div>
        </div>
        <div className="bg-green-600 rounded p-2">
          <img src={infoWhite} />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="h5 text-center">Godziny otwarcia</div>
          <div className="p2">Poniedziałek - Piatek</div>
          <div className="s1">2:00 - 12:00</div>
          <div className="p2">Sobota</div>
          <div className="s1">2:00 - 10:00</div>
          <div className="p2">Niedziela</div>
          <div className="s1">Nieczynne</div>
        </div>
      </div>
    </div>
  );
};
