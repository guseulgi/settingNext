"use client";

import { Carousel } from "flowbite-react";

export default function TextCarousel({ detailArr }) {
  const timing = 3000;

  return (
    <Carousel indicators={false} slideInterval={timing} className="h-20">
      {detailArr.map((detail, idx) => (
        <div
          key={idx}
          className="flex h-full md:px-5 px-24 items-center justify-center bg-gray-100 dark:bg-gray-700 dark:text-white"
        >
          {detail}
        </div>
      ))}
    </Carousel>
  );
}
