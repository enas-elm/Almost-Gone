import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

const gilroy = localFont({
  src: [
    {
      path: "fonts/gilroy-medium.ttf",
      weight: "500",
      style: "regular",
    },
    {
      path: "fonts/gilroy-heavy.ttf",
      weight: "800",
      style: "bold",
    },
  ],
  variable: "--font-gilroy",
});

export const metadata: Metadata = {
  title: "Almost Gone",
  description: "Almost Gone website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gilroy.className} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
