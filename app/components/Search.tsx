'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce'; // Recommended for performance

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Debouncing prevents the server from re-fetching on every single keystroke
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  return (
    <div className="relative w-full group">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg 
          className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <input
        type="text"
        className="w-full block bg-white/95 dark:bg-slate-900/90 backdrop-blur-md 
                   py-4 pl-12 pr-4 
                   text-slate-900 dark:text-white 
                   placeholder:text-slate-400 
                   rounded-2xl border-none
                   shadow-inner ring-1 ring-slate-200 dark:ring-slate-700
                   focus:ring-2 focus:ring-indigo-500 focus:outline-none
                   transition-all duration-200"
        placeholder="Search by area, borough, or office name..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />

      {/* Subtle keyboard shortcut indicator (Visual only) */}
      <div className="hidden md:flex absolute inset-y-0 right-0 items-center pr-4 pointer-events-none">
        <kbd className="px-2 py-1 text-xs font-semibold text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg">
          /
        </kbd>
      </div>
    </div>
  );
}