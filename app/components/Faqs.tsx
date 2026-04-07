export default function Faqs(){
    return(
        <section className="max-w-4xl mx-auto pt-20 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem 
                q="What is a serviced office in London?" 
                a="A serviced office is a fully managed workspace where the provider handles all utilities, cleaning, and maintenance, allowing you to move in and start working immediately." 
            />
            <FAQItem 
                q="How long are the contract terms?" 
                a="Contracts are highly flexible, ranging from monthly rolling agreements to 12-24 month fixed terms for larger teams." 
            />
            <FAQItem 
                q="Is furniture included?" 
                a="Yes, most serviced offices come with ergonomic desks, chairs, and storage as standard, though you can often bring your own branding." 
            />
          </div>
        </section>
    );
}

function FAQItem({ q, a }: { q: string, a: string }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
      <h3 className="font-bold text-slate-900 dark:text-white mb-2">{q}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{a}</p>
    </div>
  );
}