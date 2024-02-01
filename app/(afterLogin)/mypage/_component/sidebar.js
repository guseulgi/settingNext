"use client";

import { Badge, Sidebar } from "flowbite-react";
import { myPageMenu } from "../../../_variable/menu";
import { useState } from "react";

export default function SidebarSection() {
  const [mypageTab, setMypageTab] = useState();

  return (
    <Sidebar aria-label="Sidebar with call to action button example">
      <Sidebar.CTA className="mb-2">
        <div className="mb-2 flex items-center">
          <Badge color="warning">공지</Badge>
        </div>
        <div className="mb-1 text-sm text-cyan-900 dark:text-gray-400">
          포켓몬스터! 몬스터콜렉션 테스팅 사이트에 오신 것을 환영합니다.
        </div>
      </Sidebar.CTA>

      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {myPageMenu.map((item) => (
            <Sidebar.Item href={item.link}>{item.title}</Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
