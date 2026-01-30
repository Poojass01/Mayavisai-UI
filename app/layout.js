import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import { Noto_Serif_Tamil } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Mayavisai | Happy Motherhood",
  description:
    "Heal from past trauma and manifest your dream life with proven techniques.",
};

const tamilSerif = Noto_Serif_Tamil({
  subsets: ["tamil"],
  weight: ["400", "500"],
  variable: "--font-tamil",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${tamilSerif.variable} font-sans`}
>
        {children}
      </body>
    </html>
  );
}
