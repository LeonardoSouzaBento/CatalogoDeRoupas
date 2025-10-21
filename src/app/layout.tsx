import { UserDataProvider } from "@/contexts/Providers/UserDataProvider";
import { PublicDataProvider } from "@/contexts/Providers/PublicDataProvider";
import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Poppins, Cookie } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"], // selecione os pesos que precisa
  variable: "--font-p",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-h",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${dmSans.variable} ${poppins.variable} ${cookie.variable}`}
    >
      <PublicDataProvider>
        <UserDataProvider>
          <body>{children}</body>
        </UserDataProvider>
      </PublicDataProvider>
    </html>
  );
}
