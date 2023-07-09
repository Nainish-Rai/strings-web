import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div>
      page
      <div className="border h-96 ">
        <svg
          className=" h-full"
          aria-hidden="true"
          fill="none"
          height="432"
          viewBox="0 0 21 432"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 1L18 407"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></path>
          <path
            d="M18 421C18 407 4 407 4 414.12777C4 421.2555 18 421.9513 18 407"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
          ></path>
          <path
            d="M18 421L18 431"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default page;
