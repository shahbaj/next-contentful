import { createClient } from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID!;
const deliveryToken = process.env.CONTENTFUL_ACCESS_TOKEN!;
const previewToken = process.env.CONTENTFUL_PREVIEW_TOKEN!;


export const deliveryClient = createClient({
  space,
  accessToken: deliveryToken,
});

export const previewClient = createClient({
  space,
  accessToken: previewToken,
  host: "preview.contentful.com",
});

export async function getClient(isPreview = false) {
  console.log("Preview Mode Enabled:", isPreview);
  return isPreview ? previewClient : deliveryClient;
}