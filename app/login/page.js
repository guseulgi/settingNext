"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex flex-col items-center my-5 md:w-8/12 mx-auto">
      <h2 className="mx-auto text-2xl my-7 font-pixel">함께 놀자!</h2>

      <form className="flex flex-col gap-4 mb-2 w-1/2">
        <div className="block">
          <div className="flex items-center mb-2">
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
            id="email1"
            type="email"
            placeholder="email@xxxxx.com"
            required
            color="blue"
          />
        </div>

        <div className="block">
          <div className="mb-2">
            <Label htmlFor="password" value="비밀번호" />
          </div>
          <TextInput id="password1" type="password" required color="blue" />
        </div>

        <div className="flex items-center gap-2 mb-2">
          <Checkbox id="remember" color="blue" />
          <Label htmlFor="remember">로그인 정보 기억하기</Label>
        </div>
        <Button type="submit" color="blue">
          로그인
        </Button>
      </form>

      <div className="w-1/2 flex text-xs justify-around ">
        <div className="hover:font-bold">
          <Link href="/signin">회원가입</Link>
        </div>
        <div className="hover:font-bold">
          <Link href="/findpw">비밀번호를 잊으셨나요?</Link>
        </div>
      </div>
    </main>
  );
}
