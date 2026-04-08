export default function ContactCard({ contact }: { contact: any }) {
    return (
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-800/50 mb-6">
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                    {contact.name.charAt(0)}
                </div>
                <div>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-tight">Dedicated Advisor</p>
                    <p className="font-bold text-slate-900 dark:text-white">{contact.name}</p>
                </div>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 font-medium">{contact.phone}</p>
        </div>
    );
}