// page de projets avec filtrage par catégorie
"use client";

import { posts, Post, Tag } from "@/data/posts";
import { Icon } from "@iconify-icon/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

// liste des catégories disponibles
const categories = ["Web", "DevOps", "Miscellaneous"] as const;

export default function ProjectsPage() {
  // état pour le filtre de catégorie
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // filtrage des projets selon la catégorie
  const filteredPosts = posts.filter((post) =>
    selectedCategory ? post.category === selectedCategory : true
  );

  return (
    <div className="-z-10 mx-auto md:z-0">
      <div className="mb-8 pt-8">
        <h1 className="text-4xl font-extrabold">My Projects</h1>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "secondary"}
            className="cursor-pointer"
            onClick={() => {
              setSelectedCategory(
                selectedCategory === category ? null : category
              );
            }}
          >
            {category}
          </Badge>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-[repeat(2,1fr)]">
        {filteredPosts.map((entry: Post) => (
          <Card key={entry.slug} className="w-full shadow-2xl">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                  <a
                    className="font-extrabold underline underline-offset-4"
                    href={`/projects/${entry.slug}`}
                  >
                    {entry.title}
                  </a>
                </h2>
                <div className="flex items-center">
                  {entry.github && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={entry.github}
                            className="transition-colors hover:text-primary rounded-full p-2 hover:bg-muted"
                          >
                            <Icon icon="mdi:github" className="text-2xl" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                  {entry.demo && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={entry.demo}
                            className="transition-colors hover:text-primary rounded-full p-2 hover:bg-muted"
                          >
                            <Icon
                              icon="lucide:external-link"
                              className="text-2xl"
                            />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Demo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </div>
              <p className="mt-4 text-base">{entry.description}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Badge
                  variant="outline"
                  className="text-xs font-medium px-2"
                  style={{
                    backgroundColor: "#000",
                    borderColor: "#000",
                    color: "#fff",
                  }}
                >
                  {entry.category}
                </Badge>
                &middot;
                {entry.tags.map((tag: Tag) => (
                  <Badge
                    key={tag.name}
                    className="flex items-center gap-1.5 text-xs px-2 py-0.5"
                    style={{
                      backgroundColor: tag.color,
                      color: "#fff",
                    }}
                  >
                    <Icon icon={tag.icon} className="h-3.5 w-3.5" />
                    {tag.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
