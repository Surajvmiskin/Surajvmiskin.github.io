export const pipelineSections = [
  { id: 'experience', label: 'Experience', short: 'Experience' },
  { id: 'projects', label: 'Projects', short: 'Projects' },
  { id: 'publication', label: 'IEEE Paper', short: 'IEEE Paper' },
  { id: 'education', label: 'Education', short: 'Education' },
  { id: 'skills', label: 'Skills', short: 'Skills' },
  { id: 'contact', label: 'Contact', short: 'Contact' }
];

export function renderPipelineTracker() {
  const nodes = pipelineSections.map((sec) => `
    <a href="#${sec.id}" data-section="${sec.id}" class="pipeline-node group flex items-center gap-3 relative z-10 py-1.5 transition-all duration-200">
      <!-- Fixed container for bullet to guarantee perfect alignment -->
      <div class="w-4 h-4 flex items-center justify-center flex-shrink-0">
        <div class="node-bullet w-2 h-2 rounded-full bg-carbon-800 border-2 border-slate-700 group-hover:border-cyan-400 transition-all duration-300"></div>
      </div>
      
      <!-- Label text (No card, just sleek typography) -->
      <div class="node-label text-xs font-mono text-slate-400 group-hover:text-cyan-300 transition-colors whitespace-nowrap">
        ${sec.short}
      </div>
    </a>
  `).join('');

  return `
    <aside id="pipeline-tracker" class="hidden xl:flex fixed right-4 2xl:right-8 top-1/2 -translate-y-1/2 z-40 flex-col select-none opacity-0 pointer-events-none translate-x-6 transition-all duration-500">
      
      <!-- Vertical Trace Timeline Container (Zero card background, purely line and texts) -->
      <div id="pipeline-nodes-container" class="relative flex flex-col gap-1">
        <!-- Connecting Line Background (Strictly dot-center to dot-center) -->
        <div id="pipeline-bg-line" class="absolute w-[2px] bg-slate-800 rounded-full z-0 pointer-events-none"></div>
        <!-- Active Connecting Line Fill (Strictly dot-center to active-dot-center) -->
        <div id="pipeline-fill-line" class="absolute w-[2px] bg-gradient-to-b from-cyan-400 to-sky-500 rounded-full z-0 pointer-events-none transition-all duration-300 shadow-sm shadow-cyan-400/50"></div>

        ${nodes}
      </div>

    </aside>
  `;
}

function updatePipelineGeometry(activeIndex) {
  const container = document.getElementById('pipeline-nodes-container');
  const bgLine = document.getElementById('pipeline-bg-line');
  const fillLine = document.getElementById('pipeline-fill-line');
  const nodeEls = document.querySelectorAll('.pipeline-node');
  if (!container || !fillLine || !bgLine || !nodeEls.length) return;

  const firstBullet = nodeEls[0].querySelector('.node-bullet');
  const lastBullet = nodeEls[nodeEls.length - 1].querySelector('.node-bullet');
  const activeBullet = nodeEls[activeIndex]?.querySelector('.node-bullet');

  if (!firstBullet || !lastBullet || !activeBullet) return;

  const cRect = container.getBoundingClientRect();
  const fRect = firstBullet.getBoundingClientRect();
  const lRect = lastBullet.getBoundingClientRect();
  const aRect = activeBullet.getBoundingClientRect();

  // Vertical centers relative to container
  const startY = (fRect.top + fRect.height / 2) - cRect.top;
  const endY = (lRect.top + lRect.height / 2) - cRect.top;
  const activeY = (aRect.top + aRect.height / 2) - cRect.top;

  // Horizontal center relative to container
  const centerX = (fRect.left + fRect.width / 2) - cRect.left;

  // Background track runs exactly from first dot center to last dot center
  bgLine.style.top = `${startY}px`;
  bgLine.style.left = `${centerX - 1}px`;
  bgLine.style.height = `${Math.max(0, endY - startY)}px`;

  // Active filled line runs exactly from first dot center to active dot center
  fillLine.style.top = `${startY}px`;
  fillLine.style.left = `${centerX - 1}px`;
  fillLine.style.height = `${Math.max(0, activeY - startY)}px`;
}

export function initPipelineObserver() {
  const trackerEl = document.getElementById('pipeline-tracker');
  const sections = pipelineSections.map(s => document.getElementById(s.id)).filter(Boolean);
  const nodeEls = document.querySelectorAll('.pipeline-node');
  const heroEl = document.getElementById('hero');

  if (!trackerEl || !sections.length) return;

  let currentActiveIndex = 0;

  // Toggle Visibility: Hidden at Top (Hero), Visible from Experience downwards
  const checkVisibility = () => {
    const heroBottom = heroEl ? heroEl.getBoundingClientRect().bottom : 300;
    if (heroBottom <= 180) {
      trackerEl.classList.remove('opacity-0', 'pointer-events-none', 'translate-x-6');
      trackerEl.classList.add('opacity-100', 'pointer-events-auto', 'translate-x-0');
      updatePipelineGeometry(currentActiveIndex);
    } else {
      trackerEl.classList.add('opacity-0', 'pointer-events-none', 'translate-x-6');
      trackerEl.classList.remove('opacity-100', 'pointer-events-auto', 'translate-x-0');
    }
  };

  window.addEventListener('scroll', checkVisibility, { passive: true });
  window.addEventListener('resize', () => updatePipelineGeometry(currentActiveIndex), { passive: true });
  checkVisibility();

  // Section Observer for Active Node
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.id;
        const activeIndex = pipelineSections.findIndex(s => s.id === activeId);

        if (activeIndex !== -1) {
          currentActiveIndex = activeIndex;

          // Geometry: update filled line with mathematical exactness
          updatePipelineGeometry(activeIndex);

          // Update Bullet Dots & Labels
          nodeEls.forEach((node, idx) => {
            const bullet = node.querySelector('.node-bullet');
            const label = node.querySelector('.node-label');

            if (idx === activeIndex) {
              bullet.className = "node-bullet w-3 h-3 rounded-full bg-cyan-400 border-2 border-white shadow-lg shadow-cyan-400/60 ring-4 ring-cyan-500/25 transition-all duration-300";
              label?.classList.remove('text-slate-400', 'text-slate-500');
              label?.classList.add('text-cyan-300', 'font-bold', 'translate-x-1');
            } else if (idx < activeIndex) {
              bullet.className = "node-bullet w-2.5 h-2.5 rounded-full bg-cyan-500 border border-cyan-300 shadow-sm shadow-cyan-400/40 transition-all duration-300";
              label?.classList.remove('text-cyan-300', 'font-bold', 'translate-x-1');
              label?.classList.add('text-slate-400');
            } else {
              bullet.className = "node-bullet w-2 h-2 rounded-full bg-carbon-800 border-2 border-slate-700 transition-all duration-300";
              label?.classList.remove('text-cyan-300', 'font-bold', 'translate-x-1');
              label?.classList.add('text-slate-500');
            }
          });
        }
      }
    });
  }, {
    rootMargin: '-25% 0px -40% 0px',
    threshold: 0
  });

  sections.forEach(sec => observer.observe(sec));
}
