import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/componets/shared/Footer";
import 'animate.css';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800", "900"],
});

export const metadata = {
  title: "Suncart",
  description: "Summer Essentials Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      
      <body className={`${poppins.className} min-h-full`}>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
