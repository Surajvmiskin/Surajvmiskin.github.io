import { portfolioData } from '../data/portfolioData.js';

export function renderProjectModal(projectId) {
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return '';

  const tags = project.tags.map(t => `
    <span class="px-2.5 py-1 rounded-md text-xs font-mono bg-carbon-900 text-cyan-300 border border-cyan-500/20">
      ${t}
    </span>
  `).join('');

  return `
    <div id="modal-backdrop" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div class="glass-card max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-cyan-500/30 relative space-y-6 max-h-[90vh] overflow-y-auto">
        
        <!-- Close Button -->
        <button id="modal-close-btn" class="absolute top-6 right-6 p-2 rounded-xl bg-carbon-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400 transition-all">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <div>
          <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-2">
            ${project.categoryLabel}
          </div>
          <h3 class="text-2xl font-bold text-white tracking-tight pr-10">${project.title}</h3>
        </div>

        <div class="space-y-4 text-sm text-slate-300">
          <div class="bg-carbon-900/90 rounded-2xl p-4 border border-white/5 space-y-1">
            <h4 class="text-xs font-mono text-rose-400 uppercase tracking-wider">The Technical Challenge / Problem</h4>
            <p class="leading-relaxed text-xs sm:text-sm text-slate-200">${project.problem}</p>
          </div>

          <div class="bg-carbon-900/90 rounded-2xl p-4 border border-white/5 space-y-1">
            <h4 class="text-xs font-mono text-cyan-400 uppercase tracking-wider">Engineering Architecture / Solution</h4>
            <p class="leading-relaxed text-xs sm:text-sm text-slate-200">${project.solution}</p>
          </div>

          <div class="bg-carbon-900/90 rounded-2xl p-4 border border-white/5 space-y-1">
            <h4 class="text-xs font-mono text-emerald-400 uppercase tracking-wider">Verified Outcome / Impact</h4>
            <p class="leading-relaxed text-xs sm:text-sm text-slate-200">${project.impact}</p>
          </div>
        </div>

        <div class="pt-2">
          <div class="text-xs font-mono text-slate-400 mb-2">Technology Stack:</div>
          <div class="flex flex-wrap gap-2">
            ${tags}
          </div>
        </div>

        <div class="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div>
            ${project.paperUrl ? `
              <a href="${project.paperUrl}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-xl font-mono text-xs font-semibold bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-black border border-cyan-500/40 transition-all flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                <span>Read on IEEE Xplore</span>
              </a>
            ` : ''}
          </div>

          <button id="modal-dismiss-btn" class="px-5 py-2.5 rounded-xl font-mono text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-black transition-all">
            Close Deep Dive
          </button>
        </div>

      </div>
    </div>
  `;
}
