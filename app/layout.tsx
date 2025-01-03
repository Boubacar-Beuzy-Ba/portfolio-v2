import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boubacar-Dev",
  description: "Boubacar Portfolio Website",
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
        </--Start of Tawk.to Script--> */}
        <script type="text/javascript">
        let Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        let s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/66388b3507f59932ab3c6f87/1ht6dvi6a';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
        </script>
        {/* <!--End of Tawk.to Script-->
      </body>
    </html>
  );
}
