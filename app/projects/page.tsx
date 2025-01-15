import { posts, Post } from "@/data/posts";
import { Icon } from "@iconify-icon/react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ProjectsPage() {
  return (
    <div className="-z-10 mx-auto md:z-0">
      <div className="mb-8 pt-8">
        <h1 className="text-4xl font-extrabold">My Projects</h1>
      </div>
      <div className="grid gap-8 md:grid-cols-[repeat(2,1fr)]">
        {posts.map((entry: Post) => (
          <Card key={entry.slug} className="w-full shadow-2xl">
            <CardContent className="p-6">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold">
                  <a
                    className="font-extrabold underline underline-offset-4"
                    href={`/projects/${entry.slug}`}
                  >
                    {entry.title}
                  </a>
                </h2>
                <div className="flex min-w-[100px] gap-2">
                  {entry.github ? (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Button variant="ghost" size="sm" asChild>
                            <a
                              href={`https://github.com/${entry.github}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Icon
                                icon="carbon:logo-github"
                                className="text-xl"
                              />
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>View on GitHub</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ) : (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="cursor-not-allowed">
                          <Button variant="ghost" size="sm" disabled>
                            <Icon
                              icon="carbon:logo-github"
                              className="text-xl"
                            />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-destructive">
                          This project is closed-source
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                  {entry.demo ? (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Button variant="ghost" size="sm" asChild>
                            <a
                              href={entry.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Icon icon="carbon:link" className="text-xl" />
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Check it out!</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ) : (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="cursor-not-allowed">
                          <Button variant="ghost" size="sm" disabled>
                            <Icon icon="carbon:link" className="text-xl" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-destructive">
                          No demo available
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {entry.tags.map((tag) => (
                  <Badge
                    key={tag.name}
                    style={{
                      color: tag.color,
                      backgroundColor: tag.color + "30",
                      borderColor: tag.color + "30",
                    }}
                    className="py-1 px-2 font-semibold"
                  >
                    <Icon icon={tag.icon} className="mr-2" />
                    {tag.name}
                  </Badge>
                ))}
              </div>
              <Separator className="my-4" />
              <p>{entry.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
