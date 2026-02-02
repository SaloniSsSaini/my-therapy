import "./globals.css";
import "../styles/theme.css";
import { Playfair_Display, Inter } from "next/font/google";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
