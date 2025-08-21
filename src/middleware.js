import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const token = await getToken({ req });
  if (!token) {
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/login`);
  }
  return NextResponse.next();
};
export const config = {
  matcher: ["/dashboard/:path*"],
};
