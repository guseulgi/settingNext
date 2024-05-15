"use client";

import { fetchLogin } from "@/app/_util/login";
import { Button, ToggleSwitch, Label } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setIsEmail] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem("USEREMAIL")) {
      setIsEmail(true);
      setEmail(localStorage.getItem("USEREMAIL"));
    }
  }, []);

  useEffect(() => {
    if (isEmail == false) {
      localStorage.removeItem("USEREMAIL");
    } else {
      localStorage.setItem("USEREMAIL", email);
    }
  }, [isEmail]);

  const handleLogin = async () => {
    const result = await fetchLogin(email, password);

    if (result.success) {
      alert("로그인 성공");
      if (isEmail === true) {
        localStorage.setItem("USEREMAIL", email);
      }

      router.push("/mypage");
    } else {
      // 실패 시
      alert(result.payload.message);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 mb-2 w-1/2">
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
          <input
            id="email1"
            type="email"
            placeholder="email@xxxxx.com"
            required
            value={email}
            onChange={handleEmail}
            className="w-full rounded-md"
          />
        </div>

        <div className="block">
          <div className="flex items-center mb-2">
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
          <input
            id="password1"
            type="password"
            required
            value={password}
            onChange={handlePassword}
            className="w-full rounded-md"
          />
        </div>

        <div className="flex items-center gap-2 mb-2">
          <ToggleSwitch
            id="remember"
            color="blue"
            checked={isEmail}
            onChange={setIsEmail}
          />
          <Label htmlFor="remember">로그인 정보 기억하기</Label>
        </div>
        <Button type="submit" color="blue" onClick={handleLogin}>
          로그인
        </Button>
      </div>
    </>
  );
}
