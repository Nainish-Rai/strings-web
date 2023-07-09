import React from "react";

type Props = {};

function SimpleLine({}: Props) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="200"
      viewBox="0 0 21 200"
      width="21"
      className="h-full text-gray-400 w-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 1L18 53"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></path>
    </svg>
  );
}

export default SimpleLine;
