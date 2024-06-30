import { Inter } from "next/font/google";
import "./globals.css";
import TopNavbar from "../components/Navbar/TopNavbar";
import Navbar from "../components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>
      <TopNavbar />
      <Navbar />
      {children}
    </body>
  </html>
);

export default RootLayout;
