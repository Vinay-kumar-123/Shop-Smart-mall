
import Navbar from "@/components/Navbar";
import "./globals.css";



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
        {children}
      </body>
    </html>
  );
}
