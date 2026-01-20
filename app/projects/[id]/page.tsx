import React from "react";
import Link from "next/link";
import Image from "next/image";

// --- TYPES ---
interface ExtendedProjectData {
  title: string;
  category: string;
  description: string;
  role: string;
  timeline: string;
  year: string;
  heroImage: string;
  overview: string;
  challenge: string;
  challengeBullets: string[];
  features: {
    icon: string;
    colorBg: string; // e.g., "bg-blue-100"
    colorText: string;
    title: string;
    desc: string;
  }[];
  mainImage: string; // For "Visual Showcase 1" or Main Image section
  process: {
    step: number;
    title: string;
    description: string;
    stats?: { value: string; label: string }[];
  }[];
  techStack: {
    name: string;
    icon: string;
    colorBg: string;
    colorText: string;
    category: string;
  }[];
  impact: {
    stats: { value: string; label: string; color: string }[]; // e.g. text-blue-600
    quote: { text: string; author: string; role: string };
  };
  gallery: string[];
  nextProject: string;
}

// --- DUMMY DATA ---
const PROJECT_DETAILS: Record<string, ExtendedProjectData> = {
  hutrivia: {
    title: "HUTRIVIA",
    category: "Mobile App",
    description:
      "An engaging quiz platform that celebrates Indonesian independence through interactive gamification and real-time social competition.",
    role: "Lead Mobile Developer",
    timeline: "3 Months",
    year: "2023",
    heroImage: "/portfolio_hutrivia.png",
    mainImage: "/portfolio_hutrivia.png",
    overview:
      "Hutrivia was born from a desire to make history education accessible and fun. We noticed that traditional learning methods often failed to engage younger audiences, so we set out to create an experience that combines education with the addictive nature of social gaming.",
    challenge:
      "The primary challenge was to balance educational integrity with entertainment value. We needed a system that was robust enough to handle real-time multiplayer requests while keeping the user interface playful and intuitive.",
    challengeBullets: [
      "Gamify historical content without trivializing it",
      "Ensure real-time leaderboard synchronization",
      "Optimize performance for low-end devices",
    ],
    features: [
      {
        icon: "fa-gamepad",
        colorBg: "bg-blue-100",
        colorText: "text-blue-600",
        title: "Interactive Gameplay",
        desc: "Fast-paced trivia rounds that keep users on their toes.",
      },
      {
        icon: "fa-trophy",
        colorBg: "bg-yellow-100",
        colorText: "text-yellow-600",
        title: "Real-time Rankings",
        desc: "Live leaderboards to foster friendly competition.",
      },
      {
        icon: "fa-medal",
        colorBg: "bg-red-100",
        colorText: "text-red-600",
        title: "Achievement System",
        desc: "Unlockable badges for knowledge milestones.",
      },
      {
        icon: "fa-users",
        colorBg: "bg-purple-100",
        colorText: "text-purple-600",
        title: "Social Sharing",
        desc: "Seamless sharing of scores to social media platforms.",
      },
      {
        icon: "fa-mobile",
        colorBg: "bg-green-100",
        colorText: "text-green-600",
        title: "Cross-Platform",
        desc: "Native performance on both iOS and Android.",
      },
      {
        icon: "fa-chart-pie",
        colorBg: "bg-orange-100",
        colorText: "text-orange-600",
        title: "User Analytics",
        desc: "Track progress and identify weak knowledge areas.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Research & Concept",
        description:
          "We analyzed top quiz apps to understand engagement loops. User interviews revealed that 'bragging rights' were a key motivator.",
        stats: [
          { value: "50+", label: "Apps Analyzed" },
          { value: "100+", label: "User Surveys" },
        ],
      },
      {
        step: 2,
        title: "Prototyping & Design",
        description:
          "Created high-fidelity mockups focusing on vibrant, patriotic colors (Red & White) while maintaining accessibility standards.",
      },
      {
        step: 3,
        title: "Development & Launch",
        description:
          "Built using Flutter for a single codebase deployment. Firebase handled the heavy lifting for real-time data sync.",
      },
    ],
    techStack: [
      {
        name: "Flutter",
        icon: "fa-google",
        category: "Mobile Framework",
        colorBg: "bg-blue-100",
        colorText: "text-blue-600",
      },
      {
        name: "Firebase",
        icon: "fa-fire",
        category: "Backend Service",
        colorBg: "bg-yellow-100",
        colorText: "text-yellow-600",
      },
      {
        name: "Dart",
        icon: "fa-code",
        category: "Language",
        colorBg: "bg-cyan-100",
        colorText: "text-cyan-600",
      },
      {
        name: "Figma",
        icon: "fa-figma",
        category: "Design Tool",
        colorBg: "bg-purple-100",
        colorText: "text-purple-600",
      },
    ],
    impact: {
      stats: [
        { value: "10k+", label: "Downloads", color: "text-blue-600" },
        { value: "4.8", label: "App Store Rating", color: "text-blue-600" },
        { value: "500k", label: "Quizzes Taken", color: "text-blue-600" },
      ],
      quote: {
        text: "Hutrivia made learning about our independence day actually fun. I compete with my friends every year now!",
        author: "Budi Santoso",
        role: "Early User",
      },
    },
    gallery: [
      "/portfolio_hutrivia.png",
      "/portfolio_hutrivia.png",
      "/portfolio_hutrivia.png",
      "/portfolio_hutrivia.png",
    ],
    nextProject: "looca",
  },
  looca: {
    title: "LOOCA",
    category: "iOS APP",
    description:
      "An augmented reality indoor navigation assistant that helps users effortlessly find their way through complex building environments.",
    role: "iOS Developer",
    timeline: "4 Months",
    year: "2024",
    heroImage: "/portfolio_looca.png",
    mainImage: "/portfolio_looca.png",
    overview:
      "GPS fails indoors. LOOCA bridges that gap. We built a solution that uses visual markers and internal sensors to provide pinpoint accuracy inside shopping malls and office complexes, all without needing expensive beacon infrastructure.",
    challenge:
      "The main technical hurdle was drift correction. ARKit puts you in 3D space, but without GPS, drift accumulates. We had to develop a custom algorithm that constantly realigns the user's position based on visual landmarks.",
    challengeBullets: [
      "Eliminate dependency on hardware beacons",
      "Achieve sub-meter accuracy indoors",
      "Maintain offline functionality",
    ],
    features: [
      {
        icon: "fa-location-arrow",
        colorBg: "bg-blue-100",
        colorText: "text-blue-600",
        title: "AR Wayfinding",
        desc: "Follow virtual arrows overlaid on the real world.",
      },
      {
        icon: "fa-cube",
        colorBg: "bg-indigo-100",
        colorText: "text-indigo-600",
        title: "3D Mapping",
        desc: "Digital twin generation of complex floor plans.",
      },
      {
        icon: "fa-wifi",
        colorBg: "bg-red-100",
        colorText: "text-red-600",
        title: "Offline Mode",
        desc: "Navigate basements with zero connectivity.",
      },
      {
        icon: "fa-layer-group",
        colorBg: "bg-green-100",
        colorText: "text-green-600",
        title: "Multi-Floor",
        desc: "Staircase and elevator detection logic.",
      },
      {
        icon: "fa-magnifying-glass",
        colorBg: "bg-orange-100",
        colorText: "text-orange-600",
        title: "Smart Search",
        desc: "Find closest amenities instantly.",
      },
      {
        icon: "fa-universal-access",
        colorBg: "bg-teal-100",
        colorText: "text-teal-600",
        title: "Accessibility",
        desc: "Voice guidance for visually impaired users.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Scanning & Mapping",
        description:
          "We mapped 3 large shopping malls using LiDAR-equipped iPads to create the initial point clouds.",
        stats: [
          { value: "3", label: "Malls Mapped" },
          { value: "50k", label: "Wait Points" },
        ],
      },
      {
        step: 2,
        title: "Algorithm Development",
        description:
          "Developed the 'Anchor-Lock' system that resets drift whenever a known visual marker (like a shop logo) is recognized.",
      },
      {
        step: 3,
        title: "User Testing",
        description:
          "Conducted field tests with 50 users to verify that the blue line was easy to follow in crowded environments.",
      },
    ],
    techStack: [
      {
        name: "Swift",
        icon: "fa-apple",
        category: "Language",
        colorBg: "bg-gray-100",
        colorText: "text-gray-600",
      },
      {
        name: "ARKit",
        icon: "fa-cube",
        category: "Framework",
        colorBg: "bg-blue-100",
        colorText: "text-blue-600",
      },
      {
        name: "CoreLocation",
        icon: "fa-location-dot",
        category: "Framework",
        colorBg: "bg-green-100",
        colorText: "text-green-600",
      },
      {
        name: "SceneKit",
        icon: "fa-film",
        category: "3D Engine",
        colorBg: "bg-purple-100",
        colorText: "text-purple-600",
      },
    ],
    impact: {
      stats: [
        { value: "95%", label: "Accuracy Rate", color: "text-blue-600" },
        { value: "0", label: "Offline Latency", color: "text-green-600" },
        { value: "20%", label: "Battery Saved", color: "text-orange-600" },
      ],
      quote: {
        text: "Finally, I don't get lost looking for the ATM in Grand Indonesia. The AR arrows are just like magic.",
        author: "Sarah J.",
        role: "Beta Tester",
      },
    },
    gallery: [
      "/portfolio_looca.png",
      "/portfolio_looca.png",
      "/portfolio_looca.png",
      "/portfolio_looca.png",
    ],
    nextProject: "looca-watch",
  },
  "looca-watch": {
    title: "LOOCA-WatchOS",
    category: "WATCHOS APP",
    description:
      "A companion app for Apple Watch that brings essential navigation cues to your wrist.",
    role: "Lead iOS Developer",
    timeline: "2 Months",
    year: "2024",
    heroImage: "/portfolio_looca_watch.png",
    mainImage: "/portfolio_looca_watch.png",
    overview:
      "Glancing at a phone while walking can be dangerous. We extended the LOOCA experience to the wrist, providing subtle haptic feedback and simple directional arrows so users can navigate heads-up.",
    challenge:
      "The challenge was information density. A watch screen is tiny. We had to strip away map data and focus purely on 'Heading' and 'Distance'.",
    challengeBullets: [
      "Minimizing battery drain on wearable",
      "Designing for glanceability",
      "Synchronizing state with iPhone",
    ],
    features: [
      {
        icon: "fa-mobile",
        colorBg: "bg-gray-100",
        colorText: "text-gray-600",
        title: "Haptics",
        desc: "Vibrations indicate turns.",
      },
      {
        icon: "fa-compass",
        colorBg: "bg-blue-100",
        colorText: "text-blue-600",
        title: "Compass",
        desc: "Real-time heading updates.",
      },
      {
        icon: "fa-sync",
        colorBg: "bg-green-100",
        colorText: "text-green-600",
        title: "Sync",
        desc: "Seamless handoff from iPhone.",
      },
      {
        icon: "fa-eye",
        colorBg: "bg-purple-100",
        colorText: "text-purple-600",
        title: "Glanceable",
        desc: "Big, bold typography.",
      },
      {
        icon: "fa-battery-full",
        colorBg: "bg-green-100",
        colorText: "text-green-600",
        title: "Efficient",
        desc: "Low energy bluetooth usage.",
      },
      {
        icon: "fa-person-walking",
        colorBg: "bg-orange-100",
        colorText: "text-orange-600",
        title: "Steps",
        desc: "Integrates with Activity rings.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Prototyping",
        description:
          "Tested different vibration patterns to distinguish 'Turn Left' from 'Turn Right'.",
      },
      {
        step: 2,
        title: "WatchKit Dev",
        description:
          "Built the interface using SwiftUI, ensuring high contrast for outdoor visibility.",
      },
      {
        step: 3,
        title: "Integration",
        description:
          "Implemented WatchConnectivity to pass route data from the main LOOCA app.",
      },
    ],
    techStack: [
      {
        name: "SwiftUI",
        icon: "fa-code",
        category: "UI Framework",
        colorBg: "bg-blue-100",
        colorText: "text-blue-600",
      },
      {
        name: "WatchKit",
        icon: "fa-clock",
        category: "Framework",
        colorBg: "bg-gray-100",
        colorText: "text-gray-600",
      },
      {
        name: "HealthKit",
        icon: "fa-heart",
        category: "Data",
        colorBg: "bg-red-100",
        colorText: "text-red-600",
      },
      {
        name: "CoreBluetooth",
        icon: "fa-bluetooth",
        category: "Connectivity",
        colorBg: "bg-blue-100",
        colorText: "text-blue-600",
      },
    ],
    impact: {
      stats: [
        { value: "40%", label: "Less Screen Time", color: "text-blue-600" },
        { value: "0.2s", label: "Glance Time", color: "text-blue-600" },
        { value: "100%", label: "Hands-Free", color: "text-blue-600" },
      ],
      quote: {
        text: "I love that I don't look like a tourist staring at my phone map anymore. Just a buzz on the wrist and I know where to go.",
        author: "Mike R.",
        role: "User",
      },
    },
    gallery: [
      "/portfolio_looca_watch.png",
      "/portfolio_looca_watch.png",
      "/portfolio_looca_watch.png",
      "/portfolio_looca_watch.png",
    ],
    nextProject: "leafit",
  },
  leafit: {
    title: "LeaFit",
    category: "iOS APP",
    description:
      "A holistic fitness companion that gamifies your health journey through virtual plant care.",
    role: "Product Designer",
    timeline: "3 Months",
    year: "2023",
    heroImage: "/portfolio_leafit.png",
    mainImage: "/portfolio_leafit.png",
    overview:
      "Fitness apps can be intimidating. LeaFit takes a gentler approach. By linking your physical activity to the health of a virtual plant, we created a feedback loop that encourages consistency without the pressure of hardcore metrics.",
    challenge:
      "We needed to visualize health data in a way that felt organic, not clinical. The challenge was mapping complex HealthKit data (steps, calories, sleep) to simple 'Plant Health' indicators.",
    challengeBullets: [
      "Abstracting complex data into visual metaphors",
      "Designing a non-intrusive notification system",
      "Balancing gamification with accuracy",
    ],
    features: [
      {
        icon: "fa-leaf",
        colorBg: "bg-green-100",
        colorText: "text-green-600",
        title: "Plant Avatar",
        desc: "Your plant grows as you move.",
      },
      {
        icon: "fa-chart-line",
        colorBg: "bg-blue-100",
        colorText: "text-blue-600",
        title: "Insights",
        desc: "Weekly health trend analysis.",
      },
      {
        icon: "fa-droplet",
        colorBg: "bg-cyan-100",
        colorText: "text-cyan-600",
        title: "Hydration",
        desc: "Water tracking made simple.",
      },
      {
        icon: "fa-user-group",
        colorBg: "bg-purple-100",
        colorText: "text-purple-600",
        title: "Community",
        desc: "Garden together with friends.",
      },
      {
        icon: "fa-award",
        colorBg: "bg-yellow-100",
        colorText: "text-yellow-600",
        title: "Rewards",
        desc: "Collect seeds and pots.",
      },
      {
        icon: "fa-apple-whole",
        colorBg: "bg-red-100",
        colorText: "text-red-600",
        title: "Nutrition",
        desc: "Basic meal logging.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Concept Art",
        description:
          "Sketched 20+ plant variations to find characters that users would feel emotionally attached to.",
      },
      {
        step: 2,
        title: "Interaction Design",
        description:
          "Created smooth, organic animations for the plant's growth stages using Lottie.",
      },
      {
        step: 3,
        title: "HealthKit Integration",
        description:
          "Ensured privacy-first reading of user step counts and workout data.",
      },
    ],
    techStack: [
      {
        name: "SwiftUI",
        icon: "fa-code",
        category: "UI Framework",
        colorBg: "bg-blue-100",
        colorText: "text-blue-600",
      },
      {
        name: "HealthKit",
        icon: "fa-heart-pulse",
        category: "API",
        colorBg: "bg-red-100",
        colorText: "text-red-600",
      },
      {
        name: "Lottie",
        icon: "fa-film",
        category: "Animation",
        colorBg: "bg-green-100",
        colorText: "text-green-600",
      },
      {
        name: "CoreData",
        icon: "fa-database",
        category: "Storage",
        colorBg: "bg-gray-100",
        colorText: "text-gray-600",
      },
    ],
    impact: {
      stats: [
        { value: "2x", label: "Retention", color: "text-green-600" },
        { value: "5k+", label: "Active Users", color: "text-green-600" },
        { value: "10k", label: "Plants Grown", color: "text-green-600" },
      ],
      quote: {
        text: "I actually want to go for a run now so my succulent doesn't wither. It's surprisingly effective motivation!",
        author: "Jenny L.",
        role: "User",
      },
    },
    gallery: [
      "/portfolio_leafit.png",
      "/portfolio_leafit.png",
      "/portfolio_leafit.png",
      "/portfolio_leafit.png",
    ],
    nextProject: "kenali-diri",
  },
  "kenali-diri": {
    title: "Kenali-Diri",
    category: "Web Platform",
    description:
      "A safe, anonymous, and educational platform for sexual health awareness tailored for Indonesian youth.",
    role: "Full Stack Developer",
    timeline: "5 Months",
    year: "2022",
    heroImage: "/portfolio_kenali_diri.png",
    mainImage: "/portfolio_kenali_diri.png",
    overview:
      "Sexual health education is often stigmatized. Kenali-Diri provides a judgment-free zone where students can learn from verified experts, take self-assessments, and access reliable resources privately.",
    challenge:
      "Privacy and trust were paramount. We had to architect a system that allowed for interaction (Q&A) without storing any personally identifiable information (PII) that could link a user to their queries.",
    challengeBullets: [
      "Ensuring complete anonymity",
      "Moderating user-generated content",
      "Creating an approachable, non-clinical UI",
    ],
    features: [
      {
        icon: "fa-user-secret",
        colorBg: "bg-gray-100",
        colorText: "text-gray-600",
        title: "Anonymous Q&A",
        desc: "Ask experts without fear.",
      },
      {
        icon: "fa-book-medical",
        colorBg: "bg-blue-100",
        colorText: "text-blue-600",
        title: "Library",
        desc: "Curated medical articles.",
      },
      {
        icon: "fa-check-to-slot",
        colorBg: "bg-green-100",
        colorText: "text-green-600",
        title: "Quizzes",
        desc: "Test your knowledge.",
      },
      {
        icon: "fa-comments",
        colorBg: "bg-purple-100",
        colorText: "text-purple-600",
        title: "Forum",
        desc: "Community discussions.",
      },
      {
        icon: "fa-shield-halved",
        colorBg: "bg-red-100",
        colorText: "text-red-600",
        title: "Privacy",
        desc: "No data tracking.",
      },
      {
        icon: "fa-mobile-screen",
        colorBg: "bg-yellow-100",
        colorText: "text-yellow-600",
        title: "Responsive",
        desc: "Works on all devices.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Stakeholder Meetings",
        description:
          "Consulted with psychologists and doctors to ensure content accuracy and sensitivity.",
      },
      {
        step: 2,
        title: "Security Architecture",
        description:
          "Designed a database schema that hashes identifiers to prevent data linkage.",
      },
      {
        step: 3,
        title: "Content Strategy",
        description:
          "Developed a 'friendly' tone of voice for the UI to make the platform feel like a safe space.",
      },
    ],
    techStack: [
      {
        name: "Next.js",
        icon: "fa-react",
        category: "Frontend",
        colorBg: "bg-gray-100",
        colorText: "text-gray-600",
      },
      {
        name: ".NET Core",
        icon: "fa-microsoft",
        category: "Backend",
        colorBg: "bg-blue-100",
        colorText: "text-blue-600",
      },
      {
        name: "Azure",
        icon: "fa-cloud",
        category: "Cloud",
        colorBg: "bg-blue-100",
        colorText: "text-blue-600",
      },
      {
        name: "MSSQL",
        icon: "fa-database",
        category: "Database",
        colorBg: "bg-red-100",
        colorText: "text-red-600",
      },
    ],
    impact: {
      stats: [
        { value: "1k+", label: "Questions Answered", color: "text-blue-600" },
        { value: "100%", label: "Privacy Score", color: "text-blue-600" },
        { value: "50+", label: "Articles", color: "text-blue-600" },
      ],
      quote: {
        text: "This platform gave me the answers I was too afraid to ask anyone else. Thank you for making this.",
        author: "Anonymous",
        role: "Student",
      },
    },
    gallery: [
      "/portfolio_kenali_diri.png",
      "/portfolio_kenali_diri.png",
      "/portfolio_kenali_diri.png",
      "/portfolio_kenali_diri.png",
    ],
    nextProject: "pahamikulit",
  },
  pahamikulit: {
    title: "PahamiKulit",
    category: "AI Platform",
    description:
      "An AI-powered skincare advisor that recommends products based on scientific ingredient analysis.",
    role: "Backend Engineer",
    timeline: "4 Months",
    year: "2023",
    heroImage: "/portfolio_pahamikulit.png",
    mainImage: "/portfolio_pahamikulit.png",
    overview:
      "Skincare is confusing. Marketing buzzwords often mask the truth about ingredients. PahamiKulit cuts through the noise by using an algorithm to analyze product labels and match them to your specific skin concerns.",
    challenge:
      "The core challenge was data. We had to scrape and structure thousands of product ingredient lists, then build a logic engine (SAW Algorithm) that could rank them effectively based on user inputs.",
    challengeBullets: [
      "Normalizing inconsistent ingredient names",
      "Implementing SAW (Simple Additive Weighting)",
      "Building a scalable scraper",
    ],
    features: [
      {
        icon: "fa-flask",
        colorBg: "bg-blue-100",
        colorText: "text-blue-600",
        title: "Ingredient Analysis",
        desc: "Detects irritants and allergens.",
      },
      {
        icon: "fa-wand-magic-sparkles",
        colorBg: "bg-purple-100",
        colorText: "text-purple-600",
        title: "AI Match",
        desc: "Score products 0-100.",
      },
      {
        icon: "fa-list-check",
        colorBg: "bg-green-100",
        colorText: "text-green-600",
        title: "Routine",
        desc: "Build AM/PM sets.",
      },
      {
        icon: "fa-tags",
        colorBg: "bg-yellow-100",
        colorText: "text-yellow-600",
        title: "Price Watch",
        desc: "Find best deals.",
      },
      {
        icon: "fa-camera",
        colorBg: "bg-gray-100",
        colorText: "text-gray-600",
        title: "Scan",
        desc: "OCR for product labels.",
      },
      {
        icon: "fa-thumbs-up",
        colorBg: "bg-red-100",
        colorText: "text-red-600",
        title: "Trusted",
        desc: "Dermatologist verified data.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Data Collection",
        description:
          "Scraped 5 major e-commerce beauty sites to build a database of 5,000+ products.",
      },
      {
        step: 2,
        title: "Algorithm Design",
        description:
          "Implemented Simple Additive Weighting (SAW) to calculate suitability scores.",
      },
      {
        step: 3,
        title: "API Development",
        description:
          "Built a fast Flask API to serve recommendations in real-time.",
      },
    ],
    techStack: [
      {
        name: "Python",
        icon: "fa-python",
        category: "Language",
        colorBg: "bg-blue-100",
        colorText: "text-blue-600",
      },
      {
        name: "Flask",
        icon: "fa-flask",
        category: "Backend",
        colorBg: "bg-gray-100",
        colorText: "text-gray-600",
      },
      {
        name: "MySQL",
        icon: "fa-database",
        category: "Database",
        colorBg: "bg-orange-100",
        colorText: "text-orange-600",
      },
      {
        name: "React",
        icon: "fa-react",
        category: "Frontend",
        colorBg: "bg-cyan-100",
        colorText: "text-cyan-600",
      },
    ],
    impact: {
      stats: [
        { value: "5k+", label: "Products Indexed", color: "text-blue-600" },
        { value: "90%", label: "Match Rate", color: "text-blue-600" },
        { value: "3", label: "Partners", color: "text-blue-600" },
      ],
      quote: {
        text: "I finally stopped breaking out because this app told me my moisturizer had alcohol in it. Lifesaver!",
        author: "Rina D.",
        role: "User",
      },
    },
    gallery: [
      "/portfolio_pahamikulit.png",
      "/portfolio_pahamikulit.png",
      "/portfolio_pahamikulit.png",
      "/portfolio_pahamikulit.png",
    ],
    nextProject: "hutrivia",
  },
};

// --- STATIC PARAMS ---
export async function generateStaticParams() {
  return Object.keys(PROJECT_DETAILS).map((id) => ({
    id: id,
  }));
}

// --- COMPONENT ---
export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = PROJECT_DETAILS[params.id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-400">Project Not Found</h1>
        <Link href="/" className="ml-4 text-blue-600 underline">
          Go Home
        </Link>
      </div>
    );
  }

  // --- RENDERING ---
  return (
    <main className="font-sf bg-white text-gray-900 selection:bg-blue-100">
      {/* HEADER */}
      <nav id="header" className="fixed w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-semibold tracking-tight flex items-center group">
              <i className="fa-solid fa-code mr-2 text-blue-600 group-hover:rotate-12 transition-transform"></i>
              Fatih
            </Link>
            <div className="hidden md:flex items-center space-x-10">
                <Link
                  href="/#work"
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="/#experience"
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Experience
                </Link>
                <Link
                  href="/#about"
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/#contact"
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="hero-section" className="pt-32 pb-20 px-8">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i>
            Back to Projects
          </Link>
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-4 uppercase tracking-wider">
              {project.category}
            </span>
            <h1 className="text-6xl font-semibold tracking-tight mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-2xl text-gray-600 font-light max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="flex items-center space-x-12 mt-8">
            <div>
              <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">
                ROLE
              </p>
              <p className="text-sm font-medium">{project.role}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">
                TIMELINE
              </p>
              <p className="text-sm font-medium">{project.timeline}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">
                YEAR
              </p>
              <p className="text-sm font-medium">{project.year}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN IMAGE */}
      <section id="main-image-section" className="px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 h-[600px] flex items-center justify-center shadow-sm border border-gray-100 relative">
            <Image
              src={project.heroImage}
              alt="Main Project Image"
              fill
              className="object-contain p-12"
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section id="overview-section" className="px-8 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                Overview
              </h2>
              <h3 className="text-3xl font-semibold mb-6 leading-snug">
                The Story Behind
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {project.overview}
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                Challenge
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.challenge}
              </p>
              <div className="space-y-4">
                {project.challengeBullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fa-solid fa-check text-blue-600 text-sm"></i>
                    </div>
                    <p className="text-gray-700 text-sm pt-1.5">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL SHOWCASE 1 (Using Gallery[0] & Gallery[1]) */}
      <section id="visual-showcase-1" className="px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {project.gallery.slice(0, 2).map((img, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden bg-gray-100 h-[500px] flex items-center justify-center relative border border-gray-100"
              >
                <Image src={img} alt="Showcase" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY FEATURES SECTION */}
      <section id="key-features-section" className="px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Key Features
            </h2>
            <h3 className="text-4xl font-semibold">What makes it special</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {project.features.map((feature, idx) => (
              <div key={idx}>
                <div
                  className={`w-14 h-14 rounded-2xl ${feature.colorBg} flex items-center justify-center mb-6`}
                >
                  <i
                    className={`fa-solid ${feature.icon} ${feature.colorText} text-xl`}
                  ></i>
                </div>
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL WIDTH IMAGE (Using Gallery[2]) */}
      {project.gallery[2] && (
        <section id="full-width-image" className="py-20">
          <div className="w-full h-[700px] bg-gray-900 flex items-center justify-center relative">
            <Image
              src={project.gallery[2]}
              alt="Full Width"
              fill
              className="object-cover opacity-90"
            />
          </div>
        </section>
      )}

      {/* DESIGN PROCESS SECTION */}
      <section id="design-process-section" className="px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Design Process
            </h2>
            <h3 className="text-4xl font-semibold mb-6">
              From concept to reality
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to solving complex problems through
              iteration and validation.
            </p>
          </div>
          <div className="space-y-16">
            {project.process.map((step, idx) => (
              <div key={idx} className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-semibold mb-3">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {step.stats && (
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      {step.stats.map((stat, sIdx) => (
                        <div
                          key={sIdx}
                          className="bg-gray-50 p-6 rounded-xl border border-gray-100"
                        >
                          <p className="text-3xl font-semibold text-blue-600 mb-2">
                            {stat.value}
                          </p>
                          <p className="text-sm text-gray-600">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section id="tech-stack-section" className="px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Technology Stack
            </h2>
            <h3 className="text-4xl font-semibold mb-6">
              Built with modern tools
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Robust architecture designed for scale and performance.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.techStack.map((tech, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div
                  className={`w-16 h-16 ${tech.colorBg} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <i
                    className={`fa-brands ${tech.icon} ${tech.colorText} text-3xl`}
                  ></i>
                </div>
                <h4 className="font-semibold mb-2">{tech.name}</h4>
                <p className="text-sm text-gray-600">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section id="results-section" className="px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Impact & Results
            </h2>
            <h3 className="text-4xl font-semibold mb-6">Measurable success</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {project.impact.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className={`text-5xl font-semibold ${stat.color} mb-3`}>
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-50">
            <blockquote className="text-2xl font-light text-gray-800 leading-relaxed mb-6">
              "{project.impact.quote.text}"
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold mr-4 text-sm">
                {project.impact.quote.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-semibold">{project.impact.quote.author}</p>
                <p className="text-sm text-gray-600">
                  {project.impact.quote.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT SECTION */}
      {PROJECT_DETAILS[project.nextProject] && (
        <section id="next-project-section" className="px-8 py-20 pb-40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Next Project
              </h2>
              <h3 className="text-3xl font-semibold">Explore more work</h3>
            </div>
            <Link
              href={`/projects/${project.nextProject}`}
              className="block group"
            >
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 h-[500px] flex items-center justify-center relative border border-gray-100">
                <Image
                  src={PROJECT_DETAILS[project.nextProject].heroImage}
                  alt="Next Project"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                    <p className="text-white text-2xl font-semibold">
                      View Project
                    </p>
                    <i className="fa-solid fa-arrow-right text-white text-xl mt-4"></i>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h4 className="text-2xl font-semibold mb-2">
                  {PROJECT_DETAILS[project.nextProject].title}
                </h4>
                <p className="text-gray-600">
                  {PROJECT_DETAILS[project.nextProject].category}
                </p>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer
        id="footer"
        className="border-t border-gray-100 px-8 py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-2xl font-semibold mb-2">Let's work together</p>
              <p className="text-gray-600">
                Have a project in mind? Get in touch.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <i className="fa-brands fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
              <a
                href="mailto:hello@fatih.dev"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <i className="fa-solid fa-envelope text-xl"></i>
              </a>
              <a
                href="https://github.com/fatih-fwzzz"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <i className="fa-brands fa-github text-xl"></i>
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2024 Fatih Fawwaz. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
