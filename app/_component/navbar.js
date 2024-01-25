import Link from "next/link";

export const menu = [
  {
    name: "Home",
    href: "/main",
    alt: "메인으로",
  },
  {
    name: "List",
    href: "/list",
    alt: "전체 리스트",
  },
  {
    name: "Get cha!",
    href: "/getcha",
    alt: "오늘의 포켓몬",
  },
  {
    name: "",
    href: "",
    alt: "",
  },
  {
    name: "Notice",
    href: "/notice",
    alt: "공지사항",
  },
];

export default function Navbar() {
  return (
    <nav className="hidden md:block h-14 bg-slate-950 dark:bg-white rounded-md mb-7">
      <ul className="flex h-full">
        {menu.map((item, idx) => {
          if (item.href !== "") {
            return (
              <Link href={item.href} key={idx}>
                <li className="font-bold text-slate-600 text-center mx-10 leading-[3.5rem] hover:text-white h-full">
                  {item.name}
                </li>
              </Link>
            );
          } else return <div key={idx} className="flex-grow"></div>;
        })}
      </ul>
    </nav>
  );
}
