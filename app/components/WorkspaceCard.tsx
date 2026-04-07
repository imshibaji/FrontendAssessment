import Link from 'next/link';

export default function WorkspaceCard({ workspace }: { workspace: any }) {
  return (
    <div className="group border border-slate-200 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-slate-900 flex flex-col">
      
      {/* Image Section */}
      <div className="h-56 bg-slate-100 dark:bg-slate-950 relative overflow-hidden">
        {workspace.image_url ? (
          <img 
            src={workspace.image_url} 
            alt={workspace.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        ) : (
          <div className="flex items-center justify-center h-full text-slate-400 italic text-sm">
            No Image Available
          </div>
        )}
        
        {/* Modern Featured Badge */}
        {workspace.featured && (
          <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-amber-200 dark:border-amber-500/30 text-amber-600 dark:text-amber-400 text-[10px] uppercase tracking-widest font-black px-2.5 py-1 rounded-lg shadow-sm">
            ✨ Featured
          </div>
        )}

        {/* Workspace Type Overlay */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-slate-900/60 backdrop-blur-sm text-white text-[11px] px-2 py-1 rounded-md">
            {workspace.type}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {workspace.name}
          </h3>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            {workspace.area} • <span className="opacity-75">{workspace.borough}</span>
          </p>
        </div>

        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <div>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold tracking-wider">Monthly</p>
            <p className="text-2xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight">
              {workspace.price_per_desk ? `£${workspace.price_per_desk}` : 'POA'}
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500 ml-1">/desk</span>
            </p>
          </div>

          <Link 
            href={`/workspaces/${workspace.id}`}
            className="inline-flex items-center justify-center bg-slate-900 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95 shadow-lg shadow-indigo-500/10"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}