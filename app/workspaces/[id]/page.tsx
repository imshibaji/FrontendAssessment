import { promises as fs } from 'fs';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getWorkspace(id: string) {
  // Ensure this path matches your project structure
  const file = await fs.readFile(process.cwd() + '/app/data/listings.json', 'utf8');
  const data = JSON.parse(file);
  return data.find((item: any) => item.id === id);
}

export default async function WorkspaceDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const workspace = await getWorkspace(id);

  if (!workspace) return notFound();

  const faqs = [
    { q: "What is included in the price?", a: "The monthly fee typically covers high-speed WiFi, utilities, cleaning, and access to communal areas like kitchens and lounges." },
    { q: "Can I book a viewing?", a: `Yes, contact ${workspace.advisor.name} at ${workspace.advisor.phone} to arrange a private tour of the facility.` },
    { q: "Are there flexible contract terms?", a: "Most of our spaces offer monthly rolling contracts, though longer commitments often secure a better rate." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      {/* 1. Header & Navigation */}
      <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-indigo-600 transition">Workspaces</Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white truncate max-w-[150px] md:max-w-none">{workspace.name}</span>
          </div>
          <Link href="/" className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
            ← All Listings
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-8">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-2">
            {/* Image Section */}
            <div className="relative aspect-[16/9] bg-slate-200 dark:bg-slate-800 rounded-[2rem] overflow-hidden shadow-2xl mb-8 group">
              {workspace.image_url ? (
                <img src={workspace.image_url} alt={workspace.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              ) : (
                <div className="flex items-center justify-center h-full text-slate-400 font-medium">Image coming soon</div>
              )}
              {workspace.featured && (
                <span className="absolute top-6 left-6 bg-indigo-600 text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                  Premium Listing
                </span>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                  {workspace.name}
                </h1>
                <p className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-lg">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  {workspace.address}
                </p>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">About the Space</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  {workspace.description}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Amenities</h2>
                <div className="flex flex-wrap gap-3">
                  {workspace.amenities.map((item: string) => (
                    <span key={item} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-xl text-sm font-medium shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div className="pt-12 border-t border-slate-200 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/50 shadow-sm">
                      <h3 className="font-bold text-slate-900 dark:text-white mb-2 italic">Q: {faq.q}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Floating Contact Card) */}
          <div className="lg:relative">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 dark:shadow-none">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Monthly Cost</p>
                    <p className="text-4xl font-black text-indigo-600 dark:text-indigo-400">
                      {workspace.price_per_desk ? `£${workspace.price_per_desk}` : 'POA'}
                      <span className="text-base font-medium text-slate-400 dark:text-slate-500">/desk</span>
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Space Type</span>
                    <span className="font-bold text-slate-900 dark:text-white">{workspace.type}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Max Capacity</span>
                    <span className="font-bold text-slate-900 dark:text-white">{workspace.desks} Desks</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Available From</span>
                    <span className="font-bold text-slate-900 dark:text-white">{new Date(workspace.available_from).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-800/50 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                      {workspace.advisor.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-tight">Dedicated Advisor</p>
                      <p className="font-bold text-slate-900 dark:text-white">{workspace.advisor.name}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 font-medium">{workspace.advisor.phone}</p>
                </div>

                <button className="w-full bg-slate-900 dark:bg-indigo-600 text-white py-5 rounded-[1.25rem] font-black text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-indigo-500/20">
                  Request a Viewing
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}