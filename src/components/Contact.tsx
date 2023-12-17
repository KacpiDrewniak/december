import React from "react";
import infoWhite from "../assets/infoWhite.svg";
import pin from "../assets/pin.svg";
import cart from "../assets/cart.svg";
import { Button } from "./Button";
import navi from "../assets/navi.svg";
import { Attention } from "./Attention";
import phone from "../assets/phone.svg";
import copy from "../assets/copy.svg";
import arrowUp from "../assets/arrow-up.svg";

export const Contact = () => {
  return (
    <footer className="py-4 px-8 flex flex-col items-center">
      <div className="flex flex-col gap-4 items-center  max-w-[320px] ">
        <div className="w-[48px] h-[48px]">
          <div className="bg-green-600 rounded p-2">
            <img src={infoWhite} />
          </div>
        </div>
        <div className="h2 w-full">Skontaktuj sie z nami!</div>
        <div className="flex flex-row w-full gap-[12px]">
          <div className="flex-1 p-3 bg-typography300 flex items-center flex-col rounded-lg gap-2">
            <div className="w-[32px] h-[32px] flex justify-center items-center bg-typography400 rounded">
              <img src={pin} alt="" />
            </div>
            <p className="text-center s2">Relaksowa 21, 43-300 Bielsko-Biała</p>
          </div>
          <div className="flex-1 p-3 bg-typography300 flex items-center flex-col rounded-lg gap-2">
            <div className="w-[32px] h-[32px] flex justify-center items-center bg-typography400 rounded">
              <img src={cart} alt="" />
            </div>
            <p className="text-center s2">Stanowisko</p>
          </div>
        </div>
        <Button variant="outline">
          <img src={navi} />
          <span>Zobacz jak dojechac</span>
        </Button>
        <Attention />
        <div className="flex flex-row w-full  gap-4">
          <Button variant="outline">
            <img src={phone} />
            <span>123 456 789</span>
          </Button>
          <Button
            style={{ padding: 0 }}
            classNames="max-w-[48px] min-w-[48px] h-[48px] px-0 py-0"
            variant="outline"
          >
            <img src={copy} />
          </Button>
        </div>
        <Button>
          <img src={arrowUp} />
          <span>Zobacz asortyment</span>
        </Button>
      </div>
    </footer>
  );
};
