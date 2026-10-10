import { beritaList } from "@/data/berita";
import BeritaCard from "@/components/BeritaCard";

export default function BeritaPage() {
  return (
    <div className="py-12 px-6 max-w-6xl mx-auto space-y-8">
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Warta & Berita Sekolah
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Daftar berita kegiatan, prestasi KKO, dan pengumuman SMA Negeri 1 Grobogan
        </p>
      </div>

      {/* Grid Minimal 6 Berita Sesuai Syarat Dosen */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {beritaList.map((berita) => (
          <BeritaCard key={berita.id} berita={berita} />
        ))}
      </div>
    </div>
  );
}