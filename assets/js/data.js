const moduleData = [
  {
    category: "Core Foundation",
    modules: [
      {
        id: "dashboard",
        title: "Main Dashboard",
        tagline: "Your daily mission control for everything happening in the company.",
        about: "The heartbeat of CompanyBull. It provides real-time KPI cards, interactive growth charts, and a live activity feed from all integrated modules.",
        how_it_works: [
          "Counts active employees and tenants in real-time.",
          "Visualizes department-wise headcount distribution.",
          "Aggregates live signals from Attendance and Recruitment."
        ],
        how_to_use: [
          "Log in to the portal.",
          "Review the summary cards for immediate context.",
          "Click any card to dive deeper into that specific metric."
        ],
        workflow: "graph TD; A[Signal] --> B[Data Broker]; B --> C[KPI Layer]; B --> D[Chart Layer];",
        what_it_looks_like: "A vibrant board with glowing status badges and smooth data transitions.",
        who_can_use_this: "Admins (full stats), Employees (team updates)."
      },
      {
        id: "health",
        title: "System Health",
        tagline: "Real-time infrastructure monitoring for peak cluster performance.",
        about: "Tracks the vital signs of the platform across all 24 major modules, ensuring database connectivity and node cluster stability.",
        how_it_works: [
          "Pings MongoDB and Redis replica sets every 30 seconds.",
          "Monitors Node.js heap memory and server uptime.",
          "Reports operational status for every tenant cluster."
        ],
        how_to_use: [
          "Navigate to 'System Status' in the SuperAdmin menu.",
          "Monitor 'Pulse Indicators' for real-time connectivity.",
          "Use 'Force Ping' to manually refresh the telemetry."
        ],
        workflow: "graph LR; A[Health Proxy] --> B{Service Audit}; B -->|Healthy| C[Green Pulse]; B -->|Error| D[Red Alert];",
        what_it_looks_like: "A technical dashboard with pulsing indicators and terminal-style logs.",
        who_can_use_this: "SuperAdmins and DevOps."
      },
      {
        id: "employees",
        title: "Core HR (Directory)",
        tagline: "Professional staff management, simplified for the modern office.",
        about: "The central database for your team. Manage roles, department assignments, and contact details with zero friction.",
        how_it_works: ["Search by name or skill.", "Filter by remote/on-site status.", "Direct link to interactive digital profiles."],
        how_to_use: ["Open 'Employees'.", "Filter to find the right person.", "View deep profile for contact or career history."],
        workflow: "graph LR; A[Search] --> B[Elastic Query]; B --> C[Staff Cards];",
        what_it_looks_like: "Grid of high-quality cards with status badges and quick-action buttons.",
        who_can_use_this: "Everyone (contact info), HR (full records)."
      },
      {
        id: "profile",
        title: "Custom Profile",
        tagline: "The digital home for your professional journey.",
        about: "A comprehensive profile that tracking accomplishments, skills, contracts, and personal milestones in one secure place.",
        how_it_works: ["Interactive tabs for career history.", "Mastery progress bars for technical skills.", "Encrypted document vault for private files."],
        how_to_use: ["Go to 'My Profile'.", "Update your technical skills matrix.", "Review your digital contract copies."],
        workflow: "graph TD; A[Load Profile] --> B[Fetch Bio]; B --> C[Render Tabs];",
        what_it_looks_like: "A professional, tabbed layout with personal branding and achievement badges.",
        who_can_use_this: "Self (edit), Managers/HR (view)."
      },
      {
        id: "departments",
        title: "Dept Hierarchy",
        tagline: "Visualize and balance the teams that drive your business.",
        about: "Structure your organization into logical units. Manage managers, headcounts, and departmental goals centrally.",
        how_it_works: ["Drag-and-drop hierarchy mapping.", "Headcount target tracking vs. actual.", "Budget utilization per unit."],
        how_to_use: ["Select 'Departments'.", "Review staffing levels by unit.", "Assign managers to specific pods."],
        workflow: "graph LR; A[View Dept] --> B[Aggregate Headcount]; B --> C[Compare Target];",
        what_it_looks_like: "A hierarchical board of large cards with manager avatars and progress bars.",
        who_can_use_this: "Leadership and HR."
      }
    ]
  },
  {
    category: "Operations & Governance",
    modules: [
      {
        id: "attendance",
        title: "Attendance Tracking",
        tagline: "Presence monitoring for the flexible workforce.",
        about: "One-click attendance tracking with geo-fencing and automatic late-detection for modern teams.",
        how_it_works: ["Geo-verified clock-in.", "Automatic late flags (after 10 AM).", "Remote working logs and IP tracking."],
        how_to_use: ["Open Attendance tab.", "Click 'Clock In' upon arrival.", "View your personal monthly presence patterns."],
        workflow: "graph TD; A[Clock In] --> B[Geo Logic]; B --> C[Presence Index];",
        what_it_looks_like: "A clean interface with massive 'Clock In' buttons and presence streaks.",
        who_can_use_this: "All Employees."
      },
      {
        id: "leave",
        title: "Leave Engine",
        tagline: "Stress-free leave requests and automated balance tracking.",
        about: "Calculate and request time off effortlessly. The engine automatically handles balance deductions and overlap alerts.",
        how_it_works: ["Separate buckets (Annual, Sick, Casual).", "Overlap detection with teammates.", "Automatic accrual calculations."],
        how_to_use: ["Select dates on the calendar.", "Check remaining balance instantly.", "Submit request for manager approval."],
        workflow: "graph LR; A[Request] --> B[Overlap Check]; B --> C[Notifier]; C --> D{Approval};",
        what_it_looks_like: "A calendar-first view with bold balance cards.",
        who_can_use_this: "Employees (request), Managers (approve)."
      },
      {
        id: "rbac",
        title: "RBAC Controls",
        tagline: "Granular security for enterprise-grade operations.",
        about: "Role-Based Access Control ensures that every user only sees and clicks what they are allowed to. Total security for sensitive data.",
        how_it_works: ["Dynamic permission matrices.", "Custom role definitions (e.g., Hiring Manager).", "Feature-flagging based on seniority."],
        how_to_use: ["Go to Security Settings.", "Define roles from presets.", "Assign roles to specific users."],
        workflow: "graph TD; A[User Auth] --> B[Role Check]; B --> C{Permission Matrix}; C -->|Yes| D[Grant Action];",
        what_it_looks_like: "A professional checklist-style matrix of permissions and roles.",
        who_can_use_this: "Admins and Security Leads."
      },
      {
        id: "payroll",
        title: "Payroll Engine",
        tagline: "Precise financial operations for the human workforce.",
        about: "Syncs attendance, taxes, and bonuses to generate 100% accurate payslips and bank files in seconds.",
        how_it_works: ["Auto-batch processing.", "Regional tax logic integration.", "Secure PDF payslip generation with tracking."],
        how_to_use: ["Admins: Run monthly batch.", "Employees: View/Download latest slip from Salary portal."],
        workflow: "graph LR; A[Logs] --> B[Pay Engine]; B --> C[Tax Delta]; C --> D[Slips];",
        what_it_looks_like: "Clean, professional ledger with detailed line-item breakdowns.",
        who_can_use_this: "HR/Finance (Admin), Employees (View Slips)."
      },
      {
        id: "audit",
        title: "Audit Logging",
        tagline: "Total transparency through immutable system history.",
        about: "Every critical change in CompanyBull is recorded in a permanent audit log, ensuring compliance and accountability.",
        how_it_works: ["Records 'Who, When, What, Why'.", "Tamper-evident log storage.", "Exportable compliance reports."],
        how_to_use: ["Search logs by user or module.", "Track the history of a specific record (e.g., Salary change).", "Export logs for external audits."],
        workflow: "graph LR; A[Action] --> B[Log Proxy]; B --> C[Secure Storage]; C --> D[Audit view];",
        what_it_looks_like: "A timeline view of system actions with deep filtering options.",
        who_can_use_this: "SuperAdmins and Auditors."
      }
    ]
  },
  {
    category: "Engagement & Culture",
    modules: [
      {
        id: "bullbot",
        title: "Bull-Bot AI",
        tagline: "Your intelligent HR assistant, ready to assist 24/7.",
        about: "Our advanced AI identifies your intent across all modules. It can provide system health stats, company-wide counts, or policy answers in seconds.",
        how_it_works: [
          "Natural Language Processing for policy search.",
          "Fast-stat logic for SuperAdmin metrics (e.g., 'How many active companies?').",
          "Simplified diagnostic reporting for global system health."
        ],
        how_to_use: [
          "Click the Bot icon anywhere.",
          "Ask: 'How many leave days do I have left?'",
          "Ask: 'Show me the hiring pipeline for Q2.'"
        ],
        workflow: "graph TD; A[Query] --> B[Intent Detect]; B -->|Stat| C[Fast Answer]; B -->|Logic| D[Module API];",
        what_it_looks_like: "A sleek, persistent chat interface with quick-action suggestions.",
        who_can_use_this: "Everyone."
      },
      {
        id: "kudos",
        title: "Kudo Wall",
        tagline: "Celebrate excellence with social peer recognition.",
        about: "The emotional engine of your culture. Send virtual kudos to colleagues who go above and beyond, visible to the whole team.",
        how_it_works: ["Public recognition feed.", "Custom achievement badges.", "Direct integration with the Culture Grid."],
        how_to_use: ["Click 'Send Kudo'.", "Select a teammate.", "Write a note and pick a badge (e.g., 'Problem Solver')."],
        workflow: "graph LR; A[Send] --> B[Feed Post]; B --> C[Notif To User];",
        what_it_looks_like: "A colorful, social-style feed filled with positive cards and icons.",
        who_can_use_this: "Everyone."
      },
      {
        id: "culture",
        title: "Culture Grid",
        tagline: "The visual summary of your office vibe.",
        about: "An interactive grid that aggregates social signals, kudos, and announcements into a single cultural dashboard.",
        how_it_works: ["Aggregates Kudo Wall data.", "Highlights 'Culture Stars' of the week.", "Visualizes employee sentiment trends."],
        how_to_use: ["Check the grid daily for office news.", "React to milestones.", "See who's currently driving team success."],
        workflow: "graph TD; A[Social Data] --> B[Grid Engine]; B --> C[Visual Deck];",
        what_it_looks_like: "An asymmetrical, vibrant grid of photos, achievements, and news.",
        who_can_use_this: "Everyone."
      },
      {
        id: "bull-feed",
        title: "Bull Feed",
        tagline: "The central hub for company-wide internal news.",
        about: "Your digital town hall. Share official announcements, office events, and success stories with rich media support.",
        how_it_works: ["Pinned announcements for critical news.", "Comment and reaction threads.", "Departmental sub-channels."],
        how_to_use: ["Read the daily feed.", " HR: Post new announcements.", "Schedule future posts for events."],
        workflow: "graph LR; A[Post] --> B[Push Notif]; B --> C[Feed Refresh];",
        what_it_looks_like: "A modern, engaging feed with large visuals and bold typography.",
        who_can_use_this: "Everyone (read), HR/Admin (post)."
      }
    ]
  },
  {
    category: "Growth & Planning",
    modules: [
      {
        id: "recruitment",
        title: "Recruitment Suite",
        tagline: "Connecting great companies with the best talent.",
        about: "A visual, end-to-end recruitment manager for every open role. Manage candidates from application to offer with zero paperwork.",
        how_it_works: ["Visual Kanban hiring pipeline.", "Candidate scorecarding system.", "One-click automated offer letters."],
        how_to_use: ["Post a new opening.", "Drag candidates through interview stages.", "Click 'Promote to Employee' once hired."],
        workflow: "graph LR; A[Applied] --> B[Screen] --> C[Interview] --> D[Offer];",
        what_it_looks_like: "A clean, drag-and-drop board filled with candidate profile cards.",
        who_can_use_this: "Recruiters and Hiring Managers."
      },
      {
        id: "onboarding",
        title: "Onboarding",
        tagline: "Welcome new hires with a digital first-class experience.",
        about: "Turn the chaotic first week into a smooth, automated checklist. Setup IT, documents, and meetings before they even arrive.",
        how_it_works: ["Automated equipment request logic.", "E-sign orientation documents.", "Scheduled 'Welcome' meetings."],
        how_to_use: ["Trigger onboarding for a new hire.", "Monitor progress through his checklist.", "System automatically grants access on Day 1."],
        workflow: "graph TD; A[Hire Sync] --> B[Checklist Gen]; B --> C[Invite Sent];",
        what_it_looks_like: "Progress rings and clear task lists for new joiners.",
        who_can_use_this: "HR and Managers."
      },
      {
        id: "reviews",
        title: "Reviews (Appraisals)",
        tagline: "Fair, data-driven performance conversations.",
        about: "Standardized performance reviews that combine peer feedback, manager ratings, and goal progress into one fair report.",
        how_it_works: ["360-degree feedback cycles.", "Customizable KPI templates.", "Goal integration for factual ratings."],
        how_to_use: ["Launch review cycle.", "Fill out self-appraisal.", "Meet with manager for final digital sign-off."],
        workflow: "graph LR; A[Cycle Start] --> B[Feedback]; B --> C[Mgr Review]; C --> D[Signed Off];",
        what_it_looks_like: "Structured forms with scoring sliders and comment sections.",
        who_can_use_this: "Everyone."
      },
      {
        id: "goals",
        title: "Goal/OKR Hub",
        tagline: "Align every individual with the company vision.",
        about: "Define clear, measurable Objectives and Key Results (OKRs). Track progress in real-time to ensure no target is missed.",
        how_it_works: ["Company-wide vs. Team goals.", "Percentage-based progress tracking.", "Direct link to performance reviews."],
        how_to_use: ["Set quarterly OKRs.", "Update progress weekly.", "Check team alignment via the dashboard."],
        workflow: "graph TD; A[Set Goal] --> B[Check Progress]; B --> C[Scale Visuals];",
        what_it_looks_like: "A series of progress rings and target milestones.",
        who_can_use_this: "Everyone."
      }
    ]
  },
  {
    category: "System Utilities",
    modules: [
      {
        id: "assets",
        title: "Assets Portal",
        tagline: "Logistics and equipment management, automated.",
        about: "Request and track laptops, monitors, and keys. Know exactly where your company hardware is at all times.",
        how_it_works: ["Inventory serial tracking.", "One-click 'Request Asset'.", "Automatic returns on offboarding."],
        how_to_use: ["Search the assets catalog.", "Submit a request.", "Manager approves and IT issues hardware."],
        what_it_looks_like: "Product-style catalog with status labels (In Stock/Assigned).",
        who_can_use_this: "Everyone (request), IT (manage)."
      },
      {
        id: "meeting-sched",
        title: "Meeting Scheduler",
        tagline: "Smart booking for the modern office.",
        about: "Schedule meetings, book rooms, and invite external guests without leaving the platform.",
        how_it_works: ["Room occupancy logic.", "Calendar sync (Google/Outlook).", "Video link auto-generation."],
        how_to_use: ["Select a date/time.", "Choose an available room.", "Send invites instantly."],
        what_it_looks_like: "A sleek calendar view with colorful booking blocks.",
        who_can_use_this: "Everyone."
      },
      {
        id: "notifs",
        title: "Notif System",
        tagline: "Real-time signals for critical events.",
        about: "Stay informed. Our notification system ensures you never miss a leave approval, kudo, or urgent task.",
        how_it_works: ["Real-time socket push notifications.", "Email digests for offline users.", "In-app bell menu with history."],
        how_to_use: ["Check the 'Bell' icon daily.", "Configure your notification preferences.", "Action directly from the notification card."],
        what_it_looks_like: "A slide-out drawer or pop-up cards with action badges.",
        who_can_use_this: "Everyone."
      },
      {
        id: "filtering",
        title: "Adv Filtering",
        tagline: "Find exactly what you need in millions of records.",
        about: "The search and filter engine that powers every list in CompanyBull. Fast, precise, and human-friendly.",
        how_it_works: ["Complex logic (X and Y but not Z).", "Saved filter presets.", "Instant results as you type."],
        how_to_use: ["Click the 'Filter' icon on any list.", "Apply conditions.", "Save the view for future use."],
        what_it_looks_like: "A clean sidebar of checkboxes and ranges.",
        who_can_use_this: "Everyone."
      },
      {
        id: "documents",
        title: "Document Vault",
        tagline: "Secure, encrypted home for critical workspace files.",
        about: "From contracts to tax forms, keep every critical document in a safe, version-controlled vault.",
        how_it_works: ["AES-256 Encryption.", "Expiry reminders.", "Global policy sharing."],
        how_to_use: ["Upload file.", "Set expiry if needed.", "Download whenever required."],
        what_it_looks_like: "A clean file explorer interface with thumbnail previews.",
        who_can_use_this: "Everyone (personal files), HR (company records)."
      }
    ]
  }
];
