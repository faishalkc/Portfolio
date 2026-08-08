import React, { useState, useEffect } from "react";
import { Globe, User, FolderGit2, Tv } from "lucide-react";

export default function Mascot() {
  const [mascotOpen, setMascotOpen] = useState(false);

  const handleMascotClick = () => {
    setMascotOpen((prev) => !prev);
  };

  const handleScrollTo = (id) => {
    setMascotOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Close mascot popup when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const target = e.target;
      if (!target.closest("#mascot-container")) {
        setMascotOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div id="mascot-container" className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50">
      <div className="relative">
        {/* Mascot Popup Content */}
        {mascotOpen && (
          <div className="absolute bottom-20 md:bottom-28 right-0 w-64 p-3 bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/80 rounded-2xl shadow-2xl z-50 text-left animate-fadeIn">
            {/* Arrow Pointer */}
            <div className="absolute bottom-[-6px] right-6 md:right-10 w-3 h-3 bg-white dark:bg-gray-800 border-r border-b border-gray-200/80 dark:border-gray-700/80 rotate-45"></div>

            <div className="grid grid-cols-2 gap-3">
              {/* 1. Blog */}
              <a
                href="https://www.faishalkc.eu.org/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMascotOpen(false)}
                className="group flex flex-col items-center justify-center p-3 rounded-2xl text-center transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700/50 cursor-pointer"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-200 group-hover:scale-105 shadow-xs relative text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30">
                  <Globe className="w-7 h-7" />
                </div>
                <span className="text-xs font-semibold text-gray-900 dark:text-white mt-2 leading-tight">Blog</span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 leading-none">Personal website</span>
              </a>

              {/* 2. About Me */}
              <button
                type="button"
                onClick={() => handleScrollTo("about")}
                className="group flex flex-col items-center justify-center p-3 rounded-2xl text-center transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700/50 cursor-pointer"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-200 group-hover:scale-105 shadow-xs relative text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/30">
                  <User className="w-7 h-7" />
                </div>
                <span className="text-xs font-semibold text-gray-900 dark:text-white mt-2 leading-tight">About Me</span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 leading-none">Background & exp</span>
              </button>

              {/* 3. Projects */}
              <button
                type="button"
                onClick={() => handleScrollTo("projects")}
                className="group flex flex-col items-center justify-center p-3 rounded-2xl text-center transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700/50 cursor-pointer"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-200 group-hover:scale-105 shadow-xs relative text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30">
                  <FolderGit2 className="w-7 h-7" />
                </div>
                <span className="text-xs font-semibold text-gray-900 dark:text-white mt-2 leading-tight">Projects</span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 leading-none">What I've built</span>
              </button>

              {/* 4. Anime Watchlist */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setMascotOpen(false);
                }}
                className="group flex flex-col items-center justify-center p-3 rounded-2xl text-center transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700/50 cursor-pointer"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-200 group-hover:scale-105 shadow-xs relative text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/30">
                  <Tv className="w-7 h-7" />
                </div>
                <span className="text-xs font-semibold text-gray-900 dark:text-white mt-2 leading-tight">Anime Watchlist</span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 leading-none">Curated watchlist</span>
              </a>
            </div>
          </div>
        )}

        {/* Mascot icon trigger */}
        <button
          type="button"
          onClick={handleMascotClick}
          aria-label="Segawa Onpu mascot"
          className="w-16 h-16 md:w-24 md:h-24 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none flex items-center justify-center cursor-pointer"
        >
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="/mascot-600.png"
              alt="Segawa Onpu mascot"
              className="w-full h-full object-contain transition-transform duration-300 drop-shadow-xl"
            />
          </div>
        </button>
      </div>
    </div>
  );
}

