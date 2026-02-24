import { draftMode } from "next/headers";
import {
  CONTENT_TYPE, type ISiteSettingsSkeleton, type IPageSkeleton
} from "@/types/types";
import { getClient } from "./client";

async function getContentfulClient() {
  const isPreview = await draftMode();
  return await getClient(isPreview.isEnabled);
}

export async function getGlobalSettings() {
  const client = await getContentfulClient();
  const response = await client.getEntries<ISiteSettingsSkeleton>({
    content_type: CONTENT_TYPE.GLOBAL_SETTINGS,
    include: 2,
  });

  if (!response.items.length) {
    throw new Error("Global settings not found");
  }

  return response.items[0];
}

export async function getPageBySlug(slug: string) {
  const client = await getContentfulClient();

  try {
    const entries = await client.getEntries<IPageSkeleton>({
      content_type: CONTENT_TYPE.PAGE,
      // @ts-expect-error - need to fix this type issue with the slug field
      "fields.slug": slug,
      include: 10,
      limit: 1,
    })

    return entries.items[0] ?? null;
  } catch {
    return null
  }
}