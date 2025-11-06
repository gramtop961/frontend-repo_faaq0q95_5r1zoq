import { FolderOpen, Link, Pencil, Trash2, Download } from "lucide-react";

const features = [
  {
    icon: FolderOpen,
    title: "Visual previews",
    desc: "Instant thumbnails and media viewers for images, video, and audio.",
  },
  {
    icon: Download,
    title: "One-click downloads",
    desc: "Grab originals or optimized versions in a single click.",
  },
  {
    icon: Pencil,
    title: "Rename safely",
    desc: "Batch rename with conflict detection and automatic redirects.",
  },
  {
    icon: Trash2,
    title: "Recoverable deletes",
    desc: "Soft-delete with retention windows and audit logs.",
  },
  {
    icon: Link,
    title: "Copy share links",
    desc: "Beautiful, short links with expiring tokens and usage stats.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Everything you need to operate a fast, clean media pipeline</h2>
          <p className="mt-3 text-slate-600">A streamlined dashboard that lets you preview, download, rename, delete, and share — without switching tools.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/15 to-fuchsia-500/15 text-cyan-600 group-hover:from-cyan-500/20 group-hover:to-fuchsia-500/20">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
