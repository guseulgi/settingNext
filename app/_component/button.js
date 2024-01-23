import Image from "next/image";

export default function Button({ title, path, size, imgStyle }) {
  return (
    <div className="flex">
      {title && <span className="leading-10 text-xs mr-1">{title}</span>}
      <Image
        src={path}
        width={size.w}
        height={size.h}
        className={imgStyle}
        // alt={title}
        alt=""
        style={{ height: size.h + "px" }}
      />
    </div>
  );
}
