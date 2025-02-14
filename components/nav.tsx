import { navItems } from "@/data/nav";
import { socialItems } from "@/data/socials";
import { Icon } from "@iconify-icon/react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="relative">
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-lg">
        <div className="container flex h-20 items-center justify-between px-4">
          <Link href="/" aria-label="Home">
            <div className="flex h-10 items-center gap-1 text-3xl font-bold">
              &lt;
              <span className="text-4xl text-primary">Lyenx</span>
              /&gt;
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-3">
              {navItems.map(({ href, label }) => (
                <NavigationMenuItem key={href}>
                  <Button
                    variant="ghost"
                    asChild
                    className="text-xl font-medium transition-colors duration-200 hover:text-primary"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                </NavigationMenuItem>
              ))}
              {socialItems.map(({ href, label, icon }) => (
                <NavigationMenuItem key={href}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-2xl transition-colors duration-200 hover:text-primary"
                          asChild
                        >
                          <a
                            href={href}
                            aria-label={label}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon icon={icon} />
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent
                        side="bottom"
                        align="center"
                        className="bg-primary text-primary-foreground text-base"
                      >
                        <p>{label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-xl">
                <Icon icon="carbon:menu" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[360px]">
              <nav className="flex flex-col gap-6 pt-6">
                {navItems.map(({ href, label }) => (
                  <Button
                    key={href}
                    variant="ghost"
                    asChild
                    className="justify-start text-lg transition-colors duration-200 hover:text-primary"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
                <Separator />
                <div className="flex gap-2">
                  {socialItems.map(({ href, label, icon }) => (
                    <TooltipProvider key={href}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-2xl transition-colors duration-200 hover:text-primary"
                            asChild
                          >
                            <a
                              href={href}
                              aria-label={label}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Icon icon={icon} />
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" align="center">
                          <p>{label}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      <Separator className="mb-6" />
    </div>
  );
}
