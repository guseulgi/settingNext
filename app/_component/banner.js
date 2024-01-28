"use client";

import Link from "next/link";
import CloseButton from "./closeButton";
import { useState } from "react";

export default function PopBanner() {
  const [close, setClose] = useState("fixed");

  const CloseBanner = () => {
    setClose("hidden");
  };

  return (
    <div
      id="marketing-banner"
      tabindex="-1"
      className={`${close} z-50 flex flex-row justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 top-6 dark:bg-gray-700 dark:border-gray-600`}
    >
      <div
        href="https://flowbite.com/"
        className="hidden md:flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:border-e md:mb-0 dark:border-gray-600"
      >
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 21"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM1.866 8.832a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z"
          />
        </svg>
      </div>
      <p className="flex flex-1 items-center text-sm font-normal text-gray-500 dark:text-gray-400">
        포켓몬스터 썬&문 종방 기념! 새로운 몬콜레 시리즈 출시!
      </p>
      <div className="flex items-center justify-end">
        <Link
          href="/shop"
          className="px-5 py-2 me-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Buy Now!
        </Link>
        <CloseButton sort="banner" onClick={CloseBanner} />
      </div>
    </div>
  );
}
