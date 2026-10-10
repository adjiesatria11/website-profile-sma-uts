import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "SMA Negeri 1 Grobogan - SMANSAGAN",
  description: "Website Profil Resmi SMA Negeri 1 Grobogan untuk Tugas UTS Pemrograman Web UNNES",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-slate-50 text-slate-800 antialiased min-h-screen flex flex-col font-sans">
        {/* Navbar Wajib Terpasang di layout.js */}
        <Navbar />

        {/* Isi Halaman */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer Wajib Terpasang di layout.js */}
        <Footer />
      </body>
    </html>
  );
}