import { menu } from "@/app/_variable/menu";
import Link from "next/link";

export default function ModbileNavbar({ block }) {
  return (
    <div
      className={`${
        block ? "hidden" : "block"
      } md:hidden mb-10 w-full" id="navbar-hamburger`}
    >
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        {menu.map((item, idx) => {
          if (idx !== menu.length - 1 && item.href !== "") {
            return (
              <Link href={item.href} key={idx}>
                <li className="font-bold text-slate-950 text-center rounded-lg duration-100 leading-[3.5rem] hover:text-white hover:bg-slate-950 h-full">
                  {item.name}
                </li>
                <hr />
              </Link>
            );
          } else {
            return (
              <Link href={item.href} key={idx}>
                <li className="font-bold text-slate-950 text-center rounded-lg duration-100 leading-[3.5rem] hover:text-white hover:bg-slate-950 h-full">
                  {item.name}
                </li>
              </Link>
            );
          }
        })}
      </ul>
    </div>
  );
}
