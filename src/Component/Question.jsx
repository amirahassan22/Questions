import React, { useState } from "react";

export default function Question({ id, title, info }) {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <li className="text-start relative bg-white rounded my-10 p-4 shadow-md shadow-white">
      <h4 className="text-2xl font-serif font-medium my-1">{title}</h4>
      {isToggled ? <p className="text-sm tracking-widest pt-2">{info}</p> : ""}
      <a
        className="toggle absolute bg-yellow-400 w-9 h-9 flex justify-center items-center rounded-full cursor-pointer hover:bg-yellow-600"
        onClick={() => setIsToggled(!isToggled)}
      >
        {!isToggled ? (
          <svg
            className="w-6 h-6 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14m-7 7V5"
            />
          </svg>
        ) : (
          <svg
            class="w-6 h-6 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h14"
            />
          </svg>
        )}
      </a>
    </li>
  );
}
