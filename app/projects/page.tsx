import React from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import Grid from "@/components/Grid";
import { personal_data } from "@/data/db";
import { Code2, FolderGit, Lightbulb, Zap } from "lucide-react";

export default function page() {
  return (
    <main className="font-sans mb-16">
      <Grid />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center mb-20">
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <div className="relative">
              <img
                className="hidden md:block w-40 h-40 md:w-50 md:h-50 hover:scale-105 transition-transform duration-300"
                src={"/purr/laptop-purr.png"}
                alt="Cool purr mascot"
              />
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              <FolderGit className="w-4 h-4" />
              <span className="text-sm font-medium">
                Creations & Experiments
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight text-slate-900 dark:text-white">
                My Projects
              </h1>
              <p className="text-lg md:text-xl  text-slate-600 dark:text-slate-300 text-balance leading-relaxed max-w-2xl text-justify">
                I love building things from scratch, exploring new ideas, and
                constantly experimenting. I enjoy recreating apps, trying out
                fresh concepts, and diving into new technologies—including Web3.
                I'm always building something new, so feel free to check back
                anytime!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
              <div className="flex gap-3 items-start">
                <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">
                    From Scratch
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Full-stack applications
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Lightbulb className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">
                    Fresh Concepts
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    New ideas & tech
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">
                    Web3 & Beyond
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Next-gen tech
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {personal_data.projects.map((project) => (
          <ProjectCard
            key={project.title}
            href={project.href}
            title={project.title}
            description={project.description}
            tags={project.technologies}
            image={project.image}
            links={project.links}
          />
        ))}
      </div>
    </main>
  );
}
