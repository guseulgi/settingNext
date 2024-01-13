import Image from "next/image";
import Button from "./button";

const loginButtonStlye =
  "cursor-pointer hover:-translate-y-1 pt-1 hover:scale-100 scale-90 duration-100";
const loginButtonSize = { w: 30, h: 20 };

export default function Logobar() {
  return (
    <div className="my-2 flex justify-between">
      <Image src="/pokemon.png" width={90} height={15} alt="포켓몬스터 로고" />
      <Image src="/moncolle.png" width={140} height={30} alt="몬콜레 로고" />
      <Button
        // title="Login"
        path="/PokeBall.png"
        size={loginButtonSize}
        imgStyle={loginButtonStlye}
      />
    </div>
  );
}
