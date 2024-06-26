import { Badge, Progress } from "flowbite-react";
import TextCarousel from "./textcarousel";
import { fetchData } from "../_lib/fetching";
import ButtonGroup from "./buttonGroup";

export default async function ContentSection({ curNum }) {
  const data = await fetchData(parseInt(curNum));

  const enpkname = data.props.data.name.toUpperCase();
  const pknum = data.props.data.id;
  const koname = data.props.koname;
  const type = data.props.type;
  const color = data.props.color;
  const detail = data.props.detail;

  return (
    <>
      <div className="flex gap-5 leading-5 mt-6 font-bold text-2xl">
        <span>
          {koname}({enpkname})
        </span>
      </div>

      <div className="my-3 mx-2 flex gap-2">
        {pknum && (
          <div className="inline-block">
            <Badge color="warning" size="sm">
              {pknum}
            </Badge>
          </div>
        )}
        {type && (
          <div className="inline-block">
            <Badge color={color} size="sm">
              {type}
            </Badge>
          </div>
        )}
      </div>

      <TextCarousel detailArr={detail} />

      <div className="w-1/3 h-5 mt-4 mx-auto">
        <Progress progress={(parseInt(curNum) / 897) * 100} color="gray" />
      </div>
      <ButtonGroup curNum={curNum} />
    </>
  );
}
