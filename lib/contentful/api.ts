import { draftMode } from "next/headers";
import {
  GlobalSettingsSkeleton,
  PageSkeleton,
} from "@/types/types";
import { getClient } from "./client";
import type { Entry } from "contentful";

async function getContentfulClient() {
  const isPreview = await draftMode();
  return await getClient(isPreview.isEnabled);
}

export async function getGlobalSettings() {
  const client = await getContentfulClient();
  const response = await client.getEntries<GlobalSettingsSkeleton>({
    content_type: "globalSettings",
    include: 2,
  });

  if (!response.items.length) {
    throw new Error("Global settings not found");
  }

  return response.items[0];
}

export async function getPageBySlug(slug: string): Promise<Entry<PageSkeleton> | undefined> {
  const client = await getContentfulClient();
  const response = await client.getEntries<PageSkeleton>({
    content_type: "page",
    "fields.slug": slug,
    include: 10,
  });
  return response.items[0];
}