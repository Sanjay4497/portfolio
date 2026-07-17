import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanjay Nandaniya | AI, Data & IIoT Architect",
  description:
    "Portfolio of Sanjay Nandaniya, specializing in Industry 4.0, IIoT, Edge AI, Data Engineering, ETL, Digital Twins and cloud platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
