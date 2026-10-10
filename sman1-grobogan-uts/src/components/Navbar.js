import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo & Nama Sekolah */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo Resmi SMA Negeri 1 Grobogan */}
          <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
            <img
              src="https://pbs.twimg.com/profile_images/1021199583337037824/gT7bm76S_400x400.jpg"
              alt="Logo SMAN 1 Grobogan"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>

          <div>
            <span className="font-extrabold text-slate-900 text-base block leading-tight group-hover:text-blue-700 transition-colors">
              SMA NEGERI 1 GROBOGAN
            </span>
            <span className="text-[11px] text-blue-600 font-medium italic">
              "Selalu Ada Harapan Saat Matahari Terbit"
            </span>
          </div>
        </Link>

        {/* Menu Navigasi */}
        <div className="flex items-center gap-6 text-sm font-semibold text-slate-600">
          <Link href="/" className="hover:text-blue-700 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-700 transition-colors">
            About
          </Link>
          <Link href="/berita" className="hover:text-blue-700 transition-colors">
            Berita
          </Link>
        </div>
      </div>
    </nav>
  );
}