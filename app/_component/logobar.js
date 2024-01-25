"use client";

import Image from "next/image";
import Button from "./button";
import SearchBar from "./searchbar";
import Link from "next/link";
import { useState } from "react";

const menu2 = [
  {
    name: "Home",
    href: "/main",
    alt: "메인으로",
  },
  {
    name: "List",
    href: "/list",
    alt: "전체 리스트",
  },
  {
    name: "Get cha!",
    href: "/getcha",
    alt: "오늘의 포켓몬",
  },
  {
    name: "",
    href: "",
    alt: "",
  },
  {
    name: "Notice",
    href: "/notice",
    alt: "공지사항",
  },
];

const loginButtonStlye =
  "cursor-pointer hover:-translate-y-1 hover:scale-100 scale-90 duration-100 mr-2 mt-2";
const loginButtonSize = { w: 28, h: 28 };

export default function Logobar() {
  const [block, setBlock] = useState(false);

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
              setBlock(!block);
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

      <div
        className={`${
          block ? "hidden" : "block"
        } md:hidden w-full" id="navbar-hamburger`}
      >
        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
