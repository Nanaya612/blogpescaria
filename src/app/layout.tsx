import type { Metadata } from "next";
import "@/estilos/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Blog Pesca",
  description: "Um blog para amantes da pescaria. Com dicas, discussões, informações e tudo sobre pesca. "
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/> 
        {children}
        <Footer/>
      </body>
    </html>
  );
}
