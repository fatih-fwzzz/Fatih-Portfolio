import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProjectClientWrapper } from "./ProjectClientWrapper";

// --- DUMMY DATA ---
const PROJECT_DETAILS: Record<string, any> = {
  "hutrivia": {
    title: "HUTRIVIA",
    subtitle: "Indonesia Independence Quiz",
    category: "MOBILE APP",
    year: "2023",
    role: "Mobile Developer",
    heroImage: "/portfolio_hutrivia.png",
    challenge:
      "Engaging users with Indonesian independence history in a fun way. Traditional education methods often fail to capture attention, especially for younger audiences.",
    solution:
      "Created an interactive quiz app with gamification elements using Flutter. The app features engaging trivia, achievements, and a Firebase backend for real-time leaderboards.",
    features: [
      {
        title: "Engaging Trivia",
        icon: "fa-gamepad",
        desc: "Fun questions about Indonesian independence that educate and entertain."
      },
      {
        title: "Real-time Leaderboard",
        icon: "fa-trophy",
        desc: "Firebase-powered rankings to compete with friends and players nationwide."
      },
      {
        title: "Achievement System",
        icon: "fa-medal",
        desc: "Unlock badges and rewards as you progress through history lessons."
      }
    ],
    gallery: [
      "/portfolio_hutrivia.png",
      "/portfolio_hutrivia.png"
    ],
    nextProject: "looca"
  },
  "looca": {
    title: "LOOCA",
    subtitle: "AR Indoor Navigation",
    category: "IOS APP",
    year: "2024",
    role: "iOS Developer",
    heroImage: "/portfolio_looca.png",
    challenge:
      "Large buildings with multiple floors and complex layouts make it difficult for visitors to find specific locations like food courts, especially in areas with poor GPS signal.",
    solution:
      "Built an iOS app using ARKit and CoreLocation that overlays directional arrows in augmented reality. The app works offline by using pre-mapped building data.",
    features: [
      {
        title: "AR Guidance",
        icon: "fa-location-arrow",
        desc: "Augmented reality arrows guide you through complex building layouts."
      },
      {
        title: "Offline Navigation",
        icon: "fa-wifi-slash",
        desc: "Works in basements and parking areas without internet or GPS."
      },
      {
        title: "Multi-floor Support",
        icon: "fa-layer-group",
        desc: "Seamlessly navigate across floors with staircase and elevator detection."
      }
    ],
    gallery: [
      "/portfolio_looca.png",
      "/portfolio_looca.png"
    ],
    nextProject: "looca-watch"
  },
  "looca-watch": {
    title: "LOOCA-WatchOS",
    subtitle: "Streamlined Indoor Navigation",
    category: "WATCHOS APP",
    year: "2024",
    role: "Lead iOS Developer",
    heroImage: "/portfolio_looca_watch.png",
    challenge:
      "Users often struggle with complex map interfaces on small watch screens. The challenge was to create a navigation system that provides clear, glanceable direction without overwhelming the user.",
    solution:
      "We implemented a minimalist arrow-based guidance system using CoreLocation. By stripping away non-essential map data and focusing purely on direction and distance, we reduced cognitive load by 40%.",
    features: [
      {
        title: "Haptic Feedback",
        icon: "fa-mobile-screen",
        desc: "Subtle vibrations guide users at turns, allowing for eyes-free navigation."
      },
      {
        title: "Real-time Compass",
        icon: "fa-compass",
        desc: "High-precision heading updates ensure the arrow always points to the destination."
      },
      {
        title: "VoiceOver Support",
        icon: "fa-universal-access",
        desc: "Full accessibility integration guarantees usability for visually impaired users."
      }
    ],
    gallery: [
      "/portfolio_looca_watch.png",
      "/portfolio_looca_watch.png"
    ],
    nextProject: "leafit"
  },
  "leafit": {
    title: "LeaFit",
    subtitle: "Your Personal Fitness Companion",
    category: "IOS APP",
    year: "2023",
    role: "UI/UX Designer & Dev",
    heroImage: "/portfolio_leafit.png",
    challenge:
      "Fitness apps are often cluttered with too many metrics. We needed a clean, inviting interface that encourages daily activity without improving anxiety.",
    solution:
      "LeaFit uses a card-based UI with soft gradients and friendly typography. We gamified the experience with 'growth' metaphors—your consistency waters a virtual plant.",
    features: [
      {
        title: "Activity Tracking",
        icon: "fa-person-running",
        desc: "Seamless integration with HealthKit to pull steps and workout data."
      },
      {
        title: "Social Challenges",
        icon: "fa-users",
        desc: "Compete with friends in weekly step challenges to earn badges."
      },
      {
        title: "Custom Workouts",
        icon: "fa-dumbbell",
        desc: "Create and save personalized routines with drag-and-drop simplicity."
      }
    ],
    gallery: [
      "/portfolio_leafit.png",
      "/portfolio_leafit.png"
    ],
    nextProject: "kenali-diri"
  },
  "kenali-diri": {
    title: "Kenali-Diri",
    subtitle: "Gamified Sex Education",
    category: "WEB PLATFORM",
    year: "2022",
    role: "Full Stack Developer",
    heroImage: "/portfolio_kenali_diri.png",
    challenge:
      "Sex education is a sensitive topic in Indonesia. The goal was to make learning approachable, private, and engaging for students.",
    solution:
      "We built a gamified web platform with anonymous Q&A, interactive quizzes, and character-driven storytelling to make the content digestible and less taboo.",
    features: [
      {
        title: "Anonymous Q&A",
        icon: "fa-user-secret",
        desc: "Safe space for students to ask questions to experts without fear."
      },
      {
        title: "Interactive Quizzes",
        icon: "fa-clipboard-question",
        desc: "Test knowledge with fun, scenario-based quizzes."
      },
      {
        title: "Progress Tracking",
        icon: "fa-chart-simple",
        desc: "Earn points and unlock badges as you complete modules."
      }
    ],
    gallery: [
      "/portfolio_kenali_diri.png",
      "/portfolio_kenali_diri.png"
    ],
    nextProject: "pahamikulit"
  },
  "pahamikulit": {
    title: "PahamiKulit",
    subtitle: "AI Skincare Advisor",
    category: "AI / WEB",
    year: "2023",
    role: "Backend Engineer",
    heroImage: "/portfolio_pahamikulit.png",
    challenge:
      "Finding the right skincare is trial and error. We wanted to use data to predict product suitability based on ingredients and skin type.",
    solution:
      "Using the SAW algorithm, we built a recommendation engine that scores products against user profiles. The result is a personalized routine that minimizes irritation risk.",
    features: [
      {
        title: "Ingredient Analysis",
        icon: "fa-flask",
        desc: "Deep dive into product labels to flag potential allergens."
      },
      {
        title: "Routine Builder",
        icon: "fa-list-check",
        desc: "Organize products into morning and evening steps."
      },
      {
        title: "Community Reviews",
        icon: "fa-star",
        desc: "Real feedback from users with similar skin profiles."
      }
    ],
    gallery: [
      "/portfolio_pahamikulit.png",
      "/portfolio_pahamikulit.png"
    ],
    nextProject: "looca-watch"
  }
};

// --- STATIC PARAMS FOR EXPORT ---
export async function generateStaticParams() {
  return Object.keys(PROJECT_DETAILS).map((id) => ({
    id: id,
  }));
}

// --- MAIN PAGE COMPONENT (Server Component) ---
export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = PROJECT_DETAILS[params.id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-400">Project Not Found</h1>
        <Link href="/" className="ml-4 text-blue-600 underline">Go Home</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
        <Link href="/" className="text-xl font-bold tracking-tight">Fatih.</Link>
        <Link href="/" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
          <i className="fa-solid fa-xmark"></i>
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="w-full pt-32 pb-12 px-8 bg-gray-50 flex flex-col items-center">
        <div className="max-w-4xl w-full text-center space-y-6 mb-16">
          <p className="text-gray-500 font-medium tracking-wider uppercase">
            {project.category || "Featured Project"}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            {project.subtitle}
          </p>

          <div className="flex justify-center gap-12 pt-4 text-sm font-semibold text-gray-900">
            <div className="text-center">
              <p className="text-gray-400 mb-1 font-normal">Year</p>
              <p>{project.year}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 mb-1 font-normal">Role</p>
              <p>{project.role}</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl w-full aspect-video relative rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">The Challenge</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.challenge}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">The Solution</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.solution}
            </p>
            <ul className="mt-8 space-y-3">
              <li className="flex items-center gap-3 text-gray-600">
                <i className="fa-solid fa-circle-check text-green-500"></i>
                <span>User-centric design approach</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <i className="fa-solid fa-circle-check text-green-500"></i>
                <span>Scalable architecture</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <i className="fa-solid fa-circle-check text-green-500"></i>
                <span>Performance optimized</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section - Wrapped in Client Component for Hover Effects */}
      <ProjectClientWrapper features={project.features} />

      {/* Gallery Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          {project.gallery.map((img: string, idx: number) => (
            <div key={idx} className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg bg-gray-100">
              <Image
                src={img}
                alt={`Gallery ${idx}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Next Project */}
      <section className="bg-gray-900 text-white py-32 px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-400 mb-4 uppercase tracking-widest text-sm">Next Project</p>
          <h2 className="text-5xl font-bold mb-8">{PROJECT_DETAILS[project.nextProject]?.title || "More Projects"}</h2>
          <Link
            href={`/projects/${project.nextProject}`}
            className="inline-block px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-200 transition-colors"
          >
            View Case Study
          </Link>
        </div>
      </section>
    </main>
  );
}
