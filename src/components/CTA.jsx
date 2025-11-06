import { ArrowRightCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Ship your next launch with ibz CDN</h3>
              <p className="mt-2 text-slate-600">Start free, then scale with predictable pricing and enterprise-grade security. Bring your own domain, custom cache rules, and advanced analytics.</p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                Create your account
                <ArrowRightCircle size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
