import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import { Product as ProductType, Section } from "../types/type";
import maximise from "./../assets/maximize.svg";
import { Button } from "./Button";
import arrowUp from "./../assets/arrow-up.svg";
type BadgeType = {
  label: string;
  isActive?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Badge = ({ label, onClick }: BadgeType) => {
  return (
    <button
      onClick={onClick}
      className={`transition badge py-2 px-6 label rounded-full bg-typography300 text-typography900`}
    >
      {label}
    </button>
  );
};

const Product = ({ title, productCard, image, isPromoted }: ProductType) => {
  return (
    <>
      <div
        className={`p-3 border rounded-xl border-${
          isPromoted ? "green-400" : "typography400"
        } flex flex-col`}
      >
        <div className="flex gap-3 items-center">
          <img
            className="w-12 h-12 rounded-xl border border-typography400"
            src={image.url}
          />
          <div className="text-typography900 s1 flex-1">{title}</div>
          <button>
            <img src={maximise} />
          </button>
        </div>
        <hr
          className={`my-2 h-[2px] bg-${
            isPromoted ? "green-400" : "typography400"
          }`}
        />
        <div className="flex flex-row flex-wrap gap-2 justify-between">
          {productCard.map((p) => (
            <div
              key={p.id}
              className={`p-2 basis-[140px] flex-col items-center bg-${
                isPromoted ? "green-100" : "typography300"
              } rounded-lg`}
            >
              <div className="s1 text-center text-typography900">{p.price}</div>
              <div className="c2 text-center text-typography700">{p.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const Asortiment = ({ data }: { data: Section[] }) => {
  const badges = data.map(({ title, id }) => ({ title, id }));

  const [isArrow, setIsArrow] = useState<boolean>(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const cachedRef = ref.current;
    const observer = new IntersectionObserver(
      ([e]) => setIsArrow(e.intersectionRatio === 1),
      { threshold: [1] },
    );
    observer.observe(cachedRef);
    return () => observer.unobserve(cachedRef);
  }, [ref]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const badges = document.querySelectorAll("button.badge");

    window.onscroll = () => {
      sections.forEach(({ offsetTop, offsetHeight, id }) => {
        let top = window.scrollY;
        let offset = offsetTop - 150;
        if (top >= offset && top < offset + offsetHeight) {
          badges.forEach(({ textContent, classList }) => {
            const active = ["bg-green-600", "text-white"];
            const inactive = ["bg-typography300", "text-typography900"];
            if (textContent === id) {
              classList.add(...active);
              classList.remove(...inactive);
            } else {
              classList.add(...inactive);
              classList.remove(...active);
            }
          });
        }
      });
    };
  }, [window, data]);

  return (
    <>
      {isArrow && (
        <Button
          onClick={() => {
            const el = document.getElementById("asortyment");
            console.log(el);
            el?.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          style={{ padding: 0 }}
          classNames="!w-12 !h-12 fixed z-10 bottom-2 right-2"
        >
          <img src={arrowUp} />
        </Button>
      )}
      <div id="asortyment" className="flex flex-col items-center">
        <div className="px-9 pt-4 pb-1.5">
          <div className="flex flex-col gap-3 w-full">
            <div className="h5 w-full">Asortyment dostępny na miejscu</div>
          </div>
        </div>
      </div>
      <div
        ref={ref}
        id="sticky"
        className="flex flex-col items-center sticky top-0 bg-white overflow-hidden overflow-x-scroll no-scrollbar"
      >
        <div className="pt-4 pb-1.5 ">
          <div className="px-10 flex flex-row gap-3 justify-center w-[100vw]">
            {badges.map((props, index) => (
              <Badge
                onClick={() => {
                  const el = document.getElementById(props.title);
                  el?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                label={props.title}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="max-w-[320px] w-full">
          {data.map(({ title, product, id }) => {
            return (
              <section className="flex flex-col gap-4 py-4" id={title} key={id}>
                <div className="flex-1 flex-row flex gap-3 items-center">
                  <h4 className={`text-typography700 label`}>{title}</h4>
                  <hr
                    className={`flex-1  ${
                      title === "Promocje" ? "bg-green-600" : "bg-typography500"
                    }  h-[2px]`}
                  />
                </div>
                {product.map((props) => (
                  <Product {...props} key={props.id} />
                ))}
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
};
