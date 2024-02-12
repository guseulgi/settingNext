import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_component/navbar";
import Logobar from "./_component/logobar";
import Footer from "./_component/footer";
import PopBanner from "./_component/banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="">
        <div id="outterContainer">
          <Logobar />
          <Navbar />
          <PopBanner />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
