import "../app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miguel Portafolio Website",
  description: "Portfolio de Juan Miguel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
