import { BlockRendererProps, CONTENT_TYPE, IHeroBlockFields, IMultiColumnContentFields, IRichTextBlockFields, ITwoColumnBlockFields } from "@/types/types"
import TwoColumnBlock from "./blocks/TwoColumnBlock"
import RichTextBlock from "./blocks/RichTextBlock"
import HeroBlock from "./blocks/HeroBlock"
import MultiColumnBlock from "./blocks/MultiColumnBlock"
import { Entry } from "contentful"

function isContentType(entry: Entry, contentTypeId: string): boolean {
  return entry.sys.contentType.sys.id === contentTypeId
}

export function BlockRenderer({ blocks }: BlockRendererProps) {
  if (!blocks || blocks.length === 0) return null

  return (
    <>
      {blocks.map((block) => {
        if (isContentType(block, CONTENT_TYPE.HERO_BLOCK)) {
          return <HeroBlock key={block.sys.id} fields={block.fields as IHeroBlockFields } />
        }

        if (isContentType(block, CONTENT_TYPE.RICH_TEXT_BLOCK)) {
          return <RichTextBlock key={block.sys.id} fields={block.fields as IRichTextBlockFields} />
        }

        if (isContentType(block, CONTENT_TYPE.TWO_COLUMN_LAYOUT)) {
          return <TwoColumnBlock key={block.sys.id} fields={block.fields as ITwoColumnBlockFields} />
        }

        if (isContentType(block, CONTENT_TYPE.MULTI_COLUMN_CONTENT)) {
          return <MultiColumnBlock key={block.sys.id} fields={block.fields as IMultiColumnContentFields} />
        }

        if (process.env.NODE_ENV === "development") {
          return (
            <div
              key={block.sys.id}
              className="mx-auto max-w-3xl px-6 py-8 text-center text-sm text-muted-foreground"
            >
              <p>
                Unknown block type:{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                  {block.sys.contentType.sys.id ?? "undefined"}
                </code>
              </p>
            </div>
          )
        }
        return null
      })}
    </>
  )
}
