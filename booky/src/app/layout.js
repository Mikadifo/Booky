import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Booky",
  description:
    "Booky is a software that offers a comprehensive solution for managing and accessing library books in the most efficient way.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-slate-500 ${inter.className}`}>
        <Header />
        {children}
        <footer className="bg-slate-700 text-gray-100 text-center py-3 mt-16">
          <p>
            2024{" "}
            <a href="#" className="underline hover:font-bold">
              Booky.com
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
