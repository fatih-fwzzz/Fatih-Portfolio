"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
  Github,
  LinkedinIcon,
  Mail,
  ExternalLink,
  Code,
  Smartphone,
  Server,
  Database,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Refs for GSAP animations
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const roleTextRef = useRef<HTMLSpanElement>(null);

  const roles = [
    "Front End Developer",
    "Back End Developer",
    "Mobile Developer",
    "DevOps",
    "Machine Learning Enthusiast",
    "QA Automation",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "experience", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animated role text effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (roleTextRef.current) {
        gsap.to(roleTextRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            gsap.fromTo(
              roleTextRef.current,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
            );
          },
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    // GSAP Animations
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.fromTo(
        ".hero-photo",
        {
          opacity: 0,
          scale: 0.5,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        ".hero-name",
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.6,
        }
      );

      gsap.fromTo(
        ".hero-role",
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.8,
        }
      );

      gsap.fromTo(
        ".hero-subtitle",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 1,
        }
      );

      gsap.fromTo(
        ".hero-buttons",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 1.2,
        }
      );

      // About section animations
      gsap.fromTo(
        ".about-title",
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-title",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Skills animation
      gsap.fromTo(
        ".skill-item",
        {
          opacity: 0,
          x: -50,
          scale: 0.8,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".skills-container",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Skill bars animation
      gsap.fromTo(
        ".skill-bar",
        {
          width: "0%",
        },
        {
          width: (index, target) => target.getAttribute("data-width") + "%",
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".skills-container",
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Service cards animation
      gsap.fromTo(
        ".service-card",
        {
          opacity: 0,
          y: 100,
          rotationX: -15,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".services-container",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Projects animation
      gsap.fromTo(
        ".project-card",
        {
          opacity: 0,
          y: 80,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".projects-container",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Experience timeline animation
      gsap.fromTo(
        ".timeline-item",
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Contact cards animation
      gsap.fromTo(
        ".contact-card",
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".contact-container",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax effect for background elements
      gsap.to(".parallax-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-bg",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: element,
        ease: "power2.inOut",
      });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: "React/Next.js", level: 75, icon: Code },
    { name: ".NET Core", level: 90, icon: Server },
    { name: "iOS/Android", level: 65, icon: Smartphone },
    { name: "Python", level: 80, icon: Code },
    { name: "MySQL", level: 85, icon: Database },
    { name: "TypeScript", level: 85, icon: Code },
  ];

  const projects = [
    {
      title: "HUTRIVIA",
      description:
        "HUTRIVIA is an engaging quiz app that celebrates the spirit of Indonesian independence through fun and educational trivia. Built with Flutter and powered by Firebase, HUTRIVIA offers a seamless and interactive experience where users can test their knowledge about Indonesia’s rich history, heroic figures, and iconic moments of independence.",
      tech: ["Flutter", "Firebase"],
      github: "https://github.com/fatih-fwzzz/HUTRIVIA.git",
      demo: "#",
      image:
        "/portfolio_hutrivia.png",
    },
    {
      title: "LOOCA",
      description:
        "Looca is a SwiftUI-based indoor navigation app designed to help users find their way to food courts in large building complexes. The app provides step-by-step navigation using a combination of ARKit and CoreLocation, ensuring precise direction even in offline environments like basements or parking areas.",
      tech: ["Swift", "SwiftUI"],
      github: "https://github.com/fatih-fwzzz/Looca.git",
      demo: "#",
      image:
        "/portfolio_looca.png",
    },
    {
      title: "LOOCA-WatchOS",
      description:
        "Looca for watchOS is a streamlined navigation app designed to guide users to their destination using a simple, intuitive arrow and real-time distance updates. Built with CoreLocation, the app calculates direction and proximity from your current location to a fixed target, making it perfect for short-range indoor navigation such as malls, campuses, or parking areas.",
      tech: ["Swift", "SwiftUI"],
      github: "https://github.com/fatih-fwzzz/LoocaWatchOS.git",
      demo: "#",
      image:
        "/portfolio_looca_watch.png",
    },
    {
      title: "LeaFit",
      description:
        "Looca is a SwiftUI-based indoor navigation app designed to help users find their way to food courts in large building complexes. The app provides step-by-step navigation using a combination of ARKit and CoreLocation, ensuring precise direction even in offline environments like basements or parking areas.",
      tech: ["Swift", "SwiftUI"],
      github: "https://github.com/LeaFIt-iOS/LeaFitv2.git",
      demo: "#",
      image:
        "/portfolio_leafit.png",
    },
    {
      title: "Kenali-Diri",
      description:
        "Kenali-Diri is a gamified educational platform designed to provide accurate, age-appropriate sex education for Indonesian middle and high school students. This project was developed as part of my undergraduate thesis, with a strong focus on improving sexual health awareness through interactive learning.",
      tech: ["Next.js", ".NET Core", "C#", "Azure", "MSSQL"],
      github: "https://github.com/Kenali-Diri",
      demo: "#",
      image:
        "/portfolio_kenali_diri.png",
    },
    {
      title: "PahamiKulit",
      description:
        "PahamiKulit is a personalized skincare recommendation platform that helps users find suitable skincare products based on their skin type and concerns. The core of the system uses the Simple Additive Weighting (SAW) algorithm to generate accurate, data-driven recommendations tailored to each user’s skin profile.",
      tech: ["Next.js", "Flask", "Python", "MySQL"],
      github: "https://github.com/Basic-Dulu",
      demo: "#",
      image:
        "/portfolio_pahamikulit.png",
    },
  ];

  const experiences = [
    {
      title: "iOS Developer",
      company: "Apple Developer Academy",
      period: "2025 - Present",
      description:
        "Selected as one of the Apple Developer Academy participants from over 13,000 applicants (with an acceptance rate of less than 1.60%), I am currently engaged in an intensive program that focuses on app development, business, and innovation within the Apple ecosystem. As part of a diverse team, I collaborate to build impactful, user-centric applications using Swift, Xcode, and Apple’s Human Interface Guidelines.",
    },
    {
      title: "Software Engineer Intern",
      company: "IDEMIA",
      period: "2024 - 2025",
      description:
        "Worked in backend development and test automation. Handled JIRA for task and sprint management, managed Jenkins pipelines for CI/CD processes, and implemented automated testing using UFT (Unified Functional Testing) to improve testing efficiency across backend services.",
    },
    {
      title: "Computer Science",
      company: "BINUS University",
      period: "2021 - 2025",
      description:
        "Majored in Computer Science with a specialization in Software Engineering. Built projects across mobile, web, and backend platforms.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sf">
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-apple bg-black/80 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-apple-title bg-apple-gradient bg-clip-text text-transparent">
              Fatih
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`transition-all duration-300 apple-button text-apple-caption ${
                      activeSection === item.toLowerCase()
                        ? "text-white scale-105"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden apple-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-morphism border-t border-white/10">
            <div className="px-4 py-2 space-y-2">
              {["Home", "About", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left py-2 text-white/70 hover:text-white transition-colors apple-button"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div
          className="absolute inset-0 parallax-bg"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo Section */}
            <div className="flex justify-center md:justify-end">
              <div className="hero-photo relative">
                <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img
                    src="/Remove background project (2) (1).png"
                    alt="Fatih"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-xl -z-10"></div>
              </div>
            </div>

            {/* Text Section */}
            <div className="text-center md:text-left">
              <div className="hero-name mb-4">
                <h1 className="text-5xl md:text-6xl font-bold text-apple-title bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                  Hi, I'm Fatih
                </h1>
              </div>

              <div className="hero-role mb-6">
                <h2 className="text-3xl md:text-4xl font-semibold text-apple-title">
                  I'm a{" "}
                  <span
                    ref={roleTextRef}
                    className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                  >
                    {roles[currentRoleIndex]}
                  </span>
                </h2>
              </div>

              <p className="hero-subtitle text-lg md:text-xl text-white/70 mb-8 max-w-2xl text-apple-body">
                Crafting digital experiences through code. Passionate about
                creating seamless user experiences and robust, scalable
                solutions across web, mobile, and cloud platforms.
              </p>

              <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="apple-button bg-white text-black hover:bg-white/90 px-8 py-3 text-lg font-medium rounded-full"
                >
                  View My Work
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="apple-button bg-white text-black hover:bg-black  hover:text-white border-neutral-300 px-8 py-3 text-lg font-medium rounded-full"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pulse-apple">
          <ChevronDown size={32} className="text-white/50" />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="about-title text-5xl font-bold mb-4 text-apple-title bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto text-apple-body">
              I'm a passionate developer with expertise in both web and mobile
              technologies. I love creating seamless user experiences and robust
              backend systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="skills-container">
              <h3 className="text-2xl font-semibold mb-6 text-white text-apple-caption">
                Skills & Technologies
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="skill-item group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <skill.icon className="mr-2 text-white/70" size={20} />
                        <span className="font-medium text-white text-apple-caption">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-white/50 text-apple-caption">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="skill-bar h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                        data-width={skill.level}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="services-container space-y-6">
              <Card className="service-card apple-card bg-white/5 border-white/10 hover:border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Code className="text-blue-400 mb-4" size={40} />
                  <h4 className="text-xl font-semibold mb-2 text-white text-apple-caption">
                    Frontend Development
                  </h4>
                  <p className="text-white/70 text-apple-body">
                    Creating responsive and interactive user interfaces with
                    React, Next.js, and modern CSS frameworks.
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card apple-card bg-white/5 border-white/10 hover:border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Server className="text-green-400 mb-4" size={40} />
                  <h4 className="text-xl font-semibold mb-2 text-white text-apple-caption">
                    Backend Development
                  </h4>
                  <p className="text-white/70 text-apple-body">
                    Building scalable APIs and server-side applications using
                    Node.js, Python, and cloud technologies.
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card apple-card bg-white/5 border-white/10 hover:border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Smartphone className="text-purple-400 mb-4" size={40} />
                  <h4 className="text-xl font-semibold mb-2 text-white text-apple-caption">
                    Mobile Development
                  </h4>
                  <p className="text-white/70 text-apple-body">
                    Cross-platform mobile app development with Flutter and
                    native iOS/Android technologies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-apple-title bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-white/70 text-apple-body">
              Here are some of my recent projects that showcase my skills and
              experience.
            </p>
          </div>

          <div className="projects-container grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="project-card apple-card bg-white/5 border-white/10 overflow-hidden backdrop-blur-sm"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white text-apple-caption">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm leading-relaxed text-apple-body">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 text-xs rounded-full text-white/80 text-apple-caption"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {/* GitHub Button */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white text-black hover:bg-black hover:text-white rounded-full border-neutral-300"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </a>

                    {/* Demo Button (assuming you want similar styling) */}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* <Button
                        variant="outline"
                        size="sm"
                        className="bg-white text-black hover:bg-black hover:text-white rounded-full border-neutral-300"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button> */}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-apple-title bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Experience
            </h2>
          </div>

          <div className="timeline-container relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="timeline-item relative flex items-start mb-12"
              >
                <div className="absolute left-6 w-4 h-4 bg-white rounded-full border-4 border-black"></div>
                <div className="ml-16">
                  <Card className="apple-card bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white text-apple-caption">
                          {exp.title}
                        </h3>
                        <span className="text-sm text-white/50 mt-1 sm:mt-0 text-apple-caption">
                          {exp.period}
                        </span>
                      </div>
                      <h4 className="text-blue-400 font-medium mb-3 text-apple-caption">
                        {exp.company}
                      </h4>
                      <p className="text-white/70 leading-relaxed text-apple-body">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-4 text-apple-title bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto text-apple-body">
            I'm always open to discussing new opportunities and interesting
            projects. Let's create something amazing together!
          </p>

          <div className="contact-container flex flex-col sm:flex-row gap-6 justify-center mb-12">
            {/* Email Card */}
            <a href="mailto:m.fatihdaffa@gmail.com">
              <Card className="contact-card apple-card h-full bg-white/5 border-white/10 hover:border-white/20 backdrop-blur-sm cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Mail className="text-blue-400 mx-auto mb-4" size={40} />
                  <h3 className="text-lg font-semibold mb-2 text-white text-apple-caption">
                    Email
                  </h3>
                  <p className="text-white/70 text-apple-body">
                    m.fatihdaffa@gmail.com
                  </p>
                </CardContent>
              </Card>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/fatih-daffa-fawwaz-5a28a123b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="contact-card apple-card h-full bg-white/5 border-white/10 hover:border-white/20 backdrop-blur-sm cursor-pointer">
                <CardContent className="p-6 text-center">
                  <LinkedinIcon
                    className="text-blue-400 mx-auto mb-4"
                    size={40}
                  />
                  <h3 className="text-lg font-semibold mb-2 text-white text-apple-caption">
                    LinkedIn
                  </h3>
                  <p className="text-white/70 text-apple-body">
                    @fatih-daffa-fawwaz
                  </p>
                </CardContent>
              </Card>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/fatih-fwzzz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="contact-card apple-card h-full bg-white/5 border-white/10 hover:border-white/20 backdrop-blur-sm cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Github className="text-purple-400 mx-auto mb-4" size={40} />
                  <h3 className="text-lg font-semibold mb-2 text-white text-apple-caption">
                    GitHub
                  </h3>
                  <p className="text-white/70 text-apple-body">@fatih-fwzzz</p>
                </CardContent>
              </Card>
            </a>
          </div>

          <a href="mailto:m.fatihdaffa@gmail.com">
            <Button className="apple-button bg-white text-black hover:bg-white/90 px-8 py-3 text-lg font-medium rounded-full">
              <Mail className="mr-2" size={20} />
              Send Message
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/50 text-apple-body">
            © 2025 Fatih. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
