import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subset: ["latin"] });

export const metadata = {
  title: "Título interesante",
  description: "Plataforma Financiera para el Futuro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/*Header */}
        <Header />
        {/* Main content */}
        <main className="min-h-screen">{children}</main>
      </body>
      {/* Footer */}
      <footer className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>Hecho con bastante café por mi en mi silla de plástico🪑</p>
        </div>
      </footer>
    </html>
  );
}
