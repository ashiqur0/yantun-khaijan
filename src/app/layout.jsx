import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CartProvider from "@/Provider/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Yantun Khaijan',
    template: "%s | Yantun Khaijan"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // Font optimization
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${poppins.className} antialiased`}
      >
        <Navbar />

        <main className='px-5 py-8'>
          <CartProvider>{children}</CartProvider>
        </main>
      </body>
    </html>
  );
}