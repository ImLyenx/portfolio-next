export const experience: ExperienceItem[] = [
  {
    title: "Project Manager",
    company: "Lexo",
    location: "Nanterre",
    dates: "October 2024 - December 2024",
    description: "Managed a team and customer relations.",
  },
  {
    title: "IS Manager",
    company: "DeVinci Junior",
    location: "Nanterre",
    dates: "2024 - Present",
    description: "Managing the IT department and the team.",
  },
  {
    title: "Intern",
    company: "Scheneider Electric",
    location: "Rueil-Malmaison",
    dates: "December 2029",
    description: "Internship",
  },
];

export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  dates: string;
  description: string;
};
