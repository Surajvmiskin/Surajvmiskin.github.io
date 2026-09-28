import { portfolioData } from '../data/portfolioData.js';

export function renderExperience() {
  const { experience } = portfolioData;

  const items = experience.map((exp, index) => {
    const badgeColorClass = exp.badgeColor === 'cyan'
      ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
      : exp.badgeColor === 'amber'
      ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
      : 'bg-slate-500/10 text-slate-300 border-slate-500/30';

    const toolChips = exp.tools.map(t => `
      <span class="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono bg-carbon-900 text-slate-300 border border-white/5">
        ${t}
      </span>
    `).join('');

    const pointsList = exp.points.map(pt => `
      <li class="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
        <span class="text-cyan-400 mt-1">&bull;</span>
        <span>${pt}</span>
      </li>
    `).join('');

    return `
      <div class="relative pl-8 sm:pl-10 group">
        <!-- Timeline Marker -->
        <div class="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-carbon-900 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20"></div>

        <div class="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-3">
                <h3 class="text-lg sm:text-xl font-bold text-white tracking-tight">${exp.role}</h3>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${badgeColorClass}">
                  ${exp.badge}
                </span>
              </div>
              <div class="text-sm font-semibold text-cyan-400 mt-0.5">${exp.company}</div>
            </div>
            
            <div class="text-right font-mono text-xs text-slate-400">
              <div>${exp.duration}</div>
              <div class="text-slate-500">${exp.location}</div>
            </div>
          </div>

          <ul class="space-y-2 pt-1">
            ${pointsList}
          </ul>

          <div class="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
            ${toolChips}
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section id="experience" class="py-16 lg:py-24 relative">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        
        <!-- Section Header -->
        <div class="mb-12 space-y-2">
          <div class="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase">
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            Career Milestones
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry Experience & Impact
          </h2>
          <p class="text-slate-400 text-sm sm:text-base max-w-2xl">
            Direct track record in Tier-1 automotive validation, OEM pre-production vehicle diagnostics, and scalable Python data processing pipelines.
          </p>
        </div>

        <!-- Timeline Container -->
        <div class="relative border-l-2 border-white/10 ml-2 sm:ml-4 space-y-8">
          ${items}
        </div>

      </div>
    </section>
  `;
}
