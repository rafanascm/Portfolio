<link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { TransicaoProvider } from "@/components/transicaoProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio ",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
       <TransicaoProvider>{children}</TransicaoProvider>
      </body>
    </html>
  );
}
