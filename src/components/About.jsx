import React from "react";
import { GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Card - Biography */}
        <div className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 shadow-sm h-full scroll-animate">
          <div className="p-4 sm:p-6 flex flex-col h-full">
            <div className="flex flex-col h-full">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  About Faishal
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                  A Computer Systems graduate driven by the harmony of
                  technology and infrastructure. As a Fullstack Web Engineer, I
                  bring ideas to life with elegant, user-centric code. As a
                  Network Engineer, I bridge the gap between complex
                  connectivity problems and robust network solutions. And as an
                  IT Support specialist, I ensure the digital foundations remain
                  resilient. Dedicated to continuous mastery and building
                  systems that endure.
                </p>
              </div>

              <div className="mt-auto">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  Education
                </h3>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
                  <span className="inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle size-8 text-base bg-white dark:bg-gray-900 text-brand-purple ring-1 ring-gray-200 dark:ring-gray-700">
                    <GraduationCap className="text-gray-600 dark:text-gray-300 size-5" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">
                      Universitas Tanjungpura
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                      Bachelor of Computer Systems GPA-3.67
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">2021 - 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card - Vision / Beyond Code */}
        <div
          className="rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 relative h-full overflow-hidden p-4 sm:p-6 scroll-animate"
          style={{ transitionDelay: "0.15s" }}
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 dark:opacity-5 pointer-events-none">
            <svg width="120" height="120" fill="none" viewBox="0 0 120 120">
              <pattern
                id="dot-pattern"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  className="fill-current text-gray-900 dark:text-white"
                />
              </pattern>
              <rect width="120" height="120" fill="url(#dot-pattern)" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Beyond the Code
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base mb-4">
              A passionate Computer Systems graduate driven by the harmony of
              technology and infrastructure. Beyond Fullstack Web Engineering, I
              offer reliable IT Support to keep operations running flawlessly,
              and design robust network infrastructures.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base mb-4">
              My technical focus also extends to the Internet of Things (IoT)
              and Cyber Security landscapes, allowing me to develop secure,
              smart, and interconnected physical-to-digital integrations.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
              Currently considering expanding my expertise into Cloud Computing
              to bridge the gap between development and highly scalable
              infrastructure. Committed to continuous learning and mastering new
              technology stacks to deploy highly resilient environments.
            </p>
          </div>
        </div>
      </div>

      {/* Bootcamps & Certifications */}
      <div
        className="mt-6 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 p-4 sm:p-6 scroll-animate"
        style={{ transitionDelay: "0.2s" }}
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Bootcamps &amp; Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-base font-bold text-gray-700 dark:text-gray-300 mb-3">
              2026 — ITBox by Course-Net Indonesia
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-1.5">
                • Basic Front-End Web Development
              </li>
              <li className="flex items-center gap-1.5">
                • Basic Back-End Web Development
              </li>
              <li className="flex items-center gap-1.5">
                • JavaScript Algorithm Fundamentals
              </li>
              <li className="flex items-center gap-1.5">
                • Modern JavaScript Fundamentals &amp; Full-Stack Architecture
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-700 dark:text-gray-300 mb-3">
              2024 — ITBox by Course-Net Indonesia
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-1.5">
                • Programming Algorithms in C
              </li>
              <li className="flex items-center gap-1.5">
                • Object-Oriented Programming with Java
              </li>
              <li className="flex items-center gap-1.5">
                • Database Course Level Basic
              </li>
              <li className="flex items-center gap-1.5">
                • Computer Networking Basics
              </li>
              <li className="flex items-center gap-1.5">
                • Computer Network Course Level Basic
              </li>
              <li className="flex items-center gap-1.5">
                • Computer Network Course Level Intermediate
              </li>
              <li className="flex items-center gap-1.5">
                • Computer Network Course Level Advanced
              </li>
              <li className="flex items-center gap-1.5">
                • Cyber Security Course Level Basic
              </li>
              <li className="flex items-center gap-1.5">
                • Cyber Security Course Level Intermediate
              </li>
              <li className="flex items-center gap-1.5">
                • Cyber Security Course Level Advanced
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
