import type { Entry, EntrySkeletonType } from "contentful";
import type { Document } from "@contentful/rich-text-types";

/**
 * Contentful Asset
 */
export interface ContentfulAsset {
  fields: {
    file: {
      url: string;
    };
    title?: string;
    description?: string;
  };
}

/**
 * Navigation Item
 */
export interface NavigationItemSkeleton extends EntrySkeletonType {
  contentTypeId: "navigationItem";
  fields: {
    label: string;
    link: string;
  };
}

/**
 * Global Settings
 */
export interface GlobalSettingsSkeleton extends EntrySkeletonType {
  contentTypeId: "globalSettings";
  fields: {
    siteName: string;
    logo?: ContentfulAsset;
    navigation: Entry<NavigationItemSkeleton>[];
    footerText: string;
  };
}

/**
 * Page
 */
export interface Block {
  sys: {
    id: string;
    contentType: {
      sys: {
        id: string;
      };
    };
  };
  fields: Record<string, unknown>;
}

export interface PageSkeleton extends EntrySkeletonType {
  contentTypeId: "page";
  fields: {
    title: string;
    slug: string;
    seoTitle?: string;
    seoDescription?: string;
    blocks: Block[];
  };
}

export interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export interface PageFields {
  title: string;
  slug: string;
  seoTitle?: string;
  seoDescription?: string;
  blocks: Block[];
}

export interface NavigationItem {
  sys: { id: string };
  fields: {
    label: string;
    link: string;
  };
}

export interface HeaderProps {
  siteName: string;
  logo?: ContentfulAsset;
  navigation: NavigationItem[];
}

export interface FooterProps {
  footerText: Document;
}

export interface RichTextBlockProps {
  content: Document;
}

export interface ColumnItem {
  sys: { id: string };
  fields: {
    title: string;
    description: string;
    icon?: ContentfulAsset;
  };
}

export interface MultiColumnBlockProps {
  sectionTitle: string;
  columns: ColumnItem[];
}

export interface HeroBlockProps {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: ContentfulAsset;
}

export interface TwoColumnBlockProps {
  leftTitle: string;
  leftDescription: Document;
  rightImage: ContentfulAsset;
}

export interface BlockRendererProps {
  blocks?: Block[] | null;
}