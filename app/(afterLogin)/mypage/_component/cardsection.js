"use client";

import { FloatingLabel } from "flowbite-react";
import Image from "next/image";

export default function CardSection({ name, detail }) {
  const changeInfo = () => {
    const anw = confirm("내 정보를 수정하시겠습니까?");
    if (anw) {
      // 정보 수정
    } else {
    }
  };

  return (
    <div
      className="w-4/5 md:w-3/4 lg:w-2/3 h-2/3 mx-auto border-[3px] border-slate-700 rounded-md
     font-pixel"
    >
      <div className="w-full h-full border-l-[14px] border-r-[20px] border-slate-400">
        <div className="w-full h-full border-l-8 border-r-8 border-slate-400/80">
          <div className="w-full h-full py-8 px-10  border-l-4 border-r-4 border-slate-400/60">
            <div className="flex flex-col items-center ">
              <div className=" mb-3 rounded-full shadow-lg relative">
                <Image
                  alt="profile"
                  height="96"
                  src="/red.webp"
                  width="96"
                  className="rounded-full size-20 object-scale-down"
                />

                <label for="file">
                  <div className="w-6 h-4 text-[10px] pl-[2px] text-gray-200 bg-slate-400 rounded-xs absolute right-0 bottom-1 cursor-pointer">
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
                  label="당신의 설명을 적어주세요"
                  sizing="sm"
                  value={detail}
                />
              </span>

              <div className="w-2/3 flex gap-2 justify-end mb-2">
                <button
                  onClick={() => changeInfo()}
                  color="blue"
                  className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  수정
                  <svg
                    class="w-5 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.3 5.6A2 2 0 0 0 7 7v10a2 2 0 0 0 3.3 1.5l5.9-4.9a2 2 0 0 0 0-3l-6-5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
