import { React, useContext } from "react";
import { ThemeContext } from "../../lightOrDark";

// https://tabler-icons.io/i/mail
export default function Email(props: React.SVGProps<SVGSVGElement>) {
  const { theme } = useContext(ThemeContext);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={theme}
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <desc>
        Download more icon variants from https://tabler-icons.io/i/mail
      </desc>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x={3} y={5} width={18} height={14} rx={2}></rect>
      <polyline points="3 7 12 13 21 7"></polyline>
    </svg>
  );
}
