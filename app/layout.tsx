import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://boubacarba.dev'),
  title: {
    default: "Boubacar Ba — Business Systems Specialist & Web Developer",
    template: "%s | Boubacar Ba",
  },
  description:
    "Portfolio of Boubacar Ba — Business Systems Specialist with 5+ years bridging business operations and technology. Full-stack developer, data analyst, SAAS builder.",
  keywords: ["web developer", "business systems", "data analyst", "Next.js", "React", "TypeScript", "Dakar", "Senegal"],
  authors: [{ name: "Boubacar Ba", url: "https://github.com/Boubacar-Beuzy-Ba" }],
  creator: "Boubacar Ba",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Boubacar Ba",
    title: "Boubacar Ba — Business Systems Specialist & Web Developer",
    description:
      "Portfolio of Boubacar Ba — Business Systems Specialist with 5+ years bridging business operations and technology.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Boubacar Ba Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boubacar Ba — Business Systems Specialist & Web Developer",
    description: "Portfolio of Boubacar Ba — Business Systems Specialist, full-stack developer and data analyst.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
