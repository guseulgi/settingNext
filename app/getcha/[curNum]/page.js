import ContentSection from "../_component/\bcontentSection";
import { fetchData } from "../_lib/fetching";

export default async function GetChaDetail({ params }) {
  console.log("param", params);
  const { curNum } = params;
  const data = await fetchData(parseInt(curNum));

  return (
    <>
      <ContentSection curData={data.props} />
    </>
  );
}
