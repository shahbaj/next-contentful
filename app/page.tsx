import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/contentful/api";
import { BlockRenderer } from "@/components/BlockRenderer";
import { ContentBlockEntry } from "@/types/types";

export const revalidate = 60; // ISR

export default async function HomePage() {
  const page = await getPageBySlug("home");

  if (!page) {
    notFound();
  }

  return (
    <main>
      <BlockRenderer blocks={page.fields.blocks as ContentBlockEntry[] | undefined} />
    </main>
  );
}