import { portfolioData } from '../data/portfolioData.js';

export function renderContact() {
  const { personal } = portfolioData;

  return `
    <section id="contact" class="py-16 lg:py-24 relative overflow-hidden">
      <!-- Glow -->
      <div class="absolute left-1/2 bottom-0 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        
        <div class="grid lg:grid-cols-12 gap-12">
          
          <!-- Left Column: Direct Communication Channels -->
          <div class="lg:col-span-5 space-y-6">
            <div class="space-y-2">
              <div class="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Initiate Contact
              </div>
              <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Build Something High-Performance.
              </h2>
              <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you're recruiting for an Automotive ADAS / Embedded role, seeking Applied AI research collaboration, or discussing vehicle validation pipelines, reach out directly.
              </p>
            </div>

            <div class="space-y-3 font-mono text-xs">
              <!-- Email Card with Copy Trigger -->
              <div class="glass-card p-4 rounded-xl border border-white/10 flex items-center justify-between group">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <div class="text-[10px] text-slate-400 uppercase">Direct Email</div>
                    <div class="text-slate-200 font-semibold select-all">${personal.email}</div>
                  </div>
                </div>
                <button id="copy-email-btn" data-email="${personal.email}" class="px-2.5 py-1 rounded bg-carbon-900 hover:bg-cyan-500 hover:text-black text-cyan-400 border border-white/10 transition-all text-[11px]">
                  Copy
                </button>
              </div>

              <!-- Phone Card -->
              <a href="tel:${personal.phone.replace(/[^0-9+]/g, '')}" class="glass-card p-4 rounded-xl border border-white/10 flex items-center justify-between group hover:border-cyan-500/30 transition-all block">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <div class="text-[10px] text-slate-400 uppercase">Mobile</div>
                    <div class="text-slate-200 font-semibold">${personal.phone}</div>
                  </div>
                </div>
                <span class="text-slate-500 group-hover:text-cyan-400 transition-colors">&rarr;</span>
              </a>

              <!-- Location Card -->
              <div class="glass-card p-4 rounded-xl border border-white/10 flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <div class="text-[10px] text-slate-400 uppercase">Location</div>
                  <div class="text-slate-200 font-semibold">${personal.location}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Interactive Quick Form -->
          <div class="lg:col-span-7">
            <div class="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
              <h3 class="text-xl font-bold text-white tracking-tight">Send a Direct Message</h3>
              <p class="text-xs text-slate-400">Fill in your inquiry details below. Clicking send will open your default email client with your message pre-populated.</p>

              <form id="contact-form" class="space-y-4 text-xs font-mono">
                <div class="grid sm:grid-cols-2 gap-4">
                  <div class="space-y-1">
                    <label class="text-slate-300">Your Name *</label>
                    <input id="form-name" type="text" required placeholder="e.g. Jane Doe" class="w-full bg-carbon-900 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-400" />
                  </div>
                  <div class="space-y-1">
                    <label class="text-slate-300">Your Email *</label>
                    <input id="form-email" type="email" required placeholder="jane@company.com" class="w-full bg-carbon-900 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-400" />
                  </div>
                </div>

                <div class="space-y-1">
                  <label class="text-slate-300">Inquiry Domain / Reason</label>
                  <select id="form-subject" class="w-full bg-carbon-900 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-400">
                    <option value="Automotive & ADAS Opportunity">Automotive & ADAS Opportunity</option>
                    <option value="Applied AI / RAG Collaboration">Applied AI / RAG Collaboration</option>
                    <option value="Research & IEEE Paper Discussion">Research & IEEE Paper Discussion</option>
                    <option value="General Engineering Inquiry">General Engineering Inquiry</option>
                  </select>
                </div>

                <div class="space-y-1">
                  <label class="text-slate-300">Message / Context *</label>
                  <textarea id="form-message" rows="4" required placeholder="Tell me about the role, project, or technical challenge..." class="w-full bg-carbon-900 border border-white/10 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-400"></textarea>
                </div>

                <button type="submit" class="w-full py-3.5 rounded-xl font-semibold text-xs bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2">
                  <span>Send Message via Email</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
