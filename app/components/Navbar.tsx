import Link from "next/link";

export default function Navbar({name}: {name: string}) {
    return (
        <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              <Link href="/" className="hover:text-indigo-600 transition">Workspaces</Link>
              <span>/</span>
              <span className="text-slate-900 dark:text-white truncate max-w-[150px] md:max-w-none">{name}</span>
            </div>
            <Link href="/" className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
              ← All Listings
            </Link>
          </div>
        </nav>
    );
}