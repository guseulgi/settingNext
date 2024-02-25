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

              <div className="w-2/3 flex justify-between mb-2">
                <div className="flex gap-2 my-auto">
                  <div className="w-5 h-5  bg-yellow-300 rounded-full shadow-md">
                    <svg
                      class="w-4 h-4 m-auto -rotate-4 pt-1 text-gray-700 dark:text-white"
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
                        d="M8 17.3a5 5 0 0 0 2.6 1.7c2.2.6 4.5-.5 5-2.3.4-2-1.3-4-3.6-4.5-2.3-.6-4-2.7-3.5-4.5.5-1.9 2.7-3 5-2.3 1 .2 1.8.8 2.5 1.6m-3.9 12v2m0-18v2.2"
                      />
                    </svg>
                  </div>
                  <p className=" leading-5 ">9999</p>
                </div>
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
