import CardSection from "./_component/cardsection";
import { fetchSession } from "@/app/_util/session";

export default async function MyPage() {
  const session = await fetchSession();

  return (
    <div className="flex-1 m-auto h-full">
      <CardSection session={session} />
    </div>
  );
}
