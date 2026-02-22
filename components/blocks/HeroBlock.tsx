import { HeroBlockProps } from "@/types/types";
import Image from "next/image";

export default function HeroBlock({
  heading,
  subheading,
  ctaText,
  ctaLink,
  backgroundImage,
}: HeroBlockProps) {
  const imageUrl = backgroundImage?.fields?.file?.url
    ? `https:${backgroundImage.fields.file.url}`
    : null;

  const imageAlt =
    backgroundImage?.fields?.description || heading || "Hero background";

  return (
    <section className="relative py-24 text-center overflow-hidden" aria-label="Hero section">
      {imageUrl && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        </div>
      )}

      <div className={`relative z-10 container mx-auto px-4 ${!imageUrl ? 'text-gray-900' : 'text-white'}`}>
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          {heading}
        </h1>
        <p className="mt-4 text-lg">{subheading}</p>
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="mt-6 inline-block bg-white text-black px-6 py-2 font-medium rounded hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            {ctaText}
          </a>
        )}      
      </div>
    </section>
  );
}