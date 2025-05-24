import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CogniCare",
  description:
    "Your intelligent AI voice assistant for confident virtual health check-ups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monaSans.className} antialiased`}>
        <ClerkProvider
          appearance={{
            layout: {
              logoImageUrl: "/logo.svg",
              socialButtonsVariant: "iconButton",
            },
            variables: { colorPrimary: "#28E5A9" },
          }}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
