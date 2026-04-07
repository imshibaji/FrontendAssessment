import Search from "./Search";

export default function Header() {
  return (
    <header className="relative mt-6 mb-16 mx-4 lg:mx-auto max-w-7xl">
      {/* Container with rounded corners and overflow hidden to clip the background */}
      <div 
        className="relative min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl flex items-center justify-center bg-slate-900"
        style={{ 
          backgroundImage: 'url("/images/background.jpg")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        {/* Advanced Gradient Overlay: Darker at the bottom for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90"></div>
        
        {/* Subtle Animated Glow Effect in the background */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-500/20 blur-[120px] rounded-full"></div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 py-20 flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Animated Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            New Spaces Available 2026
          </span>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 drop-shadow-2xl">
            Work where you <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-blue-200">belong.</span>
          </h1>
          
          <p className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl text-lg md:text-xl text-white/90 p-3 mb-10 max-w-2xl leading-relaxed drop-shadow-md font-normal">
            The curated directory of London's most inspiring serviced offices and coworking hubs.
          </p>
          
          {/* Glassmorphic Search Container */}
          <div className="w-full max-w-2xl p-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-2xl">
            <Search />
          </div>

          {/* Quick Stats/Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="text-indigo-300 font-bold">500+</span> Locations
            </div>
            <div className="flex items-center gap-2">
              <span className="text-indigo-300 font-bold">No</span> Booking Fees
            </div>
            <div className="flex items-center gap-2">
              <span className="text-indigo-300 font-bold">24h</span> Response
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}