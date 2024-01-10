import Image from "next/image";
import Button from "./button";

const loginButtonStlye =
  "cursor-pointer hover:-translate-y-1 pb-2 opacity-60 hover:opacity-100 hover:scale-100 scale-90 duration-100";
const loginButtonSize = { w: 30, h: 20 };

export default function Logobar() {
  return (
    <div className="my-2 flex justify-between">
      <Image src="/pokemon.png" width={100} height={30} />
      <span className="leading-10">포켓몬스터 몬코레</span>
      <Button
        // title="Login"
        path="/PokeBall.png"
        size={loginButtonSize}
        imgStyle={loginButtonStlye}
      />
    </div>
  );
}
