import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanjay Nandaniya | Staff Engineer & IIoT Architect",
  description:
    "Sanjay Nandaniya, Staff Engineer and IIoT Architect working across Agentic AI, Machine Learning, Edge AI, Digital Twins, Python/FastAPI and AWS, Azure and GCP platforms.",
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
