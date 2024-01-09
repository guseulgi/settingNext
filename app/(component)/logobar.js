import Image from "next/image";

export default function Logobar() {
  return (
    <div className="my-2 flex justify-between">
      <Image src="/pokemon.png" width={90} height={30} />
      <div></div>
      <Image
        src="/PokeBall.png"
        width={34}
        height={34}
        className="hover:-translate-y-1 opacity-60 hover:opacity-100 hover:scale-100 scale-90 duration-100"
      />
    </div>
  );
}
