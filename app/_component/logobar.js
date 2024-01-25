"use client";

import Image from "next/image";
import Button from "./button";
import SearchBar from "./searchbar";
import { useState } from "react";
import ModbileNavbar from "./mobileNavbar";

const loginButtonStlye =
  "cursor-pointer hover:-translate-y-1 hover:scale-100 scale-90 duration-100 mr-2 mt-2";
const loginButtonSize = { w: 28, h: 28 };

export default function Logobar() {
  const [isBlock, setIsBlock] = useState(false);

  return (
    <>
      <div className="my-4 flex justify-between">
        <div className="flex">
          <button
            datacollapsetoggle="navbar-hamburger"
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
            onClick={() => {
              setIsBlock(!isBlock);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <Image
            src="/moncolle.png"
            width={140}
            height={30}
            alt="몬콜레 로고"
            style={{ width: "140px" }}
          />
        </div>

        <div className="flex">
          <SearchBar />
          <Button
            // title="Login"
            path="/PokeBall.png"
            size={loginButtonSize}
            imgStyle={loginButtonStlye}
            href="/login"
          />
        </div>
      </div>

      <ModbileNavbar block={isBlock} />
    </>
  );
}
