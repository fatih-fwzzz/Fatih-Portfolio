"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const typingContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.2,
    },
  },
};

const typingLetter: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// --- DATA CONSTANTS ---

const PERSONAL_INFO = {
  name: "Fatih",
  role: "Software Engineer",
  roles: [
    {
      title: "Front End Developer",
      icon: "fa-code",
      colorClass: "text-blue-600",
      bgClass: "bg-blue-50",
    },
    {
      title: "Back End Developer",
      icon: "fa-server",
      colorClass: "text-green-600",
      bgClass: "bg-green-50",
    },
    {
      title: "Mobile Developer",
      icon: "fa-mobile-screen",
      colorClass: "text-purple-600",
      bgClass: "bg-purple-50",
    },
    {
      title: "DevOps",
      icon: "fa-gears",
      colorClass: "text-orange-600",
      bgClass: "bg-orange-50",
    },
    {
      title: "ML Enthusiast",
      icon: "fa-brain",
      colorClass: "text-pink-600",
      bgClass: "bg-pink-50",
    },
    {
      title: "QA Automation",
      icon: "fa-robot",
      colorClass: "text-cyan-600",
      bgClass: "bg-cyan-50",
    },
  ],
  heroTitle: "Crafting digital experiences through code",
  heroSubtitle:
    "Passionate about creating seamless user experiences and robust, scalable solutions across web, mobile, and cloud platforms.",
  avatarUrl:
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg",
  localAvatar: "/pass-foto-1.png",
  socials: {
    github: "https://github.com/fatih-fwzzz",
    linkedin: "#",
    stackoverflow: "#",
    twitter: "#",
    email: "mailto:hello@portfolio.com",
  },
};

const NAV_LINKS = [
  { name: "Projects", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    id: "lantera",
    title: "Lantera",
    category: "IOS APP",
    description:
      "A caregiver app that provides trends & insights for elderly’s blood pressure  and sugar, and voice-based logging, making caregiving easier and organized.",
    techStack: [
      "Swift",
      "SwiftUI",
      "SwiftData",
      "CloudKit",
      "SFSpeech",
      "Apple Intelligence",
    ],
    visualType: "image",
    image: "/portfolio-lantera.png",
    appStore: "https://apps.apple.com/id/app/lantera/id6755018594?l=id",
  },
  {
    id: "cococo",
    title: "Coco App Reworked",
    category: "IOS APP",
    description:
      "Reworked the legacy codebase of Coco, a travel booking app, optimizing the booking flow to deliver a seamless and conversion-driven experience.",
    techStack: [
      "UIKit",
      "Swift",
      "SwiftUI",
      "URLSession",
      "Unit Testing",
      "Supabase",
    ],
    visualType: "image",
    image: "/portfolio-cococo.png",
    github: "https://github.com/Regieh/CocoLoco.git",
  },
  {
    id: "legend-of-gardatara",
    title: "Legend of Gardatara",
    category: "IOS GAME APP",
    description:
      "2D horizontal-lane tower defense strategic game where players team up with iconic Indonesian folklore heroes to battle alien invaders. It’s not only fun strategy gameplay & winning battles, it’s also introducing Indonesian folklore heroes to the global stage.",
    techStack: ["Unity 2D"],
    visualType: "image",
    image: "/portfolio_log.png",
    appStore:
      "https://apps.apple.com/id/app/legend-of-gardatara/id6749147194?l=id",
    github: "https://github.com/fatih-fwzzz/LegendOfGardatara.git",
  },
  {
    id: "leafit",
    title: "LeaFit",
    category: "IOS APP",
    description:
      "A taking-care app for gardeners to monitor and maintain the health of their Aloe Vera plants. By taking a picture of the aloe, the app displays health results and highlights diseased areas with segmentation.",
    techStack: ["Swift", "SwiftUI", "SwiftData", "CoreML", "Vision"],
    visualType: "image",
    image: "/portfolio_leafit.png",
    github: "https://github.com/LeaFIt-iOS/LeaFitv2.git",
  },
  {
    id: "looca",
    title: "LOOCA",
    category: "IOS APP",
    description:
      "Indoor navigation app designed to help users find their way to food courts in large building complexes using ARKit and CoreLocation. Works offline in basements/parking areas.",
    techStack: ["Swift", "SwiftUI", "ARKit", "CoreLocation"],
    visualType: "image",
    image: "/portfolio_looca-2.png",
    github: "https://github.com/fatih-fwzzz/Looca.git",
  },
  {
    id: "looca-watch",
    title: "LOOCA-WatchOS",
    category: "WATCHOS APP",
    description:
      "Streamlined navigation app for Apple Watch. Guides users with a simple arrow and real-time distance updates using CoreLocation. Perfect for short-range indoor navigation.",
    techStack: ["Swift", "SwiftUI", "CoreLocation"],
    visualType: "image",
    image: "/portfolio_looca-watch-2.png",
    github: "https://github.com/fatih-fwzzz/LoocaWatchOS.git",
  },
  {
    id: "hutrivia",
    title: "HUTRIVIA",
    category: "MOBILE APP",
    description:
      "An engaging quiz app that celebrates the spirit of Indonesian independence through fun and educational trivia. Built with Flutter and powered by Firebase.",
    techStack: ["Flutter", "Firebase"],
    visualType: "image",
    image: "/portfolio_hutrivia.png",
    github: "https://github.com/fatih-fwzzz/HUTRIVIA.git",
  },
  {
    id: "kenali-diri",
    title: "Kenali-Diri",
    category: "WEB PLATFORM",
    description:
      "Gamified educational platform for sex education for Indonesian students. Undergraduate thesis project focusing on improving sexual health awareness.",
    techStack: ["Next.js", ".NET Core", "C#", "Azure", "MSSQL"],
    visualType: "image",
    image: "/portfolio_kenali_diri.png",
    github: "https://github.com/Kenali-Diri",
  },
  {
    id: "pahamikulit",
    title: "PahamiKulit",
    category: "AI / WEB",
    description:
      "Personalized skincare recommendation platform using Simple Additive Weighting (SAW) algorithm to suggest products based on skin type and concerns.",
    techStack: ["Next.js", "Flask", "Python", "MySQL"],
    visualType: "image",
    image: "/portfolio_pahamikulit.png",
    github: "https://github.com/Basic-Dulu",
  },
];

const EXPERIENCE_DATA = {
  foundation: [
    {
      title: "Master of Science in Computer Science",
      school: "Stanford University",
      period: "2022 - 2024",
      description:
        "Advanced coursework in distributed systems, AI/ML, and computer vision. Thesis on efficient scaling of large language models.",
      tags: ["Distributed Systems", "Machine Learning", "Algorithms"],
      icon: "fa-graduation-cap",
      color: "bg-blue-100 text-blue-600",
      images: [
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      ],
    },
    {
      title: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      period: "2018 - 2022",
      description:
        "Graduated with Honors. specialized in Software Engineering. Lead Developer for the campus autonomous vehicle team.",
      tags: ["Software Engineering", "Operating Systems", "Data Structures"],
      icon: "fa-graduation-cap",
      color: "bg-green-100 text-green-600",
      images: [
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      ],
    },
  ],
  work: [
    {
      title: "Senior Software Engineer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      period: "2024 - Present",
      type: "Full-time",
      bullets: [
        "Architected and deployed a new microservices framework reducing latency by 40%.",
        "Led a team of 5 engineers to deliver critical features for the Q4 product launch.",
        "Implemented automated CI/CD pipelines increasing deployment frequency by 3x.",
      ],
      images: [
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      ],
      icon: "fa-building",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Software Engineer Intern",
      company: "StartUp Inc",
      location: "Remote",
      period: "Summer 2023",
      type: "Internship",
      bullets: [
        "Developed a real-time analytics dashboard using React and D3.js.",
        "Optimized database queries for 50% faster data retrieval.",
        "Collaborated with product designers to improve user onboarding flow.",
      ],
      images: [
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      ],
      icon: "fa-code",
      color: "bg-orange-100 text-orange-600",
    },
  ],
  leadership: [
    {
      role: "Google Developer Club Lead",
      org: "University Chapter",
      period: "2021 - 2022",
      description:
        "Organized monthly workshops on cloud computing and web development for 100+ students.",
      icon: "fa-users",
      color: "bg-red-100 text-red-600",
    },
    {
      role: "Hackathon Organizer",
      org: "HackMIT",
      period: "2020 - 2021",
      description:
        "Managed logistics and sponsorships for a 24-hour hackathon with over 500 participants.",
      icon: "fa-calendar-check",
      color: "bg-yellow-100 text-yellow-600",
    },
  ],
};

const SKILLS = [
  { name: "React/Next.js", level: 75, color: "bg-blue-600" },
  { name: ".NET Core", level: 90, color: "bg-purple-600" },
  { name: "iOS/Android", level: 65, color: "bg-green-600" },
  { name: "Python", level: 80, color: "bg-orange-600" },
  { name: "MySQL", level: 85, color: "bg-cyan-600" },
  { name: "TypeScript", level: 85, color: "bg-blue-500" },
];

const TECHNOLOGIES = [
  "TypeScript",
  "Python",
  "C#",
  "Go",
  "Swift",
  "React",
  "Next.js",
  "Flutter",
  "PostgreSQL",
  "MySQL",
  "MSSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "Azure",
  "Firebase",
];

// --- COMPONENTS ---

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    // Handle hash navigation on mount for smooth scrolling
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Slight delay to ensure DOM is ready
    }
  }, []);

  if (!mounted) return null;

  return (
    <div className="font-sf bg-white text-gray-900 antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* HEADER */}
      <nav
        id="header"
        className="fixed w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center h-16">
            <a
              href="#"
              className="text-xl font-semibold tracking-tight flex items-center group"
            >
              <i className="fa-solid fa-code mr-2 text-blue-600 group-hover:rotate-12 transition-transform"></i>
              {PERSONAL_INFO.name}
            </a>
            <div className="hidden md:flex items-center space-x-10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="hero-section"
        className="pt-32 pb-20 px-8 min-h-[600px] flex items-center"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              className="relative w-80 h-96 flex items-center justify-center pl-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
            >
              {/* Polaroid Card Style (Straight) */}
              <div className="relative w-full h-full bg-white p-4 pb-16 shadow-2xl rounded-sm">
                <div className="w-full h-full overflow-hidden bg-gray-100 relative">
                  <img
                    src={PERSONAL_INFO.localAvatar || PERSONAL_INFO.avatarUrl}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = PERSONAL_INFO.avatarUrl;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
                </div>
                {/* Handwritten Name on Bottom of Polaroid */}
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="font-handwriting text-2xl text-gray-600"></p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div
                className="flex flex-wrap items-center gap-3 mb-6"
                variants={fadeInUp}
              >
                {PERSONAL_INFO.roles.map((role, idx) => (
                  <div
                    key={idx}
                    className={`inline-flex items-center px-4 py-2 ${role.bgClass} rounded-full text-sm font-medium ${role.colorClass} hover:opacity-80 transition-opacity cursor-default`}
                  >
                    <i className={`fa-solid ${role.icon} mr-2`}></i>
                    {role.title}
                  </div>
                ))}
              </motion.div>
              <motion.h1
                className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-tight max-w-lg"
                variants={typingContainer}
              >
                {PERSONAL_INFO.heroTitle.split(" ").map((word, wordIndex) => (
                  <span
                    key={wordIndex}
                    className="inline-block whitespace-nowrap mr-2 sm:mr-3"
                  >
                    {Array.from(word).map((char, charIndex) => (
                      <motion.span key={charIndex} variants={typingLetter}>
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-gray-600 font-light mb-10 leading-relaxed max-w-2xl"
                variants={typingContainer}
              >
                {PERSONAL_INFO.heroSubtitle
                  .split(" ")
                  .map((word, wordIndex) => (
                    <span
                      key={wordIndex}
                      className="inline-block whitespace-nowrap mr-1"
                    >
                      {Array.from(word).map((char, charIndex) => (
                        <motion.span key={charIndex} variants={typingLetter}>
                          {char}
                        </motion.span>
                      ))}
                    </span>
                  ))}
              </motion.p>
              <div className="flex items-center space-x-6">
                <a
                  href="#work"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 text-lg font-medium transition-colors group"
                >
                  View projects
                  <i className="fa-solid fa-arrow-right ml-2 text-sm transform group-hover:translate-x-1 transition-transform"></i>
                </a>
                <a
                  href={PERSONAL_INFO.socials.github}
                  className="inline-flex items-center text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors"
                >
                  <i className="fa-brands fa-github mr-2"></i>
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WORK SECTION */}
      <section id="work" className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16">
            Featured Projects
          </h2>

          <div className="space-y-32">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                id={project.id}
                className="group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <div
                  className={`grid md:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? "" : ""}`}
                >
                  {/* Visual Side */}
                  <div
                    className={`${idx % 2 === 1 ? "md:order-2" : "md:order-1"}`}
                  >
                    <Link href={`/projects/${project.id}`}>
                      <div className="rounded-3xl overflow-hidden shadow-2xl transform group-hover:-translate-y-2 transition duration-500 bg-white border border-gray-100 cursor-pointer">
                        <div className="aspect-video relative overflow-hidden bg-gray-200">
                          {/* Attempt to show project image, fallback to title if needed */}
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              e.currentTarget.parentElement?.classList.add(
                                "flex",
                                "items-center",
                                "justify-center",
                                "bg-gray-100",
                              );
                              const fallback = document.createElement("div");
                              fallback.className =
                                "text-gray-400 font-bold text-xl";
                              fallback.innerText = project.title;
                              e.currentTarget.parentElement?.appendChild(
                                fallback,
                              );
                            }}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Text Side */}
                  <div
                    className={`${idx % 2 === 1 ? "md:order-1" : "md:order-2"}`}
                  >
                    <div className="text-sm font-medium text-gray-500 mb-3 tracking-wide uppercase">
                      {project.category}
                    </div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-4xl font-semibold mb-6 tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">
                        <Link href={`/projects/${project.id}`}>
                          {project.title}
                        </Link>
                      </h3>
                      <div className="flex items-center gap-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-gray-900 transition-colors"
                          >
                            <i className="fa-brands fa-github text-2xl"></i>
                          </a>
                        )}
                        {project.appStore && (
                          <a
                            href={project.appStore}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-gray-900 transition-colors"
                          >
                            <i className="fa-brands fa-app-store text-2xl"></i>
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full text-sm font-medium text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 px-8 bg-white">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid md:grid-cols-2 gap-20 items-start mb-20">
            <motion.div variants={fadeInUp}>
              <h2 className="text-5xl font-semibold tracking-tight mb-8">
                About Me
              </h2>
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
                <p>
                  I'm a passionate developer with expertise in both web and
                  mobile technologies. I love creating seamless user experiences
                  and robust backend systems.
                </p>
                <p>
                  My journey started at BINUS University and has led me to work
                  with global companies like IDEMIA and the Apple Developer
                  Academy.
                </p>
                <p>
                  I believe in writing clean, maintainable code and following
                  best practices. Always learning, always building.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="mb-12">
                <h3 className="text-sm font-medium text-gray-500 mb-4 tracking-wide">
                  MOMENTS & INTERESTS
                </h3>
                <div className="relative w-full h-[400px] flex items-center justify-center">
                  {[
                    {
                      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
                      label: "Coding",
                      rotate: "-6deg",
                      top: "10%",
                      left: "5%",
                      zIndex: 1,
                    },
                    {
                      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
                      label: "Tech",
                      rotate: "12deg",
                      top: "20%",
                      right: "5%",
                      zIndex: 2,
                    },
                    {
                      src: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=300&fit=crop",
                      label: "Music",
                      rotate: "-12deg",
                      bottom: "10%",
                      left: "15%",
                      zIndex: 3,
                    },
                    {
                      src: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=300&fit=crop",
                      label: "Travel",
                      rotate: "8deg",
                      bottom: "5%",
                      right: "15%",
                      zIndex: 4,
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="absolute bg-white p-3 shadow-xl rounded-sm cursor-pointer"
                      style={{
                        top: item.top,
                        left: item.left,
                        right: item.right,
                        bottom: item.bottom,
                        transform: `rotate(${item.rotate})`,
                        zIndex: item.zIndex,
                      }}
                      initial={{ scale: 0, opacity: 0, rotate: item.rotate }}
                      whileInView={{
                        scale: 1,
                        opacity: 1,
                        rotate: item.rotate,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: idx * 0.1,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: "0deg",
                        zIndex: 50,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="w-48 h-48 md:w-56 md:h-56 overflow-hidden mb-2 relative">
                        <img
                          src={item.src}
                          alt={item.label}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors"></div>
                      </div>
                      <p className="text-center font-handwriting text-gray-600 font-medium">
                        {item.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technologies - Full Width Centered */}
          <motion.div variants={fadeInUp} className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Love to work with these tools
            </h3>
            <div className="space-y-6 max-w-4xl mx-auto">
              {/* Row 1 - Scroll Left */}
              <div className="relative overflow-hidden w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent">
                <motion.div
                  className="flex gap-4 w-max"
                  animate={{ x: "-50%" }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30,
                  }}
                >
                  {[
                    ...TECHNOLOGIES.slice(0, 7),
                    ...TECHNOLOGIES.slice(0, 7),
                  ].map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-full text-base font-medium text-gray-700 whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Row 2 - Scroll Right */}
              <div className="relative overflow-hidden w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent">
                <motion.div
                  className="flex gap-4 w-max"
                  initial={{ x: "-50%" }}
                  animate={{ x: "0%" }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30,
                  }}
                >
                  {[...TECHNOLOGIES.slice(7), ...TECHNOLOGIES.slice(7)].map(
                    (tech, idx) => (
                      <span
                        key={idx}
                        className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-full text-base font-medium text-gray-700 whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section
        id="experience"
        className="py-32 px-8 bg-gray-50 border-t border-gray-200"
      >
        <div className="max-w-6xl mx-auto">
          {/* 1. THE FOUNDATION */}
          <motion.div
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 className="text-3xl font-bold mb-2" variants={fadeInUp}>
              The Foundation
            </motion.h2>
            <motion.p
              className="text-gray-500 mb-8 max-w-2xl"
              variants={fadeInUp}
            >
              Where the journey began — the academic journey that built my
              technical foundation and problem-solving mindset.
            </motion.p>

            <div className="space-y-6">
              {EXPERIENCE_DATA.foundation.map((edu, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 transition-all hover:shadow-sm group"
                  variants={fadeInUp}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div
                      className={`w-14 h-14 rounded-2xl ${edu.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <i className={`fa-solid ${edu.icon} text-2xl`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {edu.title}
                        </h3>
                        <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm mt-2 md:mt-0 w-fit">
                          {edu.period}
                        </span>
                      </div>
                      <div className="text-lg font-medium text-gray-700 mb-4">
                        {edu.school}
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {edu.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {edu.images && edu.images.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                          {edu.images.map((img, iIdx) => (
                            <div
                              key={iIdx}
                              className="relative h-48 rounded-xl overflow-hidden group-hover:opacity-90 transition-opacity bg-gray-100"
                            >
                              <img
                                src={img}
                                alt={`${edu.school} photo ${iIdx + 1}`}
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 2. THE REAL WORLD */}
          <motion.div
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 className="text-3xl font-bold mb-2" variants={fadeInUp}>
              The Real World
            </motion.h2>
            <motion.p
              className="text-gray-500 mb-8 max-w-2xl"
              variants={fadeInUp}
            >
              Professional experience building systems — solving real problems
              and delivering impactful software solutions.
            </motion.p>

            <div className="space-y-8">
              {EXPERIENCE_DATA.work.map((job, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
                  variants={fadeInUp}
                >
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div
                        className={`w-14 h-14 rounded-2xl ${job.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <i className={`fa-solid ${job.icon} text-2xl`}></i>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between mb-1">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {job.title}
                          </h3>
                          <span className="text-sm text-gray-500 font-medium">
                            {job.period}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-6 text-sm">
                          <span className="font-semibold">{job.company}</span>
                          <span className="mx-2">•</span>
                          <span>{job.location}</span>
                        </div>

                        <ul className="space-y-3 mb-8">
                          {job.bullets.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="flex items-start text-gray-600 leading-relaxed"
                            >
                              <i className="fa-solid fa-check text-green-500 mt-1.5 mr-3 text-xs"></i>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {job.images && job.images.length > 0 && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            {job.images.map((img, iIdx) => (
                              <div
                                key={iIdx}
                                className="relative h-48 rounded-xl overflow-hidden group-hover:opacity-90 transition-opacity bg-gray-100"
                              >
                                <img
                                  src={img}
                                  alt={`${job.company} work ${iIdx + 1}`}
                                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 3. ORGANIZATIONS & LEADERSHIP */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 className="text-3xl font-bold mb-2" variants={fadeInUp}>
              Organizations & Leadership
            </motion.h2>
            <motion.p
              className="text-gray-500 mb-8 max-w-2xl"
              variants={fadeInUp}
            >
              Leading communities and initiatives — fostering growth and
              collaboration beyond code.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
              {EXPERIENCE_DATA.leadership.map((lead, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 transition-colors hover:bg-blue-50/30 group"
                  variants={fadeInUp}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg ${lead.color} flex items-center justify-center flex-shrink-0 mt-1`}
                    >
                      <i className={`fa-solid ${lead.icon} text-lg`}></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{lead.role}</h3>
                      <div className="text-sm font-medium text-blue-600 mb-1">
                        {lead.org}
                      </div>
                      <div className="text-xs text-gray-400 mb-3">
                        {lead.period}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {lead.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <motion.section
        id="contact"
        className="py-32 px-8 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-semibold tracking-tight mb-6">
            Let's build something together
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Open to new opportunities and interesting projects. Let's connect!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <a
              href={PERSONAL_INFO.socials.email}
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <i className="fa-solid fa-envelope mr-2"></i>
              Get in touch
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full text-lg font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <i className="fa-solid fa-file-arrow-down mr-2"></i>
              Download resume
            </a>
          </div>
          <div className="flex justify-center space-x-8">
            <a
              href={PERSONAL_INFO.socials.github}
              className="text-gray-600 hover:text-gray-900 transition-colors transform hover:scale-110"
            >
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              className="text-gray-600 hover:text-blue-700 transition-colors transform hover:scale-110"
            >
              <i className="fa-brands fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer
        id="footer"
        className="py-12 px-8 bg-white border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2024 Portfolio. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
