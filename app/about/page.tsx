// page à propos avec parcours, formation et compétences
import { skills, SkillCategory, SkillItem } from "@/data/skills";
import { education, EducationItem } from "@/data/education";
import { experience, ExperienceItem } from "@/data/experience";
import { Icon } from "@iconify-icon/react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Metadata } from "next";
import HomePageSection from "@/components/home-page-section";

// métadonnées seo
export const metadata: Metadata = {
  title: "About - Lyenx",
  description:
    "Learn more about my professional journey, education, and skills",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 pt-8">
      <div>
        <h1 className="text-4xl font-extrabold mb-8">About Me</h1>
        <p className="text-lg">
          I'm an 18 years old Full-stack web developer based near Paris.
        </p>
        <p className="text-lg">
          I love coding, and computer-related things in general. I've been
          coding since 2016, first by simply editing HTML files in Notepad, then
          learning Scratch. More recently, I've been learning different
          technologies, playing CTFs and having fun with my friends!
        </p>
      </div>

      <HomePageSection title="Experience">
        {experience.map(
          ({
            title,
            company,
            dates,
            location,
            description,
          }: ExperienceItem) => (
            <Card key={title} className="border shadow-sm">
              <CardHeader>
                <div className="flex flex-col space-y-1.5">
                  <div className="space-y-1 mb-2">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight mb-1">
                      {title}
                    </h3>
                    <p className="text-base font-medium">{company}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-1.5">
                      <Icon icon="lucide:calendar" className="h-4 w-4" />
                      <span>{dates}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon icon="lucide:map-pin" className="h-4 w-4" />
                      <span>{location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base">{description}</p>
              </CardContent>
            </Card>
          )
        )}
      </HomePageSection>

      <HomePageSection title="Education">
        {education.map(({ name, dates, place, description }: EducationItem) => (
          <Card key={name} className="border shadow-sm">
            <CardHeader>
              <div className="flex flex-col space-y-1.5">
                <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2">
                  {name}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Icon icon="lucide:calendar" className="h-4 w-4" />
                    <span>{dates}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon icon="lucide:map-pin" className="h-4 w-4" />
                    <span>{place}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base">{description}</p>
            </CardContent>
          </Card>
        ))}
      </HomePageSection>

      <HomePageSection title="Skills">
        {skills.map(({ name, items }: SkillCategory) => (
          <div className="flex flex-col gap-3" key={name}>
            <h3 className="text-xl">&middot; {name} :</h3>
            <div className="flex flex-wrap gap-4">
              {items.map(({ label, icon }: SkillItem) => (
                <TooltipProvider key={label}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Icon icon={icon} className="text-6xl" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        ))}
      </HomePageSection>
    </div>
  );
}
