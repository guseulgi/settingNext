import { cookies } from "next/headers";

export async function fetchSession() {
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
