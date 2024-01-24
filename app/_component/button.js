"use client";

import Image from "next/image";
import Link from "next/link";

export default function Button({ title, path, size, imgStyle, href }) {
  return (
    <Link className="flex" href={href}>
      {title && <span className="leading-10 text-xs mr-1">{title}</span>}
      <Image
        src={path}
        width={size.w}
        height={size.h}
        className={imgStyle}
        alt={title && ""}
        style={{ height: size.h + "px" }}
      />
    </Link>
  );
}
