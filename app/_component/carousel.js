"use client";

import Image from "next/image";
import { useState } from "react";

export default function Carousel() {
  const [curNum, setCurNum] = useState("0");

  const clickIndicator = (e) => {
    setCurNum(e.target.dataset.carouselslideto);
  };

  return (
    <div
      id="indicators-carousel"
      className="relative w-full mb-10"
      datacarousel="slide"
    >
      <div className="relative h-80 overflow-hidden rounded-lg md:h-96">
        <div className=" duration-700 ease-in-out" data-carousel-item="active">
          {curNum === "0" && (
            <Image
              src="/slide3.jpeg"
              width={300}
              height={300}
              className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          )}
          {curNum === "1" && (
            <Image
              src="/slide2.png"
              width={300}
              height={300}
              className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          )}
          {curNum === "2" && (
            <Image
              src="/slide1.png"
              width={300}
              height={300}
              className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          )}
        </div>
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-slate-950"
          aria-current="true"
          aria-label="Slide 1"
          data-carouselslideto="0"
          onClick={clickIndicator}
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-slate-950"
          aria-current="false"
          aria-label="Slide 2"
          data-carouselslideto="1"
          onClick={clickIndicator}
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-slate-950"
          aria-current="false"
          aria-label="Slide 3"
          data-carouselslideto="2"
          onClick={clickIndicator}
        ></button>
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        datacarouselprev
        onClick={() => {
          const tmp = parseInt(curNum) - 1;
          if (tmp < 0) setCurNum("2");
          else {
            setCurNum(tmp.toString());
          }
        }}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-950/70 dark:bg-slate-950/30 group-hover:bg-slate-950/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-slate-950 dark:group-focus:ring-slate-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        datacarouselnext
        onClick={() => {
          const tmp = parseInt(curNum) + 1;
          if (tmp > 2) setCurNum("0");
          else {
            setCurNum(tmp.toString());
          }
        }}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-950/70 dark:bg-slate-950/30 group-hover:bg-slate-950/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-slate-950 dark:group-focus:ring-slate-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
