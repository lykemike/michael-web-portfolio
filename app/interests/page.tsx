import React from "react";
import Grid from "@/components/Grid";
import { InvestmentSection } from "@/components/interests/InvestmentSection";
import { AviationSection } from "@/components/interests/AviationSection";
import { HobbySection } from "@/components/interests/HobbySection";
import { Separator } from "@/components/ui/separator";
import { personal_data } from "@/data/db";
import { Activity, ChartCandlestick, Dumbbell, Plane } from "lucide-react";

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
                src={"/purr/cool-purr.png"}
                alt="Cool purr mascot"
              />
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300">
              <Activity className="w-4 h-4" />
              <span className="text-sm font-medium">How I Spend My Time</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight text-slate-900 dark:text-white">
                Beyond Work
              </h1>
              <p className="text-justify text-lg md:text-xl text text-slate-600 dark:text-slate-300 text-balance leading-relaxed max-w-2xl">
                Here are some of the activities I enjoy the most. I love staying
                active, trying new things, and constantly exploring interests
                that keep life exciting. I enjoy sports like badminton and going
                to the gym, along with keeping a watchlist of my favorite
                stocks, crypto, and commodities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
              <div className="flex gap-3 items-start">
                <Dumbbell className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">
                    Active Living
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Sports & hobbies
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <ChartCandlestick className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">
                    Market Mindset
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Investing & crypto
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Plane className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">
                    Explore & Discover
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Travel & aviation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HobbySection
          title="Hobbies"
          description=""
          hobbies={personal_data.hobbies}
        />
        <Separator className="mt-10 mb-6" />
        <InvestmentSection />
        <Separator className="mt-6 mb-6" />
        <AviationSection />
      </div>
    </main>
  );
}
