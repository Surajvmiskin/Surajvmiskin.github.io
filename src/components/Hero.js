import { portfolioData } from '../data/portfolioData.js';

export function renderHero() {
  const { personal, metrics } = portfolioData;

  const metricCards = metrics.map(m => `
    <div class="glass-card spotlight-card p-4 rounded-2xl border border-white/5 relative group">
      <div class="text-xl sm:text-2xl lg:text-3xl font-bold font-mono text-cyan-400 tracking-tight">${m.value}</div>
      <div class="text-xs font-semibold text-slate-200 mt-1">${m.label}</div>
      <div class="text-[11px] text-slate-400 font-mono">${m.detail}</div>
    </div>
  `).join('');

  return `
    <section id="hero" class="relative pt-6 pb-14 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20 overflow-hidden">
      <!-- Ambient Radial Aura -->
      <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-12 gap-10 items-center">
          
          <!-- Left Column: Bold Minimal Persona -->
          <div class="lg:col-span-7 space-y-6">
            
            <!-- Live Availability Pill -->
            <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/10">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>Python Automation &bull; Tata Elxsi (MBRDI)</span>
            </div>

            <!-- Big Impact Headline -->
            <div>
              <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
                Suraj Vinod Miskin
              </h1>
              <div class="text-2xl sm:text-4xl lg:text-5xl mt-2 font-extrabold gradient-text-shimmer tracking-tight">
                Python Automation & ADAS Validation
              </div>
            </div>

            <!-- Dynamic Cycling Role Bar -->
            <div class="flex items-center gap-2 font-mono text-sm sm:text-base text-slate-300">
              <span class="text-slate-500">&gt;</span>
              <span class="text-slate-400">Specializing in</span>
              <span id="hero-typing-role" class="text-cyan-300 font-bold bg-cyan-950/40 px-2.5 py-0.5 rounded-md border border-cyan-500/30">
                Automated Test Frameworks
              </span>
            </div>

            <!-- Minimal Punchy Narrative (No walls of text) -->
            <p class="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
              Automation Engineer at <strong class="text-cyan-400">Tata Elxsi</strong> (onsite at <strong class="text-white">Mercedes-Benz R&D</strong>). Automating ADAS ECU feature testing, building CustomTkinter GUI harnesses, and executing Vector CANoe validation suites.
            </p>

            <!-- Minimal Action Triggers -->
            <div class="flex flex-wrap items-center gap-4 pt-2">
              <a href="#projects" class="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-black shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] transition-all flex items-center gap-2">
                <span>Explore Featured Work</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>

              <a href="/Suraj_Vinod_Miskin_Resume.pdf" target="_blank" rel="noopener noreferrer" class="px-6 py-3 rounded-xl font-mono text-sm bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-cyan-500/40 transition-all flex items-center gap-2">
                <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <span>Resume (PDF)</span>
              </a>
            </div>

            <!-- Quick Channels -->
            <div class="flex items-center gap-4 pt-2 text-xs font-mono text-slate-400">
              <a href="${personal.github}" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>GitHub</span>
              </a>
              <span class="text-slate-600">&bull;</span>
              <a href="${personal.linkedin}" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span>LinkedIn</span>
              </a>
              <span class="text-slate-600">&bull;</span>
              <a href="mailto:${personal.email}" class="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>${personal.email}</span>
              </a>
            </div>

          </div>

          <!-- Right Column: Interactive Live Python Automation Deck -->
          <div class="lg:col-span-5 space-y-4">
            
            <!-- Interactive Simulator Terminal (Stable fixed height: h-[315px] to prevent layout jumping) -->
            <div class="glass-card spotlight-card rounded-2xl p-5 border border-cyan-500/30 shadow-2xl relative overflow-hidden h-[315px] flex flex-col justify-between group">
              
              <!-- Console Header & Tab Controls -->
              <div class="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs flex-shrink-0">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  <span class="ml-2 text-slate-300 font-semibold text-[11px] sm:text-xs">adas_automation.py</span>
                </div>
                
                <!-- Run Simulator Trigger -->
                <button id="run-sim-btn" class="px-2.5 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500 text-cyan-300 hover:text-black border border-cyan-500/30 text-[11px] font-mono font-bold flex items-center gap-1.5 transition-all">
                  <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  <span>Run Suite</span>
                </button>
              </div>

              <!-- Live Interactive Console Body (Fixed inner height, zero layout shift) -->
              <div id="sim-console-output" class="font-mono text-[11px] sm:text-xs space-y-1.5 text-slate-300 py-2 flex-grow overflow-hidden flex flex-col justify-start">
                <p><span class="text-cyan-400">&gt;&gt;&gt;</span> <span class="text-slate-400"># ADAS Digital Validation Suite</span></p>
                <p><span class="text-cyan-400">&gt;&gt;&gt;</span> <span class="text-emerald-300">from</span> adas_automation <span class="text-emerald-300">import</span> CANoeBridge, TkinterHarness, LinuxBench</p>
                <p><span class="text-cyan-400">&gt;&gt;&gt;</span> bench = LinuxBench.connect(host="adas-mbrdi-hil", auth="ssh")</p>
                <p class="text-slate-400 pl-3">&bull; [HIL_BENCH] Remote test bench connected via SSH</p>
                <div id="sim-dynamic-logs" class="space-y-1 pt-0.5">
                  <p class="text-emerald-400 flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Ready. Click "Run Suite" to trigger automated CANoe validation.</span>
                  </p>
                </div>
              </div>

              <!-- Execution Progress Bar (Always present in layout, prevents height jump) -->
              <div id="sim-progress-container" class="pt-2.5 border-t border-white/10 flex-shrink-0">
                <div class="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                  <span id="sim-status-label" class="text-slate-300 flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span>Validation Pipeline</span>
                  </span>
                  <span id="sim-progress-text" class="text-cyan-400 font-bold">STANDBY</span>
                </div>
                <div class="w-full bg-carbon-900 rounded-full h-1.5 overflow-hidden">
                  <div id="sim-progress-bar" class="bg-gradient-to-r from-cyan-400 to-blue-500 h-full w-0 transition-all duration-300"></div>
                </div>
              </div>

            </div>

            <!-- Key Metrics Grid with Spotlight Effect -->
            <div class="grid grid-cols-2 gap-3">
              ${metricCards}
            </div>

          </div>

        </div>
      </div>
    </section>
  `;
}

export function initHeroRoleAnimation() {
  const roles = [
    "Python Automation Suites",
    "CustomTkinter GUI Tools",
    "ADAS Digital Validation (MBRDI)",
    "ECU Vehicle Diagnostics",
    "IEEE Deep Learning Research"
  ];
  let idx = 0;
  const el = document.getElementById('hero-typing-role');
  if (!el) return;

  setInterval(() => {
    idx = (idx + 1) % roles.length;
    el.style.opacity = '0';
    el.style.transform = 'translateY(6px)';
    el.style.transition = 'all 0.25s ease';

    setTimeout(() => {
      el.textContent = roles[idx];
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 250);
  }, 2800);

  // Setup interactive simulator trigger
  const runBtn = document.getElementById('run-sim-btn');
  const logsEl = document.getElementById('sim-dynamic-logs');
  const progressBar = document.getElementById('sim-progress-bar');
  const progressText = document.getElementById('sim-progress-text');
  const statusLabel = document.getElementById('sim-status-label');

  if (runBtn && logsEl && progressBar && progressText) {
    let isRunning = false;

    runBtn.addEventListener('click', () => {
      if (isRunning) return;
      isRunning = true;
      runBtn.classList.add('opacity-50', 'pointer-events-none');
      progressBar.style.width = '0%';
      progressText.textContent = '0%';
      if (statusLabel) {
        statusLabel.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span><span>Executing Regression Suite</span>';
      }

      logsEl.innerHTML = `
        <p class="text-cyan-300">&bull; [CANoe] Initializing COM bridge & CAN bus interface...</p>
      `;

      let progress = 0;
      const interval = setInterval(() => {
        progress += 25;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${progress}%`;

        if (progress === 25) {
          logsEl.innerHTML = `
            <p class="text-cyan-300">&bull; [CANoe] Initializing COM bridge & CAN bus interface...</p>
            <p class="text-slate-300">&bull; [PARSER] Converting PCAP network telemetry for active safety...</p>
          `;
        } else if (progress === 50) {
          logsEl.innerHTML = `
            <p class="text-slate-300">&bull; [PARSER] Converting PCAP network telemetry for active safety...</p>
            <p class="text-slate-300">&bull; [SIMULATION] Executing 240 automated ADAS feature test cases...</p>
          `;
        } else if (progress === 75) {
          logsEl.innerHTML = `
            <p class="text-slate-300">&bull; [SIMULATION] Executing 240 automated ADAS feature test cases...</p>
            <p class="text-slate-300">&bull; [DIAGNOSTICS] Scanning ECU fault memory: 0 DTCs found (All Clear)...</p>
          `;
        } else if (progress >= 100) {
          clearInterval(interval);
          logsEl.innerHTML = `
            <p class="text-slate-300">&bull; [DIAGNOSTICS] Scanning ECU fault memory: 0 DTCs found (All Clear)...</p>
            <div class="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-bold text-[11px] mt-1 shadow-sm">
              &check; 240/240 Tests Passed &bull; 0 Regressions &bull; Report Generated
            </div>
          `;
          progressText.textContent = '100% COMPLETE';
          if (statusLabel) {
            statusLabel.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span><span class="text-emerald-300">All Tests Verified</span>';
          }
          isRunning = false;
          runBtn.classList.remove('opacity-50', 'pointer-events-none');
        }
      }, 400);
    });
  }
}
