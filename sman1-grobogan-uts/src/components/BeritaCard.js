import Link from "next/link";

export default function BeritaCard({ berita }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        {/* Gambar Berita */}
        <div className="aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={berita.gambar}
            alt={berita.judul}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Konten Berita */}
        <div className="p-5 space-y-2">
          <div className="text-xs text-slate-400">
            {berita.tanggal}
          </div>
          <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2">
            {berita.judul}
          </h3>
          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
            {berita.ringkasan}
          </p>
        </div>
      </div>

      {/* Tombol Baca Selengkapnya */}
      <div className="p-5 pt-0">
        <Link
          href={`/berita/${berita.id}`}
          className="inline-block text-blue-600 hover:text-blue-800 font-semibold text-xs"
        >
          Baca Selengkapnya &rarr;
        </Link>
      </div>
    </div>
  );
}