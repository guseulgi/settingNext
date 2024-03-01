"use client";

import { Badge, Sidebar } from "flowbite-react";
import { myPageMenu } from "../../../_variable/menu";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SidebarSection() {
  const [mypageTab, setMypageTab] = useState(-1);
  const router = useRouter();

  const clickSidebar = (idx) => {
    setMypageTab(idx);

    if (idx === myPageMenu.length - 1) {
      const anw = confirm("로그아웃 하시겠습니까?");
      if (anw) {
        // 로그아웃 처리
      } else {
      }
    }
  };

  return (
    <div className=" bg-gray-50 md:flex-none md:border-[3px] md:border-slate-700 rounded-md">
      <div className="bg-gray-200 m-3 px-4 py-2 hidden md:block border-[1px] border-slate-700 rounded-md ">
        <div className="mb-2 flex items-center">
          <Badge color="warning">오박사</Badge>
        </div>
        <div className="mb-1 text-sm text-cyan-900 dark:text-gray-400">
          포켓몬스터의 세계에 잘 왔단다!
        </div>
      </div>

      <div className="flex justify-between md:block items-center py-2 px-6 rounded-sm ">
        {myPageMenu.map((item, idx) => {
          return (
            <Link
              href={item.link}
              onClick={() => clickSidebar(idx)}
              className="block py-2 md:pl-0 px-6 hover:bg-gray-200 hover:rounded-md duration-200"
            >
              <div className="flex justify-start gap-1 md:gap-2 px-2 items-center h-full">
                <Image
                  src="/ball2.png"
                  alt="pokeball"
                  width="14"
                  height="14"
                  className="size-6 md:my-auto"
                />
                {item.title}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
