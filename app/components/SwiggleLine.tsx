import React from "react";

type Props = {};

function SwiggleLine({}: Props) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 21 185"
      className="text-gray-300  py-1 pr-[2px]"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 1L18 160"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.7"
      ></path>
      <path
        d="M18 174C18 160 4 160 4 167.12777C4 174.2555 18 174.9513 18 160"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="0.7"
      ></path>
      <path
        d="M18 174L18 184"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.7"
      ></path>
    </svg>
  );
}

export default SwiggleLine;
