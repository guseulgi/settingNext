import Modal from "@/app/_component/modal";

export default function NoticePage() {
  return (
    <Modal
      content="해당 페이지는 로그인이 필요합니다."
      yesA="로그인"
      noA="닫기"
    />
  );
}
