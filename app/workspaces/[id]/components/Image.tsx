export default function Image({ ws }: { ws: any }) {
    return (
        <div className="relative aspect-[16/9] bg-slate-200 dark:bg-slate-800 rounded-[2rem] overflow-hidden shadow-2xl mb-8 group">
            {ws.image_url ? (
                <img src={ws.image_url} alt={ws.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            ) : (
                <div className="flex items-center justify-center h-full text-slate-400 font-medium">Image coming soon</div>
            )}
            {ws.featured && (
                <span className="absolute top-6 left-6 bg-indigo-600 text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                    Premium Listing
                </span>
            )}
        </div>
    );
}