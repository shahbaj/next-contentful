import { FooterProps } from "@/types/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Footer({ footerContent }: FooterProps) {
  return (
    <footer className="p-4 border-t text-center text-sm" role="contentinfo">
      {footerContent && documentToReactComponents(footerContent)}
    </footer>
  );
}