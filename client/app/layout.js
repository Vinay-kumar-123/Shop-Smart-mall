import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Providers from "./providers";

export const metadata = {
  title: {
    default: "Smart-mall",
    template: "%s | Smart-mall",
  },
  description: "Welcome to Smart mall",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="full-body">
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
