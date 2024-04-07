import { NextResponse } from "next/server";
import { fetchSession } from "./_util/session";

export async function middleware(request) {
  const result = fetchSession();

  console.log("result", result);

  if (request.nextUrl.pathname.startsWith("/mypage")) {
    if (!result.success) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else {
  }
}

export const config = {
  matcher: "/mypage",
};
