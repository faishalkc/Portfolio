import React from "react";
import { skillCategories } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white scroll-animate is-visible">
        Skill Set
      </h2>
      
      <div className="space-y-8">
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 scroll-animate is-visible"
            style={{ transitionDelay: cat.delay }}
          >
            <div className="md:w-48 shrink-0">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 md:text-right pt-1.5">
                {cat.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-3 flex-1">
              {cat.skills.map((skill, sIdx) => (
                <button
                  key={sIdx}
                  type="button"
                  className="inline-flex items-center text-sm gap-1.5 border border-gray-200 dark:border-gray-700 font-normal px-4 py-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  {skill.icon}
                  <span className="truncate">{skill.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
