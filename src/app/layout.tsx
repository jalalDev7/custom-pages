import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Custom pages developed by Jalal Hi-Tech",
  description: "Custom pages developed by Jalal Hi-Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
