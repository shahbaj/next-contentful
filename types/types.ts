import type { Entry, EntrySkeletonType } from "contentful";

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
    logo?: any;
    navigation: Entry<NavigationItemSkeleton>[];
    footerText: string;
  };
}

/**
 * Page
 */
export interface PageSkeleton extends EntrySkeletonType {
  contentTypeId: "page";
  fields: {
    title: string;
    slug: string;
    seoTitle?: string;
    seoDescription?: string;
    blocks: any[];
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
  blocks: Entry<any>[];
}

export interface HeaderProps {
  siteName: string;
  logo?: any;
  navigation: any[];
}

export interface FooterProps {
  footerContent: any;
}

export interface RichTextBlockProps {
  content: any;
}

export interface ColumnItem {
  sys: { id: string };
  fields: {
    title: string;
    description: string;
    icon?: any;
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
  backgroundImage?: any; 
}