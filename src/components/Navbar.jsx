import React from "react";
import {
  Home,
  User,
  Layers,
  Wrench,
  Briefcase,
  BookOpen,
  Folder,
  Sun,
  Moon,
} from "lucide-react";

export default function Navbar({
  darkMode,
  setDarkMode,
  activeSection,
  scrollToSection,
}) {
  const navItems = [
    { id: "home", label: "Home", icon: <Home className="size-6" /> },
    { id: "about", label: "About", icon: <User className="size-6" /> },
    { id: "services", label: "Services", icon: <Layers className="size-6" /> },
    { id: "skills", label: "Skills", icon: <Wrench className="size-6" /> },
    {
      id: "experience",
      label: "Experience",
      icon: <Briefcase className="size-6" />,
    },
    {
      id: "publications",
      label: "Publications",
      icon: <BookOpen className="size-6" />,
    },
    { id: "projects", label: "Projects", icon: <Folder className="size-6" /> },
  ];

  const mobileNavItems = [
    { id: "home", label: "Home", icon: <Home className="size-5" /> },
    { id: "about", label: "About", icon: <User className="size-5" /> },
    { id: "services", label: "Services", icon: <Layers className="size-5" /> },
    { id: "skills", label: "Skills", icon: <Wrench className="size-5" /> },
    {
      id: "experience",
      label: "Experience",
      icon: <Briefcase className="size-5" />,
    },
    {
      id: "publications",
      label: "Publications",
      icon: <BookOpen className="size-5" />,
    },
    { id: "projects", label: "Projects", icon: <Folder className="size-5" /> },
  ];

  return (
    <>
      {/* DESKTOP FIXED SIDEBAR NAVIGATION (LEFT) */}
      <header className="hidden md:block fixed top-1/2 -translate-y-1/2 left-6 z-50">
        <nav className="inline-flex flex-col items-center bg-white dark:bg-gray-900 rounded-full px-2.5 py-4 shadow-xl border border-gray-200 dark:border-gray-700/80 transition-all duration-300 backdrop-blur-md">
          <div className="flex flex-col items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                aria-label={item.label}
                title={item.label}
                className={`rounded-full p-2.5 transition-all duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 font-bold scale-110 shadow-sm"
                    : "text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                }`}
              >
                {item.icon}
              </button>
            ))}
          </div>

          <div className="w-8 h-px bg-gray-200 dark:bg-gray-700 my-4"></div>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle color mode"
            title="Toggle theme"
            className="rounded-full p-2.5 text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-300 cursor-pointer"
          >
            {darkMode ? (
              <Sun className="size-6" />
            ) : (
              <Moon className="size-6" />
            )}
          </button>
        </nav>
      </header>

      {/* MOBILE FIXED BOTTOM NAVIGATION */}
      <header className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-max max-w-[95vw] pb-[max(0px,env(safe-area-inset-bottom))]">
        <nav className="flex items-center bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-full px-3 py-1.5 shadow-xl border border-gray-200 dark:border-gray-700 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1 sm:gap-1.5">
            {mobileNavItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                aria-label={item.label}
                className={`rounded-md p-2 transition-all duration-300 shrink-0 ${
                  activeSection === item.id
                    ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 font-medium scale-105"
                    : "text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                }`}
              >
                {item.icon}
              </button>
            ))}
          </div>
          <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-2 sm:mx-2.5 shrink-0"></div>
          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle color mode"
            className="rounded-md p-2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-300 shrink-0"
          >
            {darkMode ? (
              <Sun className="size-5" />
            ) : (
              <Moon className="size-5" />
            )}
          </button>
        </nav>
      </header>
    </>
  );
}
