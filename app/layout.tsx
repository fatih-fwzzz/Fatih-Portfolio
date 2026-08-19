import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import type { Metadata } from "next";
import { Gochi_Hand } from "next/font/google";

const gochiHand = Gochi_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gochi-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fatih Fawwaz",
  description:
    "Software Engineer specializing in iOS Development, Mobile Solutions, and Full Stack Web Engineering.",
  icons: {
    icon: "/web-logo.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${gochiHand.variable}`}>
      <body className="font-sf">{children}</body>
    </html>
  );
}
