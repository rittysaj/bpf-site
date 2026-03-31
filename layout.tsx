import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Bipolar Factory",
    template: "%s | Bipolar Factory",
  },
  description: "Innovations of tomorrow, delivered today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}