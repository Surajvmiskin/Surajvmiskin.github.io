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

        <div class="pt-4 border-t border-white/10 flex items-center justify-between">
          ${project.github ? `
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-xl font-mono text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-cyan-400 transition-all flex items-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <span>View Source on GitHub</span>
            </a>
          ` : `<span></span>`}

          <button id="modal-dismiss-btn" class="px-5 py-2.5 rounded-xl font-mono text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-black transition-all">
            Close Deep Dive
          </button>
        </div>

      </div>
    </div>
  `;
}
