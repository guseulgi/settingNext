"use client";

import { Label, Checkbox } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Toast } from "flowbite-react";
import { HiFire } from "react-icons/hi";
import { isKorean } from "@/utils/regex";
import { useRouter } from "next/navigation";

const domainOption = [
  { name: "gmail.com", value: "gmail.com" },
  { name: "naver.com", value: "naver.com" },
  { name: "daum.net", value: "daum.net" },
  { name: "custom", value: "직접 입력" },
];

export default function SigninSection() {
  const router = useRouter();

  // 이름
  const [nickname, setNickName] = useState("");

  // 이메일
  const [email, setEmail] = useState("");
  const [isDomain, setIsDomain] = useState(false);
  const [domain, setDomain] = useState("");
  const [customDomain, setCustomDomain] = useState("");

  // 비밀번호
  const [password, setPassword] = useState("");
  const [checkPw, setCheckPw] = useState("");
  const [inputPw, setInputPw] = useState("비밀번호를 입력해주세요.");

  // 수신 혜택 여부
  const [isEmail, setIsEmail] = useState(false);

  // 이름 핸들러
  const inputName = (e) => {
    if (e.nativeEvent.data && isKorean(e.nativeEvent.data)) {
      e.preventDefault();
      return;
    }

    setNickName(e.target.value);
  };

  // 이메일 핸들러
  const inputEmail = (e) => {
    if (e.nativeEvent.data && isKorean(e.nativeEvent.data)) {
      e.preventDefault();
      return;
    }

    setEmail(e.target.value);
    setDomain(domainOption[0].name);
  };

  // 비밀번호 일치 여부
  useEffect(() => {
    if (password === "" || checkPw === "") return;

    if (password !== checkPw) setInputPw("비밀번호가 같지 않습니다.");
    else setInputPw("비밀번호가 같습니다.");
  }, [password, checkPw]);

  // 이메일 도메인 설정
  const handleOpt = (e) => {
    setDomain(e.target.value);
    setIsDomain(false);
    if (e.target.value === "custom") {
      setIsDomain(true);
      setDomain(customDomain);
    }
  };

  // 회원가입 처리
  const handleSignup = async () => {
    const emailAddDomain = email + "@" + domain;
    const ie = isEmail ? "T" : "F";

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_URL}/api/users/${email}`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_info: {
            email: emailAddDomain,
            password: password,
            nickname: nickname,
            is_email: ie,
          },
        }),
      }
    );

    const result = await response.json();
    if (result.success) {
      alert(`회원가입 성공!`);
      router.replace("/login");
    } else {
      alert(`회원가입 실패 - ${result.payload.message}`);
    }
  };

  return (
    <div className="flex flex-col gap-6 my-5">
      <h2 className="mx-auto text-2xl mt-6 mb-3 font-pixel">
        지금 가입하면 다양한 헤택이!
      </h2>

      {/* 안내문 */}
      <div className="flex justify-around gap-4 mx-20 font-pixel">
        <Toast>
          <HiFire className="h-5 w-5 text-cyan-300 dark:text-cyan-500" />
          <div className="pl-4 text-sm font-normal">몬콜레 지원금 2,000원</div>
        </Toast>
        <Toast>
          <HiFire className="h-5 w-5 text-cyan-500 dark:text-cyan-500" />
          <div className="pl-4 text-sm font-normal">등급에 따른 할인</div>
        </Toast>
        <Toast>
          <HiFire className="h-5 w-5 text-cyan-700 dark:text-cyan-500" />
          <div className="pl-4 text-sm font-normal">포인트 적립과 쿠폰까지</div>
        </Toast>
      </div>

      {/* Input Section */}
      <div className="w-1/2 md:w-1/3 items-center mx-auto">
        <div className="mb-2 flex items-center ">
          <svg
            class="w-5 h-5 mr-1 text-gray-500 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M15.5 3.3a1 1 0 0 0-1.4 0l-2 2h.1l6.5 6.5 2-1.9c.4-.4.4-1 0-1.4l-5.2-5.2ZM7 8.3l3.9-1.5 6.3 6.3-1.5 3.9a1 1 0 0 1-.6.6l-9.5 3.3a1 1 0 0 1-1-.1l6.5-6.5A1 1 0 0 0 9.7 13l-6.5 6.4a1 1 0 0 1-.1-1L6.4 9c.1-.3.3-.5.6-.6Z"
              clip-rule="evenodd"
            />
          </svg>
          <Label htmlFor="username" value="닉네임" />
        </div>
        <input
          id="username"
          placeholder="pokemon"
          required
          value={nickname}
          onChange={inputName}
          className="border-[1px] border-gray-600 px-4 py-2 rounded-md w-full"
        />
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
        <input
          id="email"
          type="text"
          placeholder="email"
          required
          value={email}
          onChange={inputEmail}
          className="border-[1px] border-gray-600 px-4 py-2 rounded-md w-1/2"
        />
        <span className="px-2"> @ </span>
        <select className="rounded-md" onChange={handleOpt}>
          {domainOption.map((opt) => (
            <option name={opt.name} value={opt.name}>
              {opt.value}
            </option>
          ))}
        </select>

        {isDomain && (
          <input
            placeholder="domain"
            onChange={(e) => setCustomDomain(e.target.value)}
            className="border-[1px] border-gray-600 px-4 py-2 rounded-md w-full mt-2"
          />
        )}
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
        <input
          id="password1"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-[1px] border-gray-600 px-4 py-2 rounded-md w-full"
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
              d="M10 5a2 2 0 0 0-2 2v3h2.4a7.5 7.5 0 0 0 0 11H5a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2h1V7a4 4 0 1 1 8 0v1.2c-.7 0-1.3.3-2 .6V7a2 2 0 0 0-2-2Z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M10 15.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Zm6.5-1.5a1 1 0 1 0-2 0v1.5c0 .3.1.5.3.7l1 1a1 1 0 0 0 1.4-1.4l-.7-.7V14Z"
              clip-rule="evenodd"
            />
          </svg>
          <Label htmlFor="repeat-password" value="비밀번호 확인" />
        </div>
        <input
          id="repeat-password"
          type="password"
          required
          value={checkPw}
          onChange={(e) => setCheckPw(e.target.value)}
          className="border-[1px] border-gray-600 px-4 py-2 rounded-md w-full"
        />
        <Label value={inputPw} className="text-red-500 mb-2" />

        <div className="flex items-center gap-2 mt-2">
          <Checkbox
            id="agree"
            color="blue"
            value={isEmail}
            onChange={() => setIsEmail(!agree)}
          />
          <Label htmlFor="agree" className="flex">
            헤택을 담은&nbsp;
            <Link
              href="#"
              className="text-blue-700 hover:underline dark:text-blue-800"
            >
              이메일 수신
            </Link>
            을 동의합니다.
          </Label>
        </div>
      </div>

      <div className="w-1/2 md:w-1/3 items-center mx-auto">
        <button className="w-full" onClick={handleSignup}>
          가입을 완료합니다
        </button>
      </div>
    </div>
  );
}
