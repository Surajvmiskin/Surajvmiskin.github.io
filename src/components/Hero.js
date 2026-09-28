import { portfolioData } from '../data/portfolioData.js';

export function renderHero() {
  const { personal, metrics } = portfolioData;

  const metricCards = metrics.map(m => `
    <div class="glass-card p-4 rounded-2xl border border-white/5 relative overflow-hidden group">
      <div class="absolute -right-4 -bottom-4 w-16 h-16 bg-cyan-500/5 rounded-full group-hover:bg-cyan-500/15 transition-all blur-xl"></div>
      <div class="text-2xl lg:text-3xl font-bold font-mono text-cyan-400 mb-1 tracking-tight">${m.value}</div>
      <div class="text-xs font-semibold text-slate-200">${m.label}</div>
      <div class="text-[11px] text-slate-400 font-mono mt-0.5">${m.detail}</div>
    </div>
  `).join('');

  return `
    <section id="hero" class="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      <!-- Ambient Glow Behind Hero -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Column: Narrative & Action -->
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
              Python Automation &bull; ADAS Feature Validation &bull; Applied AI
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-100 tracking-tight leading-[1.1]">
              Engineering High-Performance <span class="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">Python Automation</span> & Intelligent Systems.
            </h1>

            <p class="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              I am <strong class="text-white">Suraj Vinod Miskin</strong>, a Python Automation & Systems Engineer at <strong class="text-cyan-400">Tata Elxsi</strong>. I specialize in building robust Python test automation frameworks, automated validation suites for ADAS features (<strong class="text-white">MBRDI project</strong>), vehicle diagnostic scripting, and applied AI deep learning systems.
            </p>

            <!-- Action Triggers -->
            <div class="flex flex-wrap items-center gap-4 pt-2">
              <a href="#projects" class="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all flex items-center gap-2">
                <span>View Projects & Research</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>

              <a href="#contact" class="px-6 py-3 rounded-xl font-mono text-sm bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-cyan-500/40 transition-all flex items-center gap-2">
                <span>Get in Touch</span>
                <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>

            <!-- Social Links Quick Row -->
            <div class="flex items-center gap-4 pt-4 text-xs font-mono text-slate-400">
              <span class="text-slate-500">Connect:</span>
              <a href="${personal.github}" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <span class="text-slate-600">&bull;</span>
              <a href="${personal.linkedin}" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
              </a>
              <span class="text-slate-600">&bull;</span>
              <a href="mailto:${personal.email}" class="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                Email
              </a>
            </div>
          </div>

          <!-- Right Column: Interactive Python Automation Deck -->
          <div class="lg:col-span-5 space-y-4">
            <!-- Terminal-styled Active State Box -->
            <div class="glass-card rounded-2xl p-5 border border-cyan-500/20 shadow-xl relative overflow-hidden">
              <div class="flex items-center justify-between pb-3 border-b border-white/10 mb-4 font-mono text-xs text-slate-400">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span class="ml-2 text-slate-300 font-semibold">python3 suraj_automation.py</span>
                </div>
                <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5"></span>RUNNING
                </span>
              </div>

              <div class="font-mono text-xs space-y-2 text-slate-300">
                <p><span class="text-cyan-400">&gt;&gt;&gt;</span> <span class="text-slate-400"># Primary Engine</span></p>
                <p><span class="text-cyan-400">&gt;&gt;&gt;</span> <span class="text-emerald-300">engineer.stack</span> = ["Python 3.x", "PyTest", "Automation Frameworks"]</p>
                <p><span class="text-cyan-400">&gt;&gt;&gt;</span> <span class="text-emerald-300">engineer.role</span> = "Python Automation & Systems @ Tata Elxsi"</p>
                <p><span class="text-cyan-400">&gt;&gt;&gt;</span> <span class="text-emerald-300">engineer.domain</span> = "ADAS System Testing (MBRDI Project)"</p>
                <p><span class="text-cyan-400">&gt;&gt;&gt;</span> <span class="text-emerald-300">engineer.run_test_suite()</span></p>
                <p class="text-emerald-400 pl-4 bg-emerald-950/30 py-1 rounded border border-emerald-500/20 font-bold">&check; 100% Tests Automated &bull; 0 Regressions &bull; Log Telemetry Verified</p>
              </div>
            </div>

            <!-- Key Metrics Grid -->
            <div class="grid grid-cols-2 gap-3">
              ${metricCards}
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
