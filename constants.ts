import { TimelineEra, Project, Skill, SocialLink } from './types';

export const BIO_SUMMARY = "A lifelong programmer whose career began with BASIC on a ZX-Spectrum and now focuses on creating AI-powered solutions. Augmented by AI, transforming complex ideas into functional reality faster than ever.";

export const SKILLS: Skill[] = [
  { name: "Python", category: "core", level: 95 },
  { name: "Django", category: "backend", level: 90 },
  { name: "Aiogram", category: "backend", level: 85 },
  { name: "LLMs / Prompt Eng", category: "ai", level: 98 },
  { name: "Keras / Deep Learning", category: "ai", level: 80 },
  { name: "1C:Enterprise", category: "legacy", level: 90 },
  { name: "Assembly (x86)", category: "legacy", level: 75 },
  { name: "Win32 API", category: "legacy", level: 70 },
  { name: "SQL / SQLite", category: "backend", level: 80 },
  { name: "Russian (Native)", category: "lang", level: 100 },
  { name: "English (B1)", category: "lang", level: 60 },
  { name: "Czech (B1)", category: "lang", level: 60 },
  { name: "Ukrainian (B1)", category: "lang", level: 60 },
];

export const PROJECTS: Project[] = [
  {
    title: "TARSAN",
    description: "Telegram Auto Reposting System with AI-based Content Networking. A fully autonomous Telegram channel operating without human involvement. Features ~30 configuration tables and uses AI agents for content generation.",
    tags: ["AI Agent", "Python", "Telegram API", "Automation"],
    iconName: "bot",
    link: "https://t.me/tarsan_system"
  },
  {
    title: "Herbalist",
    description: "An AI-assisted Django web application database of herbs. Originally a 1C configuration, it evolved into a Telegram bot using Aiogram, and finally a modern web app.",
    tags: ["Django", "Web App", "AI-Assisted", "Health"],
    iconName: "leaf",
    link: "https://bav.pythonanywhere.com"
  },
  {
    title: "Neuroconstructor",
    description: "A visual neural network builder for the 1C:Enterprise system. Allowed users to visually create, train, and test models. Award-winning project with a dedicated YouTube tutorial series.",
    tags: ["ML", "Keras", "Enterprise", "Visual Coding"],
    iconName: "network",
    link: "https://infostart.ru/1c/tools/1233974/",
    secondaryLinks: [
      { platform: "YouTube Channel", url: "https://www.youtube.com/channel/UC58UyUUlaUA_beiyex6BemA/featured", iconName: "youtube" }
    ]
  }
];

export const TIMELINE_DATA: TimelineEra[] = [
  {
    id: "90s",
    period: "1990s",
    title: "The ZX Spectrum Era",
    iconName: "terminal",
    summary: "First steps in coding with BASIC on a ZX-SPECTRUM.",
    skillsLearned: ["BASIC"],
    content: "I started back in the distant '90s when I was in school and was the proud owner of a ZX-SPECTRUM computer. It was equipped with the then-popular programming language BASIC, which had a significant influence on my later choice of a programming language and career path."
  },
  {
    id: "2000s",
    period: "2000s",
    title: "The Low-Level Quest",
    iconName: "cpu",
    summary: "Mastering Assembly, Win32 API, and writing a custom assembler.",
    skillsLearned: ["Assembly (x86)", "Win32 API", "Visual Basic 6", "PowerBASIC", "FPU"],
    content: "With the advent of the Internet, I explored all variants of BASIC (GW-BASIC, QBASIC, VB6). Craving more control, I moved to the Win32 API and Assembly. I discovered an effective learning method by writing my own assembler in Visual Basic 6 to implement 32-bit x86 instructions. I later wrote a QuickSort algorithm in Assembly that outperformed standard libraries."
  },
  {
    id: "2010s",
    period: "2010s",
    title: "Enterprise & Science",
    iconName: "briefcase",
    summary: "Professional 1C development, University, and Geology research.",
    skillsLearned: ["1C:Enterprise", "VBA", "C++", "Algorithm Theory", "Teaching"],
    content: "My career formally began when I was hired to maintain an unsupported 1C:Enterprise 7.7 system. I later pursued a university degree, writing programs in Excel VBA for algorithm theory and a 'Life Simulator' in C++. From 2014 to 2019, I was a postgraduate student in Mining Engineering, teaching practical classes while continuing to work as a 1C programmer."
  },
  {
    id: "2019",
    period: "2019",
    title: "The AI Pivot",
    iconName: "brain",
    summary: "Inspired by AlphaGo to master Neural Networks.",
    skillsLearned: ["Python", "Keras", "NumPy", "Deep Learning"],
    content: "Everything changed when AlphaGo defeated Lee Sedol. I decided to dedicate myself to AI. Treating it like Assembly (hard but rewarding), I quit my job to study Neural Networks using François Chollet’s 'Deep Learning with Python'. To bridge my skills, I built a Keras extension for 1C:Enterprise, earning an award and launching a YouTube channel to teach others."
  },
  {
    id: "present",
    period: "Present",
    title: "AI-Augmented Reality",
    iconName: "rocket",
    summary: "Building autonomous agents and leveraging LLMs daily.",
    skillsLearned: ["LLMs / Prompt Eng", "Django", "Aiogram", "React"],
    content: "After emigrating due to the war, I completed Python web development courses. I now use AI to augment every part of my workflow—from installing servers on Android tablets to designing complex algorithms. My flagship project, TARSAN, is a fully autonomous Telegram publishing network. I use VS Code and Gemini CLI to transform complex ideas into reality faster than ever."
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/Vaaldemarr", iconName: "github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/vladimir-kapustin-928b63314/", iconName: "linkedin" },
  { platform: "Website", url: "https://bav.pythonanywhere.com/portfolio/", iconName: "globe" }
];
