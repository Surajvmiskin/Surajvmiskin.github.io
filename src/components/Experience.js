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
      <li class="flex items-start gap-3 text-slate-200 text-sm sm:text-[14px] leading-relaxed group/item">
        <span class="w-4 h-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover/item:border-cyan-400 group-hover/item:bg-cyan-500/20 transition-colors">
          <svg class="w-2.5 h-2.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>
        </span>
        <span class="text-slate-300 group-hover/item:text-slate-100 transition-colors">${pt}</span>
      </li>
    `).join('');

    return `
      <div class="relative pl-8 sm:pl-10 group">
        <!-- Timeline Marker Circle (Center mathematically at x=8px on the 2px spine line) -->
        <div class="absolute left-0 top-7 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0B0F19] border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300 flex items-center justify-center z-10">
          <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-[#070A0F] transition-colors"></span>
        </div>

        <div class="glass-card spotlight-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/30 transition-all space-y-5">
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

          <ul class="space-y-2.5 pt-1">
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

        <!-- Timeline Container with Centered Continuous Spine Line -->
        <div class="relative ml-2 sm:ml-4 space-y-8">
          <!-- Continuous Spine Line passing exactly through circle centers (x=8px) -->
          <div class="absolute left-[7px] top-7 bottom-7 w-[2px] bg-slate-800/80 pointer-events-none"></div>

          ${items}
        </div>

      </div>
    </section>
  `;
}
