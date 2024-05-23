import CardSection from "./_component/cardsection";
import { fetchPrf, fetchSession } from "@/app/_util/session";

export default async function MyPage() {
  const session = await fetchSession();
  const emailSplit = session.payload.email.split("@");
  const prfInfo = await fetchPrf(emailSplit[0]);

  console.log("prfInfoprfInfoprfInfo", prfInfo);
  return (
    <div className="flex-1 m-auto h-full">
      <CardSection session={session} prfInfo={prfInfo} />
    </div>
  );
}
