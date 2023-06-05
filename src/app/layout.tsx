import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { montserrat, raleway } from "@/lib/font";
import "keen-slider/keen-slider.min.css";
import "./globals.css";

export const metadata = {
  title: "Mubaraq Somuyiwa",
  description: "Portfolio of Mubaraq Somuyiwa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} bg-bg ${montserrat.variable} font-montserrat`}
      >
        <Navbar />
        <main className="pt-10 md:pt-30">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
