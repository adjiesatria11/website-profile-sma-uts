import { infoSekolah } from "@/data/berita";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 px-6 border-t border-slate-800 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
        <div className="space-y-2">
          <h3 className="text-white font-bold text-base">
            {infoSekolah.nama}
          </h3>
          <p className="text-slate-400 text-xs leading-relaxed max-w-md">
            Mencetak insan unggul yang berakhlak mulia, berprestasi dalam sains dan olahraga, serta berwawasan lingkungan hidup.
          </p>
        </div>

        <div className="space-y-1 md:text-right">
          <h4 className="text-white font-semibold">Alamat Sekolah</h4>
          <p className="text-slate-400">{infoSekolah.alamat}</p>
          <p className="text-slate-400">Telepon: {infoSekolah.telepon} • Email: {infoSekolah.email}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-slate-800 text-center text-xs text-slate-500">
        © 2026 {infoSekolah.nama}. Tugas UTS Pemrograman Web UNNES.
      </div>
    </footer>
  );
}