import { portfolioData } from '../data/portfolioData.js';

export function renderProjects(currentFilter = 'all') {
  const { projects } = portfolioData;

  const filtered = currentFilter === 'all' 
    ? projects 
    : currentFilter === 'python'
    ? projects.filter(p => p.category === 'python')
    : projects.filter(p => p.category !== 'python');

  const cards = filtered.map((p) => {
    const tags = p.tags.slice(0, 5).map(t => `
      <span class="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono bg-carbon-900/90 text-slate-300 border border-white/5">
        ${t}
      </span>
    `).join('');

    return `
      <div class="glass-card spotlight-card rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/40 flex flex-col justify-between group transition-all duration-300">
        
        <div>
          <!-- Header Meta -->
          <div class="flex items-center justify-between gap-3 mb-4">
            <span class="text-xs font-mono text-cyan-400 font-semibold tracking-wide uppercase flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              ${p.categoryLabel}
            </span>
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              ${p.badge}
            </span>
          </div>

          <!-- Title -->
          <h3 class="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2.5 group-hover:text-cyan-300 transition-colors">
            ${p.title}
          </h3>

          <!-- Concise Punchy Summary -->
          <p class="text-slate-300 text-sm leading-relaxed mb-4 font-normal">
            ${p.shortDesc}
          </p>

          <!-- High-Impact Outcome Chip -->
          <div class="p-3.5 rounded-2xl bg-carbon-900/80 border border-white/5 text-xs font-mono text-slate-300 mb-5 flex items-start gap-2">
            <span class="text-cyan-400 font-bold flex-shrink-0">&gt; Impact:</span>
            <span class="leading-relaxed">${p.impact}</span>
          </div>
        </div>

        <div>
          <!-- Tech Tags -->
          <div class="flex flex-wrap gap-1.5 pt-3 border-t border-white/5 mb-5">
            ${tags}
          </div>

          <!-- Action Trigger -->
          <button data-project-id="${p.id}" class="view-project-modal w-full py-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/15 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 flex items-center justify-center gap-2 transition-all">
            <span>Explore Architecture</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>

      </div>
    `;
  }).join('');

  return `
    <section id="projects" class="py-16 lg:py-24 relative">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div class="space-y-2">
            <div class="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              Engineering Portfolio
            </div>
            <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Systems & Research
            </h2>
            <p class="text-slate-400 text-sm sm:text-base max-w-xl">
              Production test automation harnesses, CustomTkinter tools, and peer-reviewed deep learning architectures.
            </p>
          </div>

          <!-- Minimal Category Tabs -->
          <div class="flex items-center bg-carbon-900/90 p-1.5 rounded-2xl border border-white/10 text-xs font-mono self-start md:self-auto overflow-x-auto shadow-lg">
            <button data-cat="all" class="project-filter-btn px-4 py-2 rounded-xl transition-all ${currentFilter === 'all' ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20' : 'text-slate-400 hover:text-white'}">
              All Systems
            </button>
            <button data-cat="python" class="project-filter-btn px-4 py-2 rounded-xl transition-all ${currentFilter === 'python' ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20' : 'text-slate-400 hover:text-white'}">
              Python & Automation
            </button>
            <button data-cat="ai" class="project-filter-btn px-4 py-2 rounded-xl transition-all ${currentFilter === 'ai' ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20' : 'text-slate-400 hover:text-white'}">
              AI & Embedded
            </button>
          </div>
        </div>

        <!-- Bento Grid Layout -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${cards}
        </div>

      </div>
    </section>
  `;
}
