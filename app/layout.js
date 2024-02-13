import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Navbar from "./_component/navbar";
import Logobar from "./_component/logobar";
import Footer from "./_component/footer";
import BannerProvider from "./_component/bannerProvider";
import PopBanner from "./_component/banner";

const inter = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata = {
  title: "Let's go Moncolle",
  description: "Pokemon Moncolle Testing Site!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div id="outterContainer">
          <Logobar />
          <Navbar />
          <BannerProvider>
            <PopBanner />
          </BannerProvider>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
