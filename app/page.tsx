// page d'accueil avec présentation et liens sociaux
import { Icon } from "@iconify-icon/react";
import { socialItems, SocialItem } from "@/data/socials";
import { Button } from "@/components/ui/button";
import HomePageSection from "@/components/home-page-section";
import { Metadata } from "next";
import Link from "next/link";

// métadonnées seo
export const metadata: Metadata = {
  title: "Home - Lyenx",
  description:
    "Full-stack developer, student, and tech enthusiast based in Paris",
};

// composant principal
export default function Home() {
  return (
    <div id="header" className="flex flex-col md:flex-row">
      <div className="flex max-w-5xl flex-col pt-8 align-bottom text-2xl md:pt-16">
        <span className="mb-3 text-2xl font-bold text-primary md:text-3xl">
          Hey there, I&apos;m-
        </span>
        <span className="text-contrast text-7xl font-bold leading-[1] md:text-[10rem]">
          Eric Hubert.
        </span>
        <span className="mt-8 text-4xl md:pt-0 md:text-5xl">
          Also known as <span className="text-contrast font-bold">Lyenx.</span>
        </span>

        <p className="mt-16 mb-24 gap-2 text-2xl md:mt-24 md:text-3xl">
          <span className="text-contrast font-bold">
            Full-stack developer,{" "}
          </span>
          <span className="">
            student, musician, gamer, and all sorts of things.
          </span>
        </p>

        <HomePageSection title="About Me">
          <p className="text-lg">
            I&apos;m an 18 years old Full-stack web developer based near Paris.
          </p>
          <p className="text-lg">
            Want to know more about me? Check out my{" "}
            <Link
              href="/about"
              className="underline-offset-3 font-medium underline"
            >
              about page
            </Link>
            .
          </p>
          <p className="text-lg">
            I sometimes make cool things, you can learn more about them on the{" "}
            <Link
              href="/projects"
              className="underline-offset-3 font-medium underline"
            >
              projects
            </Link>{" "}
            page.
          </p>
          <p className="text-lg">
            I am also always open to work, feel free to{" "}
            <Link
              href="/contact"
              className="underline-offset-3 font-medium underline"
            >
              send me a message
            </Link>
            !
          </p>
        </HomePageSection>

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
      </div>
    </div>
  );
}
