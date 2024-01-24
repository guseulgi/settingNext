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
      className={`${close} z-50 flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 top-6 dark:bg-gray-700 dark:border-gray-600`}
    >
      <div className="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
        <a
          href="https://flowbite.com/"
          className="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:border-e md:mb-0 dark:border-gray-600"
        >
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 me-2" alt="Flowbite Logo"> */}
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
            Moncolle
          </span>
        </a>
        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
          포켓몬스터 썬&문 종방 기념! 새로운 몬콜레 시리즈 출시!
        </p>
      </div>
      <div className="flex items-center flex-shrink-0">
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
