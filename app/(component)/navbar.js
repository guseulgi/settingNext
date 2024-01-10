import Link from "next/link";

const menu = [
  {
    name: "Home",
    href: "/main",
    alt: "메인으로",
  },
  {
    name: "Find",
    href: "/find",
    alt: "찾기",
  },
  {
    name: "Recommand",
    href: "/rcmd",
    alt: "추천하기",
  },
];

export default function Navbar() {
  return (
    <div className="h-14 bg-slate-950 rounded-md">
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
