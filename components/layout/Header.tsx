import { HeaderProps } from "@/types/types";
import Link from "next/link";
import Image from "next/image";

export default function Header({ siteName, logo, navigation }: HeaderProps) {
  const logoUrl = logo?.fields?.file?.url
    ? `https:${logo.fields.file.url}`
    : null;

  return (
    <header className="p-4 border-b flex justify-between items-center">
      <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black rounded px-2 py-1">
        {logoUrl && (
          <Image
            src={logoUrl}
            alt={siteName}
            width={40}
            height={40}
            className="rounded"
          />
        )}
        <h1 className="font-bold text-xl">{siteName}</h1>
      </Link>

      <nav className="space-x-4" aria-label="Main navigation">
        {navigation?.map((item) => (
          <Link key={item.sys.id} href={item.fields.link} className="hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black px-2 py-1">
            {item.fields.label.toString()}
          </Link>
        ))}
      </nav>
    </header>
  );
}