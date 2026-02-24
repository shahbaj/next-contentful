import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/contentful/api";
import { BlockRenderer } from "@/components/BlockRenderer";
import { PageProps, ContentBlockEntry } from "@/types/types";

export const revalidate = 60;

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const page = await getPageBySlug(slug);
  if (!page) {
    notFound();
  }

  return (
    <main>
      <BlockRenderer blocks={page.fields.blocks as ContentBlockEntry[] | undefined} />
    </main>
  );
}