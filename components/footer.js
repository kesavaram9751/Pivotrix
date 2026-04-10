/**
 * Pivotrix — Reusable Footer Component
 *
 * Features:
 *   - Clean 4-column layout matching the design reference
 *   - Proper alignment with consistent spacing
 *   - Subtle hover effects on links
 *   - Top border separator
 *
 * Usage:
 *   1. Add <div id="site-footer"></div> where the footer should appear.
 *   2. Include this script: <script src="components/footer.js"></script>
 */
(function () {
  // --- Inject CSS for footer link hover effect ---
  const styleTag = document.createElement("style");
  styleTag.textContent = `
    #pivotrix-footer a {
      text-decoration: none;
      transition: color 0.25s ease;
    }
    #pivotrix-footer a:hover {
      color: #1e293b !important;
    }
  `;
  document.head.appendChild(styleTag);

  const footerHTML = `
  <footer id="pivotrix-footer" style="font-family:'Inter',sans-serif;background:#fff;border-top:1px solid #e2e8f0;padding:64px 24px">
    <div style="max-width:80rem;margin:0 auto">
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));gap:48px;align-items:start">
        
        <!-- Brand Column -->
        <div style="max-width:320px">
          <div style="font-family:'Manrope',sans-serif;font-size:1.5rem;font-weight:800;letter-spacing:-0.04em;color:#0f172a;margin-bottom:16px">Pivotrix</div>
          <p style="font-size:0.875rem;color:#64748b;line-height:1.7;margin-bottom:24px">
            Precision Growth through outcome-based frameworks. Bridging the gap between strategy and measurable revenue.
          </p>
          <p style="font-size:0.8125rem;color:#94a3b8;margin:0">
            © 2026 Pivotrix Inc. Precision Fluidity in Data.
          </p>
        </div>

        <!-- Solutions Column -->
        <div>
          <h4 style="font-size:0.75rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#0f172a;margin:0 0 20px 0">Solutions</h4>
          <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:12px">
            <li><a href="best-okr-coaching-and-consulting.html" style="font-size:0.875rem;color:#64748b">OKR Growth Consulting</a></li>
            <li><a href="best-digital-marketing-agency.html" style="font-size:0.875rem;color:#64748b">Growth Marketing</a></li>
            <li><a href="contact-us.html" style="font-size:0.875rem;color:#64748b">Contact Sales</a></li>
          </ul>
        </div>

      </div>
    </div>
  </footer>
  `;

  // --- Inject into DOM ---
  const target = document.getElementById("site-footer");
  if (target) {
    target.innerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  }

  // --- Responsive: alignment on mobile ---
  const mobileCSS = document.createElement("style");
  mobileCSS.textContent = `
    @media (max-width: 640px) {
      #pivotrix-footer > div > div:first-child {
        flex-direction: column !important;
        text-align: center !important;
      }
      #pivotrix-footer ul {
        align-items: center !important;
      }
      #pivotrix-footer p {
        margin: 0 auto !important;
      }
    }
  `;
  document.head.appendChild(mobileCSS);
})();
