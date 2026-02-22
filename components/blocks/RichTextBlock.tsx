import { RichTextBlockProps } from "@/types/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function RichTextBlock({
  content,
}: RichTextBlockProps) {
  return (
    <section className="py-12 container mx-auto">
      <div className="prose max-w-none">
        {content && documentToReactComponents(content)}
      </div>
    </section>
  );
}