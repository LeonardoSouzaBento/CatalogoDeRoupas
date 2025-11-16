import { UserProvider } from "@/contexts/Providers/UserProvider";
import { PublicDataProvider } from "@/contexts/Providers/PublicDataProvider";
import type { Metadata } from "next";
import { DM_Sans, Cookie } from "next/font/google";
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
  title: "Roupas Online",
  description: "Crie seu catálogo de roupas online",
};

const fontStyles = `font-dm-sans text-gray-800 
 text-[1.09375em] sm:text-[1.11205em] md:text-[1.12089em] lg:text-[1.13857em] 
 xl:text-[1.15625em] 2xl:text-[1.17393em]`; //novo tamanho base: 17.5px

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${dmSans.variable} ${cookie.variable}`}>
      <PublicDataProvider>
        <UserProvider>
          <body className={`${fontStyles} bg-gray-50`}>{children}</body>
        </UserProvider>
      </PublicDataProvider>
    </html>
  );
}
