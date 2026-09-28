import { portfolioData } from '../data/portfolioData.js';

export function renderSkills() {
  const { skills, education } = portfolioData;

  const categoryCards = skills.map(cat => {
    const badges = cat.items.map(item => `
      <span class="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-carbon-900 text-slate-200 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors">
        ${item}
      </span>
    `).join('');

    return `
      <div class="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
        <div>
          <h3 class="text-lg font-bold text-white tracking-tight flex items-center justify-between">
            <span>${cat.category}</span>
          </h3>
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
