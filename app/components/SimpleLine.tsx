import React from "react";

type Props = {};

function SimpleLine({}: Props) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      className="text-gray-400 opacity-70 py-2 pr-[2px] max-h-full"
      viewBox="0 0 21 50"
      width="21"
      height="95%"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 1L18 290"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      ></path>
    </svg>
  );
}

export default SimpleLine;
