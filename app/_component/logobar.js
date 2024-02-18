"use client";

import Image from "next/image";
import Button from "./button";
import SearchBar from "./searchbar";
import { useState } from "react";
import ModbileNavbar from "./mobileNavbar";
import Link from "next/link";

const loginButtonStlye =
  "cursor-pointer hover:-translate-y-1 hover:scale-100 scale-90 duration-100 m-auto";
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

          <Link href="/" style={{ width: "140px" }}>
            <Image
              src="/moncolle.png"
              width={140}
              height={30}
              alt="몬콜레 로고"
            />
          </Link>
        </div>

        <div className="flex gap-2">
          <SearchBar />
          <Button
            // title="Login"
            path="/PokeBall.png"
            size={loginButtonSize}
            imgStyle={loginButtonStlye}
            href="/login"
          />
          <Link
            href="/mypage/likelist"
            className="border-[1px] border-white hover:border-slate-300 rounded-full m-auto p-1 hover:rotate-3"
          >
            <svg
              class="w-6 h-6 text-blue-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M4 4c0-.6.4-1 1-1h1.5c.5 0 .9.3 1 .8L7.9 6H19a1 1 0 0 1 1 1.2l-1.3 6a1 1 0 0 1-1 .8h-8l.2 1H17a3 3 0 1 1-2.8 2h-2.4a3 3 0 1 1-4-1.8L5.7 5H5a1 1 0 0 1-1-1Z"
                clip-rule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>

      <ModbileNavbar block={isBlock} />
    </>
  );
}
