import React from "react";
import Link from "next/link";
import ProjectDetailClient, {
  ExtendedProjectData,
} from "./ProjectDetailClient";

// --- DUMMY DATA (Kept in Server Component for SSG) ---
const PROJECT_DETAILS: Record<string, ExtendedProjectData> = {
  lantera: {
    title: "Lantera",
    category: "iOS App",
    description:
      "A comprehensive health tracking companion designed for caregivers managing elderly health, featuring voice-based data logging and AI-powered insights.",
    role: "Lead iOS Developer",
    timeline: "3 Months",
    year: "2025",
    heroImage: "/portfolio-lantera.png",
    mainImage: "/portfolio-lantera.png",
    overview:
      "Lantera was built to solve a real problem faced by families caring for elderly relatives: the difficulty of tracking blood pressure and blood sugar readings consistently. Traditional paper logs are easy to lose, and manual tracking apps require too much typing. We created a voice-first experience that makes logging as simple as speaking.",
    challenge:
      "The main technical challenge was building a reliable speech recognition system for Indonesian medical terms and an accurate OCR engine to extract metrics like cholesterol and hypertension from lab results. Privacy was paramount, so all processing had to happen on-device.",
    challengeBullets: [
      "Implementing accurate Indonesian speech recognition",
      "Building an OCR system to parsing complex medical lab results",
      "Ensuring personal health data stays private and secure",
    ],
    features: [
      {
        icon: "fa-microphone",
        colorBg: "bg-blue-100",
        colorText: "text-blue-600",
        title: "Voice Input",
        desc: "Speak your data, no typing required.",
      },
      {
        icon: "fa-chart-line",
        colorBg: "bg-green-100",
        colorText: "text-green-600",
        title: "Trend Analysis",
        desc: "AI-powered insights on health patterns.",
      },
      {
        icon: "fa-bell",
        colorBg: "bg-yellow-100",
        colorText: "text-yellow-600",
        title: "Smart Reminders",
        desc: "Never miss a measurement with contextual alerts.",
      },
      {
        icon: "fa-file-medical",
        colorBg: "bg-teal-100",
        colorText: "text-teal-600",
        title: "Smart Extraction",
        desc: "Extracts cholesterol & hypertension data from medical results.",
      },
      {
        icon: "fa-cloud",
        colorBg: "bg-purple-100",
        colorText: "text-purple-600",
        title: "iCloud Sync",
        desc: "Your data on all your devices.",
      },
      {
        icon: "fa-shield-halved",
        colorBg: "bg-red-100",
        colorText: "text-red-600",
        title: "Privacy First",
        desc: "End-to-end encryption for health data.",
      },
      {
        icon: "fa-brain",
        colorBg: "bg-indigo-100",
        colorText: "text-indigo-600",
        title: "Apple Intelligence",
        desc: "On-device ML for pattern recognition.",
      },
    ],
    process: [
      {
        step: 1,
        title: "User Research & Interviews",
        description:
          "Conducted in-depth interviews with 50+ caregivers to understand pain points in health tracking. Discovered that voice input was the #1 requested feature.",
        stats: [
          { value: "50+", label: "Caregiver Interviews" },
          { value: "200+", label: "Survey Responses" },
        ],
      },
      {
        step: 2,
        title: "SwiftUI Prototyping",
        description:
          "Built high-fidelity prototypes using SwiftUI with a focus on accessibility. Tested voice recognition accuracy with various Indonesian accents and medical terms.",
        stats: [
          { value: "95%", label: "Voice Accuracy" },
          { value: "10", label: "Iterations" },
        ],
      },
      {
        step: 3,
        title: "CloudKit Integration & Launch",
        description:
          "Integrated CloudKit to keep data in sync across iPhone, iPad, and Apple Watch automatically. Launched on App Store with TestFlight beta program for early adopters.",
      },
    ],
    techStack: [
      {
        name: "Swift",
        logo: "https://cdn.simpleicons.org/swift/F05138",
        category: "Language",
      },
      {
        name: "SwiftUI",
        logo: "https://developer.apple.com/assets/elements/icons/swiftui/swiftui-96x96_2x.png",
        category: "UI Framework",
      },
      {
        name: "SwiftData",
        logo: "/logo/swiftdata.png",
        category: "Persistence",
      },
      {
        name: "CloudKit",
        logo: "/logo/cloudkit.png",
        category: "Cloud Sync",
      },
      {
        name: "SFSpeech",
        logo: "/logo/sfspeech.png",
        category: "Speech Recognition",
      },
      {
        name: "Apple Intelligence",
        logo: "/logo/apple-intelligence.png",
        category: "AI/ML",
      },
    ],
    impact: {
      quote: {
        text: "Lantera has made it easy for me to track my husband's blood sugar and blood pressure with an interface that is simple to use and understand. The voice input feature is a game-changer; I can just speak the numbers and they're saved instantly.",
        author: "Jonathan's Mom",
        role: "Caregiver",
      },
    },
    gallery: [
      "/lantera/lantera-1.jpg",
      "/lantera/lantera-2.jpeg",
      "/lantera/lantera-3.JPEG",
      "/portfolio-lantera.png",
      "/portfolio-lantera.png",
    ],
    nextProject: "cococo",
  },
  cococo: {
    title: "Coco App Reworked",
    category: "iOS App",
    description:
      "A complete rework of a legacy travel booking app, modernizing the codebase and optimizing the booking flow for better conversion rates.",
    role: "iOS Engineer",
    timeline: "3 Weeks",
    year: "2025",
    heroImage: "/portfolio-cococo.png",
    mainImage: "/portfolio-cococo.png",
    overview:
      "Coco was a working travel app with a loyal user base, but the codebase was built with outdated patterns. The booking flow had a 40% drop-off rate. Our mission was to modernize the architecture while maintaining backward compatibility and dramatically improve the user experience.",
    challenge:
      "The biggest challenge was refactoring a legacy UIKit codebase to adhere to the MVVM-C (Model-View-ViewModel-Coordinator) pattern while actively addressing critical booking conversion bottlenecks. We also championed a complete UI revamp to improve navigation and transparency—making pricing, policies, and trust elements like cancellation terms immediately visible to reassure users.",
    challengeBullets: [
      "Refactoring legacy UIKit to MVVM-C architecture",
      "Revamping UI/UX for transparency and user trust",
      "Optimizing booking flow to boost conversion rates",
      "Utilizing native URLSession for REST API integration",
      "Enforcing 100% SwiftLint compliance",
    ],
    features: [
      {
        icon: "fa-mobile-screen",
        colorBg: "bg-blue-100",
        colorText: "text-blue-600",
        title: "Modern UI",
        desc: "SwiftUI components integrated with UIKit.",
      },
      {
        icon: "fa-bolt",
        colorBg: "bg-yellow-100",
        colorText: "text-yellow-600",
        title: "Fast Booking",
        desc: "Streamlined 3-step booking process.",
      },
      {
        icon: "fa-shield-halved",
        colorBg: "bg-red-100",
        colorText: "text-red-600",
        title: "Secure Payments",
        desc: "PCI-compliant payment integration.",
      },
      {
        icon: "fa-database",
        colorBg: "bg-purple-100",
        colorText: "text-purple-600",
        title: "Supabase Backend",
        desc: "Modern real-time database sync.",
      },
      {
        icon: "fa-vial",
        colorBg: "bg-green-100",
        colorText: "text-green-600",
        title: "Unit Tested",
        desc: "85% code coverage with XCTest.",
      },
      {
        icon: "fa-gauge-high",
        colorBg: "bg-orange-100",
        colorText: "text-orange-600",
        title: "Performance",
        desc: "50% faster load times.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Code Audit & Analysis",
        description:
          "Analyzed the existing codebase to identify technical debt hotspots. Mapped user flows to pinpoint conversion bottlenecks.",
        stats: [
          { value: "3k+", label: "Lines Audited" },
          { value: "40%", label: "Drop-off Rate" },
        ],
      },
      {
        step: 2,
        title: "Strategic Core Refactoring",
        description:
          "Executed a surgical modernization of the app's critical conversion funnel: Home, Search, Product Detail, and Booking. We rebuilt these high-impact flows from the ground up to eliminate friction and drive revenue, ensuring the most vital user journeys were flawless.",
        stats: [
          { value: "4", label: "Critical Flows" },
          { value: "85%", label: "Test Coverage" },
        ],
      },
      {
        step: 3,
        title: "Validation & Launch",
        description:
          "Rigorous usability testing delivered definitive proof of success. The app achieved a flawless 100% task completion rate, with users citing the seamless booking flow and transparent pricing as key wins. Satisfaction scores averaged 4.8/5, cementing the redesign as a major upgrade.",
        stats: [
          { value: "100%", label: "Task Success" },
          { value: "4.8/5", label: "User Satisfaction" },
        ],
      },
    ],
    techStack: [
      {
        name: "UIKit",
        logo: "/logo/uikit.png",
        category: "UI Framework",
      },
      {
        name: "Swift",
        logo: "https://cdn.simpleicons.org/swift/F05138",
        category: "Language",
      },
      {
        name: "SwiftUI",
        logo: "https://developer.apple.com/assets/elements/icons/swiftui/swiftui-96x96_2x.png",
        category: "Modern UI",
      },
      {
        name: "URLSession",
        logo: "/logo/apple-api.png",
        category: "Networking",
      },
      {
        name: "XCTest",
        logo: "/logo/xctest.png",
        category: "Testing",
      },
      {
        name: "Supabase",
        logo: "https://cdn.simpleicons.org/supabase/3ECF8E",
        category: "Backend",
      },
    ],
    impact: {
      stats: [
        { value: "100%", label: "Task Success Rate", color: "text-green-600" },
        { value: "5.0/5", label: "Cost Transparency", color: "text-blue-600" },
        {
          value: "4.8/5",
          label: "Booking Satisfaction",
          color: "text-purple-600",
        },
      ],
      quote: {
        text: "Users find the app very clear and transparent about costs, fees, and refund policies. Completing the booking flow is very smooth and intuitive.",
        author: "Usability Testing",
        role: "Process & Results",
      },
    },
    gallery: [
      "/cococo/cococo-1.JPG",
      "/cococo/cococo-2.JPG",
      "/cococo/cococo-3.JPEG",
      "/portfolio-cococo.png",
    ],
    nextProject: "legend-of-gardatara",
  },
  "legend-of-gardatara": {
    title: "Legend of Gardatara",
    category: "iOS Game App",
    description:
      "A 2D horizontal-lane tower defense game combining Indonesian folklore heroes with strategic gameplay to battle alien invaders.",
    role: "Game Developer",
    timeline: "1 Month",
    year: "2025",
    heroImage: "/portfolio_log.png",
    mainImage: "/portfolio_log.png",
    overview:
      "Legend of Gardatara was born from a passion to showcase Indonesian cultural heritage through gaming. We wanted to create a tower defense game that's not just fun, but also introduces global players to iconic Indonesian folklore characters like Si Kancil, Bawang Merah & Bawang Putih, and Malin Kundang in an exciting sci-fi setting.",
    challenge:
      "The core challenge was balancing authentic cultural representation with engaging gameplay mechanics. We also prioritized stability to ensure the game runs without crashing and engineered a fully responsive resolution system compatible with all iPhone and iPad models.",
    challengeBullets: [
      "Researching and authentically representing Indonesian folklore heroes",
      "Ensuring crash-free stability via memory optimization",
      "Implementing adaptive resolution for universal iPhone & iPad support",
    ],
    features: [
      {
        icon: "fa-chess",
        colorBg: "bg-blue-100",
        colorText: "text-blue-600",
        title: "Strategic Gameplay",
        desc: "Plan hero placement in horizontal lanes.",
      },
      {
        icon: "fa-rocket",
        colorBg: "bg-purple-100",
        colorText: "text-purple-600",
        title: "Folklore x Alien",
        desc: "A unique fusion where traditional Indonesian culture clashes with futuristic alien invaders.",
      },
      {
        icon: "fa-wand-magic-sparkles",
        colorBg: "bg-yellow-100",
        colorText: "text-yellow-600",
        title: "Special Abilities",
        desc: "Each hero has unique powers based on their legend.",
      },
      {
        icon: "fa-palette",
        colorBg: "bg-orange-100",
        colorText: "text-orange-600",
        title: "Hand-Drawn Art",
        desc: "Unique art style blending traditional, adorable, and modern.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Cultural Research & Design",
        description:
          "Studied Indonesian folklore texts and consulted cultural experts to ensure respectful and accurate representation of each hero. Created concept art blending traditional wayang aesthetics with modern game design.",
        stats: [
          { value: "10+", label: "Tower Defense game resources" },
          { value: "10", label: "Animated Objects" },
        ],
      },
      {
        step: 2,
        title: "Unity Development",
        description:
          "Engineered the game's core architecture with a strict focus on memory stability to prevent crashes on older hardware. Implemented a custom adaptive resolution system to ensure perfectly scaled UI and gameplay across the entire range of iPhones and iPads.",
        stats: [
          { value: "100%", label: "Crash-Free" },
          { value: "Universal", label: "Device Support" },
        ],
      },
      {
        step: 3,
        title: "Playtesting & Launch",
        description:
          "Conducted extensive playtesting to balance difficulty curves and hero abilities. Launched on App Store with localization for Indonesian and English players.",
      },
    ],
    techStack: [
      {
        name: "Unity 2D",
        logo: "https://cdn.simpleicons.org/unity/000000",
        category: "Game Engine",
      },
      {
        name: "C#",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg",
        category: "Language",
      },
      {
        name: "Game Center",
        logo: "https://cdn.simpleicons.org/apple/000000",
        category: "Services",
      },
      {
        name: "Xcode",
        logo: "https://developer.apple.com/assets/elements/icons/xcode-s/xcode-s-256x256_2x.png",
        category: "Build & Profile",
      },
    ],
    impact: {
      stats: [
        {
          value: "800+",
          label: "App Store Impressions",
          color: "text-blue-600",
        },
        { value: "5.0", label: "App Store Rating", color: "text-green-600" },
        { value: "100%", label: "Crash-Free", color: "text-purple-600" },
      ],
      quote: {
        text: "It is really engaging and fun to play. It is suitable for the Global Market, and the characters are so adorable!",
        author: "Restya Winda Astari",
        role: "Team Lead at Agate Academy",
      },
    },
    gallery: [
      "/log/log-1.JPG",
      "/log/log-2.JPEG",
      "/log/log-3.JPEG",
      "/portfolio_log.png",
    ],
    nextProject: "leafit",
  },
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
      "The primary challenge was to balance educational integrity with entertainment value. We also prioritized ensuring the user interface was fully responsive, maintaining a playful and intuitive experience across both Android and iPhone devices.",
    challengeBullets: [
      "Gamify historical content without trivializing it",
      "Ensuring consistent UI behavior on iOS & Android",
      "Optimize performance for low-end devices",
    ],
    features: [
      {
        icon: "fa-gamepad",
        colorBg: "bg-blue-100",
        colorText: "text-blue-600",
        title: "Trivia Engine",
        desc: "Engaging quiz logic with varied question types.",
      },
      {
        icon: "fa-cloud-arrow-down",
        colorBg: "bg-purple-100",
        colorText: "text-purple-600",
        title: "Dynamic Content",
        desc: "Questions update remotely via Firebase.",
      },
      {
        icon: "fa-bolt",
        colorBg: "bg-yellow-100",
        colorText: "text-yellow-600",
        title: "Instant Scoring",
        desc: "Immediate feedback and result calculation.",
      },
      {
        icon: "fa-layer-group",
        colorBg: "bg-red-100",
        colorText: "text-red-600",
        title: "Topic Variety",
        desc: "Covers multiple eras of Indonesian history.",
      },
      {
        icon: "fa-mobile",
        colorBg: "bg-green-100",
        colorText: "text-green-600",
        title: "Cross-Platform",
        desc: "Seamless experience on both iOS and Android.",
      },
      {
        icon: "fa-shield-halved",
        colorBg: "bg-gray-100",
        colorText: "text-gray-600",
        title: "Firebase Auth",
        desc: "Secure user session management.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Research & Concept",
        description:
          "We analyzed top quiz apps to understand engagement loops.",
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
        logo: "https://cdn.simpleicons.org/flutter/02569B",
        category: "Mobile Framework",
      },
      {
        name: "Firebase",
        logo: "https://cdn.simpleicons.org/firebase/FFCA28",
        category: "Backend Service",
      },
      {
        name: "Dart",
        logo: "https://cdn.simpleicons.org/dart/0175C2",
        category: "Language",
      },
      {
        name: "Figma",
        logo: "https://cdn.simpleicons.org/figma/F24E1E",
        category: "Design Tool",
      },
    ],
    gallery: [
      "/portfolio_hutrivia.png",
      "/portfolio_hutrivia.png",
      "/portfolio_hutrivia.png",
      "/portfolio_hutrivia.png",
    ],
    nextProject: "kenali-diri",
  },
  looca: {
    title: "LOOCA",
    category: "iOS APP",
    description:
      "A comprehensive canteen discovery and navigation assistant that helps users effortlessly find their way through complex building environments.",
    role: "iOS Developer",
    timeline: "4 Months",
    year: "2024",
    heroImage: "/portfolio_looca.png",
    mainImage: "/portfolio_looca.png",
    overview:
      "GPS fails indoors. LOOCA bridges that gap. We built a solution that uses visual markers and internal sensors to provide pinpoint accuracy inside shopping malls and office complexes, all without needing expensive beacon infrastructure.",
    challenge:
      "The project was a lesson in prioritizing 'must-have' vs. 'nice-to-have' features. We faced significant challenges in defining the app flow and ensuring it aligned with our original concept. Technically, managing modal transitions and integrating MapKit for reliable canteen navigation required iterative refinement.",
    challengeBullets: [
      "Distinguishing critical features from scope creep",
      "Refining app flow and modal transitions",
      "Validating user paths with CoreLocation",
    ],
    features: [
      {
        icon: "fa-map-location-dot",
        colorBg: "bg-blue-100",
        colorText: "text-blue-600",
        title: "Canteen Discovery",
        desc: "Browsable list of nearby canteens with filters.",
      },
      {
        icon: "fa-route",
        colorBg: "bg-indigo-100",
        colorText: "text-indigo-600",
        title: "Navigation",
        desc: "Step-by-step guidance for indoor & outdoor.",
      },
      {
        icon: "fa-shop",
        colorBg: "bg-red-100",
        colorText: "text-red-600",
        title: "Top Tenants",
        desc: "View popular vendors in each canteen.",
      },
      {
        icon: "fa-circle-info",
        colorBg: "bg-green-100",
        colorText: "text-green-600",
        title: "Canteen Info",
        desc: "Opening hours, budget, and crowdedness.",
      },
      {
        icon: "fa-wifi",
        colorBg: "bg-orange-100",
        colorText: "text-orange-600",
        title: "Offline Mode",
        desc: "Navigate basements with zero connectivity.",
      },
      {
        icon: "fa-people-group",
        colorBg: "bg-teal-100",
        colorText: "text-teal-600",
        title: "Team Dynamics",
        desc: "Built by 2 coders & 1 designer.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Concept & Prototyping",
        description:
          "Designed an interactive prototype in Figma. We conducted concept testing and exhibitions to gather early user feedback, which was crucial for our iterations.",
      },
      {
        step: 2,
        title: "Core Development",
        description:
          "Built the UI with SwiftUI and implemented navigation using MapKit. We used CoreLocation to validate user positioning and identify the nearest canteens.",
      },
      {
        step: 3,
        title: "Refinement & Growth",
        description:
          "Addressed navigation hurdles and modal transition issues. This phase taught us the value of shifting perspective to solve complex-looking problems simply.",
      },
    ],
    techStack: [
      {
        name: "Swift",
        logo: "https://cdn.simpleicons.org/swift/F05138",
        category: "Language",
      },
      {
        name: "SwiftUI",
        logo: "https://developer.apple.com/assets/elements/icons/swiftui/swiftui-96x96_2x.png",
        category: "UI Framework",
      },
      {
        name: "MapKit",
        logo: "https://developer.apple.com/assets/elements/icons/maps/maps-96x96_2x.png",
        category: "Navigation",
      },
      {
        name: "CoreLocation",
        logo: "/logo/apple-api.png",
        category: "Location",
      },
    ],
    impact: {
      stats: [
        { value: "3", label: "Team Members", color: "text-blue-600" },
        { value: "100%", label: "SwiftUI UI", color: "text-green-600" },
        { value: "MVP", label: "Delivered", color: "text-orange-600" },
      ],
      quote: {
        text: "As a new learner here, I can find the path to every canteen in GOP in no time without worrying about connectivity. I can also decide which canteen to visit based on my interests and budget.",
        author: "Learner",
        role: "Apple Developer Academy",
      },
    },
    gallery: [
      "/looca/looca-1.JPEG",
      "/looca/looca-2.JPEG",
      "/looca/looca-3.JPEG",
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
    timeline: "2 Weeks",
    year: "2025",
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
        icon: "fa-pen-ruler",
        colorBg: "bg-green-100",
        colorText: "text-green-600",
        title: "HIG Compliant",
        desc: "Strict adherence to Human Interface Guidelines.",
      },
      {
        icon: "fa-stream",
        colorBg: "bg-orange-100",
        colorText: "text-orange-600",
        title: "Simple Flow",
        desc: "Intuitive, linear navigation flow.",
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
        name: "Swift",
        logo: "https://cdn.simpleicons.org/swift/F05138",
        category: "Language",
      },
      {
        name: "SwiftUI",
        logo: "https://developer.apple.com/assets/elements/icons/swiftui/swiftui-96x96_2x.png",
        category: "UI Framework",
      },
      {
        name: "WatchKit",
        logo: "https://developer.apple.com/assets/elements/icons/watchkit/watchkit-128x128_2x.png",
        category: "Framework",
      },
      {
        name: "CoreLocation",
        logo: "/logo/apple-api.png",
        category: "Location",
      },
    ],
    impact: {
      stats: [
        { value: "40%", label: "Less Screen Time", color: "text-blue-600" },
        { value: "0.2s", label: "Glance Time", color: "text-blue-600" },
        { value: "100%", label: "Hands-Free", color: "text-blue-600" },
      ],
      quote: {
        text: "With the watch app, I can navigate the GOP campus hands-free. It's incredibly convenient to just glance at my wrist for directions between sessions instead of fumbling with my phone.",
        author: "Learner",
        role: "Apple Developer Academy",
      },
    },
    gallery: [
      "/looca-watch/looca-watch-1.png",
      "/looca-watch/looca-watch-2.JPEG",
      "/looca-watch/looca-watch-3.png",
      "/portfolio_looca_watch.png",
    ],
    nextProject: "hutrivia",
  },
  leafit: {
    title: "LeaFit",
    category: "iOS APP",
    description:
      "A smart plant care assistant that leverages multi-layered Machine Learning to identify aloe vera plants, detect specific diseases, and provide actionable treatment recommendations.",
    role: "iOS Engineer",
    timeline: "3 Weeks",
    year: "2025",
    heroImage: "/portfolio_leafit.png",
    mainImage: "/portfolio_leafit.png",
    overview:
      "Homeplant enthusiasts often struggle to identify why their plants are sick and how to treat them. LeaFit bridges this knowledge gap by using advanced Machine Learning to scan plants, detect specific diseases like Sunburn, Anthracnose, Rust, and Rot, and provide accurate treatment plans, empowering users to understand and care for their plants better.",
    challenge:
      "The primary challenge was orchestrating a multi-layered ML architecture on-device. We had to combine CreateML for species classification with YOLOv8-Seg for precise disease segmentation, all while handling complex image processing tasks like background removal to ensure high accuracy.",
    challengeBullets: [
      "Orchestrating multi-model inference (CreateML + YOLOv8)",
      "Curating specific datasets for niche plant diseases",
      "Optimizing on-device performance for real-time analysis",
    ],
    features: [
      {
        icon: "fa-wand-magic-sparkles",
        colorBg: "bg-purple-100",
        colorText: "text-purple-600",
        title: "Smart Diagnosis",
        desc: "Detects Sunburn, Rot, Rust, & Anthracnose.",
      },
      {
        icon: "fa-crosshairs",
        colorBg: "bg-blue-100",
        colorText: "text-blue-600",
        title: "Precision Seg",
        desc: "Highlights exact diseased spots on leaves.",
      },
      {
        icon: "fa-book-open",
        colorBg: "bg-green-100",
        colorText: "text-green-600",
        title: "Aloevera Academy",
        desc: "Track history & learn growing techniques.",
      },
      {
        icon: "fa-eraser",
        colorBg: "bg-gray-100",
        colorText: "text-gray-600",
        title: "Clean Input",
        desc: "Auto-removes background for better accuracy.",
      },
      {
        icon: "fa-percent",
        colorBg: "bg-yellow-100",
        colorText: "text-yellow-600",
        title: "Confidence Score",
        desc: "Transparent accuracy metrics (e.g., 85.1%).",
      },
      {
        icon: "fa-lightbulb",
        colorBg: "bg-orange-100",
        colorText: "text-orange-600",
        title: "Smart Guidance",
        desc: "Real-time tips for capturing the best photo.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Dataset Curation",
        description:
          "Faced with a lack of specific datasets, we curated our own. We gathered 761 items for classification and over 4,000 images for segmentation to ensure robust model performance.",
        stats: [
          { value: "4000+", label: "Training Images" },
          { value: "761", label: "Classification Items" },
        ],
      },
      {
        step: 2,
        title: "Model Architecture",
        description:
          "Implemented a pipeline starting with Vision for background removal, followed by CreateML for species verification, and finally YOLOv8-Seg for precise disease identification.",
      },
      {
        step: 3,
        title: "App & UX Integration",
        description:
          "Built a guidance system to help users take better photos, directly improving model efficacy. Integrated a history feature 'Aloevera Academy' to track plant health over time.",
      },
    ],
    techStack: [
      {
        name: "CreateML",
        logo: "https://developer.apple.com/assets/elements/icons/create-ml/create-ml-96x96_2x.png",
        category: "Classification",
      },
      {
        name: "YOLOv8",
        logo: "https://cdn.simpleicons.org/ultralytics/006AFF",
        category: "Segmentation",
      },
      {
        name: "Vision",
        logo: "/logo/apple-api.png",
        category: "Image Processing",
      },
      {
        name: "SwiftUI",
        logo: "https://developer.apple.com/assets/elements/icons/swiftui/swiftui-96x96_2x.png",
        category: "UI Framework",
      },
      {
        name: "CoreML",
        logo: "https://developer.apple.com/assets/elements/icons/core-ml/core-ml-96x96_2x.png",
        category: "Machine Learning",
      },
    ],
    impact: {
      stats: [
        { value: "85%", label: "Avg Confidence", color: "text-green-600" },
        { value: "4000+", label: "Training Images", color: "text-blue-600" },
        { value: "4", label: "Diseases Detected", color: "text-purple-600" },
      ],
      quote: {
        text: "Machine Learning is a vital skill for Software Engineers. Building LeaFit opened my eyes to the potential of solving real-world biological problems with code.",
        author: "Fatih Fawwaz",
        role: "iOS Engineer",
      },
    },
    gallery: [
      "/leafit/leafit-1.JPG",
      "/leafit/leafit-2.png",
      "/leafit/leafit-3.JPEG",
      "/portfolio_leafit.png",
    ],
    nextProject: "looca",
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
        logo: "https://cdn.simpleicons.org/nextdotjs/000000",
        category: "Frontend",
      },
      {
        name: ".NET Core",
        logo: "https://cdn.simpleicons.org/dotnet/512BD4",
        category: "Backend",
      },
      {
        name: "Azure",
        logo: "https://cdn.simpleicons.org/azure/0078D4",
        category: "Cloud",
      },
      {
        name: "MSSQL",
        logo: "https://cdn.simpleicons.org/microsoftsqlserver/CC2927",
        category: "Database",
      },
    ],
    impact: {
      stats: [],
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
        logo: "https://cdn.simpleicons.org/python/3776AB",
        category: "Language",
      },
      {
        name: "Flask",
        logo: "https://cdn.simpleicons.org/flask/000000",
        category: "Backend",
      },
      {
        name: "MySQL",
        logo: "https://cdn.simpleicons.org/mysql/4479A1",
        category: "Database",
      },
      {
        name: "React",
        logo: "https://cdn.simpleicons.org/react/61DAFB",
        category: "Frontend",
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
    nextProject: "lantera",
  },
};

// --- STATIC PARAMS ---
export async function generateStaticParams() {
  return Object.keys(PROJECT_DETAILS).map((id) => ({
    id: id,
  }));
}

// --- COMPONENT (Server Side) ---
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

  // Find next project data
  const nextProjectData = PROJECT_DETAILS[project.nextProject];

  // Render Client Component with props
  return (
    <ProjectDetailClient project={project} nextProjectData={nextProjectData} />
  );
}
