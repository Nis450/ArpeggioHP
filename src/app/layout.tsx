
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ja">
      <head>
        <title>同志社VOCALOID研究会Arpeggio</title>
        <meta name="description" content="同志社VOCALOID研究会" />
      </head>
      <body className={inter.className}>{children}</body>

    </html>
  );
}