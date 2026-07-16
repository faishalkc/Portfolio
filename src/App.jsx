import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Mascot from "./components/Mascot";

export default function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Navigation and scroll tracking
  const [activeSection, setActiveSection] = useState("home");

  // Sync theme with document class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Scroll spy & Scroll Animation triggers
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "services",
      "skills",
      "experience",
      "projects",
    ];

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.15, rootMargin: "-20% 0px -20% 0px" },
    );

    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        navObserver.observe(el);
        const animatedElements = el.querySelectorAll(".scroll-animate");
        animatedElements.forEach((child) => animObserver.observe(child));
      }
    });

    // Handle scroll edge cases (very top or very bottom of page)
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;

      if (window.scrollY < 50) {
        setActiveSection("home");
        return;
      }

      if (scrollPosition >= totalHeight - 100) {
        setActiveSection("projects");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) navObserver.unobserve(el);
      });
      animObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative min-h-screen text-gray-900 bg-[#f4f6f9] dark:bg-gray-950 dark:text-white font-sans overflow-x-hidden transition-colors duration-300">
      {/* BACKGROUND TEXTURE */}
      <img
        src="/background.png"
        loading="lazy"
        aria-hidden="true"
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02]"
      />

      {/* FIXED NAVIGATION */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* MAIN CONTAINER */}
      <main className="relative max-w-6xl mx-auto px-4 md:pl-24 md:pr-0">
        {/* HERO / HOME SECTION */}
        <Hero />

        {/* ABOUT SECTION */}
        <About />

        {/* SERVICES SECTION */}
        <Services />

        {/* SKILLS SECTION */}
        <Skills />

        {/* EXPERIENCE SECTION */}
        <Experience />

        {/* PROJECTS SECTION */}
        <Projects />
      </main>

      {/* FLOATING MASCOT BUTTON (TAKODACHI EASTER EGG) */}
      <Mascot />
    </div>
  );
}
