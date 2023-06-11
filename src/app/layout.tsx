import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { montserrat, raleway } from "@/lib/font";
import "keen-slider/keen-slider.min.css";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mubaraq Somuyiwa",
  description: "Product Designer, UX researcher and UX writer",
  openGraph: {
    images: ["https://ik.imagekit.io/7wpxe2myx/Mubarak/about_img_wgSpd-L_x.png?updatedAt=1686508775052"],
    type: "website",
    url: "https://mubaraq.com",
    title: "Mubaraq Somuyiwa",
    description: "Product Designer, UX researcher and UX writer",
  },
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
