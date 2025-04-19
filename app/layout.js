import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subset: ["latin"] });

export const metadata = {
  title: "YaFue",
  description: "Plataforma Financiera para el Futuro",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/*Header */}
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          {/* Footer */}
          <footer className="bg-purple-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Hecho con bastante café por mi en mi silla de plástico🪑</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
