import React from "react";
import Image from "next/image";
import { personal_data } from "@/data/db";
import { Separator } from "@/components/ui/separator";
import WorkList from "@/components/resume/work-list";
import SkillList from "@/components/resume/skill-list";
import EducationList from "@/components/resume/education-list";
import DownloadButton from "@/components/DownloadButton";
import AchievementList from "@/components/resume/achievements";

export default function ResumeUI() {
  const handleDownload = () => {
    window.open(
      "/Michael-Kevin-Montolalu-Resume.pdf",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="max-w-xl md:max-w-4xl mx-auto p-4 space-y-6 md:space-y-8">
      {/* Personal Introduction Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mb-16 md:mb-20">
        {/* Profile Image */}
        <div className="shrink-0">
          <div className="relative w-32 sm:w-40 aspect-square overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={personal_data.image_formal || "/placeholder.svg"}
              alt="Mike - Software Engineer"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 10rem, 8rem"
            />
          </div>
        </div>

        {/* Intro Content */}
        <div className="flex-1 min-w-0">
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-2 leading-tight text-balance">
              Hey, I'm Mike 👋
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
              Software Engineer & Full-Stack Developer
            </p>
          </div>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-pretty">
            {personal_data.summary}
          </p>

          {/* Download Button */}
          <div className="flex items-center gap-3">
            <DownloadButton />
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <section className="mb-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Work Experience
          </h2>
          <div className="h-1 w-12 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full mt-3"></div>
        </div>

        <div className="space-y-6">
          {personal_data.workExperience.map((data, index) => (
            <div key={`${index}-${data.company}`} className="group">
              <WorkList {...data} />
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Education
          </h2>
          <div className="h-1 w-12 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full mt-3"></div>
        </div>

        <div className="space-y-6">
          {personal_data.education.map((data, index) => (
            <div key={`${index}-${data.institution}`}>
              <EducationList {...data} />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Achievements
          </h2>
          <div className="h-1 w-12 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full mt-3"></div>
        </div>

        <div className="space-y-6">
          {personal_data.achievements.map((data, index) => (
            <div key={`${index}-${data.title}`}>
              <AchievementList {...data} />
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Skills
          </h2>
          <div className="h-1 w-12 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full mt-3"></div>
        </div>

        <SkillList skills={personal_data.skills} />
      </section>
    </div>
  );
}
