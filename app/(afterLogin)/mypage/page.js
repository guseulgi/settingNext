import { cookies } from "next/headers";
import CardSection from "./_component/cardsection";
import { fetchSession } from "@/app/_util/session";

export default function MyPage() {
  const session = fetchSession();

  console.log("session", session);

  return (
    <div className="flex-1 m-auto h-full">
      <CardSection session={session} name="임시이름" />
    </div>
  );
}
