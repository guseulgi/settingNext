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
  {
    name: "",
    href: "",
    alt: "",
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
    <nav className="h-14 bg-slate-950 dark:bg-white rounded-md mb-7">
      <ul className="flex h-full">
        {menu.map((item, idx) => {
          if (item.href !== "") {
            // if (menu.length - 1 === idx) {
            //   return (
            //     <Link href={item.href} key={idx}>
            //       <li
            //         className="font-bold text-slate-600 text-center mx-10 leading-[3.5rem] hover:text-white h-full"
            //         data-modal-target="popup-modal"
            //         data-modal-toggle="popup-modal"
            //         class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            //       >
            //         {item.name}
            //       </li>
            //     </Link>
            //   );
            // } else
            return (
              <Link href={item.href} key={idx}>
                <li className="font-bold text-slate-600 text-center mx-10 leading-[3.5rem] hover:text-white h-full">
                  {item.name}
                </li>
              </Link>
            );
          } else return <div key={idx} className="w-[15%]"></div>;
        })}
      </ul>
    </nav>
  );
}
