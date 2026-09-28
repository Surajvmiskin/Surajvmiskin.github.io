import { portfolioData } from '../data/portfolioData.js';

export function renderPublication() {
  const { publication } = portfolioData;

  const tagChips = publication.tags.map(t => `
    <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
      ${t}
    </span>
  `).join('');

  return `
    <section id="publication" class="py-16 lg:py-24 relative overflow-hidden">
      <!-- Glow Accent -->
      <div class="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        
        <div class="glass-card spotlight-card rounded-3xl p-8 lg:p-12 border border-cyan-500/30 relative overflow-hidden shadow-2xl">
          <!-- Top Badge Ribbon -->
          <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              <svg class="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <span>Peer-Reviewed Research Publication</span>
            </div>

            <span class="text-xs font-mono text-slate-400">
              Indexed on <strong class="text-slate-200">${publication.publisher}</strong> &bull; ${publication.date}
            </span>
          </div>

          <h3 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug mb-4">
            ${publication.title}
          </h3>

          <div class="font-mono text-xs sm:text-sm text-cyan-400 mb-6 flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
            <span>${publication.conference}</span>
          </div>

          <div class="bg-carbon-900/90 rounded-2xl p-6 border border-white/5 space-y-3 mb-6">
            <div class="text-xs font-mono uppercase text-slate-400 tracking-wider">Research Abstract Summary</div>
            <p class="text-slate-300 text-sm leading-relaxed">
              ${publication.abstract}
            </p>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-white/10">
            <div class="flex flex-wrap gap-2">
              ${tagChips}
            </div>

            <a href="${publication.doiLink}" target="_blank" rel="noopener noreferrer" class="px-6 py-3 rounded-xl font-mono text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-all flex items-center gap-2">
              <span>View on IEEE Xplore</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>

        </div>

      </div>
    </section>
  `;
}
