import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { mascotSpeeches } from "../data";

export default function Mascot() {
  const [mascotOpen, setMascotOpen] = useState<boolean>(false);
  const [speechIndex, setSpeechIndex] = useState<number>(0);

  const handleMascotClick = () => {
    if (!mascotOpen) {
      setMascotOpen(true);
      setSpeechIndex(0);
    } else {
      setSpeechIndex((prev) => (prev + 1) % mascotSpeeches.length);
    }
  };

  // Close mascot speech bubble when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
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
        {/* Mascot dialog box */}
        {mascotOpen && (
          <div className="absolute bottom-20 md:bottom-28 right-0 w-72 p-4 bg-white dark:bg-gray-800 border border-brand-purple/30 dark:border-brand-purple/50 rounded-2xl shadow-2xl z-50 text-left">
            <div className="absolute bottom-[-10px] right-6 md:right-10 w-4 h-4 bg-white dark:bg-gray-800 border-r border-b border-brand-purple/30 dark:border-brand-purple/50 rotate-45"></div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
              {mascotSpeeches[speechIndex]}
            </p>
            <div className="mt-3 flex items-center justify-between text-[10px] text-brand-purple-dark dark:text-brand-purple-light font-bold border-t border-brand-purple/10 dark:border-brand-purple/25 pt-2">
              <span>Faishal's Mascot 🐙</span>
              <span className="cursor-pointer hover:underline flex items-center gap-0.5">
                Click to cycle <ChevronRight className="size-3" />
              </span>
            </div>
          </div>
        )}

        {/* Mascot icon trigger */}
        <button
          type="button"
          onClick={handleMascotClick}
          aria-label="Takodachi mascot"
          className="w-16 h-16 md:w-24 md:h-24 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none flex items-center justify-center cursor-pointer"
        >
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAvxRR91O6f0Dwd2gRUg3WbF-JXY4LqEn2u1PB3EC1AZ3WMDK8GPBqEqvaNrp0139VHPdKJSE_n9rGycHYiJNtISoj7PlTT48pMj2tmWKB9XfAX4EL6motapgCBA36RYmhoVhHs_Virw1ADPqOFL5pio5bHQPLo7h8T8dLkHv0-nP0VfV24gLheaVD3rw/s1600/takodachi.png"
              alt="Takodachi mascot"
              className="w-full h-full object-contain transition-transform duration-300 drop-shadow-xl"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
