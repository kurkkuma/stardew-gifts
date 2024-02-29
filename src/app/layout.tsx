import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Buttons from "./(components)/Buttons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stardew Valley Gift Helper",
  description:
    "Personal assistant: what gifts to give to characters from the Stardew Valley game",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full my-8 flex gap-4 flex-col justify-center items-center ">
          <Buttons />

          {children}
        </main>
      </body>
    </html>
  );
}
