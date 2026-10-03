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
  Moon
} from "lucide-react";

export default function Navbar({
  darkMode,
  toggleDarkMode,
  activeSection,
  scrollToSection
}) {
  const navItems = [
    { id: "home", label: "Home", icon: <Home className="size-6" /> },
    { id: "about", label: "About", icon: <User className="size-6" /> },
    { id: "services", label: "Services", icon: <Layers className="size-6" /> },
    { id: "skills", label: "Skills", icon: <Wrench className="size-6" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="size-6" /> },
    { id: "publications", label: "Publications", icon: <BookOpen className="size-6" /> },
    { id: "projects", label: "Projects", icon: <Folder className="size-6" /> }
  ];

  const mobileNavItems = [
    { id: "home", label: "Home", icon: <Home className="size-5" /> },
    { id: "about", label: "About", icon: <User className="size-5" /> },
    { id: "services", label: "Services", icon: <Layers className="size-5" /> },
    { id: "skills", label: "Skills", icon: <Wrench className="size-5" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="size-5" /> },
    { id: "publications", label: "Publications", icon: <BookOpen className="size-5" /> },
    { id: "projects", label: "Projects", icon: <Folder className="size-5" /> }
  ];

  return (
    <>
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
                className={`w-11 h-11 flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? "text-purple-700 dark:text-purple-400 bg-gray-100 dark:bg-gray-800 font-semibold shadow-xs"
                    : "text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                }`}
              >
                {item.icon}
              </button>
            ))}
          </div>

          <div className="w-8 h-px bg-gray-200 dark:bg-gray-700 my-3"></div>

          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Toggle color mode"
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="w-11 h-11 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 cursor-pointer"
          >
            {darkMode ? (
              <Sun className="size-6 shrink-0" />
            ) : (
              <Moon className="size-6 shrink-0" />
            )}
          </button>
        </nav>
      </header>

      <header className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-max max-w-[95vw] pb-[max(0px,env(safe-area-inset-bottom))]">
        <nav className="flex items-center bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-full px-3 py-1.5 shadow-xl border border-gray-200 dark:border-gray-700 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1 sm:gap-1.5">
            {mobileNavItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                aria-label={item.label}
                className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-200 shrink-0 cursor-pointer ${
                  activeSection === item.id
                    ? "text-purple-700 dark:text-purple-400 bg-gray-100 dark:bg-gray-800 font-semibold shadow-xs"
                    : "text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                }`}
              >
                {item.icon}
              </button>
            ))}
          </div>
          <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 mx-1.5 sm:mx-2 shrink-0"></div>
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Toggle color mode"
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200 shrink-0 cursor-pointer"
          >
            {darkMode ? (
              <Sun className="size-5 shrink-0" />
            ) : (
              <Moon className="size-5 shrink-0" />
            )}
          </button>
        </nav>
      </header>
    </>
  );
}
