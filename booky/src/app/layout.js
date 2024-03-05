import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <footer className="bg-slate-700 text-gray-100 text-center py-3">
          <p>
            2024 <a href="#">Booky.example</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
