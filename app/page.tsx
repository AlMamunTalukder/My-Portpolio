/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import {
  BiBriefcase,
  BiCode,
  BiDownload,
  BiLayout,
  BiMapPin,
  BiServer,
  BiTerminal,
  BiMenu,
  BiX,
} from "react-icons/bi";
import { DiGithub } from "react-icons/di";
import {
  FaExternalLinkAlt,
  FaGraduationCap,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";

// --- DATA CONFIGURATION ---
const personalInfo = {
  name: "Al Mamun Talukder",
  role: "Software Engineer",
  tagline: "Building scalable web applications and digital experiences.",
  about:
    "I am a frontend-focused Software Engineer with 2+ years of experience building responsive, high-performance web applications using React, Next.js, and Tailwind CSS. I also have solid mid-level backend experience, allowing me to bridge the gap between seamless user interfaces and robust server-side logic. I am passionate about writing clean code and creating intuitive user experiences.",
  education: "B.Sc in Computer Science & Engineering",
  location: "Dhaka, Bangladesh",
  email: "hello@yourdomain.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  resumeLink: "#",
};

const experience = [
  {
    id: 1,
    role: "Frontend Engineer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    description:
      "Spearheaded the development of a high-traffic SaaS dashboard. Improved core web vitals by 40% using Next.js server-side rendering and optimized Tailwind CSS architecture.",
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 2,
    role: "Junior Web Developer",
    company: "Creative Digital Agency",
    period: "2022 - 2023",
    description:
      "Developed and maintained multiple client websites. Collaborated with UI/UX designers to implement pixel-perfect, responsive designs using React and Material UI.",
    tech: ["React", "JavaScript", "Material UI", "Node.js"],
  },
];

const projects = [
  {
    id: 1,
    title: "FinTech Analytics Dashboard",
    description:
      "A comprehensive financial dashboard featuring real-time data visualization, dark mode, and complex state management.",
    image: "/img/project/craft-skills.jpeg",
    tech: ["Next.js", "Tailwind", "Recharts", "Zustand"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "E-Commerce Platform API & UI",
    description:
      "Full-stack e-commerce solution with a custom shopping cart, Stripe integration, and an admin management panel.",
    image: "/img/project/craft-skills.jpeg",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const skills = [
  {
    category: "Frontend",
    icon: BiLayout,
    color: "from-blue-500/20 to-cyan-500/5",
    borderColor: "hover:border-cyan-500/50",
    iconColor: "text-cyan-400",
    items: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Redux/Zustand",
      "Shadcn UI",
      "Material UI",
    ],
  },
  {
    category: "Backend",
    icon: BiServer,
    color: "from-emerald-500/20 to-teal-500/5",
    borderColor: "hover:border-emerald-500/50",
    iconColor: "text-emerald-400",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "SQL (Basics)",
      "Prisma ORM",
    ],
  },
  {
    category: "Tools & Others",
    icon: BiTerminal,
    color: "from-purple-500/20 to-fuchsia-500/5",
    borderColor: "hover:border-purple-500/50",
    iconColor: "text-purple-400",
    items: [
      "Git & GitHub",
      "Vercel",
      "Figma",
      "Postman",
      "Agile/Scrum",
      "Responsive Design",
    ],
  },
];

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#05050A] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden relative">
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/10 rounded-full blur-[150px] opacity-50"></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled || isMobileMenuOpen ? "bg-[#05050A]/90 backdrop-blur-xl border-white/10 py-4 shadow-lg shadow-black/50" : "bg-transparent border-transparent py-6"}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 tracking-tighter z-50">
            <BiCode className="text-cyan-400" size={24} />
            <span>
              MAMUN<span className="text-cyan-400">.</span>DEV
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
          </div>

          {/* Desktop Contact Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-bold hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            Contact Me
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-white p-2 z-50 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <BiX size={28} /> : <BiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-[#05050A]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 flex flex-col items-center gap-6 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[400px] py-8 shadow-2xl" : "max-h-0 py-0"
          }`}
        >
          <a
            href="#about"
            onClick={handleMobileMenuClick}
            className="text-slate-300 hover:text-cyan-400 font-medium text-lg transition-colors"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={handleMobileMenuClick}
            className="text-slate-300 hover:text-cyan-400 font-medium text-lg transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={handleMobileMenuClick}
            className="text-slate-300 hover:text-cyan-400 font-medium text-lg transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={handleMobileMenuClick}
            className="mt-2 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-300 text-base font-bold hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            Contact Me
          </a>
        </div>
      </nav>

      <main className="relative z-10">
        {/* --- HERO SECTION --- */}
        <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-4 sm:px-6 min-h-[90vh] flex flex-col justify-center items-center text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6 md:mb-8 animate-[fadeIn_1s_ease-out]">
            <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-purple-500"></span>
            </span>
            <span className="text-purple-300 text-[10px] md:text-xs font-bold tracking-widest uppercase">
              Available for new opportunities
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] mb-6 animate-[slideUp_0.8s_ease-out_0.2s_both]">
            <span className="block text-xl sm:text-2xl md:text-4xl text-slate-400 font-medium mb-3 md:mb-4 tracking-normal">
              Hi, I&apos;m {personalInfo.name} 👋
            </span>
            Engineering digital <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-sm">
              experiences.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-8 md:mb-10 animate-[slideUp_0.8s_ease-out_0.4s_both] px-2">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 animate-[slideUp_0.8s_ease-out_0.6s_both] w-full sm:w-auto px-4">
            <a
              href={personalInfo.resumeLink}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10 text-sm md:text-base"
            >
              <BiDownload className="h-5 w-5 md:h-6 md:w-6" /> Download Resume
            </a>
            <div className="flex items-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 md:p-4 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
              >
                <LuGithub className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 md:p-4 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400 transition-all hover:scale-110"
              >
                <FiLinkedin className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            </div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section
          id="about"
          className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight shrink-0">
              About Me
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">
            {/* Text Bio */}
            <div className="lg:col-span-3 space-y-4 md:space-y-6 text-slate-300 font-light leading-relaxed text-base md:text-lg bg-gradient-to-br from-white/[0.04] to-transparent p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 shadow-2xl">
              <p>{personalInfo.about}</p>
              <p>
                When I&apos;m not writing code, you can find me exploring new web
                technologies, learning about software architecture, and
                constantly pushing myself to write cleaner, more efficient code.
                My goal is to build products that solve real-world problems.
              </p>
            </div>

            {/* Quick Facts Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-gradient-to-r from-indigo-500/10 to-transparent border border-indigo-500/20 hover:border-indigo-500/50 transition-colors group">
                <FaGraduationCap className="h-6 w-6 md:h-8 md:w-8 text-indigo-400 group-hover:scale-110 transition-transform mb-2 md:mb-3" />
                <h4 className="text-white font-bold mb-1 text-sm md:text-base">
                  Education
                </h4>
                <p className="text-xs md:text-sm text-indigo-200/70">
                  {personalInfo.education}
                </p>
              </div>
              <div className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/20 hover:border-emerald-500/50 transition-colors group">
                <BiMapPin
                  className="text-emerald-400 group-hover:scale-110 transition-transform mb-2 md:mb-3"
                  size={24}
                />
                <h4 className="text-white font-bold mb-1 text-sm md:text-base">
                  Location
                </h4>
                <p className="text-xs md:text-sm text-emerald-200/70">
                  {personalInfo.location}
                </p>
              </div>
              <div className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 hover:border-purple-500/50 transition-colors group sm:col-span-2 lg:col-span-1">
                <BiBriefcase
                  className="text-purple-400 group-hover:scale-110 transition-transform mb-2 md:mb-3"
                  size={24}
                />
                <h4 className="text-white font-bold mb-1 text-sm md:text-base">
                  Experience
                </h4>
                <p className="text-xs md:text-sm text-purple-200/70">
                  {experience.length}+ Years in Frontend & Mid-level Backend
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section
          id="experience"
          className="py-16 md:py-24 px-4 sm:px-6 max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight shrink-0">
              Work Experience
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>

          <div className="space-y-6 md:space-y-8">
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="relative group p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/5 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
              >
                {/* Background Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                  {/* Date */}
                  <div className="md:w-1/4 shrink-0 md:pt-1">
                    <p className="inline-block text-xs md:text-sm font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                      {exp.period}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="md:w-3/4">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5 md:mb-2 group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-base md:text-lg text-slate-400 mb-4 md:mb-5 flex items-center gap-2">
                      <BiBriefcase className="text-slate-500 shrink-0" />{" "}
                      {exp.company}
                    </p>
                    <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-5 md:mb-6 font-light">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-[10px] md:text-xs font-mono group-hover:border-white/20 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SKILLS/TECH STACK SECTION --- */}
        <section className="py-16 md:py-24 px-4 sm:px-6 relative">
          <div className="absolute inset-0 bg-white/[0.02] border-y border-white/5"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3 md:mb-4">
                Technical Arsenal
              </h2>
              <p className="text-sm md:text-base text-slate-400 font-light">
                Technologies I work with on a daily basis.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {skills.map((skillGroup, idx) => {
                const Icon = skillGroup.icon;
                return (
                  <div
                    key={idx}
                    className={`relative p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br ${skillGroup.color} border border-white/5 ${skillGroup.borderColor} transition-all duration-500 group overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 p-6 md:p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 group-hover:scale-110 transform">
                      <Icon size={100} className="md:w-[120px] md:h-[120px]" />
                    </div>

                    <div className="relative z-10">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center mb-5 md:mb-6 backdrop-blur-md border border-white/10">
                        <Icon
                          className={`${skillGroup.iconColor} w-6 h-6 md:w-7 md:h-7`}
                        />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                        {skillGroup.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 md:px-4 py-1.5 md:py-2 rounded-xl bg-black/40 border border-white/10 text-xs md:text-sm text-slate-200 hover:bg-white/10 hover:text-white transition-colors cursor-default backdrop-blur-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section
          id="projects"
          className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight shrink-0">
              Featured Work
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 overflow-hidden hover:border-cyan-500/40 transition-all duration-500 shadow-2xl shadow-black/50 flex flex-col"
              >
                {/* Project Image with Scrolling Hover Effect */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0A0F] border-b border-white/5 p-3 sm:p-4 md:p-6 pb-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] to-transparent z-10 pointer-events-none"></div>

                  <div className="relative w-full h-full rounded-t-xl overflow-hidden border border-white/10 border-b-0 group-hover:-translate-y-1 md:group-hover:-translate-y-2 transition-transform duration-700">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:object-bottom transition-all duration-[4s] ease-in-out"
                    />
                  </div>

                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20 flex gap-2 md:gap-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 lg:translate-y-[-10px] lg:group-hover:translate-y-0">
                    <a
                      href={project.githubUrl}
                      className="p-2.5 md:p-3 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-white hover:text-cyan-400 hover:border-cyan-500/50 transition-all shadow-xl"
                    >
                      <DiGithub className="w-5 h-5 md:w-5 md:h-5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="p-2.5 md:p-3 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-white hover:text-cyan-400 hover:border-cyan-500/50 transition-all shadow-xl"
                    >
                      <FaExternalLinkAlt className="w-4 h-4 md:w-4 md:h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 md:p-8 lg:p-10 relative flex-1 flex flex-col">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-6 md:mb-8 font-light flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 md:px-3 py-1 rounded-lg bg-white/5 text-[10px] md:text-xs font-mono text-cyan-200 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT / CTA SECTION --- */}
        <section
          id="contact"
          className="py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto text-center"
        >
          <div className="p-8 sm:p-12 md:p-24 rounded-[2rem] md:rounded-[3.5rem] bg-gradient-to-b from-cyan-900/20 to-transparent border border-cyan-500/20 relative overflow-hidden shadow-2xl shadow-cyan-900/20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-cyan-500/20 blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tight mb-4 md:mb-6 relative z-10 leading-tight">
              Let&apos;s build something <br className="hidden sm:block" />{" "}
              <span className="text-cyan-400">together.</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-8 md:mb-10 max-w-xl mx-auto font-light relative z-10 px-2">
              I&apos;m currently looking for new opportunities. Whether you have a
              question or just want to say hi, I&apos;ll try my best to get back to
              you!
            </p>

            <a
              href={`https://wa.me/8801XXXXXXXXX`} // replace with your number
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center justify-center gap-2 md:gap-3 px-8 md:px-10 py-3.5 md:py-5 rounded-full bg-[#25D366] text-white font-bold text-base md:text-lg hover:bg-[#1ebe5d] hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all duration-300 w-full sm:w-auto"
            >
              <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
              Chat on WhatsApp
            </a>

            <p className="mt-6 md:mt-8 text-xs md:text-sm text-slate-400 font-mono relative z-10 bg-black/20 py-2 px-4 md:px-6 rounded-full  backdrop-blur-sm border border-white/5 break-all">
              Or email me directly at{" "}
              <span className="text-cyan-400">{personalInfo.email}</span>
            </p>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="py-6 md:py-8 text-center text-slate-500 text-xs md:text-sm font-medium border-t border-white/5 relative z-10 bg-[#020204]">
        <p>Designed & Built by {personalInfo.name}</p>
      </footer>

      {/* --- ANIMATIONS --- */}
      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
