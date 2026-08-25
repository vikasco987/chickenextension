import type { Metadata } from "next";
import { Playfair_Display, Pinyon_Script, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const pinyonScript = Pinyon_Script({ weight: ["400"], subsets: ["latin"], variable: "--font-pinyon-script" });
const poppins = Poppins({ weight: ["400", "500", "600", "700", "800"], subsets: ["latin"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Chicken Extension — Authentic Mughlai Kitchen",
  description: "Authentic Mughlai Kitchen",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${pinyonScript.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
