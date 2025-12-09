"use client";
import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";

import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@/components/DownloadIcon";
import { MailIcon } from "@/components/MailIcon";
import { SquareArrowOutUpRightIcon } from "@/components/SquareArrowOutUpRightIcon";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="relative mx-auto max-w-5xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left content section */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 order-2 lg:order-1">
            <div>
              <p className="text-sm md:text-xl font-medium font-sans text-slate-600 dark:text-slate-400 tracking-wide">
                <TypeAnimation
                  sequence={[
                    "Hello, I'm",
                    1000,
                    "こんにちは、私は",
                    500,
                    "Bonjour, je suis",
                    500,
                    "Hola, soy",
                    500,
                    "안녕하세요",
                    500,
                    "Ciao, sono",
                    500,
                    "Hallo, ich bin",
                    500,
                    "你好，我是",
                    500,
                    "Halo, saya",
                    500,
                    "Kumusta, ako si",
                    500,
                    "Hello, I'm",
                    500,
                    () => {
                      console.log("Sequence completed");
                    },
                  ]}
                  preRenderFirstString={true}
                  speed={40}
                  wrapper="span"
                  cursor={true}
                  repeat={0}
                  style={{ display: "inline-block" }}
                />
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 dark:text-white text-balance leading-tight">
                Mike.
              </h1>
            </div>

            <div className="space-y-4">
              <p className="text-lg md:text-xl leading-relaxed text-justify text-slate-800 dark:text-slate-100 font-medium">
                I'm a{" "}
                <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-semibold">
                  Software Engineer
                </span>{" "}
                based in Tangerang with{" "}
                <span className="font-semibold text-slate-900 dark:text-slate-50">
                  2–3 years
                </span>{" "}
                of experience building modern, responsive, and scalable web
                applications.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-justify text-slate-700 dark:text-slate-300 font-normal">
                I enjoy developing smooth user experiences and delivering
                reliable full-stack solutions.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-justify text-slate-700 dark:text-slate-300 font-normal">
                Beyond web development, I'm very interested in the{" "}
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  aviation industry
                </span>{" "}
                and eager to explore opportunities where I can combine my
                technical skills with this passion.
              </p>
            </div>

            <div className="gap-4 pt-4 space-x-4">
              <Link href="/contact">
                <Button className="cursor-pointer">
                  Ping me here
                  <MailIcon className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/resume">
                <Button
                  variant="outline"
                  className="cursor-pointer bg-transparent"
                >
                  View Resume
                  <SquareArrowOutUpRightIcon className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-sm md:max-w-md">
              <Image
                src="/graduation-cartoon.png"
                alt="About"
                width={790}
                height={1189}
                className="w-full aspect-790/1189 md:max-w-md mx-auto hidden md:block"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
