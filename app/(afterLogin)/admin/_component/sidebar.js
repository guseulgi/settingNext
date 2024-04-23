"use client";

import { adminMenu } from "../../../_variable/menu";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SidebarSection() {
  const [mypageTab, setMypageTab] = useState(-1);
  const router = useRouter();

  const clickSidebar = (idx) => {
    setMypageTab(idx);
  };

  return (
    <div className="w-[25%] bg-gray-50 md:flex-none md:border-[3px] md:border-slate-700 rounded-md">
      <div className="bg-gray-200 mt-3 mx-3 px-4 py-2 hidden md:block border-[1px] border-slate-700 rounded-md ">
        <div className="flex items-center">XXX 님 어서오세요</div>
      </div>

      <div className="flex justify-between md:block items-center py-2 px-6 rounded-sm ">
        {adminMenu.map((item, idx) => {
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
