import Link from "next/link";
import { beritaList, infoSekolah } from "@/data/berita";
import BeritaCard from "@/components/BeritaCard";

export default function HomePage() {
  // Mengambil 3 berita terbaru sesuai ketentuan UTS nomor 1
  const beritaTerbaru = beritaList.slice(0, 3);

  return (
    <div>
      {/* 1. HERO / BANNER SEKOLAH (Tombol Sudah Dihapus) */}
      <section className="relative bg-slate-900 text-white py-16 px-6 lg:py-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Sisi Kiri: Teks & Slogan */}
          <div className="lg:w-2/3 space-y-4">
            <span className="bg-blue-600/30 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full border border-blue-400/30">
              Profil Resmi SMA Negeri 1 Grobogan
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {infoSekolah.nama}
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-amber-300 italic">
              "{infoSekolah.slogan}"
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Mewujudkan generasi yang berakhlak mulia, kreatif, kompetitif, optimis, dan berbudaya lingkungan. Dilengkapi Kelas Khusus Olahraga (KKO) dan 4 laboratorium komputer CAT.
            </p>
          </div>

          {/* Sisi Kanan: Kartu Profil & Logo Sekolah */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-xl text-center space-y-3">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-100 mx-auto flex items-center justify-center border-2 border-blue-400 shadow-md">
                <img
                  src="https://pbs.twimg.com/profile_images/1021199583337037824/gT7bm76S_400x400.jpg"
                  alt="Logo SMAN 1 Grobogan"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-bold text-white text-lg">SMANSAGAN Unggul</h3>
              <p className="text-xs text-slate-300">
                Terakreditasi A • NPSN: {infoSekolah.npsn}
              </p>
              <div className="pt-3 border-t border-slate-700 text-xs text-blue-300 leading-relaxed">
                Alamat: {infoSekolah.alamat}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SAMBUTAN SINGKAT KEPALA SEKOLAH */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-center">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-slate-200 shrink-0 border-4 border-blue-100 shadow-md">
            <img
              src="/images/kepala sekolah smansagan.jpg"
              alt="Kepala Sekolah"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              Sambutan Kepala Sekolah
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {infoSekolah.kepalaSekolah}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
              "Assalamu'alaikum Warahmatullahi Wabarakatuh. Puji syukur kita panjatkan ke hadirat Tuhan Yang Maha Esa. SMA Negeri 1 Grobogan berkomitmen membentuk insan pembelajar yang berkarakter Pancasila, berprestasi di kancah daerah hingga nasional, dan menjaga kelestarian lingkungan hidup."
            </p>
            <div className="pt-1">
              <Link href="/about" className="text-xs font-bold text-blue-600 hover:underline">
                Pelajari Profil Lengkap Kami &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INFORMASI SINGKAT TENTANG SEKOLAH */}
      <section className="py-6 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-blue-600 text-white p-5 rounded-xl shadow-sm">
            <div className="text-3xl font-extrabold">57</div>
            <div className="text-xs font-medium text-blue-100 mt-1">Tenaga Pendidik</div>
          </div>
          <div className="bg-blue-700 text-white p-5 rounded-xl shadow-sm">
            <div className="text-3xl font-extrabold">15.243+</div>
            <div className="text-xs font-medium text-blue-100 mt-1">Siswa Telah Lulus</div>
          </div>
          <div className="bg-blue-800 text-white p-5 rounded-xl shadow-sm">
            <div className="text-3xl font-extrabold">1.055</div>
            <div className="text-xs font-medium text-blue-100 mt-1">Siswa Aktif Saat Ini</div>
          </div>
          <div className="bg-blue-900 text-white p-5 rounded-xl shadow-sm">
            <div className="text-3xl font-extrabold">13</div>
            <div className="text-xs font-medium text-blue-100 mt-1">Ekstrakurikuler</div>
          </div>
        </div>
      </section>

      {/* 4. MINIMAL 3 BERITA TERBARU */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Berita Terbaru</h2>
            <p className="text-xs text-slate-500 mt-1">Kabar terkini dan prestasi SMAN 1 Grobogan</p>
          </div>
          <Link href="/berita" className="text-sm font-bold text-blue-600 hover:underline">
            Lihat Semua Berita &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {beritaTerbaru.map((berita) => (
            <BeritaCard key={berita.id} berita={berita} />
          ))}
        </div>
      </section>
    </div>
  );
}