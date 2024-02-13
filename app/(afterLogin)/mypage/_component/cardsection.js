"use client";

import { FileInput, Card, Label } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function CardSection({ name, detail }) {
  return (
    <Card className="max-w-sm">
      <div className="flex flex-col items-center pb-10 ">
        {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
        <div className=" mb-3 rounded-full shadow-lg">
          <svg
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
          </svg>
        </div>

        <h5 className="my-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {detail || "나의 설명을 적어주세요."}
        </span>

        <div className="mt-4 flex space-x-3 lg:mt-6 justify-center">
          <div className="w-2/3">
            <FileInput id="default-file-upload" sizing="sm" />
          </div>
          <Link
            href="/mypage/profile"
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-1 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            수정
          </Link>
        </div>
      </div>
    </Card>
  );
}
