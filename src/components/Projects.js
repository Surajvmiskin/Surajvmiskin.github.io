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

          <div class="pt-2">
            <button data-project-id="${p.id}" class="view-project-modal w-full py-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/10 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 border border-white/5 hover:border-cyan-500/30 flex items-center justify-center gap-2 transition-all">
              <span>Deep Dive Architecture</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
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
              From Python test automation harnesses and CustomTkinter GUI suites to deep learning intrusion detection published on IEEE Xplore.
            </p>
          </div>

          <!-- Category Filter Tabs -->
          <div class="flex items-center bg-carbon-900/90 p-1 rounded-xl border border-white/10 text-xs font-mono self-start md:self-auto overflow-x-auto">
            <button data-cat="all" class="project-filter-btn px-3 py-1.5 rounded-lg transition-all ${currentFilter === 'all' ? 'bg-cyan-500 text-black font-semibold' : 'text-slate-400 hover:text-white'}">
              All
            </button>
            <button data-cat="python" class="project-filter-btn px-3 py-1.5 rounded-lg transition-all ${currentFilter === 'python' ? 'bg-cyan-500 text-black font-semibold' : 'text-slate-400 hover:text-white'}">
              Python & Automation
            </button>
            <button data-cat="ai" class="project-filter-btn px-3 py-1.5 rounded-lg transition-all ${currentFilter === 'ai' ? 'bg-cyan-500 text-black font-semibold' : 'text-slate-400 hover:text-white'}">
              AI / Deep Learning
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
