import ContentSection from "./_component/\bcontentSection";

export default function Getcha() {
  const randNum = Math.round(parseInt(Math.random() * 897));

  return (
    <>
      <ContentSection curNum={randNum} />
    </>
  );
}
