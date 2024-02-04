"use client";

import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";

const errMsg = ["Only input english", "Do not blink this field"];

// TODO 비밀번호 유효성
export default function Signin() {
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [checkPw, setCheckPw] = useState("");
  const [inputPw, setInputPw] = useState("");

  const inputName = (e) => {
    if (e.target.value === "") setName(errMsg[1]);
    else setName("");
  };

  const cofirmPw = (e) => {
    if (e.target.value !== "") setPw(e.target.value);

    if (pw === checkPw) setInputPw("Password is collected");
    else setInputPw("Password is not collected");
  };

  const cofirmCheckPw = (e) => {
    if (e.target.value !== "") setCheckPw(e.target.value);

    if (pw === checkPw) setInputPw("Password is collected");
    else setInputPw("Password is not collected");
  };

  return (
    <form className="flex flex-col gap-6 my-5">
      <h2 className="mx-auto text-2xl mt-6 mb-3">Register, play with us!</h2>
      <div className="w-1/2 md:w-1/3 items-center mx-auto">
        <div className="mb-2 block ">
          <Label htmlFor="username" value="Username" />
        </div>
        <TextInput
          id="username"
          placeholder="pokemon"
          addon="@"
          required
          onChange={inputName}
        />
        <Label value={name} className="text-red-500" />
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
          <Label htmlFor="email" value="Email" />
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
        <div className="mb-2 block">
          <Label htmlFor="password" value="Password" />
        </div>
        <TextInput
          id="password1"
          type="password"
          required
          shadow
          color="blue"
          onChange={cofirmPw}
        />
      </div>

      <div className="w-1/2 md:w-1/3 items-center mx-auto">
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repeat password" />
        </div>
        <TextInput
          id="repeat-password"
          type="password"
          required
          shadow
          color="blue"
          onChange={cofirmCheckPw}
        />
        <Label value={inputPw} className="text-red-500" />

        <div className="flex items-center gap-2 mt-1">
          <Checkbox id="agree" color="blue" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link
              href="#"
              className="text-blue-700 hover:underline dark:text-blue-800"
            >
              terms and conditions
            </Link>
          </Label>
        </div>
      </div>

      <div className="w-1/2 md:w-1/3 items-center mx-auto">
        <Button type="submit" className="w-full" color="blue">
          Register new account
        </Button>
      </div>
    </form>
  );
}
