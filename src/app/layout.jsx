import { Providers } from "@/provider";
import Header from "./components/organisms/Header";
import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "blob",
  description: "blogs all over",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="mobile-web-app-capable" content="yes"></meta>
        <meta name="viewport" content="initial-scale=1"></meta>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        ></meta>
      </head>
      <body className="font-serif">
        <Header />
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
