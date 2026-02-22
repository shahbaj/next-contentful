import { draftMode } from "next/headers";
import {
  GlobalSettingsSkeleton,
} from "@/types/types";
import { getClient } from "./client";

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

export async function getPageBySlug(slug: string) {
  const client = await getContentfulClient();
  const response = await client.getEntries({
    content_type: "page",
    "fields.slug": slug,
    include: 10,
  });
  return response.items[0];
}