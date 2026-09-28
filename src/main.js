import './styles/index.css';
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderExperience } from './components/Experience.js';
import { renderProjects } from './components/Projects.js';
import { renderPublication } from './components/Publication.js';
import { renderEducation } from './components/Education.js';
import { renderSkills } from './components/Skills.js';
import { renderContact } from './components/Contact.js';
import { renderFooter } from './components/Footer.js';
import { renderProjectModal } from './components/ProjectModal.js';
import { renderPipelineTracker, initPipelineObserver } from './components/PipelineTracker.js';

let currentProjectFilter = 'all';

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <div class="min-h-screen flex flex-col telemetry-grid">
      <div id="navbar-container">
        ${renderNavbar()}
      </div>

      <!-- Left-Side Interactive Telemetry Pipeline Tracker -->
      ${renderPipelineTracker()}

      <main class="flex-grow pt-16 sm:pt-20">
        ${renderHero()}
        ${renderExperience()}
        <div id="projects-container">
          ${renderProjects(currentProjectFilter)}
        </div>
        ${renderPublication()}
        ${renderEducation()}
        ${renderSkills()}
        ${renderContact()}
      </main>

      ${renderFooter()}
      <div id="modal-container"></div>
    </div>
  `;

  attachEventHandlers();
  initPipelineObserver();
}

function attachProjectFilterHandlers() {
  // Project Category Filter Tabs in Projects Section
  document.querySelectorAll('.project-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cat = e.currentTarget.getAttribute('data-cat');
      if (cat) {
        currentProjectFilter = cat;
        const projContainer = document.getElementById('projects-container');
        if (projContainer) {
          projContainer.innerHTML = renderProjects(currentProjectFilter);
          attachProjectFilterHandlers();
          attachModalHandlers();
        }
      }
    });
  });
}

function attachModalHandlers() {
  // Modal Open Handlers
  document.querySelectorAll('.view-project-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pId = e.currentTarget.getAttribute('data-project-id');
      if (pId) {
        const modalContainer = document.getElementById('modal-container');
        if (modalContainer) {
          modalContainer.innerHTML = renderProjectModal(pId);

          // Close triggers
          const closeBtn = document.getElementById('modal-close-btn');
          const dismissBtn = document.getElementById('modal-dismiss-btn');
          const backdrop = document.getElementById('modal-backdrop');

          const closeModal = () => { modalContainer.innerHTML = ''; };

          if (closeBtn) closeBtn.addEventListener('click', closeModal);
          if (dismissBtn) dismissBtn.addEventListener('click', closeModal);
          if (backdrop) {
            backdrop.addEventListener('click', (ev) => {
              if (ev.target === backdrop) closeModal();
            });
          }
        }
      }
    });
  });
}

function attachEventHandlers() {
  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    // Close on navigation click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  attachProjectFilterHandlers();
  attachModalHandlers();

  // Copy Email Button
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = copyBtn.getAttribute('data-email');
      if (email) {
        navigator.clipboard.writeText(email).then(() => {
          copyBtn.innerText = 'Copied!';
          copyBtn.classList.add('bg-cyan-500', 'text-black');
          setTimeout(() => {
            copyBtn.innerText = 'Copy';
            copyBtn.classList.remove('bg-cyan-500', 'text-black');
          }, 2000);
        });
      }
    });
  }

  // Contact Form Mailto Handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name')?.value || '';
      const email = document.getElementById('form-email')?.value || '';
      const subject = document.getElementById('form-subject')?.value || 'Portfolio Contact';
      const message = document.getElementById('form-message')?.value || '';

      const fullSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInquiry Domain: ${subject}\n\nMessage:\n${message}`);

      window.location.href = `mailto:surajvmiskin@gmail.com?subject=${fullSubject}&body=${body}`;
    });
  }
}

// Initial Render
renderApp();
