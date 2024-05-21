import { fetchSession } from "@/app/_util/session";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default async function Profile() {
  const session = await fetchSession();
  return (
    <>
      <form className="flex flex-col flex-1 items-center gap-3 ">
        <label className="text-xl">비밀번호변경</label>
        <div className="block w-1/2">
          <div className="mb-2">
            <Label htmlFor="nickname" value="닉네임" />
          </div>
          <TextInput
            id="nickname"
            type=""
            required
            addon="@"
            color="blue"
            value={session.payload.nickname}
          />
        </div>

        <div className="block w-1/2">
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
            value={session.payload.email}
            required
            color="blue"
            disabled
          />
          <div className="flex items-center gap-2 mt-2">
            {session.payload.is_email ? (
              <Checkbox id="remember" color="blue" checked />
            ) : (
              <Checkbox id="remember" color="blue" />
            )}
            <Label htmlFor="remember">이메일로 혜택을 받으시겠습니까?</Label>
          </div>
        </div>

        <div className="block w-1/2">
          <div className="mb-2">
            <Label htmlFor="password" value="비밀번호" />
          </div>
          <TextInput id="password1" type="password" required color="blue" />
        </div>

        <div className="block w-1/2">
          <div className="mb-2">
            <Label htmlFor="passwordcheck" value="비밀번호 확인" />
          </div>
          <TextInput id="password2" type="password" required color="blue" />
        </div>

        <Button type="submit" color="blue" className="w-1/2 mt-3">
          수정하기
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
        </Button>
      </form>
    </>
  );
}
