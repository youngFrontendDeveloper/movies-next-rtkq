
import "../styles/globals.scss";
import { ReduxProvider } from "@/redux/ReduxProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { inter, marckScript, rubikDirt } from "@/fonts/fonts";



export const metadata = {
  title: "Next.js v.13 and Redux toolkit Query",
  description: "Изучаем взаимодействие Next.js и Redux toolkit Query",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rubikDirt.variable} ${inter.variable} `}>
    <ReduxProvider>
      <body className={ inter.className }>
      <Header />
      <main className="main container">
        { children }
      </main>
      <Footer />
      </body>
    </ReduxProvider>
    </html>
  );
}
