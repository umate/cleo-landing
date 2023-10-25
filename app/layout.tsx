import "./globals.css";

import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "Cleo",
  description: "We help brand more online with expert assistance."
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
      <Script async src="https://tally.so/widgets/embed.js" />
      <body className="font-sans">{children}</body>
    </html>
  );
}
