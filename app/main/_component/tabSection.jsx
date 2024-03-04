"use client";

import { Tabs } from "flowbite-react";
import Image from "next/image";
import FirstTab from "./firstTab";
import SecondTab from "./secondTab";

export default function TabSection() {
  return (
    <Tabs aria-label="Pills" style="pills">
      <Tabs.Item active title="몬콜레는 무엇인가요?">
        <FirstTab />
      </Tabs.Item>
      <Tabs.Item title="몬콜레의 종류">
        <SecondTab />
      </Tabs.Item>
    </Tabs>
  );
}
