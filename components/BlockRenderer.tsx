import HeroBlock from "./blocks/HeroBlock";
import MultiColumnBlock from "./blocks/MultiColumnBlock";
import RichTextBlock from "./blocks/RichTextBlock";
import TwoColumnBlock from "./blocks/TwoColumnBlock";
import type { BlockRendererProps } from "@/types/types";

const componentMap: Record<string, React.ComponentType<any>> = {
  heroBlock: HeroBlock,
  twoColumnBlock: TwoColumnBlock,
  richTextBlock: RichTextBlock,
  multiColumnBlock: MultiColumnBlock,
};

export default function BlockRenderer({ blocks }: BlockRendererProps) {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
    return null;
  }

  return (
    <main>
      {blocks.map((block) => {
        if (!block || typeof block !== 'object' || !('sys' in block)) {
          return null;
        }

        const contentTypeId = (block as any)?.sys?.contentType?.sys?.id;
        if (!contentTypeId) return null;

        const Component = componentMap[contentTypeId];

        if (!Component) return null;
        return <Component key={(block as any).sys.id} {...(block as any).fields} />;
      })}
    </main>
  );
}