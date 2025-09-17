
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";



export const metadata = {
  title: {
    default: "Smart-mall",
    template: "%s | Smart-mall",
  },
  description: "Welcome to my new project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="full-body">
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
