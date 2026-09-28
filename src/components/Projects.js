import { portfolioData } from '../data/portfolioData.js';

export function renderProjects(currentFilter = 'all') {
  const { projects } = portfolioData;

  const filtered = currentFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === currentFilter);

  const cards = filtered.map(p => {
    const badgeColorClass = p.badgeColor === 'cyan'
      ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
      : p.badgeColor === 'amber'
      ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
      : 'bg-slate-500/10 text-slate-300 border-slate-500/30';

    const tags = p.tags.map(t => `
      <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono bg-carbon-900 text-slate-300 border border-white/5">
        ${t}
      </span>
    `).join('');

    return `
      <div class="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between group hover:border-cyan-500/40 transition-all">
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="text-xs font-mono text-cyan-400 font-medium">${p.categoryLabel}</span>
            <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-mono border ${badgeColorClass}">
              ${p.badge}
            </span>
          </div>

          <h3 class="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
            ${p.title}
          </h3>

          <p class="text-slate-300 text-sm leading-relaxed mb-4">
            ${p.shortDesc}
          </p>

          <div class="p-3 rounded-xl bg-carbon-900/80 border border-white/5 text-xs font-mono text-slate-300 space-y-1.5 mb-4">
            <div><span class="text-cyan-400">Impact:</span> ${p.impact}</div>
          </div>
        </div>

        <div>
          <div class="flex flex-wrap gap-1.5 pt-3 border-t border-white/5 mb-4">
            ${tags}
          </div>

          <div class="flex items-center justify-between pt-2">
            <button data-project-id="${p.id}" class="view-project-modal text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
              <span>Deep Dive</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            </button>

            ${p.github ? `
              <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white text-xs font-mono flex items-center gap-1 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>Code</span>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section id="projects" class="py-16 lg:py-24 relative">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div class="space-y-2">
            <div class="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              Engineering Portfolio
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Systems & Research
            </h2>
            <p class="text-slate-400 text-sm sm:text-base max-w-xl">
              From deep learning anomaly detection published on IEEE Xplore to real-time ADAS trace RAG pipelines.
            </p>
          </div>

          <!-- Category Filter Tabs -->
          <div class="flex items-center bg-carbon-900/90 p-1 rounded-xl border border-white/10 text-xs font-mono self-start md:self-auto overflow-x-auto">
            <button data-cat="all" class="project-filter-btn px-3 py-1.5 rounded-lg transition-all ${currentFilter === 'all' ? 'bg-cyan-500 text-black font-semibold' : 'text-slate-400 hover:text-white'}">
              All
            </button>
            <button data-cat="automotive" class="project-filter-btn px-3 py-1.5 rounded-lg transition-all ${currentFilter === 'automotive' ? 'bg-cyan-500 text-black font-semibold' : 'text-slate-400 hover:text-white'}">
              Automotive / ADAS
            </button>
            <button data-cat="ai" class="project-filter-btn px-3 py-1.5 rounded-lg transition-all ${currentFilter === 'ai' ? 'bg-cyan-500 text-black font-semibold' : 'text-slate-400 hover:text-white'}">
              AI / GenAI
            </button>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${cards}
        </div>

      </div>
    </section>
  `;
}
