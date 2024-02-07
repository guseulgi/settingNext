"use client";

import { Carousel } from "flowbite-react";

export default function TextCarousel({ detailArr }) {
  return (
    <Carousel indicators={false} className="h-20">
      {detailArr.map((detail, idx) => (
        <div
          key={idx}
          className="flex h-full items-center justify-center bg-gray-100 dark:bg-gray-700 dark:text-white"
        >
          {detail}
        </div>
      ))}
    </Carousel>
  );
}
