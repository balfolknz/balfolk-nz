import "react-medium-image-zoom/dist/styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/reset.scss";
import "../styles/globals.scss";

import {
  Cormorant_Garamond,
  Cormorant_SC,
  Dancing_Script,
  Libre_Baskerville,
  Roboto_Flex,
} from "next/font/google";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

const cormorant_sc = Cormorant_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cormorant-sc",
});

const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cormorant-garamond",
});

const dancing_script = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing-script",
});

const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

const roboto_flex = Roboto_Flex({
  subsets: ["latin"],
  weight: ["1000"],
  variable: "--font-roboto-flex",
});

export const metadata = {
  title: "Balfolk Aotearoa/NZ",
  description: "The official website for Balfolk - Aotearoa/New Zealand!",
  icons: {
    icon: "/icons-white/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant_sc.variable} ${dancing_script.variable} ${libre_baskerville.variable} ${cormorant_garamond.variable} ${roboto_flex.variable}`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />

        <link rel="shortcut icon" href="/icons-white/favicon.ico" />
        <meta name="theme-color" content="#542e23" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="viewport" content="viewport-fit=cover"></meta>
        <meta name="mobile-web-app-capable" content="yes"></meta>

        <link rel="apple-touch-icon" href="/icons-white/apple-touch-icon.png"></link>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-status-bar-style" content="default"></meta>
        <meta name="apple-mobile-web-app-title" content="Studio Y Creative"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-touch-startup-image" content="/icons/icon.jpg"></meta>
        <meta name="apple-touch-fullscreen" content="yes"></meta>
        {/*  */}
        {/* <script
          async
          defer
          crossorigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js"
        ></script> */}
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
