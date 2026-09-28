import { portfolioData } from '../data/portfolioData.js';

export function renderFooter() {
  const { personal } = portfolioData;

  return `
    <footer class="border-t border-white/10 bg-carbon-950 py-12 text-xs font-mono text-slate-400">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div class="flex items-center gap-3">
          <img src="/favicon.svg" alt="Suraj Vinod Miskin Logo" class="w-8 h-8 rounded-lg shadow-sm" />
          <div>
            <div class="text-slate-200 font-semibold">${personal.name}</div>
            <div class="text-slate-500 text-[11px]">&copy; ${new Date().getFullYear()}</div>
          </div>
        </div>

        <div class="flex items-center gap-6">
          <a href="#hero" class="hover:text-cyan-400 transition-colors">Back to Top &uarr;</a>
          <a href="${personal.github}" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-400 transition-colors">GitHub</a>
          <a href="${personal.linkedin}" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-400 transition-colors">LinkedIn</a>
          <a href="mailto:${personal.email}" class="hover:text-cyan-400 transition-colors">Email</a>
        </div>

      </div>
    </footer>
  `;
}
