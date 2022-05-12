import React from "react";
import { IconProps } from "./IconProps";
// https://tabler-icons.io/i/sun
export default function Sun(props: IconProps) {
  return (
    <svg
      id="sun"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="sun"
    >
      <desc>
        Download more icon variants from https://tabler-icons.io/i/sun
      </desc>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle
        cx={12}
        cy={12}
        r={4}
        fill={props.className === "light" ? "yellow" : "none"}
      ></circle>
      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
    </svg>
  );
}
