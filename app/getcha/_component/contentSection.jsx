"use client";

import { Badge } from "flowbite-react";
import ArrowButton from "./arrowButton";
import TextCarousel from "./textcarousel";

export default function ContentSection({ curData }) {
  const enpkname = curData.data.name.toUpperCase();
  const pknum = curData.data.id;
  const koname = curData.koname;
  const type = curData.type;
  const color = curData.color;
  const detail = curData.detail;

  return (
    <>
      <div className="flex gap-5 leading-5 mt-5 font-bold text-2xl">
        <ArrowButton type="prev">
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
        <span>
          {koname}({enpkname})
        </span>
        <ArrowButton type="next">
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
      </div>

      <div className="my-2 mx-2 flex gap-2">
        {pknum && (
          <div className="inline-block">
            <Badge color="warning" size="sm">
              {pknum}
            </Badge>
          </div>
        )}
        {type && (
          <div className="inline-block">
            <Badge color={color} size="sm">
              {type}
            </Badge>
          </div>
        )}
      </div>

      <TextCarousel detailArr={detail} />
    </>
  );
}
