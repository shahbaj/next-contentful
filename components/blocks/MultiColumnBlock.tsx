import { IColumnItemFields, MultiColumnBlockProps } from "@/types/types";
import Image from "next/image";

export default function MultiColumnBlock({
  fields
}: MultiColumnBlockProps) {
  const { sectionTitle, columns } = fields;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">
          {sectionTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {columns?.map((col) => {
            // @ts-expect-error -   need to fix this type issue with the icon field
            const { title, description, icon }: IColumnItemFields = col.fields;

            let iconUrl: string | null = null;

            if (icon && "fields" in icon && icon.fields && "file" in icon.fields) {
              const file = icon.fields.file;
              if (file && "url" in file) {
                iconUrl = `https:${file.url}`;
              }
            }

            return (
              <article
                key={col.sys.id}
                className="p-6 bg-white rounded-lg shadow"
              >
                {iconUrl && (
                  <Image
                    src={iconUrl}
                    alt={title}
                    width={60}
                    height={60}
                    className="mb-4"
                  />
                )}

                <h3 className="font-semibold text-lg mb-2">
                  {title}
                </h3>

                <p className="text-gray-600">
                  {description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}