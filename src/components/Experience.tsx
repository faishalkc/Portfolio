import React from "react";
import { experienceData } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-16 max-w-5xl mx-auto overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white scroll-animate is-visible">
        Experience
      </h2>
      
      <div className="flex gap-1.5 flex-col max-w-3xl mx-auto">
        {experienceData.map((exp, idx) => (
          <div key={idx} className="group relative flex flex-1 gap-3 scroll-animate is-visible">
            
            {/* Timeline track */}
            <div className="relative flex items-center gap-1.5 flex-col">
              <span className="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-gray-100 dark:bg-gray-800 size-8">
                <div className="h-3 w-3 rounded-full bg-gray-400 dark:bg-gray-500 border-2 border-white dark:border-gray-900"></div>
              </span>
              {idx < experienceData.length - 1 && (
                <div role="separator" className="flex-1 rounded-full bg-gray-200 dark:bg-gray-700 w-0.5"></div>
              )}
            </div>
            
            {/* Timeline content details */}
            <div className="w-full mt-1.5 pb-6.5">
              <div className="text-gray-400 text-xs/5 uppercase tracking-wider mb-1">
                {exp.period}
              </div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {exp.role}
              </div>
              <div className="text-lg font-medium text-gray-700 dark:text-gray-300 mt-0.5">
                {exp.company}
              </div>
              <div className="text-sm text-gray-400 mt-0.5">
                {exp.location}
              </div>
              
              <ul className="space-y-1.5 text-gray-600 dark:text-gray-400 mt-3">
                {exp.tasks.map((task, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2.5">
                    <span className="mt-2 size-1.5 rounded-full bg-gray-400 dark:bg-gray-500 shrink-0"></span>
                    <span className="text-left leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
