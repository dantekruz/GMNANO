import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Inter } from "next/font/google";

export const metadata = {
  title: {
    default: "GM Nanotherapeutics",
    template: "%s | GM Nanotherapeutics",
  },
  description:
    "GM Nanotherapeutics is an innovation-led, clinical-stage nanomedicine company focused on developing clinically superior and cost-effective combination nanotherapeutics.",

  keywords: [
    "nanotechnology",
    "nanomedicine",
    "biotech",
    "drug delivery",
    "pharmaceutical research",
    "clinical stage biotech",
  ],

  openGraph: {
    title: "GM Nanotherapeutics",
    description:
      "Delivering clinically superior and cost-effective nanotherapeutics through advanced nanotechnology platforms.",
    url: "https://gmnanotherapeutics.com",
    siteName: "GM Nanotherapeutics",
    images: [
      {
        url: "/og-image.png", // add later
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Header />

        <main>{children}</main>

        <Footer />

      </body>
    </html>
  );
}