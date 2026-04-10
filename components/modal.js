/**
 * Pivotrix — Reusable Modal & Form System
 * Updated to Premium Two-Column Design
 */
(function () {
  const modalHTML = `
  <div id="pivotrix-modal" class="fixed inset-0 z-[100] hidden items-center justify-center p-4">
    <div class="absolute inset-0 bg-on-background/60 backdrop-blur-sm" onclick="window.closePivotrixModal()"></div>
    <!-- Modal Container -->
    <div class="relative w-full max-w-[900px] grid md:grid-cols-2 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(15,23,42,0.12)] border border-outline-variant/15" onclick="event.stopPropagation()">
      <!-- Close Action (Top Right) -->
      <button onclick="window.closePivotrixModal()" class="absolute top-4 right-4 z-20 h-10 w-10 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
        <span class="material-symbols-outlined">close</span>
      </button>

      <!-- Visual Column (Asymmetric Design) -->
      <div class="hidden md:block relative overflow-hidden bg-surface-container-low p-10 flex flex-col justify-between">
        <div class="absolute inset-0 signature-gradient opacity-5"></div>
        <div class="relative z-10">
          <div class="flex items-center gap-2 mb-8">
            <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span class="material-symbols-outlined text-white text-sm" style='font-variation-settings: "FILL" 1;'>insights</span>
            </div>
            <span class="font-headline font-extrabold text-lg tracking-tighter text-on-surface">Pivotrix</span>
          </div>
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0"></div>
              <p class="text-sm text-on-surface-variant font-medium">Precision-engineered growth roadmaps for scalable business</p>
            </div>
            <div class="flex items-start gap-4">
              <div class="mt-1.5 h-2 w-2 rounded-full bg-secondary shrink-0"></div>
              <p class="text-sm text-on-surface-variant font-medium">Data-backed acquisition funnels optimized for high LTV.</p>
            </div>
          </div>
        </div>
        <div class="relative rounded-xl overflow-hidden aspect-video border border-outline-variant/30 shadow-lg mt-8">
          <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDscQHwPuENEczNN1jQbki_2uvsiVApi8MK8inLkdFZXoO55-JHPIp5yJIYRnl2hQYOAJ1P06fu_At7E5WQJGiFV0XjPyMeW7Z98a8pjNvIxK-NbjQldJKo-C6yQOFufwBAZYtBWIY3oecYMLaElEX5QvTMj4TQJp2wqFBle1Jrtj4QkIjQuAbsf5uZ-PNP5QT9BKwez6ATJgYTrS22SFQ9RdbqGQPCUaGVDiSKDXl-lTv1umoK2gqe6LjVmcQSxKgUoc0WuZ9Aljts" />
        </div>
      </div>

      <!-- Content Column -->
      <div id="modal-content" class="p-8 md:p-12 flex flex-col justify-center">
        <!-- Form injected here -->
      </div>
    </div>
  </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);

  const modal = document.getElementById("pivotrix-modal");
  const modalContent = document.getElementById("modal-content");

  // Helper to trigger direct downloads (exposed to window for inline onsubmit)
  window.downloadAsset = (filename) => {
    const link = document.createElement('a');
    link.href = filename;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Helper to handle form submissions with email + download
  window.handlePivotrixSubmit = async function(event, downloadPath) {
    event.preventDefault();
    const form = event.target;
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.innerText;
    
    // UI Loading State
    button.disabled = true;
    button.innerText = "Sending...";

    try {
      // 1. Send data to Formspree (Backend delivery)
      const response = await fetch("https://formspree.io/f/mjgpqlde", {
        method: "POST",
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        // 2. Trigger download if provided
        if (downloadPath) {
          window.downloadAsset(downloadPath);
        }
        
        // 3. Success UI
        alert("Success! Your request has been sent.");
        window.closePivotrixModal();
      } else {
        alert("Oops! There was a problem. Check your internet connection or Formspree ID.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      button.disabled = false;
      button.innerText = originalText;
    }
  };

  window.triggerForm1 = function () {
    modalContent.innerHTML = `
      <div class="mb-8">
        <span class="inline-block px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-bold uppercase tracking-widest mb-4">Precision Growth</span>
        <h2 class="font-headline text-3xl md:text-3xl font-extrabold text-on-surface tracking-tight leading-[1.15] mb-4">Get Your Outcome-Based Strategy</h2>
        <p class="font-body text-on-surface-variant text-sm leading-relaxed">Join 40+ scale-ups using our precision growth frameworks.</p>
      </div>
      <form class="space-y-4" onsubmit="window.handlePivotrixSubmit(event)">
        <div class="space-y-1.5">
          <label class="font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">Name</label>
          <input type="text" name="name" required class="w-full px-4 py-3 bg-surface-container-low border-0 rounded-lg focus:ring-2 focus:ring-primary text-sm" placeholder="Jane Cooper">
        </div>
        <div class="space-y-1.5">
          <label class="font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">Email</label>
          <input type="email" name="email" required class="w-full px-4 py-3 bg-surface-container-low border-0 rounded-lg focus:ring-2 focus:ring-primary text-sm" placeholder="jane@company.com">
        </div>
        <div class="pt-4">
          <button type="submit" class="w-full bg-primary text-white font-headline font-bold py-4 rounded-lg shadow-md hover:scale-[1.01] transition-all">Get Started</button>
        </div>
      </form>
    `;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.classList.add("overflow-hidden");
  };

  window.triggerForm2 = function () {
    modalContent.innerHTML = `
      <div class="mb-8">
        <span class="inline-block px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold uppercase tracking-widest mb-4">Resource Download</span>
        <h2 class="font-headline text-3xl md:text-3xl font-extrabold text-on-surface tracking-tight leading-[1.15] mb-4">Download Your OKR Strategy Kit</h2>
        <p class="font-body text-on-surface-variant text-sm leading-relaxed">The exact execution worksheets used by 40+ technical teams.</p>
      </div>
      <form class="space-y-4" onsubmit="window.handlePivotrixSubmit(event, './OKR_Workbook.docx')">
        <div class="space-y-1.5">
          <label class="font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">Name</label>
          <input type="text" name="name" required class="w-full px-4 py-3 bg-surface-container-low border-0 rounded-lg focus:ring-2 focus:ring-secondary text-sm" placeholder="Jane Cooper">
        </div>
        <div class="space-y-1.5">
          <label class="font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">Email</label>
          <input type="email" name="email" required class="w-full px-4 py-3 bg-surface-container-low border-0 rounded-lg focus:ring-2 focus:ring-secondary text-sm" placeholder="jane@company.com">
        </div>
        <div class="pt-4">
          <button type="submit" class="w-full bg-secondary text-white font-headline font-bold py-4 rounded-lg shadow-md hover:scale-[1.01] transition-all">Download Template</button>
        </div>
      </form>
    `;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.classList.add("overflow-hidden");
  };

  window.triggerForm3 = function () {
    modalContent.innerHTML = `
      <div class="mb-8">
        <span class="inline-block px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-bold uppercase tracking-widest mb-4">Knowledge Base</span>
        <h2 class="font-headline text-3xl md:text-3xl font-extrabold text-on-surface tracking-tight leading-[1.15] mb-4">Get the OKR Cheat Sheet</h2>
        <p class="font-body text-on-surface-variant text-sm leading-relaxed">The 5-minute blueprint for outcome-based leadership.</p>
      </div>
      <form class="space-y-4" onsubmit="window.handlePivotrixSubmit(event, './OKR_Cheatsheet.pdf')">
        <div class="space-y-1.5">
          <label class="font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-wider ml-1">Email</label>
          <input type="email" name="email" required class="w-full px-4 py-3 bg-surface-container-low border-0 rounded-lg focus:ring-2 focus:ring-primary text-sm" placeholder="jane@company.com">
        </div>
        <div class="pt-4">
          <button type="submit" class="w-full bg-primary text-white font-headline font-bold py-4 rounded-lg shadow-md hover:scale-[1.01] transition-all">Download Cheat Sheet</button>
        </div>
      </form>
    `;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.classList.add("overflow-hidden");
  };

  window.closePivotrixModal = function () {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.classList.remove("overflow-hidden");
  };
})();
