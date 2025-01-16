export const education: EducationItem[] = [
  {
    name: "Bachelor of Coding & Digital Innovation",
    dates: "2018 - 2022",
    place: "IIM Digital School - Nanterre",
    description:
      "I am currently pursuing my Bachelor's degree in Computer Science from IIM.",
  },
  {
    name: "Le Bon Sauveur",
    dates: "2016 - 2023",
    place: "Le Vésinet",
    description: "Baccalaureate",
  },
];

export type EducationItem = {
  name: string;
  dates: string;
  place: string;
  description: string;
};
