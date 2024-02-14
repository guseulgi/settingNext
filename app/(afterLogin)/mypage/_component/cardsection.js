"use client";

import { Card, FloatingLabel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function CardSection({ name, detail }) {
  return (
    <div className="w-1/2 h-full py-7 mx-auto border-[1px] border-gray-700 rounded-md">
      <div className="w-1/12 h-full bg-slate-600"> </div>
      <div className="flex flex-col items-center ">
        <div className=" mb-3 rounded-full shadow-lg relative">
          {/* <svg
            class="w-28 h-28 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12 20a8 8 0 0 1-5-1.8v-.6c0-1.8 1.5-3.3 3.3-3.3h3.4c1.8 0 3.3 1.5 3.3 3.3v.6a8 8 0 0 1-5 1.8ZM2 12a10 10 0 1 1 10 10A10 10 0 0 1 2 12Zm10-5a3.3 3.3 0 0 0-3.3 3.3c0 1.7 1.5 3.2 3.3 3.2 1.8 0 3.3-1.5 3.3-3.3C15.3 8.6 13.8 7 12 7Z"
              clip-rule="evenodd"
            />
          </svg> */}
          <Image
            alt="Bonnie image"
            height="96"
            src="/red.webp"
            width="96"
            className="mb-3 rounded-full shadow-lg"
          />

          <label for="file">
            <div className="w-6 h-4 text-[10px] pl-[2px] text-gray-200 bg-slate-400 rounded-xs absolute right-2 bottom-2">
              Edit
            </div>
          </label>
          <input
            type="file"
            name="file"
            id="file"
            className="hidden"
            accept=".jpeg, .jpg, .png"
          />
        </div>

        <h5 className="my-1 text-xl mb-4 font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 w-2/3">
          <FloatingLabel
            variant="standard"
            label="나의 설명을 적어주세요"
            sizing="sm"
            value={detail}
          />
        </span>

        <div className="w-2/3 flex space-x-3 justify-end mb-2">
          <Link
            href="/mypage/profile"
            color="blue"
            className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            수정
          </Link>
        </div>
      </div>
    </div>
  );
}
