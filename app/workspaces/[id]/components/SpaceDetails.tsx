import Badges from "@/app/components/Badges";
import { FAQItem } from "@/app/components/Faqs";

export default function SpaceDetails({ ws, faqs }: { ws: any, faqs: any }) {
    return (
        <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                    {ws.name}
                  </h1>
                  <p className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-lg">
                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {ws.address}
                  </p>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">About the Space</h2>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    {ws.description}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Amenities</h2>
                  <Badges items={ws.amenities} />
                </div>

                {/* FAQ Section */}
                <div className="pt-12 border-t border-slate-200 dark:border-slate-800">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq: any, idx: number) => (
                      <FAQItem key={idx} q={faq.q} a={faq.a} />
                    ))}
                  </div>
                </div>
              </div>
    );
}