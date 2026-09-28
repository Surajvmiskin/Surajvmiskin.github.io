import { portfolioData } from '../data/portfolioData.js';

export function renderSkills() {
  const { skills, education } = portfolioData;

  const categoryCards = skills.map(cat => {
    const isPrimary = !!cat.isPrimary;
    const badgeStyle = isPrimary
      ? 'bg-cyan-950/40 text-cyan-200 border-cyan-500/30 hover:border-cyan-400 hover:text-white'
      : 'bg-carbon-900 text-slate-200 border-white/5 hover:border-cyan-500/30 hover:text-cyan-300';

    const badges = cat.items.map(item => `
      <span class="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-colors ${badgeStyle}">
        ${item}
      </span>
    `).join('');

    return `
      <div class="glass-card rounded-2xl p-6 ${isPrimary ? 'border-cyan-500/40 bg-cyan-950/15 shadow-xl shadow-cyan-500/5' : 'border-white/10'} space-y-4 relative overflow-hidden group">
        ${isPrimary ? '<div class="absolute -top-10 -right-10 w-28 h-28 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>' : ''}
        <div>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-bold text-white tracking-tight">${cat.category}</h3>
            ${isPrimary ? '<span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>PRIMARY FOCUS</span>' : ''}
          </div>
          <p class="text-xs text-slate-400 mt-1">${cat.description}</p>
        </div>

        <div class="flex flex-wrap gap-2 pt-2">
          ${badges}
        </div>
      </div>
    `;
  }).join('');

  return `
    <section id="skills" class="py-16 lg:py-24 relative">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        
        <!-- Header -->
        <div class="mb-12 space-y-2">
          <div class="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase">
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            Technical Competencies
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Systems, Tools & Architecture
          </h2>
          <p class="text-slate-400 text-sm sm:text-base max-w-xl">
            A comprehensive matrix categorized by domain rigor—from physical vehicle networks to neural architectures.
          </p>
        </div>

        <!-- Skills Grid -->
        <div class="grid md:grid-cols-2 gap-6">
          ${categoryCards}
        </div>

      </div>
    </section>
  `;
}
