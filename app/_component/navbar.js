import Link from "next/link";
import { menu } from "@/app/_variable/menu";

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
