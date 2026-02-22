import HeroBlock from "./blocks/HeroBlock";
import MultiColumnBlock from "./blocks/MultiColumnBlock";
import RichTextBlock from "./blocks/RichTextBlock";
import TwoColumnBlock from "./blocks/TwoColumnBlock";

const componentMap: any = {
  heroBlock: HeroBlock,
  twoColumnBlock: TwoColumnBlock,
  richTextBlock: RichTextBlock,
  multiColumnBlock: MultiColumnBlock,
};

export default function BlockRenderer({ blocks }: any) {
  return (
    <main>
      {blocks.map((block: any) => {
        const contentTypeId = block?.sys?.contentType?.sys?.id;
        if (!contentTypeId) return null;

        const Component = componentMap[contentTypeId];

        if (!Component) return null;
        return <Component key={block.sys.id} {...block.fields} />;
      })}
    </main>
  );
}