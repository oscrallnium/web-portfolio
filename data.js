// ============================================================
// PORTFOLIO DATA — Edit this file to update your site content
// ============================================================

const SITE_DATA = {

  // ─── NAVIGATION & BRANDING ─────────────────────────────
  brand: "ENGINEER_CORE",
  navLinks: ["Experience", "Expertise", "Projects", "Education"],
  resumeUrl: "#contact", // link to your resume PDF or section

  // ─── HERO SECTION ──────────────────────────────────────
  hero: {
    badge: "Available for New Challenges",
    firstName: "Oscar Allen",
    lastName: "Brioso.",
    description:
      "Multi-Platform Engineer specializing in high-performance iOS, Android, and Front-End ecosystems. Building precision-milled digital experiences.",
    primaryButton: { text: "Explore Projects", link: "#projects" },
    secondaryButton: { text: "Resume", link: "#contact" },
    location: "Makati City, PH",
    email: "oscallen@gmail.com",
    activeProgress: "Refining Mobile Architecture",
  },

  // ─── PROFESSIONAL HISTORY ──────────────────────────────
  // Each item: { date, role, roleLabel, company, companyRole, bullets OR description }
  experience: [
    {
      date: "Jan 2025 — Present",
      role: "iOS Developer",
      roleLabel: "Current Role",
      bullets: [
        "Develop and maintain iOS application by resolving bugs and enhancing UI/UX based on QA and business feedback.",
        "Reduced application crash frequency by 30% through proactive Crashlytics monitoring.",
        "Increased revenue by 15% via cross-platform marketing integrations and flow optimization.",
        "Manage end-to-end internal testing and App Store distribution pipelines.",
      ],
    },
    {
      date: "Nov 2023 — May 2024",
      company: "Red Planet Hotels",
      companyRole: "iOS Developer (Hybrid)",
      description:
        "Rigorous debugging reducing app issues by 40% and efficiency gains through advanced multi-threading implementation.",
    },
    {
      date: "July 2024 — Present",
      company: "D.W. Morgan",
      companyRole: "iOS Engineer (Intern)",
      description:
        "Developed reusable Cocoapod libraries and improved workflow efficiency by 30% using Agile methodologies.",
    },
  ],

  // ─── EXPERTISE ─────────────────────────────────────────
  expertise: {
    headline: "Expertise.",
    description:
      "Precision engineering across the full stack, from core Swift development to robust DevOps pipelines.",
    categories: [
      {
        number: "01",
        title: "Languages & Frameworks",
        tags: ["Swift", "SwiftUI", "Objective-C", "UIKit", "Python", "Core Data", "XCTest"],
      },
      {
        number: "02",
        title: "Infrastructure & DevOps",
        tags: ["Firebase", "Fastlane", "App Store Connect", "Git", "Crashlytics", "AWS"],
      },
    ],
  },

  // ─── EDUCATION ─────────────────────────────────────────
  education: {
    academic: [
      {
        icon: "graduation",
        name: "University of the Philippines Los Baños",
        detail: "BS in Chemical Engineering",
        quote: '"Engineering rigor translated from chemical processes to digital architectures."',
      },
    ],
    certifications: [
      {
        icon: "shield",
        name: "OWASP Cybersecurity",
        detail: "Professional Certification",
      },
      {
        icon: "layers",
        name: "Agile Methodology",
        detail: "Workflow Training",
      },
    ],
  },

  // ─── FEATURED PROJECTS ─────────────────────────────────
  // visualStyle: "orbit" | "pan" | "grid" (CSS-generated placeholder)
  // Or use `image: "path/to/screenshot.png"` for a real image
  projects: [
    {
      title: "OrbitWatch",
      description: "Space education platform tracking the ISS with real-time NASA integration.",
      tags: ["SwiftUI", "Metal"],
      link: "#",
      visualStyle: "orbit",
      // image: "assets/orbitwatch.png",  ← uncomment to use a real image
    },
    {
      title: "PanTracker",
      description: "Intelligent inventory system featuring expiration alerts and categorization.",
      tags: ["CoreData", "UIKit"],
      link: "#",
      visualStyle: "pan",
      // image: "assets/pantracker.png",
    },
  ],

  // ─── CALL TO ACTION ────────────────────────────────────
  cta: {
    title: "Let's build something",
    highlight: "exceptional.",
    primaryButton: { text: "Get in Touch", link: "mailto:oscallen@gmail.com" },
    secondaryButton: { text: "0945-143-5449", link: "tel:09451435449" },
  },

  // ─── FOOTER ────────────────────────────────────────────
  footer: {
    copy: "© 2024 Engineering Elegance • San Francisco, CA",
    links: [
      { text: "Email", url: "mailto:oscallen@gmail.com" },
      { text: "LinkedIn", url: "#" },
      { text: "Resume", url: "#" },
    ],
  },
};
