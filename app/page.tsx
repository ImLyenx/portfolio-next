import { Icon } from "@iconify-icon/react";
import { socialItems, SocialItem } from "@/data/socials";
import { skills, SkillCategory, SkillItem } from "@/data/skills";
import { education, EducationItem } from "@/data/education";
import { experience, ExperienceItem } from "@/data/experience";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Metadata } from "next";
import HomePageSection from "@/components/home-page-section";

export const metadata: Metadata = {
  title: "Home - Lyenx",
};

export default function Home() {
  return (
    <div id="header" className="flex flex-col md:flex-row">
      <div
        id="title"
        className="flex max-w-5xl flex-col pt-8 align-bottom text-2xl md:pt-16"
      >
        <span className="mb-3 text-2xl font-bold text-primary md:text-3xl">
          Hey there, I'm-
        </span>
        <span className="text-contrast text-7xl font-bold leading-[1] md:text-[10rem]">
          Eric Hubert.
        </span>
        <span className="mt-8 text-4xl md:pt-0 md:text-5xl">
          Also known as <span className="text-contrast font-bold">Lyenx.</span>
        </span>

        <p className="mt-16 gap-2 text-2xl md:mt-24 md:text-3xl">
          <span className="text-contrast font-bold">
            Full-stack developer,{" "}
          </span>
          <span className="">
            student, musician, gamer, and all sorts of things.
          </span>
        </p>
        <div className="mt-16 flex gap-2">
          {socialItems.map(({ href, label, icon }: SocialItem) => (
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="md:h-12 md:text-lg"
              key={href}
            >
              <a href={href}>
                <Icon
                  icon={icon}
                  className="text-base text-primary md:text-2xl"
                />
                {label}
              </a>
            </Button>
          ))}
        </div>
        <HomePageSection title="About me">
          <p className="text-lg">
            I'm an 18 years old Full-stack web developer based near Paris.
          </p>
          <p className="text-lg">
            I love coding, and computer-related things in general. I've been
            coding since 2016, first by simply editing HTML files in Notepad,
            then learning Scratch. More recently, I've been learning a few
            different technologies, playing some CTFs and having fun with my
            friends!
          </p>
          <p className="text-lg">
            I sometimes make cool things, you can learn more about them on the{" "}
            <a
              href="/projects"
              className="underline-offset-3 font-medium underline"
            >
              projects
            </a>{" "}
            page.
          </p>
          <p className="text-lg">
            I am also always open to work, feel free to{" "}
            <a
              href="/contact"
              className="underline-offset-3 font-medium underline"
            >
              send me a message
            </a>
            !
          </p>
        </HomePageSection>
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
                    <div className="flex flex-wrap items-center gap-4 text-sm ">
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
          {education.map(
            ({ name, dates, place, description }: EducationItem) => (
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
            )
          )}
        </HomePageSection>
        <HomePageSection title="Tech I use">
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
    </div>
  );
}
