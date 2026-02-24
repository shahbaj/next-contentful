import { RichTextBlockProps } from "@/types/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function RichTextBlock({
  fields,
}: RichTextBlockProps) {
  const content = fields.content;
  return (
    <section className="py-12 container mx-auto">
      <div className="prose max-w-none">
        {content && documentToReactComponents(content)}
      </div>
    </section>
  );
}