import { MultiColumnBlockProps } from "@/types/types";
import Image from "next/image";

export default function MultiColumnBlock({
  sectionTitle,
  columns,
}: MultiColumnBlockProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">
          {sectionTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {columns?.map((col) => {
            const iconUrl = col.fields.icon?.fields?.file?.url
              ? `https:${col.fields.icon.fields.file.url}`
              : null;

            return (
              <article
                key={col.sys.id}
                className="p-6 bg-white rounded-lg shadow"
              >
                {iconUrl && (
                  <Image
                    src={iconUrl}
                    alt={col.fields.title}
                    width={60}
                    height={60}
                    className="mb-4"
                  />
                )}

                <h3 className="font-semibold text-lg mb-2">
                  {col.fields.title}
                </h3>

                <p className="text-gray-600">
                  {col.fields.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}