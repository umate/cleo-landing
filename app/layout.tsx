import "./globals.css";

import Head from "next/head";

export const metadata = {
  title: "Cleo",
  description: "Letting customers buy products with confidence."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} key="title" />
        <meta name="description" content={metadata.description} />
        <meta property="og:description" content={metadata.description} key="description" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
