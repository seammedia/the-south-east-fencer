// Helpers
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

(function initHeader(){
  const header = $('[data-header]');
  if(!header) return;

  // Desktop submenus (click-to-toggle; close others)
  $$('.nav-desktop .has-sub', header).forEach(group => {
    const btn = $('.sub-toggle', group);
    const menu = $('.sub-menu', group);
    if(!btn || !menu) return;

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      // close all others
      $$('.nav-desktop .sub-toggle', header).forEach(b=>{
        b.setAttribute('aria-expanded','false');
        const m = $('#' + b.getAttribute('aria-controls')) || b.parentElement.querySelector('.sub-menu');
        if(m) m.hidden = true;
      });
      btn.setAttribute('aria-expanded', String(!expanded));
      menu.hidden = expanded;
    });

    // close on outside click
    document.addEventListener('click', (e)=>{
      if(!group.contains(e.target)){
        btn.setAttribute('aria-expanded','false');
        menu.hidden = true;
      }
    });
  });

  // Mobile drawer
  const toggle = $('[data-menu-toggle]', header);
  const drawer = $('#mobile-drawer', header);
  const overlay = $('[data-overlay]', header);
  const closeBtn = $('[data-menu-close]', header);

  if (!toggle || !drawer || !overlay || !closeBtn) {
    console.warn('Mobile menu elements not found');
    return;
  }

  function openDrawer(){
    console.log('Opening mobile drawer');
    drawer.hidden = false; 
    overlay.hidden = false;
    
    // Force reflow before adding open class
    drawer.offsetHeight;
    
    drawer.setAttribute('data-open','true');
    toggle.setAttribute('aria-expanded','true');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    
    // Focus management with delay for animation
    setTimeout(() => {
      const first = drawer.querySelector('a:not([hidden]),button:not([hidden]),input,select,textarea,[tabindex]:not([tabindex="-1"])');
      if(first && first.offsetParent) {
        first.focus();
      }
    }, 100);
  }
  
  function closeDrawer(){
    console.log('Closing mobile drawer');
    drawer.removeAttribute('data-open');
    toggle.setAttribute('aria-expanded','false');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    
    // Hide elements after animation completes
    setTimeout(()=>{ 
      drawer.hidden = true; 
      overlay.hidden = true; 
      // Return focus to toggle button
      if(toggle) toggle.focus();
    }, 300);
  }

  // Event listeners with error handling
  if(toggle) {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Hamburger clicked');
      const isOpen = drawer.getAttribute('data-open') === 'true';
      if(isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }
  
  if(closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeDrawer();
    });
  }
  
  if(overlay) {
    overlay.addEventListener('click', closeDrawer);
  }
  
  // Keyboard support
  document.addEventListener('keydown', (e) => { 
    if(e.key === 'Escape' && drawer.getAttribute('data-open') === 'true') {
      closeDrawer();
    }
  });

  // Mobile accordions with smooth animation
  $$('.drawer .accordion', header).forEach(acc => {
    const btn = $('.acc-btn', acc);
    const panel = $('.acc-panel', acc);
    if(!btn || !panel) return;
    
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      
      // Close all other accordions first
      $$('.drawer .accordion', header).forEach(otherAcc => {
        if(otherAcc !== acc) {
          const otherBtn = $('.acc-btn', otherAcc);
          const otherPanel = $('.acc-panel', otherAcc);
          if(otherBtn && otherPanel) {
            otherBtn.setAttribute('aria-expanded', 'false');
            otherPanel.setAttribute('aria-expanded', 'false');
            otherPanel.hidden = true;
          }
        }
      });
      
      // Toggle current accordion
      btn.setAttribute('aria-expanded', String(!expanded));
      panel.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
    });
  });
})();

// ========================================
// NEW HEADER: Sticky dropdown navigation
// ========================================
(function initStickyDropdowns() {
  const HOVER_OPEN_DELAY = 60;   // ms - short delay before opening on hover
  const HOVER_CLOSE_DELAY = 220; // ms - longer delay before closing (prevents flicker)

  const isTouch = matchMedia("(pointer: coarse)").matches;
  const dropdowns = $$(".sef-dropdown");

  if (!dropdowns.length) return;

  dropdowns.forEach(dropdown => {
    const toggle = $(".sef-drop-toggle", dropdown);
    const menu = $(".sef-drop-menu", dropdown);

    if (!toggle || !menu) return;

    let openTimer, closeTimer;

    function openMenu() {
      clearTimeout(closeTimer);
      openTimer = setTimeout(() => {
        dropdown.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
      }, HOVER_OPEN_DELAY);
    }

    function closeMenu() {
      clearTimeout(openTimer);
      closeTimer = setTimeout(() => {
        dropdown.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }, HOVER_CLOSE_DELAY);
    }

    // Desktop hover intent (only on non-touch devices)
    if (!isTouch) {
      dropdown.addEventListener("mouseenter", openMenu);
      dropdown.addEventListener("mouseleave", closeMenu);

      // Keyboard support: keep open when focused within
      dropdown.addEventListener("focusin", () => {
        clearTimeout(closeTimer);
        dropdown.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
      });

      dropdown.addEventListener("focusout", (e) => {
        // Only close if focus leaves the entire dropdown
        if (!dropdown.contains(e.relatedTarget)) {
          closeMenu();
        }
      });
    }

    // Click to toggle (works for both touch and desktop)
    toggle.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent any navigation
      e.stopPropagation(); // Prevent immediate document click

      const isOpen = dropdown.classList.contains("is-open");

      // Close all other dropdowns first
      dropdowns.forEach(other => {
        if (other !== dropdown) {
          other.classList.remove("is-open");
          const otherToggle = $(".sef-drop-toggle", other);
          if (otherToggle) {
            otherToggle.setAttribute("aria-expanded", "false");
          }
        }
      });

      // Toggle current dropdown
      if (!isOpen) {
        dropdown.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
      } else {
        dropdown.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Click outside to close all dropdowns
  document.addEventListener("click", (e) => {
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("is-open");
        const toggle = $(".sef-drop-toggle", dropdown);
        if (toggle) {
          toggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  });

  // Escape key to close dropdowns
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove("is-open");
        const toggle = $(".sef-drop-toggle", dropdown);
        if (toggle) {
          toggle.setAttribute("aria-expanded", "false");
          toggle.focus(); // Return focus to toggle
        }
      });
    }
  });
})();

// ========================================
// NEW HEADER: Mobile drawer functionality
// ========================================
(function initNewMobileDrawer() {
  const openBtn = $("#sef-open");
  const closeBtn = $("#sef-close");
  const drawer = $("#sef-drawer");
  const overlay = $(".sef-overlay");

  if (!openBtn || !closeBtn || !drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add("is-open");
    overlay.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    openBtn.setAttribute("aria-expanded", "true");
    document.body.classList.add("sef-lock");

    // Focus first interactive element
    setTimeout(() => {
      const firstLink = $(".sef-drawer-link, .sef-drawer-accordion-btn", drawer);
      if (firstLink) firstLink.focus();
    }, 100);
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    overlay.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    openBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("sef-lock");

    // Return focus to open button
    openBtn.focus();
  }

  openBtn.addEventListener("click", openDrawer);
  closeBtn.addEventListener("click", closeDrawer);
  overlay.addEventListener("click", closeDrawer);

  // Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) {
      closeDrawer();
    }
  });

  // Mobile drawer accordions
  $$(".sef-drawer-accordion").forEach(accordion => {
    const btn = $(".sef-drawer-accordion-btn", accordion);
    const panel = $(".sef-acc-panel", accordion);

    if (!btn || !panel) return;

    btn.addEventListener("click", () => {
      const isOpen = accordion.classList.contains("open");

      // Close other accordions
      $$(".sef-drawer-accordion").forEach(other => {
        if (other !== accordion) {
          other.classList.remove("open");
          const otherBtn = $(".sef-drawer-accordion-btn", other);
          const otherPanel = $(".sef-acc-panel", other);
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
          if (otherPanel) otherPanel.style.display = "none";
        }
      });

      // Toggle current
      if (!isOpen) {
        accordion.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        panel.style.display = "block";
      } else {
        accordion.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        panel.style.display = "none";
      }
    });
  });
})();