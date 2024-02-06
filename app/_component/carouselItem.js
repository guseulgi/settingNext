import Image from "next/image";

const imageDummy = ["/slide3.jpeg", "/slide2.jpeg", "/slide1.jpeg"];

export default function CarouselItem({ imgSrc, size, curNum }) {
  if (!size) {
    size = {
      width: 300,
      height: 300,
    };
  }
  console.log(imgSrc, "???");

  return (
    <div className="relative w-full h-full">
      <div className="absolute bottom-[27%] right-[31%] z-10">
        <svg
          class="w-8 h-8 text-gray-800 dark:text-white"
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
            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
          />
        </svg>
      </div>

      <img
        src={imgSrc}
        width={size.width}
        height={size.height}
        className="absolute block -translate-x-1/2 left-1/2"
        alt="..."
      />
    </div>
  );
}
