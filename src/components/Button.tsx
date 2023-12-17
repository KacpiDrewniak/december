import React, { CSSProperties, MouseEventHandler } from "react";
import { ReactNode } from "react";

type ButtonType = {
  children: ReactNode;
  variant?: "solid" | "outline";
  classNames?: string;
  disabled?: boolean;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
export const Button = ({
  onClick,
  children,
  variant = "solid",
  classNames,
  disabled,
  style,
}: ButtonType) => {
  const variantClassName = {
    solid: "bg-green-600 text-white hover:bg-green-900",
    outline:
      "text-typography900 border border-typography600 hover:bg-typography500 bg-typography200",
  }[variant];

  const className = `transition-all disabled:opacity-[0.35] rounded-xl w-full py-3 px-6 button flex flex-row gap-[10px] items-center justify-center ${variantClassName} ${classNames}`;

  return (
    <button
      onClick={onClick}
      style={style}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
};
