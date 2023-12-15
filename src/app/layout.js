import { Inter } from "next/font/google";
import "../styles/globals.scss";
import { ReduxProvider } from "@/redux/ReduxProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter( { subsets: [ "latin" ] } );

export const metadata = {
  title: "Next.js v.13 and Redux toolkit Query",
  description: "Изучаем взаимодействие Next.js и Redux toolkit Query",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <ReduxProvider>
      <body className={ inter.className }>
      <Header />
      <main className="main">
        { children }
      </main>
      <Footer />
      </body>
    </ReduxProvider>
    </html>
  );
}
