import React from "react";

/**
 * @color color of svg (can be hexcolor or rgb/rgba)
 * @size spinner size (px)
//  */

export interface SpinnerProps {
  color: string;
  size: number;
}

const Spinner: React.FC<SpinnerProps> = ({ color, size }) => {
  return (
    <svg
      className="animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      width={size}
    >
      <path
        fill={color}
        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
      ></path>
    </svg>
  );
};

export default Spinner;
