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
  <footer id="pivotrix-footer" style="font-family:'Inter',sans-serif;background:#fff;border-top:1px solid #e2e8f0">
    <div style="max-width:80rem;margin:0 auto;padding:48px 24px 40px">

      <!-- Main Grid -->
      <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:48px;align-items:start">

        <!-- Brand Column -->
        <div>
          <div style="font-family:'Manrope',sans-serif;font-size:1.2rem;font-weight:800;letter-spacing:-0.03em;color:#0f172a;margin-bottom:12px">Pivotrix</div>
          <p style="font-size:0.875rem;color:#94a3b8;line-height:1.7;margin:0;max-width:260px">© 2024 Pivotrix Inc. Precision Fluidity in Data.</p>
        </div>

        <!-- Solutions Column -->
        <div>
          <h4 style="font-size:0.7rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#334155;margin:0 0 16px 0">Solutions</h4>
          <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:12px">
            <li><a href="okr_consulting.html" style="font-size:0.875rem;color:#64748b">OKR Solutions</a></li>
            <li><a href="digital_marketing.html" style="font-size:0.875rem;color:#64748b">Digital Marketing</a></li>
            <li><a href="contact_us.html" style="font-size:0.875rem;color:#64748b">Contact Sales</a></li>
          </ul>
        </div>

        <!-- Legal Column -->
        <div>
          <h4 style="font-size:0.7rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#334155;margin:0 0 16px 0">Legal</h4>
          <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:12px">
            <li><a href="#" style="font-size:0.875rem;color:#64748b">Privacy Policy</a></li>
            <li><a href="#" style="font-size:0.875rem;color:#64748b">Terms of Service</a></li>
            <li><a href="#" style="font-size:0.875rem;color:#64748b">Security</a></li>
          </ul>
        </div>

        <!-- Reach Out Column -->
        <div>
          <h4 style="font-size:0.7rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#334155;margin:0 0 16px 0">Reach Out</h4>
          <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:12px">
            <li><a href="#" style="font-size:0.875rem;color:#64748b">Status</a></li>
            <li><a href="#" style="font-size:0.875rem;color:#64748b">LinkedIn</a></li>
            <li><a href="#" style="font-size:0.875rem;color:#64748b">Twitter</a></li>
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

  // --- Responsive: stack columns on mobile ---
  const mobileCSS = document.createElement("style");
  mobileCSS.textContent = `
    @media (max-width: 768px) {
      #pivotrix-footer > div > div {
        grid-template-columns: 1fr 1fr !important;
        gap: 32px !important;
      }
    }
    @media (max-width: 480px) {
      #pivotrix-footer > div > div {
        grid-template-columns: 1fr !important;
        gap: 28px !important;
      }
    }
  `;
  document.head.appendChild(mobileCSS);
})();
