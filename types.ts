import type { SimpleIcon } from "simple-icons";

// types.ts
export type WorkExperience = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: string;
};

export type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  logo: string;
};

export type Achievement = {
  title: string;
  issuer: string;
  startDate: string;
  endDate: string;
  description: string;
  credential?: string[];
  logo: string;
  image?: {
    title: string;
    src: string;
  }[];
};

export type Skill = {
  name: string;
  icon: SimpleIcon; // simple-icons object (has .svg and .hex)
  color?: string;
  category: string;
};

export type SkillsByCategory = Record<string, Skill[]>;

export interface ResumeData {
  workExperience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  navbar?: { href: string; label: string }[];
}

// types/prices.ts
export type Source = "CMC" | "FINNHUB";
export type Category = "Crypto" | "Stocks" | "Commodities";

export interface PriceRow {
  name: string;
  symbol: string;
  priceUsd: number;
  change24hPct: number;
  marketCapUsd?: number;
  volume24hUsd?: number;
  source: Source;
}
