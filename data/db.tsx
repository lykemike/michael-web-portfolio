import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siNodedotjs,
  siPython,
  siAstro,
  siReact,
  siNextdotjs,
  siBootstrap,
  siTailwindcss,
  siMui,
  siAntdesign,
  siShadcnui,
  siChartdotjs,
  siRedux,
  siReactquery,
  siFramer,
  siPhp,
  siGraphql,
  siPrisma,
  siAuth0,
  siMysql,
  siPlanetscale,
  siPostgresql,
  siMongodb,
  siSanity,
  siGithub,
  siDocker,
  siPostman,
  siAxios,
  siFigma,
  siVercel,
  siBisecthosting,
  siUbuntu,
  siReacthookform,
  siZod,
  siSupabase,
  siJson,
  siRust,
  siGo,
  siSolana,
  siNpm,
  siPnpm,
  siBun,
  siYarn,
} from "simple-icons";
import { Icons } from "@/components/Icons";

export const personal_data = {
  name: "Mike",
  image_formal: "/formal.jpeg",
  url: "https://mikekm.xyz",
  location: "Gading Serpong, Tangerang",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Software Engineer. I love building things and helping people.",
  summary:
    "I’m a Software Engineer based in Tangerang, Indonesia with 2–3 years of experience in web development. My focus is on building responsive and modern websites, and I’m always interested in learning and adapting to new programming languages and technologies. Beyond web development, I’m very interested in the aviation industry and eager to explore opportunities where I can combine my technical skills with this passion.",
  avatarUrl: "/grad.png",
  workExperience: [
    {
      title: "Business Owner",
      company: "Mekdshop.com",
      location: "Remote",
      startDate: "Sep 2023",
      endDate: "Present",
      logo: "🛒",
      description: `
Mekdshop is a digital marketplace specializing in in-game currency and content top-ups. Integrated with multiple payment methods and WhatsApp notifications, aimed to be the most affordable option in the market.  

- Founded and scaled the marketplace with a growing customer base  
- Built automated workflows, allowing the business to run autonomously  
- Designed promotional posters and maintained social media presence  
- Implemented secure and diverse payment integrations  
- Automated WhatsApp notifications to improve transparency and satisfaction  
- Optimized pricing strategies for competitive positioning  

**Stack:** E-Commerce, Business Ownership, Social Media, Payment Integrations
    `,
    },
    {
      title: "Career Break",
      company: "—",
      location: "—",
      startDate: "Jan 2023",
      endDate: "Jun 2023",
      logo: "⏸️",
      description: `
Took a planned career break focused on personal development, upskilling in software engineering, and exploring new entrepreneurial opportunities.
    `,
    },
    {
      title: "Frontend Developer",
      company: "PT. Zegen Solusi Mandiri",
      location: "📍 Jakarta, Indonesia",
      startDate: "Mar 2022",
      endDate: "May 2022",
      logo: "💻",
      description: `
**Project 1: BTN Smart (Bank Tabungan Negara)**  
- Designed and developed BTN Smart using React and Next.js  
- Created reusable components and optimized data fetching with React Query  
- Diagnosed and resolved bugs to improve application stability  
- Collaborated with cross-functional teams using Scrum methodology to deliver features on time  

**Project 2: CRM System**  
- Built and maintained a Customer Relationship Management (CRM) system  
- Translated Figma/Sketch designs into responsive UI components  
- Contributed to setting up layouts, authentication flows, and core features  

**Stack:** React, Next.js, TypeScript, JavaScript, React Query
    `,
    },
    {
      title: "Full Stack Developer (Internship)",
      company: "PT. Hexaon Business Mitrasindo",
      location: "📍 Jakarta, Indonesia",
      startDate: "Feb 2021",
      endDate: "Mar 2022",
      logo: "⚙️",
      description: `
Contributed to the development of a web-based accounting application, from UI design to backend APIs.  

- Built RESTful APIs using Next.js API routes for cross-application integration  
- Translated Figma/Sketch wireframes into functional UI/UX designs  
- Learned accounting fundamentals (Arus Kas, Buku Besar, Jurnal Umum, Laba Rugi, Neraca, Trial Balance, Chart of Accounts) to align software with business needs  
- Introduced and taught the team new tech stacks, improving productivity  
- Ensured code quality through regular reviews and Agile/Scrum practices  

**Stack:** Next.js, JavaScript, PostgreSQL, Prisma, Material UI, Tailwind CSS, Ant Design, Charting Libraries
    `,
    },
  ],

  education: [
    {
      degree: "Computer Science",
      institution: "Bina Nusantara University",
      location: "Alam Sutera",
      period: "Sep 2018 - Dec 2022",
      logo: "🎓",
      description: `
Specialization in **Software Engineering**, focusing on modern web technologies and scalable application development.  

- Learned algorithms, data structures, and system design  
- Developed multiple web projects using React and Next.js  
- Participated in group research and open-source contributions  
    `,
    },
  ],

  projects: [
    {
      title: "Mekdshop.com",
      href: "https://mekdshop.com",
      active: true,
      description:
        "An autonomous digital top-up platform for Mobile Legends and other games, built with a modern full-stack architecture. Mekdshop automates price updates, order processing, payment verification, and WhatsApp notifications, allowing the system to run smoothly without manual intervention. We aim to be the cheapest and fastest top-up service on the market.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Swiper",
        "Tailwind",
        "Ant Design",
        "Cloud Flare",
        "Server Hosting",
        "Payment Gateway",
      ],
      links: [
        {
          type: "Website",
          href: "https://mekdshop.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/mekdshop.png",
    },
    {
      title: "Color Palette Generator",
      href: "https://mekdshop.com",
      active: true,
      description:
        "It's a fast and lightweight tool that instantly extracts dominant color palettes from any uploaded image. It generates clean HEX/RGB palettes and allows users to export the results instantly. A core feature is the technology stack, built with Go for high-speed image processing and Next.js for the responsive user interface, ensuring a rapid and precise color extraction experience.",
      technologies: [
        "Go",
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Railway",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://color-palette-generator-go-next.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/lykemike/color-palette-generator-go-next",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/color-palette-generator.png",
    },
    {
      title: "Instagram Analytics",
      href: "https://mekdshop.com",
      active: true,
      description:
        "Cheapest game top up service provider with a hassle-free game voucher purchasing experience. We provide a large selection of your favorite games as well as complete payment methods to make transactions easier for you.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Swiper",
        "Tailwind",
        "Ant Design",
        "Cloud Flare",
        "Server Hosting",
        "Payment Gateway",
      ],
      links: [
        {
          type: "Website",
          href: "https://color-palette-generator-go-next.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/lykemike/color-palette-generator-go-next",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/mekdshop.png",
    },
    {
      title: "Counter Dapp",
      href: "https://frontend-two-swart-37.vercel.app/",
      active: true,
      description:
        "It's a simple, on-chain counter where users can increment the count by 1 or reset it to 0. A core feature is that the current count and the total number of increments are permanently stored on the Solana blockchain, ensuring the state is transparent and decentralized.",
      technologies: [
        "Anchor Framework",
        "Rust",
        "Phantom Wallet",
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Vercel",
      ],
      links: [],
      image: "/projects/counter-dapp.png",
    },
    {
      title: "Medium Clone",
      href: "https://medium-ver2.vercel.app/",
      active: true,
      description: "A clone of a Medium website (www.medium.com)",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "React Hooks",
        "Portable Text",
        "GraphQL",
        "Sanity CMS",
      ],
      links: [
        {
          type: "Website",
          href: "https://medium-ver2.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/medium.png",
    },
    {
      title: "TrackID",
      href: "https://delivery-tracker-indonesi-git-b81ace-michaels-projects-63b0e8dd.vercel.app/",
      active: true,
      description: "Tracking Website",
      technologies: ["Next.js", "TypeScript", "Tailwind", "ShadCN"],
      links: [
        {
          type: "Website",
          href: "https://delivery-tracker-indonesi-git-b81ace-michaels-projects-63b0e8dd.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/track-id.png",
    },
    {
      title: "Live News App",
      href: "https://the-daily-buzz-news.vercel.app/",
      active: true,
      description:
        "A Live News App, using TypeScript, StepZen, Tailwind, Dark Mode, GraphQL and data from Mediastack API",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Dark Mode",
        "StepZen",
        "GraphQL",
        "MediaStack API",
      ],
      links: [
        {
          type: "Website",
          href: "https://the-daily-buzz-news.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/daily-buzz.png",
    },
    {
      title: "Python Web Scraping Script",
      href: "/",
      active: true,
      description:
        "This powerful Python script efficiently retrieves essential Mobile Legends data, including heroes' images, IDs, roles, and skills. By leveraging advanced web scraping techniques, this tool simplifies and automates the data extraction process, saving valuable time and effort. The gathered data is intelligently organized and stored in an xlsx format, ensuring easy accessibility and analysis. In addition, the script efficiently saves hero images in a designated folder, allowing for effortless browsing and utilization.",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      links: [
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/python.png",
    },
  ],

  achievements: [
    {
      title: "⛓️‍💥 School of Solana - Season 8",
      issuer: "Organized by Ackee Blockchain Security",
      startDate: "Oct 2025",
      endDate: "Dec 2025",
      description: `
**Program:** School of Solana - Season 8  
**Organizer:** Ackee Blockchain Security  
**Period:** 08 October 2025 – 04 December 2025  
**Participant Name:** lykemike  
**Link:** [View Credentials](https://github.com/lykemike/ackee-school-of-solana-tasks)

Accepted and completed a selective bootcamp focused on Solana development using Rust and Anchor.

**Key Skills Acquired:**
- Program Derived Addresses (PDAs) and Cross-Program Invocations (CPIs)
- Account validation and secure on-chain programming patterns
- Common vulnerabilities and attack vectors in Solana programs
- Code review and security audit fundamentals
- Rust/Anchor best practices for blockchain development

Gained practical experience through structured lessons, assignments, and code reviews while learning to build secure, production-ready Solana smart contracts.
`,
      logo: "/ackee-solana/ackee-blockchain-security.png",
      credential: ["https://github.com/lykemike/ackee-school-of-solana-tasks"],
      image: [
        {
          title: "Season 8 Badge",
          src: "/ackee-solana/season8-ackee-school-of-solana-badge.png",
        },
        { title: "Google Sheet", src: "/ackee-solana/google-sheet.png" },
      ],
    },
    {
      title: "🥇 1st Place - OKX Trade with Suli Campaign",
      issuer: "Organized by OKX",
      startDate: "Sep 2025",
      endDate: "Oct 2025",
      description: `**Organizer:** OKX | Trade with Suli Campaign  
**Period:** 12 September 2025 – 12 October 2025 (GMT+7)  
**Result:** 🥇 1st Place — Total ROI: +172.78%  
**Participant Name:** Bang Mekk  
**Link:** [View Campaign](https://www.okx.ac/campaigns/tradewsuli)

 Secured 1st place in Suli's Trading Competition with a total ROI of +172.78% within one month.
 Applied advanced risk management, technical analysis, and leverage optimization strategies across spot and futures markets.
 Demonstrated consistent profitability, precision, and capital discipline under high-volatility trading conditions.`,
      logo: "/okx-logo.png",
      credential: ["https://www.okx.ac/campaigns/tradewsuli"],
      image: [
        {
          title: "Winner Poster",
          src: "/okx-tws/winner-poster.png",
        },
        {
          title: "OKX Leaderboard",
          src: "/okx-tws/okx-leaderboard.png",
        },
        {
          title: "WhatsApp Broadcast",
          src: "/okx-tws/tws-wa.png",
        },
      ],
    },
  ],

  skills: [
    // 🚀 Frontend Development
    {
      name: "React.js",
      icon: siReact,
      color: "#61DAFB",
      category: "Frontend Development",
    },
    {
      name: "Next.js",
      icon: siNextdotjs,
      color: "#000000",
      category: "Frontend Development",
    },
    {
      name: "Astro",
      icon: siAstro,
      color: "#BC52EE",
      category: "Frontend Development",
    },
    {
      name: "TypeScript",
      icon: siTypescript,
      color: "#3178C6",
      category: "Frontend Development",
    },
    {
      name: "JavaScript",
      icon: siJavascript,
      color: "#F7DF1E",
      category: "Frontend Development",
    },
    {
      name: "HTML5",
      icon: siHtml5,
      color: "#E34F26",
      category: "Frontend Development",
    },
    {
      name: "CSS3",
      icon: siCss,
      color: "#1572B6",
      category: "Frontend Development",
    },
    {
      name: "Tailwind CSS",
      icon: siTailwindcss,
      color: "#06B6D4",
      category: "Frontend Development",
    },
    {
      name: "Shadcn UI",
      icon: siShadcnui,
      color: "#000000",
      category: "Frontend Development",
    },
    {
      name: "Material UI",
      icon: siMui,
      color: "#007FFF",
      category: "Frontend Development",
    },
    {
      name: "Ant Design",
      icon: siAntdesign,
      color: "#0170FE",
      category: "Frontend Development",
    },
    {
      name: "Bootstrap",
      icon: siBootstrap,
      color: "#7952B3",
      category: "Frontend Development",
    },

    {
      name: "Redux",
      icon: siRedux,
      color: "#764ABC",
      category: "Frontend Development",
    },
    {
      name: "React Query",
      icon: siReactquery,
      color: "#FF4154",
      category: "Frontend Development",
    },
    {
      name: "Chart.js",
      icon: siChartdotjs,
      color: "#FF6384",
      category: "Frontend Development",
    },
    {
      name: "Framer Motion",
      icon: siFramer,
      color: "#0055FF",
      category: "Frontend Development",
    },

    // ⚙️ Backend & APIs
    {
      name: "Node.js",
      icon: siNodedotjs,
      color: "#339933",
      category: "Backend & APIs",
    },
    {
      name: "Python",
      icon: siPython,
      color: "#3776AB",
      category: "Backend & APIs",
    },
    { name: "PHP", icon: siPhp, color: "#777BB4", category: "Backend & APIs" },
    {
      name: "Golang",
      icon: siGo,
      color: "#00ADD8",
      category: "Backend & APIs",
    },
    {
      name: "Rust",
      icon: siRust,
      color: "#000000",
      category: "Backend & APIs",
    },
    {
      name: "GraphQL",
      icon: siGraphql,
      color: "#E10098",
      category: "Backend & APIs",
    },
    {
      name: "Axios",
      icon: siAxios,
      color: "#5A29E4",
      category: "Backend & APIs",
    },

    // 🌐 Web 3 Development
    {
      name: "Solana",
      icon: siSolana,
      color: "#9945FF",
      category: "Blockchain & Web 3",
    },

    // 📝 Forms & Validation
    {
      name: "React Hook Form",
      icon: siReacthookform,
      color: "#EC5990",
      category: "Forms & Validation",
    },
    {
      name: "Zod",
      icon: siZod,
      color: "#408AFF",
      category: "Forms & Validation",
    },
    {
      name: "Auth0",
      icon: siAuth0,
      color: "#EB5424",
      category: "Forms & Validation",
    },

    // 🗄️ Databases & CMS
    {
      name: "MySQL",
      icon: siMysql,
      color: "#4479A1",
      category: "Databases & CMS",
    },
    {
      name: "PostgreSQL",
      icon: siPostgresql,
      color: "#4169E1",
      category: "Databases & CMS",
    },
    {
      name: "PlanetScale",
      icon: siPlanetscale,
      color: "#000000",
      category: "Databases & CMS",
    },
    {
      name: "MongoDB",
      icon: siMongodb,
      color: "#47A248",
      category: "Databases & CMS",
    },
    {
      name: "Supabase",
      icon: siSupabase,
      color: "#3FCF8E",
      category: "Databases & CMS",
    },
    {
      name: "Sanity CMS",
      icon: siSanity,
      color: "#F03E2F",
      category: "Databases & CMS",
    },
    {
      name: "Prisma ORM",
      icon: siPrisma,
      color: "#2D3748",
      category: "Databases & CMS",
    },

    // 🛠️ Tools & Platforms
    {
      name: "Npm",
      icon: siNpm,
      color: "#CB3837",
      category: "Tools & Platforms",
    },
    {
      name: "Yarn",
      icon: siYarn,
      color: "#2C8EBB",
      category: "Tools & Platforms",
    },
    {
      name: "Pnpm",
      icon: siPnpm,
      color: "#F69220",
      category: "Tools & Platforms",
    },
    {
      name: "Bun",
      icon: siBun,
      color: "#000000",
      category: "Tools & Platforms",
    },
    {
      name: "GitHub",
      icon: siGithub,
      color: "#181717",
      category: "Tools & Platforms",
    },
    {
      name: "Docker",
      icon: siDocker,
      color: "#2496ED",
      category: "Tools & Platforms",
    },
    {
      name: "Postman",
      icon: siPostman,
      color: "#FF6C37",
      category: "Tools & Platforms",
    },
    {
      name: "Figma",
      icon: siFigma,
      color: "#F24E1E",
      category: "Tools & Platforms",
    },
    {
      name: "Vercel",
      icon: siVercel,
      color: "#000000",
      category: "Tools & Platforms",
    },
    {
      name: "JSON",
      icon: siJson,
      color: "#000000",
      category: "Tools & Platforms",
    },
    {
      name: "Ubuntu",
      icon: siUbuntu,
      color: "#E95420",
      category: "Tools & Platforms",
    },
    {
      name: "Hosting Services",
      icon: siBisecthosting,
      color: "#673DE6",
      category: "Tools & Platforms",
    },
  ],

  hobbies: [
    {
      title: "Badminton",
      description:
        "Badminton is fast-paced and energizing. It sharpens my reflexes and keeps me active while having fun with friends.",
      image: "/purr/racket-purr.png",
      alt: "Racket Purr",
    },
    {
      title: "Gym",
      description:
        "Going to the gym helps me stay disciplined and build strength. I like pushing my limits and tracking progress.",
      image: "/purr/gym-purr.png",
      alt: "Gym Purr",
    },
    {
      title: "Games",
      description:
        "Gaming lets me relax, explore new worlds, and challenge my strategic thinking while connecting with others.",
      image: "/purr/game-purr.png",
      alt: "Game Purr",
    },
  ],

  headers: [
    {
      id: "projects",
      image: "/purr/laptop-purr.png",
      imageAlt: "Cool purr mascot",
      badge: {
        icon: "FolderGit",
        text: "Creations & Experiments",
        bgColor: "bg-blue-100 dark:bg-blue-900/30",
        textColor: "text-blue-700 dark:text-blue-300",
      },
      title: "My Projects",
      description:
        "I love building things from scratch, exploring new ideas, and constantly experimenting. I enjoy recreating apps, trying out fresh concepts, and diving into new technologies—including Web3. I'm always building something new, so feel free to check back anytime!",
      features: [
        {
          icon: "Code2",
          title: "From Scratch",
          description: "Full-stack applications",
          iconColor: "text-blue-600 dark:text-blue-400",
        },
        {
          icon: "Lightbulb",
          title: "Fresh Concepts",
          description: "New ideas & tech",
          iconColor: "text-purple-600 dark:text-purple-400",
        },
        {
          icon: "Zap",
          title: "Web3 & Beyond",
          description: "Next-gen tech",
          iconColor: "text-emerald-600 dark:text-emerald-400",
        },
      ],
    },
    {
      id: "beyond-work",
      image: "/purr/cool-purr.png",
      imageAlt: "Cool purr mascot",
      badge: {
        icon: "Activity",
        text: "How I Spend My Time",
        bgColor: "bg-fuchsia-100 dark:bg-fuchsia-900/30",
        textColor: "text-fuchsia-700 dark:text-fuchsia-300",
      },
      title: "Beyond Work",
      description:
        "Here are some of the activities I enjoy the most. I love staying active, trying new things, and constantly exploring interests that keep life exciting. I enjoy sports like badminton and going to the gym, along with keeping a watchlist of my favorite stocks, crypto, and commodities.",
      features: [
        {
          icon: "Dumbbell",
          title: "Active Living",
          description: "Sports & hobbies",
          iconColor: "text-blue-600 dark:text-blue-400",
        },
        {
          icon: "ChartCandlestick",
          title: "Market Mindset",
          description: "Investing & crypto",
          iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
        },
        {
          icon: "Plane",
          title: "Explore & Discover",
          description: "Travel & aviation",
          iconColor: "text-emerald-600 dark:text-emerald-400",
        },
      ],
    },
  ],

  navbar: [
    { href: "/", label: "Home" },
    { href: "/resume", label: "Resume" },
    { href: "/projects", label: "Projects" },
    { href: "/interests", label: "Interests" },
    { href: "/contact", label: "Contact" },
  ],
  // contact: {
  //   email: "hello@example.com",
  //   tel: "+123456789",
  //   social: {
  //     GitHub: {
  //       name: "GitHub",
  //       url: "https://dub.sh/dillion-github",
  //       icon: Icons.github,

  //       navbar: true,
  //     },
  //     LinkedIn: {
  //       name: "LinkedIn",
  //       url: "https://dub.sh/dillion-linkedin",
  //       icon: Icons.linkedin,

  //       navbar: true,
  //     },
  //     X: {
  //       name: "X",
  //       url: "https://dub.sh/dillion-twitter",
  //       icon: Icons.x,

  //       navbar: true,
  //     },
  //     Youtube: {
  //       name: "Youtube",
  //       url: "https://dub.sh/dillion-youtube",
  //       icon: Icons.youtube,
  //       navbar: true,
  //     },
  //     email: {
  //       name: "Send Email",
  //       url: "#",
  //       icon: Icons.email,

  //       navbar: false,
  //     },
  //   },
  // },
};
