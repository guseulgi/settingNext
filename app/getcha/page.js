import ContentSection from "./_component/\bcontentSection";
import { fetchData } from "./_lib/fetching";

export default async function Getcha() {
  const randNum = Math.round(parseInt(Math.random() * 1400));
  const data = await fetchData(randNum);

  // console.log("DaTA", data.props.data);

  return (
    <>
      <ContentSection curData={data.props} />
    </>
  );
}
