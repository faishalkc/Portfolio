import React from "react";
import { Download, Mail } from "lucide-react";

export default function Hero() {
  const socials = [
    {
      href: "https://wa.me/6289521356200",
      label: "WhatsApp",
      icon: (
        <svg className="size-5 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52s.198-.298.298-.497c.099-.198.05-.371-.025-.52s-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a13 13 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074s2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413s.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413" />
        </svg>
      ),
    },
    {
      href: "https://facebook.com/faishalhady56",
      label: "Facebook",
      icon: (
        <svg className="size-5 fill-current" viewBox="0 0 32 32">
          <path d="M23,0H9C4,0,0,4,0,9v14c0,5,4,9,9,9h7V20h-4c-0.6,0-1-0.4-1-1v-3c0-0.6,0.4-1,1-1h4v-3c0-3.3,1.7-6,5-6h4c0.6,0,1,0.4,1,1v3c0,0.6-0.4,1-1,1h-3.8c-0.1,0-0.2,0.1-0.2,0.2V15h5c0.3,0,0.6,0.2,0.8,0.4s0.2,0.6,0.1,0.9l-2,3C24.8,19.8,24.4,20,24,20h-3v12h2c5,0,9-4,9-9V9C32,4,28,0,23,0z" />
        </svg>
      ),
    },
    {
      href: "https://instagram.com/faishalkc",
      label: "Instagram",
      icon: (
        <svg className="size-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      href: "https://github.com/faishalkc",
      label: "GitHub",
      icon: (
        <svg className="size-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      href: "https://linkedin.com/in/faishal-hady",
      label: "LinkedIn",
      icon: (
        <svg className="size-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      href: "mailto:faishalkc@gmail.com",
      label: "Email",
      icon: <Mail className="size-5" />,
    },
  ];

  return (
    <section id="home" className="min-h-[85vh] flex items-center pt-24 pb-16">
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* Intro text */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight scroll-animate">
            Halo, I'm Muhammad Faishal Hady!
          </h1>

          <h2
            className="text-lg md:text-xl font-medium text-segawa-plum dark:text-segawa-plum-light mb-6 scroll-animate"
            style={{ transitionDelay: "0.2s" }}
          >
            IT Support | Fullstack Web Engineer | Network Engineer
          </h2>

          <p
            className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed scroll-animate"
            style={{ transitionDelay: "0.3s" }}
          >
            IT Support by dedication. Fullstack Web Engineer by craft. Network
            Engineer by infrastructure. Troubleshooting, building, and securing
            the digital systems of tomorrow.
          </p>

          <div
            className="flex flex-wrap items-center justify-center md:justify-start gap-6 scroll-animate"
            style={{ transitionDelay: "0.4s" }}
          >
            {/* Download CV Button */}
            <a
              href="/CV.pdf"
              className="font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors py-2 text-sm gap-2 text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 px-6 rounded-full shadow-sm"
            >
              <Download className="size-5" /> Download CV
            </a>

            {/* Social media connections */}
            <div className="flex items-center gap-4">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="font-medium inline-flex items-center text-gray-500 hover:text-gray-900 dark:hover:text-white p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Avatar */}
        <div
          className="shrink-0 relative scroll-animate"
          style={{ transitionDelay: "0.1s" }}
        >
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrcj1P4Ljoi_nI8E8SLArxDzKL5t1G9C3q91JpAlI2OMqkCMJefGa7tnkCMlhsqw1YDIYEvKqp6xvdjD5ufQhp_aCo5MjStb9-ddu9dT3vjs_cu8_CvfRowVxX0uz5IsRhQjqVLcCaptIhNt0mH_cYreyvs_EPME6cj2osEsB_ndAYzAKyj-1R3ujadpY/s1600/1767004885126.jpg"
            alt="Muhammad Faishal Hady"
            className="w-48 h-48 md:w-72 md:h-72 shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800 rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
