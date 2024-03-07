"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";

export default function FindTabSection() {
  const [isSend, setIsSend] = useState(false);

  return (
    <form className="mt-10 flex flex-col gap-6">
      <div className="mx-auto text-xl border-b-[1px] border-gray-400 pb-1">
        비밀번호 찾기
      </div>

      <div className="w-1/2 md:w-1/3 items-center mx-auto">
        <div className="mb-2 flex items-center">
          <svg
            class="w-3.5 h-3.5 mr-2 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
          </svg>
          <Label htmlFor="email" value="이메일" />
        </div>
        <div className="flex gap-2">
          <TextInput
            id="email"
            type="email"
            placeholder="email@xxxxx.com"
            required
            color="blue"
            className="flex-1"
          />
          <Button type="submit" color="blue" onClick={() => setIsSend(true)}>
            인증 메일 보내기
          </Button>
        </div>
      </div>

      <div className="w-1/2 md:w-1/3 items-center mx-auto">
        <div className="mb-2 flex items-center">
          <svg
            class="w-5 h-5 mr-1 text-gray-500 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.5a6 6 0 0 1 1.5 4v4a1 1 0 1 1-2 0v-4a4 4 0 0 0-4-4h-.5C5 6 3 8 3 10.5V16c0 .6.4 1 1 1h7v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h5c.6 0 1-.4 1-1v-6a4 4 0 0 0-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z" />
          </svg>
          <Label htmlFor="email" value="인증번호" />
        </div>
        {isSend ? (
          <TextInput
            id="number"
            type="number"
            placeholder="인증번호 입력"
            required
            color="blue"
          />
        ) : (
          <TextInput
            id="number"
            type="number"
            placeholder="인증번호 입력"
            required
            color="blue"
            disabled
          />
        )}
      </div>

      <div className="w-1/2 md:w-1/3 items-center mx-auto">
        <Button type="submit" className="w-full" color="blue">
          인증번호 제출
        </Button>
      </div>
    </form>
  );
}
