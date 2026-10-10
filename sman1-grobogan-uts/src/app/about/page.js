import { infoSekolah } from "@/data/berita";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="py-12 px-6 max-w-5xl mx-auto space-y-10">
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Tentang {infoSekolah.nama}
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Profil Sekolah, Sejarah, Visi, Misi, dan Alamat Resmi
        </p>
      </div>

      {/* Profil Sekolah */}
      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl font-bold text-slate-900">Profil Sekolah</h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          SMA Negeri 1 Grobogan (SMANSAGAN) didirikan untuk memberikan pendidikan menengah atas berkualitas prima bagi generasi muda di Kabupaten Grobogan, Jawa Tengah. Sekolah ini memadukan kurikulum nasional, penguatan karakter budi pekerti, pembinaan olahraga melalui Kelas Khusus Olahraga (KKO), serta gerakan cinta lingkungan (Adiwiyata).
        </p>
      </section>

      {/* Sejarah Singkat */}
      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl font-bold text-slate-900">Sejarah Singkat</h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          Berdiri di kawasan Jalan Pangeran Puger yang sarat sejarah, SMA Negeri 1 Grobogan telah melayani masyarakat selama puluhan tahun. Dari angkatan pertama hingga saat ini, sekolah telah meluluskan lebih dari 15.000 alumni yang kini berkiprah di berbagai perguruan tinggi negeri terkemuka, institusi pemerintah, TNI/Polri, serta dunia wirausaha.
        </p>
      </section>

      {/* Visi dan Misi */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-sm space-y-3">
          <h2 className="text-xl font-bold text-amber-300">Visi Sekolah</h2>
          <p className="text-sm italic leading-relaxed">
            "{infoSekolah.visi}"
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
          <h2 className="text-xl font-bold text-slate-900">Misi Sekolah</h2>
          <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc list-inside">
            {infoSekolah.misi.map((m, idx) => (
              <li key={idx} className="leading-relaxed">{m}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Alamat Sekolah */}
      <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl font-bold text-slate-900">Alamat & Kontak Sekolah</h2>
        <div className="text-sm text-slate-700 space-y-1">
          <p><strong>Alamat:</strong> {infoSekolah.alamat}</p>
          <p><strong>Telepon:</strong> {infoSekolah.telepon}</p>
          <p><strong>Email:</strong> {infoSekolah.email}</p>
          <p><strong>Akreditasi:</strong> Terakreditasi A (Unggul)</p>
        </div>
        <div className="pt-2">
          <Link href="/berita" className="text-sm font-bold text-blue-600 hover:underline">
            &larr; Lihat Halaman Berita Sekolah
          </Link>
        </div>
      </section>
    </div>
  );
}