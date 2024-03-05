"use client";

import { Accordion } from "flowbite-react";

export default function Arrcordian() {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>결제</Accordion.Title>
        <Accordion.Content>
          <p>첫 번째 </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>계정</Accordion.Title>
        <Accordion.Content>
          <p>두 번째 </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>저작권</Accordion.Title>
        <Accordion.Content>
          <p>세 번째 </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
