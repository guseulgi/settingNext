import Image from "next/image";

export default function Main() {
  return (
    <div>
      <span className="font-bold text-slate-950">몬콜레란?</span>
      <hr />
      <p className="mt-3">
        타카라토미(합병 전에는 토미)에서 발매하는 포켓몬스터의 피규어 시리즈.
        <br />
        1997년도부터 발매를 했던 오랜 역사를 가진 포켓몬 피규어 시리즈이다.
        과거에는 싸구려틱한 유광처리가 호불호가 갈렸으나 현재는 무광으로 나온다.
        단종된 피규어와 꾸준히 새로 나오는 피규어를 비교해 보면 포켓몬의 디자인
        변화나 기술의 발달이 반영되었음을 알 수 있다.
      </p>
      <Image
        src="/moncolle_detail_1.jpeg"
        width={600}
        height={400}
        className="m-auto"
        alt="몬콜레 예시 이미지"
      />
      <p className="text-xs font-light text-gray-500 mx-24 my-2">
        {">>"} 모든 포켓몬이 대부분 약 4cm로만 통일되어서 나온다. 그래서
        파이리와 리자몽의 크기가 같다는 단점이 있었으나 현재는 사이즈가 노말(약
        4cm), 슈퍼(약 10cm), 하이퍼(약 15cm) 사이즈로 나눠져서 나와서 사이즈를
        고를 수 있다. 받침대 없이 똑바로 세워 계속 둘 수 있을 정도로 하중 분배에
        큰 신경을 써 설계되었다.
      </p>
    </div>
  );
}
