"use client";

import { Badge, Sidebar } from "flowbite-react";
import { myPageMenu } from "../../../_variable/menu";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
    <Sidebar
      aria-label="Sidebar with call to action button example"
      className="border-[3px] border-slate-700 rounded-md"
    >
      <Sidebar.CTA className="mb-2 border-[1px] border-slate-700 rounded-md">
        <div className="mb-2 flex items-center">
          <Badge color="warning">오박사</Badge>
        </div>
        <div className="mb-1 text-sm text-cyan-900 dark:text-gray-400">
          포켓몬스터의 세계에 잘 왔단다!
        </div>
      </Sidebar.CTA>

      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {myPageMenu.map((item, idx) => (
            <Sidebar.Item
              className=""
              href={item.link}
              onClick={() => clickSidebar(idx)}
            >
              <div className="flex justify-start gap-2 items-center group-hover:-translate-y-1">
                <Image
                  src="/ball2.png"
                  alt="pokeball"
                  width="14"
                  height="14"
                  className="size-6 my-auto"
                />
                {item.title}
              </div>
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
