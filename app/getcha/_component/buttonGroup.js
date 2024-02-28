"use client";

import { Tooltip } from "flowbite-react";
import ArrowButton from "./arrowButton";
import { copyURL } from "../_lib/buttonEvent";
import SearchBar from "@/app/_component/searchbar";
import { useRouter } from "next/navigation";
import { Popover } from "flowbite";

export default function ButtonGroup({ curNum }) {
  const searchPokemon = (value) => {
    const router = useRouter();

    router.replace(`/getcha/${value}`);
  };

  return (
    <div className="flex justify-center gap-6 my-5">
      <Tooltip
        content={`이전으로(${curNum - 1})`}
        placement="bottom"
        style="dark"
      >
        <ArrowButton type="prev" curNum={curNum}>
          <svg
            class="w-7 h-7 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M13.7 5.6A2 2 0 0 1 17 7v10a2 2 0 0 1-3.3 1.5l-5.9-4.9a2 2 0 0 1 0-3l6-5Z"
              clip-rule="evenodd"
            />
          </svg>
        </ArrowButton>
      </Tooltip>

      <Tooltip content="링크 복사" placement="bottom" style="dark">
        <div onClick={copyURL} className="cursor-pointer">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.2 9.8a3.4 3.4 0 0 0-4.8 0L5 13.2A3.4 3.4 0 0 0 9.8 18l.3-.3m-.3-4.5a3.4 3.4 0 0 0 4.8 0L18 9.8A3.4 3.4 0 0 0 13.2 5l-1 1"
            />
          </svg>
        </div>
      </Tooltip>
      <Tooltip content="검색하기" placement="bottom" style="dark">
        <div onClick={searchPokemon} className="cursor-pointer">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
          <Popover aria-labelledby="profile-popover" content={<></>}></Popover>
        </div>
      </Tooltip>
      <Tooltip content="공유하기" placement="bottom" style="dark">
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="m8 10.9 7-3.2m-7 5.4 7 3.2M8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
          />
        </svg>
      </Tooltip>
      <Tooltip content="저장하기" placement="bottom" style="dark">
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1h-2M8 9l4-5 4 5m1 8h0"
          />
        </svg>
      </Tooltip>

      <Tooltip
        content={`다음으로(${parseInt(curNum) + 1})`}
        placement="bottom"
        style="dark"
      >
        <ArrowButton type="next" curNum={curNum}>
          <svg
            class="w-7 h-7 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M10.3 5.6A2 2 0 0 0 7 7v10a2 2 0 0 0 3.3 1.5l5.9-4.9a2 2 0 0 0 0-3l-6-5Z"
              clip-rule="evenodd"
            />
          </svg>
        </ArrowButton>
      </Tooltip>
    </div>
  );
}
