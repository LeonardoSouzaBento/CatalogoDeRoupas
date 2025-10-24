import { UserDataProvider } from "@/contexts/Providers/UserDataProvider";
import { PublicDataProvider } from "@/contexts/Providers/PublicDataProvider";
import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Geologica, Cookie } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"], // selecione os pesos que precisa
  variable: "--font-p",
});

const geologica = Geologica({
  subsets: ["latin"],
  weight: ["100", "200","300", "400", "500", "600"],
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
      className={`${dmSans.variable} ${geologica.variable} ${cookie.variable}`}
    >
      <PublicDataProvider>
        <UserDataProvider>
          <body>{children}</body>
        </UserDataProvider>
      </PublicDataProvider>
    </html>
  );
}
