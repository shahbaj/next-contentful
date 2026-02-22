import "./globals.css";
import { getGlobalSettings } from "@/lib/contentful/api";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { notFound } from "next/navigation";
import { draftMode } from "next/dist/server/request/draft-mode";
import PreviewBanner from "@/components/layout/PreviewBanner";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const global = await getGlobalSettings();
  if (!global) notFound();
  const { isEnabled } = await draftMode();
  const siteName = global.fields.siteName;
  const logo = global.fields.logo;
  const navigation = global.fields.navigation;
  const footerContent = global.fields.footerText;

  return (
    <html lang="en">
      <body>
        {isEnabled && <PreviewBanner />}
        <Header siteName={siteName} logo={logo} navigation={navigation} />
          {children}
        <Footer footerContent={footerContent} />
      </body>
    </html>
  );
}