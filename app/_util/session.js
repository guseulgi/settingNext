import { cookies } from "next/headers";

export async function fetchSession() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_URL}/api/users/session`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        Cookie: cookies().get("userId"),
      },
    }
  );

  const result = await response.json();
  console.log(result);
  return result;
}
