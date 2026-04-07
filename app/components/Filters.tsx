'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Filters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const updateFilter = useDebouncedCallback((name: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) params.set(name, value);
    else params.delete(name);
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  const clearFilters = () => replace(pathname);

  const inputStyle = "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-full text-slate-900 dark:text-slate-100";

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Type Filter */}
        <select className={inputStyle} onChange={(e) => updateFilter('type', e.target.value)} defaultValue={searchParams.get('type') || ""}>
          <option value="">All Office Types</option>
          <option value="Serviced Office">Serviced Office</option>
          <option value="Coworking">Coworking</option>
          <option value="Managed Office">Managed Office</option>
        </select>

        {/* Area Filter */}
        <select className={inputStyle} onChange={(e) => updateFilter('area', e.target.value)} defaultValue={searchParams.get('area') || ""}>
          <option value="">All Areas</option>
          <option value="Bloomsbury">Bloomsbury</option>
          <option value="Shoreditch">Shoreditch</option>
          <option value="Mayfair">Mayfair</option>
          <option value="Canary Wharf">Canary Wharf</option>
        </select>

        {/* Budget Filter */}
        <select className={inputStyle} onChange={(e) => updateFilter('budget', e.target.value)} defaultValue={searchParams.get('budget') || ""}>
          <option value="">Max Price per Desk</option>
          <option value="400">Under £400</option>
          <option value="600">Under £600</option>
          <option value="800">Under £800</option>
        </select>

        {/* Desks Filter */}
        <select className={inputStyle} onChange={(e) => updateFilter('desks', e.target.value)} defaultValue={searchParams.get('desks') || ""}>
          <option value="">Min Desks Needed</option>
          <option value="5">5+ Desks</option>
          <option value="10">10+ Desks</option>
          <option value="20">20+ Desks</option>
        </select>
      </div>
      
      {searchParams.toString() && (
        <button onClick={clearFilters} className="mt-4 text-xs font-bold text-indigo-600 uppercase tracking-widest hover:underline">
          Clear All Filters ×
        </button>
      )}
    </div>
  );
}