import { cookies } from "next/headers";
import CardSection from "./_component/cardsection";

export default function MyPage() {
  const session = fetchSession();

  // console.log("session", session);

  return (
    <div className="flex-1 m-auto h-full">
      <CardSection session={session} name="임시이름" />
    </div>
  );
}

async function fetchSession() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_URL}/api/user/session`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: cookies().get("user_id"),
      },
    }
  );

  const result = await response.json();
  console.log(result);
  return result;
}
