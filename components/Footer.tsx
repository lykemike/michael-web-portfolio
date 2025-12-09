"use client";

import { useEffect, useState } from "react";
import moment from "moment-timezone";
import { Instagram, Github } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState(moment().format("HH:mm"));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTime(moment().format("HH:mm"));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const getStatus = () => {
    if (!mounted) return { text: "Loading...", color: "bg-gray-300" };
    const hour = Number.parseInt(time.split(":")[0]);
    if ((hour >= 22 && hour <= 23) || (hour >= 0 && hour <= 7))
      return { text: "Sleeping", color: "bg-red-500" };
    if (hour > 7 && hour < 9)
      return { text: "Preparing", color: "bg-yellow-500" };
    if (hour >= 9 && hour <= 17)
      return { text: "Working", color: "bg-green-500" };
    return { text: "Relaxing", color: "bg-blue-500" };
  };

  const status = getStatus();
  const date = moment().format("dddd, MMMM D");

  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div className="space-y-2 text-center sm:text-left">
            <p className="text-sm text-gray-500">{date}</p>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <div className={`h-2 w-2 rounded-full ${status.color}`}>
                <div
                  className={`h-2 w-2 rounded-full ${status.color} animate-pulse`}
                />
              </div>
              <p className="text-sm font-medium text-gray-800">
                {status.text} · {time} GMT +7
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <a
              href="https://instagram.com/mikekm_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-gray-900"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/lykemike"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-gray-900"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
