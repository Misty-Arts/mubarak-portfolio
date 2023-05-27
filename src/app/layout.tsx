import Navbar from "@/components/Navbar";
import { montserrat, raleway } from "@/lib/font";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${montserrat.variable} font-montserrat`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
