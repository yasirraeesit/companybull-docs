const modules = [
    "Introduction", "Architecture",
    "Analytics", "Announcements", "Approvals", "Attendance", "AuditLog", 
    "Celebrations", "CompanyCalendar", "Dashboard", "Departments", "Documents", 
    "EmployeeCompare", "EmployeeProfile", "Employees", "Expenses", "ExportCenter", 
    "Feedback", "Forecasting", "Help", "Leave", "Login",
    "Onboarding", "OrgChart", "Payroll", "Recruitment", "Settings", 
    "SkillsMatrix", "Tasks", "TimeTracking"
];

const moduleIcons = {
    "Introduction": "info",
    "Architecture": "component",
    "Analytics": "bar-chart-3",
    "Announcements": "megaphone",
    "Approvals": "check-square",
    "Attendance": "clock",
    "AuditLog": "shield-alert",
    "Celebrations": "party-popper",
    "CompanyCalendar": "calendar",
    "Dashboard": "layout-dashboard",
    "Departments": "sitemap",
    "Documents": "file-text",
    "EmployeeCompare": "users-round",
    "EmployeeProfile": "user-circle",
    "Employees": "users",
    "Expenses": "receipt",
    "ExportCenter": "download",
    "Feedback": "message-square",
    "Forecasting": "trending-up",
    "Help": "help-circle",
    "Leave": "plane",
    "Login": "log-in",
    "Onboarding": "user-plus",
    "OrgChart": "network",
    "Payroll": "banknote",
    "Recruitment": "user-search",
    "Settings": "settings",
    "SkillsMatrix": "brain",
    "Tasks": "list-todo",
    "TimeTracking": "timer"
};

let activeModule = "Introduction";

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const collapseBtn = document.getElementById('sidebar-collapse-btn');
    const footer = document.getElementById('module-footer');
    const footerToggleBtn = document.getElementById('footer-toggle-btn');
    const moduleList = document.getElementById('module-list');
    const searchInput = document.getElementById('module-search');
    const themeToggle = document.getElementById('theme-toggle');
    const currentModuleName = document.getElementById('current-module-name');
    const viewport = document.getElementById('module-viewport');
    
    // NAVIGATION BUTTONS
    const prevBtn = document.getElementById('prev-module-btn');
    const nextBtn = document.getElementById('next-module-btn');

    // Sidebar Collapse
    if (collapseBtn) {
        collapseBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            const isCollapsed = sidebar.classList.contains('collapsed');
            collapseBtn.innerHTML = isCollapsed ? '<i data-lucide="chevron-right"></i>' : '<i data-lucide="chevron-left"></i>';
            lucide.createIcons();
        });
    }

    // Footer Toggle
    if (footerToggleBtn) {
        footerToggleBtn.addEventListener('click', () => {
            footer.classList.toggle('collapsed');
            const isCollapsed = footer.classList.contains('collapsed');
            footerToggleBtn.innerHTML = isCollapsed ? '<i data-lucide="chevron-up"></i>' : '<i data-lucide="chevron-down"></i>';
            lucide.createIcons();
        });
    }

    // Theme Toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            const isDark = document.body.classList.contains('dark');
            themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
            localStorage.setItem('cb-docs-theme', isDark ? 'dark' : 'light');
        });
        if (localStorage.getItem('cb-docs-theme') === 'dark') {
            document.body.classList.add('dark');
            themeToggle.textContent = 'Light Mode';
        }
    }

    // DYNAMIC MODULE LOADING
    const finalLoadModule = async (name) => {
        activeModule = name;
        window.location.hash = name.toLowerCase();
        viewport.innerHTML = '<div class="neo-card" style="margin: 4rem;"><h3 class="gradient-text">Loading Module...</h3></div>';
        
        try {
            const fileName = name.toLowerCase();
            const response = await fetch(`modules/${fileName}.html`);
            if (!response.ok) throw new Error();
            const html = await response.text();
            viewport.innerHTML = `<div class="doc-section active animate-fade-in">${html}</div>`;
        } catch (err) {
            viewport.innerHTML = `
                <div class="module-hero animate-fade-in">
                    <span class="neo-badge accent">In Development</span>
                    <h2 class="gradient-text" style="font-size: 3rem;">${name} Module</h2>
                    <p class="module-summary">Technical documentation for <strong>${name}</strong> is currently being drafted. This module handles critical parts of the CompanyBull ecosystem.</p>
                    <div class="neo-card spotlight" style="margin-top: 2rem;">
                        <h3><i data-lucide="construction"></i> Human-Friendly Documentation</h3>
                        <p>We are currently writing the "Easy English" version of this module. It will be ready very soon!</p>
                    </div>
                </div>
            `;
        }
        
        updateNavBtns();
        currentModuleName.textContent = name;
        lucide.createIcons();
        viewport.scrollTo(0, 0);
        
        // Highlight active sidebar item by searching for the module title
        document.querySelectorAll('.module-item').forEach(i => {
           const label = i.querySelector('.module-label').textContent;
           // The label contains "01. Introduction" etc, so we check if it ends with the module name or contains it
           i.classList.toggle('active', label.includes(name));
        });
    };

    const updateNavBtns = () => {
        const index = modules.indexOf(activeModule);
        
        // Prev button
        if (index > 0) {
            prevBtn.classList.remove('disabled');
            prevBtn.textContent = `← ${modules[index-1]}`;
        } else {
            prevBtn.classList.add('disabled');
            prevBtn.textContent = 'Welcome Page';
        }

        // Next button
        if (index < modules.length - 1) {
            nextBtn.classList.remove('disabled');
            nextBtn.textContent = `${modules[index+1]} →`;
        } else {
            nextBtn.classList.add('disabled');
            nextBtn.textContent = 'End of Modules';
        }
    };

    prevBtn.addEventListener('click', () => {
        const index = modules.indexOf(activeModule);
        if (index > 0) finalLoadModule(modules[index-1]);
    });

    nextBtn.addEventListener('click', () => {
        const index = modules.indexOf(activeModule);
        if (index < modules.length - 1) finalLoadModule(modules[index+1]);
    });

    // Render Module List
    const renderModules = (filter = '') => {
        moduleList.innerHTML = '';
        modules.filter(m => m.toLowerCase().includes(filter.toLowerCase())).forEach((module, index) => {
            const item = document.createElement('a');
            const isActive = module === activeModule;
            item.className = `module-item ${isActive ? 'active' : ''}`;
            item.href = `#${module.toLowerCase()}`;
            
            // Choose different icons for overview sections
            const iconType = moduleIcons[module] || "layers";
            
            item.innerHTML = `
                <i data-lucide="${iconType}" class="module-icon"></i>
                <span class="module-label">${(index + 1).toString().padStart(2, '0')}. ${module}</span>
            `;
            item.addEventListener('click', (e) => {
                e.preventDefault();
                finalLoadModule(module);
            });
            moduleList.appendChild(item);
        });
        lucide.createIcons();
    };

    searchInput.addEventListener('input', (e) => renderModules(e.target.value));

    // INITIAL LOAD
    renderModules();
    
    // Check if there is a hash in the URL to load a specific module
    const hash = window.location.hash.replace('#', '');
    const moduleFromHash = modules.find(m => m.toLowerCase() === hash);
    
    if (moduleFromHash) {
        finalLoadModule(moduleFromHash);
    } else {
        finalLoadModule("Introduction");
    }
});
