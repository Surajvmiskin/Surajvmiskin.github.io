import { portfolioData } from '../data/portfolioData.js';

export function renderEducation() {
  const { education } = portfolioData;

  const honors = [
    {
      title: "Undergraduate Research Trainee",
      date: "May 2024",
      org: "KLE Technological University",
      desc: "Selected for intensive undergraduate engineering research focused on intelligent cyber-physical systems.",
      badge: "Research"
    },
    {
      title: "Anaconda Product Review",
      date: "June 2024",
      org: "Anaconda Inc.",
      desc: "Recognized contributor providing verified developer product reviews on Python data science workflows.",
      badge: "Data Science"
    },
    {
      title: "Media Head — EESA Team",
      date: "September 2022",
      org: "Electrical & Electronics Student Association",
      desc: "Led digital branding, media outreach, and technical event communication across university departments.",
      badge: "Leadership"
    }
  ];

  const honorCards = honors.map(h => `
    <div class="glass-card spotlight-card p-5 rounded-2xl border border-white/10 space-y-2 group hover:border-cyan-500/30 transition-all">
      <div class="flex items-center justify-between text-xs font-mono">
        <span class="text-cyan-400 font-medium">${h.org}</span>
        <span class="text-slate-500">${h.date}</span>
      </div>
      <h4 class="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">${h.title}</h4>
      <p class="text-xs text-slate-300 leading-relaxed">${h.desc}</p>
    </div>
  `).join('');

  return `
    <section id="education" class="py-16 lg:py-24 relative">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        
        <!-- Header -->
        <div class="mb-12 space-y-2">
          <div class="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase">
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            Academic Rigor
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Honors
          </h2>
          <p class="text-slate-400 text-sm sm:text-base max-w-xl">
            Formal engineering foundations in Electrical & Electronics, embedded microcontrollers, and applied AI systems.
          </p>
        </div>

        <div class="grid lg:grid-cols-12 gap-8 items-start">
          
          <!-- Left: Degree Card -->
          <div class="lg:col-span-7 glass-card spotlight-card rounded-3xl p-8 border border-white/10 space-y-6">
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span class="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">Degree Program</span>
                <h3 class="text-2xl font-bold text-white tracking-tight mt-1">${education.degree}</h3>
                <div class="text-sm text-slate-300 mt-0.5">${education.institution} &bull; ${education.location}</div>
              </div>

              <div class="px-4 py-2 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center">
                <div class="text-2xl font-bold font-mono text-cyan-400">${education.gpa}</div>
                <div class="text-[10px] font-mono text-slate-400 uppercase">GPA</div>
              </div>
            </div>

            <div class="font-mono text-xs text-slate-400 flex items-center gap-2">
              <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              <span>Duration: ${education.duration}</span>
            </div>

            <div class="pt-4 border-t border-white/5 space-y-3">
              <div class="text-xs font-mono text-slate-300 font-medium">Core Courses & Specializations:</div>
              <div class="flex flex-wrap gap-2">
                ${education.keyCourses.map(c => `
                  <span class="px-3 py-1 rounded-lg text-xs font-mono bg-carbon-900 text-slate-200 border border-white/5">
                    ${c}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Right: Honors & Recognitions -->
          <div class="lg:col-span-5 space-y-4">
            <div class="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Awards & Recognitions</div>
            ${honorCards}
          </div>

        </div>

      </div>
    </section>
  `;
}
