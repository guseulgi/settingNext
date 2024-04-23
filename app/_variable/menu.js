export const menu = [
  {
    name: "공지사항",
    href: "/notice",
    alt: "공지사항",
  },
  {
    name: "몬콜레란?",
    href: "/main",
    alt: "몬콜레에 대한 설명",
  },
  {
    name: "목록",
    href: "/list",
    alt: "전체 리스트",
  },
  {
    name: "넌 내거야!",
    href: "/getcha",
    alt: "오늘의 포켓몬",
  },
  {
    name: "",
    href: "",
    alt: "",
  },
  {
    name: "마이페이지",
    href: "/mypage",
    alt: "마이페이지",
  },
];

export const myPageMenu = [
  {
    title: "관리자 페이지",
    link: "/admin/setting",
  },
  {
    title: "좋아요",
    link: "/mypage/likelist",
    svgcnt: 1,
  },
  { title: "개인정보수정", link: "/mypage/profile" },
  { title: "도움말", link: "/help" },
  { title: "로그아웃", link: "/" },
];

export const adminMenu = [
  {
    title: "사용자 목록",
    link: "/admin/user",
  },
  {
    title: "상품 목록",
    link: "/admin/product",
  },
  {
    title: "관리자 설정",
    link: "/admin/setting",
  },
];
