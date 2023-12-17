import React from "react";
import info from "../assets/info.svg";

export const Attention = () => {
  return (
    <div className="p-3 bg-typography300 flex flex-row w-full gap-[8px] rounded-lg">
      <div className="min-w-[32px] h-[32px] flex justify-center items-center bg-typography400 rounded">
        <img src={info} alt="" />
      </div>
      <div>
        <div className="s1">Masz pytania? Zadzwoń</div>
        <div className="p2">
          Kliknij poniższy przycisk by zadzownić, w przypadku braku odpowiedzi
          wyślij SMS.
        </div>
      </div>
    </div>
  );
};
