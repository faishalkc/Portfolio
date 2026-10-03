import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Publications from "./components/Publications";
import Projects from "./components/Projects";
import Mascot from "./components/Mascot";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const [activeSection, setActiveSection] = useState("home");

  const toggleDarkMode = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "services", "skills", "experience", "publications", "projects"];

    const animObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            animObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
    );

    const animatedElements = document.querySelectorAll("[class*='scroll-animate']");
    animatedElements.forEach((child) => animObserver.observe(child));

    let ticking = false;
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;

      if (window.scrollY < 80) {
        setActiveSection("home");
        return;
      }

      if (scrollPosition >= totalHeight - 60) {
        setActiveSection("projects");
        return;
      }

      const referenceY = window.innerHeight * 0.35;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= referenceY && rect.bottom > 0) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    updateActiveSection();

    return () => {
      animObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
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
    <div className="relative min-h-screen text-gray-900 dark:text-white font-sans overflow-x-hidden">
      <img
        src="/background.png"
        loading="lazy"
        aria-hidden="true"
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02]"
      />

      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main className="relative w-full mx-auto max-w-6xl md:min-w-[48rem] md:max-w-[min(72rem,calc(100%-64px))] px-4 md:pl-24 md:pr-6">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Publications />
        <Projects />
      </main>

      <Mascot />
    </div>
  );
}
