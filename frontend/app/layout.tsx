import type { Metadata } from "next";
import "./globals.css";
import { inter, manrope, notoSerif } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Architectural Curator",
  description:
    "Dual-identity editorial portfolio for Virtual Assistance and Software Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${notoSerif.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
