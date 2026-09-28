export function renderNavbar() {
  return `
    <header class="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10 px-4 lg:px-8 py-3.5 transition-all duration-300 shadow-xl shadow-black/30">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        
        <!-- Brand & Status -->
        <a href="#hero" class="flex items-center gap-3 group">
          <img src="/favicon.svg" alt="Suraj Vinod Miskin Logo" class="w-10 h-10 rounded-xl shadow-lg shadow-cyan-500/20 group-hover:scale-105 group-hover:shadow-cyan-400/40 transition-all" />
          <div>
            <div class="font-bold text-slate-100 tracking-tight flex items-center gap-2">
              <span>Suraj Vinod Miskin</span>
              <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5"></span>Tata Elxsi
              </span>
            </div>
            <p class="text-xs text-slate-400 font-mono hidden sm:block">Python Automation &bull; ADAS &bull; Applied AI</p>
          </div>
        </a>

        <!-- Right: Resume Action -->
        <div class="flex items-center gap-4">
          <a href="/Suraj_Vinod_Miskin_Resume.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-black border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            Resume (PDF)
          </a>
        </div>

      </div>
    </header>
  `;
}
