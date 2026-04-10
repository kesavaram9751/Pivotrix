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
    { label: "OKR Consulting", href: "index.html" },
    { label: "Digital Marketing", href: "digital_marketing.html" },
    { label: "Solutions", href: "okr_consulting.html" },
    { label: "Resources", href: "resources.html" },
    { label: "Book", href: "book_execution_excellence.html" },
    { label: "Contact", href: "contact_us.html" },
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
        <a href="#" class="hidden sm:inline-block" style="font-family:'Inter',sans-serif;font-size:0.875rem;font-weight:500;color:#64748b;padding:8px 16px;text-decoration:none;transition:color 0.2s" onmouseover="this.style.color='#1e293b'" onmouseout="this.style.color='#64748b'">Login</a>
        <a href="contact_us.html" style="font-family:'Inter',sans-serif;font-size:0.875rem;font-weight:600;color:#fff;background:#2563eb;padding:10px 22px;border-radius:8px;text-decoration:none;box-shadow:0 1px 3px rgba(37,99,235,0.25);transition:all 0.2s" onmouseover="this.style.boxShadow='0 4px 14px rgba(37,99,235,0.35)';this.style.transform='translateY(-1px)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(37,99,235,0.25)';this.style.transform='translateY(0)'">Get Started</a>

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
        <a href="#" class="pivotrix-mobile-link">Login</a>
        <a href="contact_us.html" style="font-size:0.875rem;font-weight:600;color:#fff;background:#2563eb;text-align:center;padding:10px;border-radius:8px;text-decoration:none;margin-top:6px">Get Started</a>
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
