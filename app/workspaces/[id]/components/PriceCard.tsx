"use client";
import ContactCard from "@/app/components/ContactCard";
import SpaceDetails from "./PriceDetails";

export default function PriceCard({ws}: {ws: any}) {
    const handleClick = () => {
        window.location.href = `tel:${ws.phone}`;
    }
    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 dark:shadow-none">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Monthly Cost</p>
                    <p className="text-4xl font-black text-indigo-600 dark:text-indigo-400">
                        {ws.price_per_desk ? `£${ws.price_per_desk}` : 'POA'}
                        <span className="text-base font-medium text-slate-400 dark:text-slate-500">/desk</span>
                    </p>
                </div>
            </div>

            <SpaceDetails ws={ws} />

            <ContactCard contact={ws.advisor} />

            <button onClick={() => handleClick()} className="w-full bg-slate-900 dark:bg-indigo-600 text-white py-5 rounded-[1.25rem] font-black text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-indigo-500/20">
                Call for Viewing Advisor
            </button>
        </div>
    );
}