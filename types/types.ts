import { Entry, Asset, EntrySkeletonType, ChainModifiers } from "contentful"
import { Document } from "@contentful/rich-text-types"

// Content Type IDs
export const CONTENT_TYPE = {
  GLOBAL_SETTINGS: "globalSettings",
  PAGE: "page",
  HERO_BLOCK: "heroBlock",
  RICH_TEXT_BLOCK: "richTextBlock",
  TWO_COLUMN_LAYOUT: "twoColumnLayout",
  MULTI_COLUMN_CONTENT: "multiColumnContent",
  COLUMN_ITEM: "columnItem",
  NAVIGATION_ITEM: "navigationItem",
} as const

// Field Interfaces
export interface IHeroBlockFields {
  heading: string
  subheading?: string
  backgroundImage?: Asset
  ctaText?: string
  ctaLink?: string
}

export interface IRichTextBlockFields {
  content: Document
}

export interface ITwoColumnBlockFields {
  leftTitle: string
  leftDescription: Document
  rightImage?: Asset
}

export interface IColumnItemFields {
  title: string
  description: string
  icon?: Asset
}

export interface IMultiColumnContentFields {
  sectionTitle: string
  columns?: Entry<IColumnItemSkeleton>[]
}

export interface INavigationItemFields {
  label: string
  link: string
}

export interface IPageFields {
  title: string
  slug: string
  blocks?: ContentBlockEntry[]
}

export interface ISiteSettingsFields {
  siteName: string
  logo?: Asset
  navigation?: Entry<INavigationItemSkeleton>[]
  footerText?: Document
}

// Skeleton Types
export type IHeroBlockSkeleton = EntrySkeletonType<
  IHeroBlockFields,
  typeof CONTENT_TYPE.HERO_BLOCK
>

export type IRichTextBlockSkeleton = EntrySkeletonType<
  IRichTextBlockFields,
  typeof CONTENT_TYPE.RICH_TEXT_BLOCK
>

export type ITwoColumnBlockSkeleton = EntrySkeletonType<
  ITwoColumnBlockFields,
  typeof CONTENT_TYPE.TWO_COLUMN_LAYOUT
>

export type IColumnItemSkeleton = EntrySkeletonType<
  IColumnItemFields,
  typeof CONTENT_TYPE.COLUMN_ITEM
>

export type IMultiColumnContentSkeleton = EntrySkeletonType<
  IMultiColumnContentFields,
  typeof CONTENT_TYPE.MULTI_COLUMN_CONTENT
>

export type INavigationItemSkeleton = EntrySkeletonType<
  INavigationItemFields,
  typeof CONTENT_TYPE.NAVIGATION_ITEM
>

export type IPageSkeleton = EntrySkeletonType<
  IPageFields,
  typeof CONTENT_TYPE.PAGE
>

export type ISiteSettingsSkeleton = EntrySkeletonType<
  ISiteSettingsFields,
  typeof CONTENT_TYPE.GLOBAL_SETTINGS
>

// Union Types
export type ContentBlockEntry =
  | Entry<IHeroBlockSkeleton>
  | Entry<IRichTextBlockSkeleton>
  | Entry<ITwoColumnBlockSkeleton>
  | Entry<IMultiColumnContentSkeleton>

// Component Props
export type HeroBlockProps = {
  fields: IHeroBlockFields
}

export type RichTextBlockProps = {
  fields: IRichTextBlockFields
}

export type TwoColumnBlockProps = {
  fields: ITwoColumnBlockFields
}

export type MultiColumnBlockProps = {
  fields: IMultiColumnContentFields
}

export type BlockRendererProps = {
  blocks?: ContentBlockEntry[]
}

export type HeaderProps = {
  siteName: string
  logo?: Asset
  navigation?: Entry<INavigationItemSkeleton>[]
}

export type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export type FooterProps = {
  footerText?: Document
}