"use client";

import { useState } from "react";
import CloseButton from "./closeButton";
import { useRouter } from "next/navigation";

export default function Modal({ content, noA, yesA }) {
  const [close, setClose] = useState("flex");
  const router = useRouter();

  const loginRedirect = () => {
    router.replace("/login");
  };

  const CloseModal = () => {
    setClose("hidden");
  };

  return (
    <div
      id="popup-modal"
      tabindex="-1"
      className={` ${close} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <CloseButton sort="modal" onClick={CloseModal} />
          <div className="p-4 md:p-5 text-center">
            <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {content}
            </h3>

            {yesA && (
              <button
                dataModalHide="popup-modal"
                onClick={loginRedirect}
                type="button"
                className=" text-gray-500 mr-5 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                {yesA}
              </button>
            )}

            <button
              dataModalHide="popup-modal"
              onClick={CloseModal}
              type="button"
              className=" text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              {noA}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
