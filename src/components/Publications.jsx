import React from "react";
import { FileText, ExternalLink } from "lucide-react";
import { publicationsData } from "../data";

export default function Publications() {
  return (
    <section
      id="publications"
      className="py-16 max-w-5xl mx-auto overflow-hidden"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Publications
      </h2>

      <div className="space-y-8">
        {publicationsData.map((pub) => (
          <article
            key={pub.id}
            className="grid gap-8 rounded-2xl border border-gray-100 bg-white/80 dark:bg-gray-900/60 p-5 shadow-sm sm:p-6 lg:grid-cols-[1.25fr_0.75fr] lg:p-8 dark:border-gray-800 transition-colors duration-300"
          >
            <div className="flex flex-col">
              {/* Tags */}
              <div className="mb-5 flex flex-wrap gap-2">
                {pub.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="font-medium inline-flex items-center text-[10px] px-2.5 py-1 gap-1 rounded-full bg-gray-50/50 dark:bg-gray-950/40 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="max-w-3xl text-xl font-bold leading-tight text-gray-900 sm:text-2xl dark:text-white">
                {pub.title}
              </h3>

              {/* Details */}
              <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  {pub.journal}
                </p>
                <p>{pub.period}</p>
                <p>
                  Authors:{" "}
                  <span className="text-gray-800 dark:text-gray-200">
                    {pub.authors}
                  </span>
                </p>
                {pub.doi && (
                  <p className="flex items-center gap-1.5 flex-wrap">
                    <span>DOI:</span>
                    <a
                      href={pub.doiUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="font-medium text-segawa-plum hover:text-segawa-plum/80 dark:text-segawa-plum-light dark:hover:text-segawa-plum-light/80 transition-colors underline"
                    >
                      {pub.doi}
                    </a>
                  </p>
                )}
              </div>

              {/* Summary / Description */}
              <p className="mt-5 max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300">
                {pub.description}
              </p>

              {/* Actions */}
              <div className="mt-6 flex flex-wrap gap-3">
                {pub.paperUrl && (
                  <a
                    href={pub.paperUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="font-medium inline-flex items-center transition-colors px-4 py-2 text-sm gap-2 text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 rounded-full cursor-pointer shadow-sm"
                  >
                    <FileText className="size-4 shrink-0" />
                    Read paper
                  </a>
                )}
                {pub.doiUrl && (
                  <a
                    href={pub.doiUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="font-medium inline-flex items-center transition-colors px-4 py-2 text-sm gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-full cursor-pointer dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700/80 shadow-sm"
                  >
                    <ExternalLink className="size-4 shrink-0" />
                    Open DOI
                  </a>
                )}
              </div>
            </div>

            {/* Stats Panel */}
            <div className="grid grid-cols-2 gap-3 self-start sm:gap-4 lg:grid-cols-1">
              {pub.stats?.map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-gray-200/60 bg-gray-50/50 p-4 dark:border-gray-800 dark:bg-gray-950/40"
                >
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-xs text-gray-600 dark:text-gray-400">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
