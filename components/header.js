/**
 * Pivotrix — Reusable Header Component
 *
 * Features:
 *   - Active nav link highlighted in blue with bottom border
 *   - Hover bottom-border slide-in animation on all nav links
 *   - White bg at top → glassmorphism (blur + translucent) on scroll
 *   - Mobile responsive with hamburger drawer
 *
 * Usage:
 *   1. Add <div id="site-header"></div> where the header should appear.
 *   2. Include this script: <script src="components/header.js"></script>
 */
(function () {
  const navLinks = [
    { label: "Growth Marketing", href: "best-digital-marketing-agency.html" },
    { label: "OKR Growth Consulting", href: "best-okr-coaching-and-consulting.html" },
    { label: "Resources", href: "okr-exercise-templates.html" },
    { label: "Book", href: "best-okr-book-execution-excellence-with-okrs.html" },
    { label: "Contact", href: "contact-us.html" },
  ];

  // Determine which page we're on
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  function buildNavLinks() {
    return navLinks
      .map((link) => {
        const isActive =
          currentPage === link.href ||
          (currentPage === "" && link.href === "index.html");

        if (isActive) {
          return `<a href="${link.href}" class="pivotrix-nav-link active">${link.label}</a>`;
        }
        return `<a href="${link.href}" class="pivotrix-nav-link">${link.label}</a>`;
      })
      .join("\n");
  }

  // --- Inject CSS for nav-link animations & glassmorphism ---
  const styleTag = document.createElement("style");
  styleTag.textContent = `
    /* ── Header transitions ── */
    #pivotrix-header {
      background: rgba(255, 255, 255, 1);
      border-bottom: 1px solid rgba(226, 232, 240, 0.8);
      transition: background 0.35s ease, backdrop-filter 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
    }
    #pivotrix-header.scrolled {
      background: rgba(255, 255, 255, 0.55);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.06);
      border-bottom-color: rgba(226, 232, 240, 0.35);
    }

    /* ── Nav link base ── */
    .pivotrix-nav-link {
      position: relative;
      font-family: 'Inter', sans-serif;
      font-size: 0.875rem;
      font-weight: 500;
      letter-spacing: -0.01em;
      color: #64748b;
      text-decoration: none;
      padding: 6px 0;
      transition: color 0.25s ease;
    }

    /* Bottom-border underline (animated) */
    .pivotrix-nav-link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      width: 0;
      height: 2px;
      background: #2563eb;
      border-radius: 1px;
      transition: width 0.3s ease, left 0.3s ease;
    }

    /* Hover state */
    .pivotrix-nav-link:hover {
      color: #1e293b;
    }
    .pivotrix-nav-link:hover::after {
      width: 100%;
      left: 0;
    }

    /* Active state */
    .pivotrix-nav-link.active {
      color: #2563eb;
      font-weight: 600;
    }
    .pivotrix-nav-link.active::after {
      width: 100%;
      left: 0;
      background: #2563eb;
    }

    /* ── Mobile link styles ── */
    .pivotrix-mobile-link {
      font-family: 'Inter', sans-serif;
      font-size: 0.875rem;
      font-weight: 500;
      padding: 10px 0;
      color: #475569;
      text-decoration: none;
      border-bottom: 1px solid #f1f5f9;
      transition: color 0.2s ease;
    }
    .pivotrix-mobile-link:hover {
      color: #1e293b;
    }
    .pivotrix-mobile-link.active {
      color: #2563eb;
      font-weight: 600;
    }
  `;
  document.head.appendChild(styleTag);

  // CTA logic based on page
  const isBookOrResources = currentPage === "best-okr-book-execution-excellence-with-okrs.html" || currentPage === "okr-exercise-templates.html";
  const amazonUrl = "https://www.amazon.com/Execution-Excellence-OKRs-Blueprint-Managers-ebook/dp/B0GQVPWJ6J/ref=sr_1_3";
  
  const rightActionsHTML = isBookOrResources 
    ? `<a href="${amazonUrl}" target="_blank" style="font-family:'Manrope',sans-serif;font-size:14px;font-weight:700;color:#fff;background:#2563eb;padding:10px 20px;border-radius:8px;text-decoration:none;box-shadow:0 4px 6px -1px rgba(37,99,235,0.1),0 2px 4px -1px rgba(37,99,235,0.06);transition:all 0.25s" onmouseover="this.style.boxShadow='0 10px 15px -3px rgba(37,99,235,0.3)';this.style.transform='translateY(-1px)'" onmouseout="this.style.boxShadow='0 4px 6px -1px rgba(37,99,235,0.1)';this.style.transform='translateY(0)'">Get Your Copy</a>`
    : `
      <div style="display:flex;align-items:center;gap:12px">
        <a href="#" onclick="window.triggerForm1(); return false;" style="font-family:'Manrope',sans-serif;font-size:14px;font-weight:700;color:#2563eb;border:1.5px solid #2563eb;padding:9px 18px;border-radius:8px;text-decoration:none;transition:all 0.2s" onmouseover="this.style.background='rgba(37,99,235,0.05)'" onmouseout="this.style.background='transparent'">Grow my Business</a>
        <a href="https://calendly.com/pivotrix-info/30min" target="_blank" style="font-family:'Manrope',sans-serif;font-size:14px;font-weight:700;color:#fff;background:#2563eb;padding:10px 20px;border-radius:8px;text-decoration:none;box-shadow:0 4px 6px -1px rgba(37,99,235,0.1),0 2px 4px -1px rgba(37,99,235,0.06);transition:all 0.25s" onmouseover="this.style.boxShadow='0 10px 15px -3px rgba(37,99,235,0.3)';this.style.transform='translateY(-1px)'" onmouseout="this.style.boxShadow='0 4px 6px -1px rgba(37,99,235,0.1)';this.style.transform='translateY(0)'">Schedule a FREE Audit</a>
      </div>
    `;

  // --- Build the header HTML ---
  const headerHTML = `
  <nav id="pivotrix-header" class="fixed top-0 w-full z-50" style="font-family:'Inter',sans-serif">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

      <!-- Logo -->
      <a href="index.html" style="text-decoration:none;display:flex;align-items:center">
        <span style="font-family:'Manrope',sans-serif;font-size:1.35rem;font-weight:800;letter-spacing:-0.03em;color:#2563eb">Pivotrix</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center" style="gap:32px">
        ${buildNavLinks()}
      </div>

      <!-- Right Actions -->
      <div class="flex items-center" style="gap:12px">
        ${rightActionsHTML}

        <!-- Mobile Menu Toggle -->
        <button id="mobile-menu-toggle" class="md:hidden" style="padding:8px;color:#64748b;background:none;border:none;cursor:pointer" aria-label="Toggle menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div id="mobile-menu" class="md:hidden hidden" style="background:rgba(255,255,255,0.97);backdrop-filter:blur(16px);border-top:1px solid #f1f5f9">
      <div style="padding:16px 24px;display:flex;flex-direction:column">
        ${navLinks
          .map((link) => {
            const isActive = currentPage === link.href || (currentPage === "" && link.href === "index.html");
            const cls = isActive ? "pivotrix-mobile-link active" : "pivotrix-mobile-link";
            return `<a href="${link.href}" class="${cls}">${link.label}</a>`;
          })
          .join("\n")}
        <div style="border-top:1px solid #e2e8f0;margin:8px 0"></div>
        ${isBookOrResources 
          ? `<a href="${amazonUrl}" target="_blank" class="pivotrix-mobile-link" style="font-family:'Manrope',sans-serif;color:#2563eb;font-weight:700">Get Your Copy</a>`
          : `
            <a href="#" onclick="window.triggerForm1(); return false;" class="pivotrix-mobile-link" style="font-family:'Manrope',sans-serif">Grow my Business</a>
            <a href="https://calendly.com/pivotrix-info/30min" target="_blank" style="font-family:'Manrope',sans-serif;font-size:0.875rem;font-weight:700;color:#fff;background:#2563eb;text-align:center;padding:10px;border-radius:8px;text-decoration:none;margin-top:6px">Schedule a FREE Audit</a>
          `
        }
      </div>
    </div>
  </nav>

  <!-- Spacer to push page content below the fixed header -->
  <div style="height:64px"></div>
  `;

  // --- Inject into DOM ---
  const target = document.getElementById("site-header");
  if (target) {
    target.innerHTML = headerHTML;
  } else {
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
  }

  // --- Mobile toggle ---
  const toggle = document.getElementById("mobile-menu-toggle");
  const drawer = document.getElementById("mobile-menu");
  if (toggle && drawer) {
    toggle.addEventListener("click", () => {
      drawer.classList.toggle("hidden");
    });
  }

  // --- Scroll listener: white → glassmorphism ---
  const nav = document.getElementById("pivotrix-header");
  if (nav) {
    function onScroll() {
      if (window.scrollY > 10) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on load
  }
})();
