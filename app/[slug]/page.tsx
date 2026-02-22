import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/contentful/api";
import BlockRenderer from "@/components/BlockRenderer";
import { PageProps } from "@/types/types";
/**
 * ISR - Revalidate every 60 seconds
 */
export const revalidate = 60;


/**
 * Dynamic SEO Metadata
 */
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;

  const page = await getPageBySlug(slug);

  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  const title = page.fields.seoTitle ?? page.fields.title;
  const description =
    typeof page.fields.seoDescription === "string"
      ? page.fields.seoDescription
      : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

/**
 * Dynamic Page Rendering
 */
export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const page = await getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <main>
      <BlockRenderer blocks={page.fields.blocks} />
    </main>
  );
}