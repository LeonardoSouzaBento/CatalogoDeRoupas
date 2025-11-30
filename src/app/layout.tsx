import type { Viewport } from "next";
import type { Metadata } from "next";
import { UserProvider } from "@/contexts/Providers/UserProvider";
import { PublicDataProvider } from "@/contexts/Providers/PublicDataProvider";
import { DM_Sans, Cookie } from "next/font/google";
import "./reset.css";
import "./globals.css";
import "./shorteners.css";
import "./styles.css";


const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--dm-sans",
});

const cookie = Cookie({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Roupas Online",
  description: "Veja um catálogo de roupas online",
  keywords: ["roupas online", "catálogo de roupas", "roupas"],
  authors: [{ name: "Roupas Online", url: "http://localhost:3000" }],

  // icons: {
  //   icon: "/favicon.ico",
  // },

  openGraph: {
    title: "Roupas Online",
    description: "Veja um catálogo de roupas online",
    type: "website",
    url: "http://localhost:3000",
    images: ["/og-card.png"],
    locale: "pt-BR",
    siteName: "Roupas Online",
  },

  twitter: {
    card: "summary_large_image",
    site: "@RoupasOnline",
    images: ["/tw-card.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#292524" },
    { media: "(prefers-color-scheme: dark)", color: "#292524" },
  ],
};

//novo tamanho base: 17.5px
const fontStyles = `font-dm-sans text-gray-800 
 text-[1.09375em] sm:text-[1.11205em] md:text-[1.12089em] lg:text-[1.13857em] 
 xl:text-[1.15625em] 2xl:text-[1.17393em]`; //17,5 até 18,5 em xl

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${dmSans.variable} ${cookie.variable} `}>
      <body className={`bg-gray-50`}>
        <PublicDataProvider>
          <UserProvider>
            <div className={`${fontStyles}`}>{children}</div>
          </UserProvider>
        </PublicDataProvider>
      </body>
    </html>
  );
}
