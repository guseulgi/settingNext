import Link from "next/link";
import LoginSection from "./_component/LoginSection.jsx";

export default function Login() {
  return (
    <main className="flex flex-col items-center my-5 md:w-8/12 mx-auto">
      <h2 className="mx-auto text-2xl my-7 font-pixel">함께 놀자!</h2>

      <LoginSection />
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
