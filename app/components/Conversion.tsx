export default function Conversion() {
    return (
        <section className="my-20 bg-indigo-600 rounded-[3rem] p-12 text-center text-white shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -mr-20 -mt-20"></div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Can't find the perfect space?</h2>
            <p className="text-indigo-100 mb-8 max-w-xl mx-auto text-lg">
                Our advisors have access to "off-market" suites and can negotiate the best rates on your behalf. Free of charge.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-black text-lg hover:bg-indigo-50 transition shadow-xl">
                Speak to an Advisor
            </button>
        </section>
    );
}