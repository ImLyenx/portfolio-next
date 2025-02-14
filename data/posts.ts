export const posts: Post[] = [
  {
    slug: "hosting",
    title: "Hosting my projects",
    description: "The Server™",
    tags: [
      { name: "Linux", color: "#eebd1b", icon: "simple-icons:linux" },
      { name: "Coolify", color: "#8c52ff", icon: "simple-icons:c" },
    ],
    category: "DevOps",
  },
  {
    slug: "miscelleanous",
    title: "Miscelleanous",
    description:
      "All my random little side-projects that are not big enough to fill a whole post.",
    tags: [
      { name: "PHP", color: "#797ab2", icon: "simple-icons:php" },
      { name: "C#", color: "#690081", icon: "simple-icons:csharp" },
      { name: "Go", color: "#00ADD8", icon: "simple-icons:go" },
      { name: "Unity", color: "#333333", icon: "simple-icons:unity" },
      { name: "MySQL", color: "#4479A1", icon: "simple-icons:mysql" },
      { name: "Discord", color: "#5865F2", icon: "simple-icons:discord" },
      { name: "Slack", color: "#4A154B", icon: "simple-icons:slack" },
    ],
    github: "ImLyenx",
    category: "Miscellaneous",
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    description:
      "The website you're on right now, with information about me and my projects",
    tags: [
      { name: "Astro", color: "#e54097", icon: "simple-icons:astro" },
      {
        name: "Tailwind CSS",
        color: "#38bdf8",
        icon: "simple-icons:tailwindcss",
      },
    ],
    demo: "https://lyenx.com",
    github: "ImLyenx/lyenx.com",
    category: "Web",
  },
  {
    slug: "valorant",
    title: "Valorant",
    description:
      "Recreation of the VALORANT in-game interface (Main menu, Store, Collection, Career)",
    tags: [
      { name: "Vite", color: "#ffab03", icon: "simple-icons:vite" },
      { name: "React", color: "#06bfef", icon: "simple-icons:react" },
      { name: "Python", color: "#4584b6", icon: "simple-icons:python" },
      { name: "AIOHTTP", color: "#2c5bb4", icon: "simple-icons:aiohttp" },
    ],
    demo: "https://val.lyenx.com",
    category: "Web",
  },
];

export type Post = {
  slug: string;
  title: string;
  description: string;
  tags: Tag[];
  demo?: string | null;
  github?: string | null;

  category?: string;
};

export type Tag = {
  name: string;
  color: string;
  icon: string;
};
