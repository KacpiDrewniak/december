import React from "react";
import pin from "./../assets/pin.svg";
import cart from "./../assets/cart.svg";
import { Button } from "./Button";
import phone from "./../assets/phone.svg";
import arrowDown from "./../assets/arrow-down.svg";
import navi from "./../assets/navi.svg";
import copy from "./../assets/copy.svg";
import { Attention } from "./Attention";
export const Info = () => {
  return (
    <div className="px-[36px] pt-[68px] pb-[24px] flex flex-col items-center">
      <div className="flex flex-col items-center max-w-[320px] gap-[12px] w-full">
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
          <img src={arrowDown} />
          <span>Zobacz asortyment</span>
        </Button>
      </div>
    </div>
  );
};
