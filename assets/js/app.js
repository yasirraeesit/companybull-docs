/* CompanyBull Documentation — Logic Engine (Guides & Workflows) */
document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("navMenu");
  const moduleDetails = document.getElementById("moduleDetails");
  const searchInput = document.getElementById("searchInput");
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");

  // Render navigation menu grouped by category
  const renderNav = (filteredData = moduleData) => {
    navMenu.innerHTML = "";
    filteredData.forEach(group => {
      const groupTitle = document.createElement("div");
      groupTitle.className = "neo-section-title";
      groupTitle.style.margin = "2.5rem 1rem 1rem";
      groupTitle.style.fontSize = "0.7rem";
      groupTitle.style.fontWeight = "900";
      groupTitle.style.letterSpacing = "0.1em";
      groupTitle.style.color = "var(--primary)";
      groupTitle.textContent = group.category;
      navMenu.appendChild(groupTitle);

      group.modules.forEach(mod => {
        const item = document.createElement("div");
        item.className = "nav-item";
        item.textContent = mod.title;
        item.onclick = () => {
          showModule(mod);
          // Highlight active item
          document.querySelectorAll(".nav-item").forEach(i => i.classList.remove("active"));
          item.classList.add("active");
          // Close sidebar on mobile
          if (window.innerWidth <= 768) sidebar.classList.remove("open");
        };
        navMenu.appendChild(item);
      });
    });
  };

  // Render specific module details (Neo-brutalism layout)
  const showModule = (mod) => {
    moduleDetails.innerHTML = `
      <div class="module-card fade-in" style="margin-top: 2rem;">
        <header>
          <div class="badge" style="background: var(--accent); color: white;">#${mod.id}</div>
          <h1 style="margin-top: 0.5rem; word-break: break-word;">${mod.title}</h1>
          <p class="subtitle" style="margin-top: 1.5rem; border-color: var(--secondary);">${mod.tagline}</p>
        </header>

        <div class="info-box" style="margin-bottom: 2.5rem; background: var(--background);">
          <h3 class="info-title" style="background: var(--primary); color: white;">What is this for?</h3>
          <p class="info-content" style="font-size: 1.1rem;">${mod.about}</p>
        </div>

        <div class="grid-2">
          <div class="info-box">
            <h3 class="info-title" style="background: var(--secondary);">How it works?</h3>
            <ul class="info-content">
              ${mod.how_it_works.map(step => `<li>${step}</li>`).join("")}
            </ul>
          </div>
          
          <div class="info-box">
            <h3 class="info-title" style="background: var(--accent); color: white;">What does it look like?</h3>
            <p class="info-content">${mod.what_it_looks_like}</p>
          </div>
        </div>

        <!-- NEW: HOW TO USE SECTION -->
        <div class="info-box" style="margin-top: 2rem;">
          <h3 class="info-title" style="background: var(--primary); color: white;">How to use it?</h3>
          <ol class="usage-guide">
            ${mod.how_to_use ? mod.how_to_use.map(step => `<li class="usage-step">${step}</li>`).join("") : "<li>Coming soon!</li>"}
          </ol>
        </div>

        <!-- NEW: WORKFLOW DIAGRAM -->
        ${mod.workflow ? `
        <div class="info-box" style="margin-top: 2rem;">
          <h3 class="info-title" style="background: var(--foreground); color: white;">Behind the Scenes (Workflow)</h3>
          <div class="workflow-container">
            <div class="mermaid">
              ${mod.workflow}
            </div>
          </div>
        </div>
        ` : ""}

        <div class="info-box" style="margin-top: 2rem;">
          <h3 class="info-title" style="background: var(--foreground); color: white;">Who can use this?</h3>
          <p class="info-content">${mod.who_can_use_this}</p>
        </div>
      </div>
    `;
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Trigger Mermaid re-render
    if (window.mermaid && mod.workflow) {
      setTimeout(() => {
        window.mermaid.run();
      }, 50);
    }
  };

  // Search filter
  searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = moduleData.map(group => ({
      ...group,
      modules: group.modules.filter(mod => 
        mod.title.toLowerCase().includes(term) || 
        mod.tagline.toLowerCase().includes(term) ||
        mod.about.toLowerCase().includes(term)
      )
    })).filter(group => group.modules.length > 0);
    renderNav(filtered);
  });

  // Hotkey support (⌘K or Ctrl+K)
  window.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      searchInput.focus();
    }
  });

  // Mobile menu toggle
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  // Initial render
  renderNav();
  
  // Show first module by default
  if (moduleData.length > 0 && moduleData[0].modules.length > 0) {
    const firstMod = moduleData[0].modules[0];
    showModule(firstMod);
    setTimeout(() => {
      const firstItem = document.querySelector(".nav-item");
      if(firstItem) firstItem.classList.add("active");
    }, 100);
  }
});
