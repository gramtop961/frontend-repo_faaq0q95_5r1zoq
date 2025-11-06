import { Cloud, Shield, Zap } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <div className="h-8 w-8 grid place-items-center rounded-md bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-white">
              <Cloud size={18} />
            </div>
            <span className="text-lg">ibz CDN</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#security" className="hover:text-slate-900 transition-colors">Security</a>
            <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-slate-600 px-2 py-1 rounded-md border border-slate-200">
              <Shield size={14} />
              Enterprise-ready
            </span>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <Zap size={16} />
              Launch Dashboard
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
