import Link from "next/link";
import { beritaList } from "@/data/berita";
import { notFound } from "next/navigation";

export default async function BeritaDetailPage({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  const berita = beritaList.find((b) => String(b.id) === String(id));

  if (!berita) {
    return notFound();
  }

  // Ambil isi paragraf secara aman (bisa dari berita.isi atau berita.konten)
  const listParagraf = Array.isArray(berita?.isi)
    ? berita.isi
    : Array.isArray(berita?.konten)
    ? berita.konten
    : [berita?.isi || berita?.konten || ""];

  return (
    <div className="py-12 px-6 max-w-3xl mx-auto space-y-6">
      {/* Tombol [Kembali ke Berita] Sesuai Format Dosen */}
      <div>
        <Link
          href="/berita"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
        >
          &larr; [Kembali ke Berita]
        </Link>
      </div>

      <article className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        {/* Judul Berita */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
          {berita.judul}
        </h1>

        {/* Tanggal & Penulis */}
        <div className="text-xs text-slate-500 border-b border-slate-100 pb-3">
          Dipublikasikan pada: <span className="font-semibold text-slate-700">{berita.tanggal}</span> • Oleh {berita.penulis}
        </div>

        {/* Gambar Berita */}
        <div className="aspect-[16/9] overflow-hidden rounded-xl bg-slate-100">
          <img
            src={berita.gambar}
            alt={berita.judul}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Isi Berita (Aman dari error .map) */}
        <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
          {berita.ringkasan && (
            <p className="font-medium text-slate-900 italic bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              {berita.ringkasan}
            </p>
          )}

          {listParagraf.map((paragraf, idx) => (
            paragraf ? <p key={idx}>{paragraf}</p> : null
          ))}
        </div>

        {/* Tombol Kembali di Bagian Bawah */}
        <div className="pt-6 border-t border-slate-100 text-center">
          <Link
            href="/berita"
            className="inline-block bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            [Kembali ke Berita]
          </Link>
        </div>
      </article>
    </div>
  );
}