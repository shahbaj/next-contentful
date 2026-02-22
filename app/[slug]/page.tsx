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

  const title = typeof page.fields.seoTitle === "string" 
    ? page.fields.seoTitle 
    : typeof page.fields.title === "string"
      ? page.fields.title
      : undefined;
  const description =
    typeof page.fields.seoDescription === "string"
      ? page.fields.seoDescription
      : undefined;

  return {
    title: title ?? undefined,
    description,
    openGraph: {
      title: title ?? undefined,
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

  const blocks = Array.isArray(page.fields.blocks) ? page.fields.blocks : null;

  return (
    <main>
      <BlockRenderer blocks={blocks} />
    </main>
  );
}