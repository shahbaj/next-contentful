import { FooterProps } from "@/types/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Footer({ footerText }: FooterProps) {
  return (
    <footer className="p-4 border-t text-center text-sm" role="contentinfo">
      {footerText && documentToReactComponents(footerText)}
    </footer>
  );
}