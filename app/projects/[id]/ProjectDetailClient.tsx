"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// --- ANIMATION VARIANTS (Matched from Main Page) ---
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

// --- TYPES (Duplicated for Client Component Safety) ---
export interface ExtendedProjectData {
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
    colorBg: string;
    colorText: string;
    title: string;
    desc: string;
  }[];
  mainImage: string;
  process: {
    step: number;
    title: string;
    description: string;
    stats?: { value: string; label: string }[];
  }[];
  techStack: {
    name: string;
    logo: string;
    category: string;
  }[];
  impact?: {
    stats?: { value: string; label: string; color: string }[];
    quote?: { text: string; author: string; role: string };
  };
  gallery: string[];
  nextProject: string;
}

interface ProjectDetailClientProps {
  project: ExtendedProjectData;
  nextProjectData?: ExtendedProjectData; // Optional data for the next project preview
}

export default function ProjectDetailClient({
  project,
  nextProjectData,
}: ProjectDetailClientProps) {
  return (
    <main className="font-sf bg-white text-gray-900 selection:bg-blue-100">
      {/* HEADER */}
      <nav
        id="header"
        className="fixed w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight flex items-center group"
            >
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
                href="/#about"
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="/#experience"
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                Experience
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
      <motion.section
        id="hero-section"
        className="pt-32 pb-20 px-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeInUp}>
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 mb-8 transition-colors"
            >
              <i className="fa-solid fa-arrow-left mr-2"></i>
              Back to Projects
            </Link>
          </motion.div>

          <div className="mb-6">
            <motion.span
              variants={fadeInUp}
              className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-4 uppercase tracking-wider"
            >
              {project.category}
            </motion.span>

            {/* TYPING ANIMATION FOR TITLE */}
            <motion.h1
              className="text-6xl font-semibold tracking-tight mb-6 leading-tight"
              variants={typingContainer}
            >
              {project.title.split(" ").map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className="inline-block whitespace-nowrap mr-3"
                >
                  {Array.from(word).map((char, charIndex) => (
                    <motion.span key={charIndex} variants={typingLetter}>
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>

            {/* TYPING ANIMATION FOR DESCRIPTION */}
            <motion.p
              className="text-2xl text-gray-600 font-light max-w-3xl leading-relaxed"
              variants={typingContainer}
            >
              {project.description.split(" ").map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className="inline-block whitespace-nowrap mr-2"
                >
                  {Array.from(word).map((char, charIndex) => (
                    <motion.span key={charIndex} variants={typingLetter}>
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.p>
          </div>

          <motion.div
            className="flex items-center space-x-12 mt-8"
            variants={fadeInUp}
          >
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
          </motion.div>
        </div>
      </motion.section>

      {/* MAIN IMAGE */}
      <motion.section
        id="main-image-section"
        className="px-8 pb-20"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
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
      </motion.section>

      {/* OVERVIEW SECTION */}
      <section id="overview-section" className="px-8 py-20 bg-gray-50">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div variants={fadeInUp}>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                Overview
              </h2>
              <h3 className="text-3xl font-semibold mb-6 leading-snug">
                The Story Behind
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {project.overview}
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
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
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* VISUAL SHOWCASE 1 */}
      <section id="visual-showcase-1" className="px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {project.gallery.slice(0, 2).map((img, idx) => (
              <motion.div
                key={idx}
                className="rounded-2xl overflow-hidden bg-gray-100 h-[500px] flex items-center justify-center relative border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Image src={img} alt="Showcase" fill className="object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY FEATURES SECTION */}
      <section id="key-features-section" className="px-8 py-20 bg-gray-50">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <div className="text-center mb-16">
            <motion.h2
              variants={fadeInUp}
              className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4"
            >
              Key Features
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="text-4xl font-semibold">
              What makes it special
            </motion.h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {project.features.map((feature, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <div
                  className={`w-14 h-14 rounded-2xl ${feature.colorBg} flex items-center justify-center mb-6`}
                >
                  <i
                    className={`fa-solid ${feature.icon} ${feature.colorText} text-xl`}
                  ></i>
                </div>
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FULL WIDTH IMAGE */}
      {project.gallery[2] && (
        <section id="full-width-image" className="py-20">
          <motion.div
            className="w-full h-[700px] bg-gray-900 flex items-center justify-center relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Image
              src={project.gallery[2]}
              alt="Full Width"
              fill
              className="object-cover opacity-90"
            />
          </motion.div>
        </section>
      )}

      {/* DESIGN PROCESS SECTION */}
      <section id="design-process-section" className="px-8 py-20">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="text-center mb-16">
            <motion.h2
              variants={fadeInUp}
              className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4"
            >
              Design Process
            </motion.h2>
            <motion.h3
              variants={fadeInUp}
              className="text-4xl font-semibold mb-6"
            >
              From concept to reality
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              A structured approach to solving complex problems through
              iteration and validation.
            </motion.p>
          </div>
          <div className="space-y-16">
            {project.process.map((step, idx) => (
              <motion.div
                key={idx}
                className="flex items-start space-x-8"
                variants={fadeInUp}
              >
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* TECH STACK SECTION */}
      <section id="tech-stack-section" className="px-8 py-20 bg-gray-50">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <div className="text-center mb-16">
            <motion.h2
              variants={fadeInUp}
              className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4"
            >
              Technology Stack
            </motion.h2>
            <motion.h3
              variants={fadeInUp}
              className="text-4xl font-semibold mb-6"
            >
              Built with reliable tools
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Robust architecture designed for scale and performance.
            </motion.p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-center"
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-16 h-16 relative mb-4">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="font-semibold mb-2">{tech.name}</h4>
                <p className="text-sm text-gray-600">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* RESULTS SECTION */}
      {project.impact && (
        <section id="results-section" className="px-8 py-20">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="text-center mb-16">
              <motion.h2
                variants={fadeInUp}
                className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4"
              >
                Impact & Results
              </motion.h2>
              <motion.h3
                variants={fadeInUp}
                className="text-4xl font-semibold mb-6"
              >
                Measurable success
              </motion.h3>
            </div>
            {project.impact.stats && project.impact.stats.length > 0 && (
              <div className="grid md:grid-cols-3 gap-12 mb-16">
                {project.impact.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="text-center"
                    variants={fadeInUp}
                  >
                    <p className={`text-5xl font-semibold ${stat.color} mb-3`}>
                      {stat.value}
                    </p>
                    <p className="text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            )}
            {project.impact.quote && (
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-50"
                variants={fadeInUp}
              >
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
                    <p className="font-semibold">
                      {project.impact.quote.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      {project.impact.quote.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </section>
      )}

      {/* NEXT PROJECT SECTION */}
      {nextProjectData && (
        <section id="next-project-section" className="px-8 py-20 pb-40">
          <motion.div
            className="max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="text-center mb-12">
              <motion.h2
                variants={fadeInUp}
                className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4"
              >
                Next Project
              </motion.h2>
              <motion.h3 variants={fadeInUp} className="text-3xl font-semibold">
                Explore more work
              </motion.h3>
            </div>
            <motion.div variants={fadeInUp}>
              <Link
                href={`/projects/${project.nextProject}`}
                className="block group"
              >
                <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 h-[500px] flex items-center justify-center relative border border-gray-100">
                  <Image
                    src={nextProjectData.heroImage}
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
                    {nextProjectData.title}
                  </h4>
                  <p className="text-gray-600">{nextProjectData.category}</p>
                </div>
              </Link>
            </motion.div>
          </motion.div>
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
                href="https://www.linkedin.com/in/fatih-daffa-fawwaz-5a28a123b/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
              <a
                href="mailto:m.fatihdaffa@gmail.com"
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
              © 2025 Fatih Fawwaz. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
