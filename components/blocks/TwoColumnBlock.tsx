import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface TwoColumnBlockProps {
  leftTitle: string;
  leftDescription: any;
  rightImage: any;
}

export default function TwoColumnBlock({
  leftTitle,
  leftDescription,
  rightImage,
}: TwoColumnBlockProps) {
  const imageUrl = rightImage?.fields?.file?.url
    ? `https:${rightImage.fields.file.url}`
    : "";

  return (
    <section className="py-16 container mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-2xl font-bold mb-4">{leftTitle}</h2>
        <div className="prose">
          {leftDescription && documentToReactComponents(leftDescription)}
        </div>      
      </div>

      {imageUrl && (
        <figure>
          <Image
            src={imageUrl}
            alt={leftTitle}
            width={600}
            height={400}
            className="rounded-lg"
          />
        </figure>
      )}
    </section>
  );
}