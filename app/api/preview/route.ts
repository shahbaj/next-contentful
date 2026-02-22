import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new NextResponse("Invalid token", { status: 401 });
  }

  if (!slug) {
    return new NextResponse("Slug required", { status: 400 });
  }

  (await draftMode()).enable();

  return NextResponse.redirect(new URL(`/${slug}`, request.url));
}