import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Live CDN for modern teams
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
            Manage, deliver, and accelerate your media in one place
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600">
            ibz CDN is a centralized platform for managing and delivering media assets. Preview, download, rename, delete, and copy links with a clean, organized dashboard.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400">
              Get started free
              <ArrowRight size={16} />
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 bg-white/80 backdrop-blur hover:bg-white">
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
