import Link from "next/link";

const menu = [
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
];

export default function Navbar() {
  return (
    <div className="h-14 bg-slate-950 rounded-md mb-7">
      <ul className="flex h-full">
        {menu.map((item, idx) => {
          return (
            <Link href={item.href} key={idx}>
              <li className="font-bold text-slate-600 text-center mx-10 leading-[3.5rem] hover:text-white h-full">
                {item.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
