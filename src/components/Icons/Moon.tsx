// https://tabler-icons.io/i/moon
export default function Moon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
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
      aria-label="moon"
    >
      <desc>
        Download more icon variants from https://tabler-icons.io/i/moon
      </desc>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        fill={props.className === "dark" ? "lightgrey" : "none"}
        d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
      ></path>
    </svg>
  );
}
