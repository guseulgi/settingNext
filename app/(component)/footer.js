import Image from "next/image";
import Link from "next/link";

const 소개 = [
  { 타이틀: "회사소개", 주소: "/" },
  { 타이틀: "이용약관", 주소: "/" },
  { 타이틀: "개인정보처리방침", 주소: "/" },
  { 타이틀: "이용안내", 주소: "/" },
  { 타이틀: "쇼핑몰", 주소: "/" },
];

export default function Footer() {
  return (
    <div className="bg-gray-100 mt-24 ">
      <div className="flex text-xs text-gray-400 justify-center py-8">
        {소개.map((소갯말, 인덱스) => {
          return (
            <Link key={소갯말.toString()} className="flex" href={소갯말.주소}>
              <p>{소갯말.타이틀}</p>
              {소개.length - 1 !== 인덱스 ? (
                <p className="w-[1px] h-3 my-auto mx-3 bg-gray-300"></p>
              ) : (
                <></>
              )}
            </Link>
          );
        })}
      </div>
      <div className="flex justify-around py-2">
        <p className="text-xs text-gray-400">
          Copyright© 구슬기. All rights reserved.
        </p>
        <Image src="/logo_2.png" width={120} height={50} />
      </div>
    </div>
  );
}
