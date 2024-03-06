"use client";

import { Button, Checkbox, Label, TextInput, Toast } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";

export default function FindTabSection() {
  return (
    <form className="flex flex-col gap-6 my-5">
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
        <TextInput
          id="email"
          type="email"
          placeholder="email@xxxxx.com"
          required
          color="blue"
        />
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
            <path
              fill-rule="evenodd"
              d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6c.6 0 1 .4 1 1v3a1 1 0 1 1-2 0v-3c0-.6.4-1 1-1Z"
              clip-rule="evenodd"
            />
          </svg>
          <Label htmlFor="password" value="비밀번호" />
        </div>
        <TextInput
          id="password1"
          type="password"
          required
          shadow
          color="blue"
        />
      </div>

      <div className="w-1/2 md:w-1/3 items-center mx-auto">
        <Button type="submit" className="w-full" color="blue">
          내 정보를 찾습니다
        </Button>
      </div>
    </form>
  );
}
