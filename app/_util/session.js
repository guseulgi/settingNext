import { cookies } from "next/headers";

export async function fetchSession() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_URL}/api/users/session`,
    {
      method: "GET",
      credentials: "include",
      cache: "no-store",
      headers: {
        Cookie: cookies().toString(),
      },
    }
  );

  const result = await response.json();

  return result;
}
