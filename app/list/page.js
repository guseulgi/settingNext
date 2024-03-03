import { Breadcrumb } from "flowbite-react";
import Carousel from "../_component/carousel";

export default function AllList() {
  return (
    <>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item>몬콜레 시리즈</Breadcrumb.Item>
        <Breadcrumb.Item>New 몬콜레</Breadcrumb.Item>
      </Breadcrumb>
      <Carousel />

      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item>몬콜레 시리즈</Breadcrumb.Item>
        <Breadcrumb.Item>몬콜레 MS</Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item>몬콜레 시리즈</Breadcrumb.Item>
        <Breadcrumb.Item>몬콜레 MM </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item>몬콜레 시리즈</Breadcrumb.Item>
        <Breadcrumb.Item>몬콜레 ML </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
      >
        <Breadcrumb.Item>몬콜레 시리즈</Breadcrumb.Item>
        <Breadcrumb.Item>몬콜레 스폐셜</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
