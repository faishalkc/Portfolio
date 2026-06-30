import React from "react";
import { Wrench, Code, Wifi, Cpu, Shield } from "lucide-react";

export default function Services() {
  const serviceList = [
    {
      icon: <Wrench className="size-5" />,
      title: "IT Support",
      desc: "Diagnosing and resolving hardware, software, and system issues efficiently to guarantee seamless operation.",
      delay: "0s"
    },
    {
      icon: <Code className="size-5" />,
      title: "Fullstack Web Engineering",
      desc: "Developing responsive, end-to-end web applications using modern languages, frameworks, and databases.",
      delay: "0.07s"
    },
    {
      icon: <Wifi className="size-5" />,
      title: "Network Engineering",
      desc: "Designing, configuring, and managing resilient network infrastructures using GNS3 and Cisco Packet Tracer.",
      delay: "0.14s"
    },
    {
      icon: <Cpu className="size-5" />,
      title: "IoT Application Engineering",
      desc: "Designing and building interconnected systems and monitoring solutions with gas and temperature sensors.",
      delay: "0.21s"
    },
    {
      icon: <Shield className="size-5" />,
      title: "Cyber Security",
      desc: "Analyzing system vulnerabilities and implementing defense controls to protect critical digital environments.",
      delay: "0.28s"
    }
  ];

  return (
    <section id="services" className="py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white scroll-animate is-visible">
        What I Do
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-12 scroll-animate is-visible" style={{ transitionDelay: "0.05s" }}>
        I work at the intersection of development and infrastructure, making sure things not only look great but run smoothly behind the scenes.
      </p>
      
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {serviceList.map((srv, idx) => (
          <div
            key={idx}
            className="rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 scroll-animate is-visible"
            style={{ transitionDelay: srv.delay }}
          >
            <div className="p-4 sm:p-5">
              <div className="size-10 rounded-full flex items-center justify-center mb-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                {srv.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
                {srv.title}
              </h3>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                {srv.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
