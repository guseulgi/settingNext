import ContentSection from "../_component/\bcontentSection";

export default function GetChaDetail({ params }) {
  const { curNum } = params;

  return (
    <>
      <ContentSection curNum={curNum} />
    </>
  );
}
