import { Footer } from "@/components/layout/Footer";
import { Grain } from "@/components/layout/Grain";
import { Header } from "@/components/layout/Header";
import { Providers } from "@/components/layout/Providers";
import { getDictionary } from "@/lib/i18n";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans_Arabic, Inter, Noto_Kufi_Arabic, Syne } from "next/font/google";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const arDisplay = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-ar-display",
  weight: ["500", "600", "700"],
});

const arSans = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-ar-sans",
  weight: ["400", "500", "600"],
});

const t = getDictionary();

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: t.meta.title,
  description: t.meta.description,
  keywords: [
    "développeur web Alger",
    "agence web Algérie",
    "Com & Code",
    "Ayoub Belkacemi",
    "e-commerce Algérie",
    "CRM ERP",
    "Meta Ads",
  ],
  authors: [{ name: site.founder }],
  openGraph: {
    title: t.meta.title,
    description: t.meta.description,
    url: site.url,
    siteName: site.name,
    locale: "fr_DZ",
    alternateLocale: ["ar_DZ"],
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: t.meta.title,
    description: t.meta.description,
    images: ["/og.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dict = getDictionary();

  return (
    <html
      lang="fr"
      dir="ltr"
      className={`${display.variable} ${sans.variable} ${mono.variable} ${arDisplay.variable} ${arSans.variable}`}
    >
      <body>
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-ember focus:px-4 focus:py-2 focus:text-ink"
        >
          {dict.a11y.skip}
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: site.name,
              url: site.url,
              email: site.email,
              founder: { "@type": "Person", name: site.founder },
              address: {
                "@type": "PostalAddress",
                addressLocality: site.area,
                addressRegion: site.city,
                addressCountry: "DZ",
              },
              areaServed: "DZ",
              description: t.meta.description,
            }),
          }}
        />
        <Providers>
          <Grain />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
