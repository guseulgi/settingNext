export async function fetchLogin(email, password) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_URL}/api/users/login`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_info: {
          email: email,
          password: password,
        },
      }),
    }
  );

  return await response.json();
}

export async function fetchLogout() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_URL}/api/users/logout`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
    }
  );

  return await response.json();
}
