import React, { useState } from "react";
import { Folder, ExternalLink, Eye, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { projectsData } from "../data";

export default function Projects() {
  const [showProjects, setShowProjects] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="projects" className="py-16 max-w-5xl mx-auto overflow-hidden">
      <div className="mx-auto max-w-2xl text-center mb-10 scroll-animate">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Projects
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400 mb-8">
          Selected works and experiments
        </p>

        <button
          type="button"
          onClick={() => setShowProjects(!showProjects)}
          className="font-medium inline-flex items-center transition-colors py-2.5 text-sm gap-2 text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 px-6 rounded-full shadow-sm cursor-pointer"
        >
          <Folder className="size-5" /> What I've made
        </button>
      </div>

      {showProjects && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn mt-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-900 relative group">
                <img
                  src={project.image || "/projects/no-picture.jpg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Hover Preview Button */}
                <button
                  type="button"
                  onClick={() =>
                    setActiveImage({
                      src: project.image || "/projects/no-picture.jpg",
                      title: project.title,
                    })
                  }
                  className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white text-[11px] font-semibold tracking-wide shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 backdrop-blur-xs transform translate-y-1 group-hover:translate-y-0 cursor-pointer"
                >
                  <Eye className="size-3.5" />
                  Preview
                </button>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded">
                      {project.category}
                    </span>
                    {project.metrics && (
                      <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded border border-gray-100 dark:border-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-200"
                    >
                      Visit Project <ExternalLink className="size-3" />
                    </a>
                  ) : (
                    <span className="text-xs font-medium text-gray-400 italic block text-center">
                      Internal Corporate / Research Stack
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* IMAGE PREVIEW MODAL */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-zoom-out"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="relative max-w-4xl w-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl z-10 border border-gray-100 dark:border-gray-800"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-20 flex items-center justify-center size-8 rounded-full bg-black/50 hover:bg-black/75 text-white hover:scale-105 transition-all duration-250 cursor-pointer border border-white/10"
                aria-label="Close preview"
              >
                <X className="size-4" />
              </button>

              {/* Image Container */}
              <div className="w-full flex items-center justify-center bg-gray-50 dark:bg-gray-950 p-2 sm:p-4 max-h-[75vh] overflow-hidden">
                <img
                  src={activeImage.src}
                  alt={activeImage.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-sm"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Footer Panel */}
              <div className="px-6 py-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-4">
                <h4 className="text-base font-bold text-gray-900 dark:text-white truncate">
                  {activeImage.title}
                </h4>
                <button
                  type="button"
                  onClick={() => setActiveImage(null)}
                  className="px-4 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
