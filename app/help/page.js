import { Button, FloatingLabel } from "flowbite-react";
import Arrcordian from "./_component/arrcodian";

export default function HelpPage() {
  return (
    <>
      <form className="flex flex-col items-center gap-5">
        <h3 className=" text-2xl">무엇을 도와드릴까요?</h3>
        <div className="flex justify-between gap-2 w-1/2">
          <div className="flex-1">
            <FloatingLabel
              variant="filled"
              name="q"
              label="질문을 입력해주세요"
            />
          </div>
          <Button type="text" color="blue" className="m-2">
            검색
          </Button>
        </div>
      </form>
      <div className="mx-20 my-8">
        <Arrcordian />
      </div>
    </>
  );
}
