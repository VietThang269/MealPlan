import React from "react";

const IconProducts = ({ active }) => {
  return (
    <svg
      stroke={active ? "rgb(34, 139, 230)" : "#000"}
      fill="none"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1={3} y1={6} x2={21} y2={6} />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
};

export default IconProducts;
