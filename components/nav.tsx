import { navItems } from "@/data/nav";
import { socialItems } from "@/data/socials";
import { Icon } from "@iconify-icon/react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Nav() {
  return (
    <div>
      <nav className="sticky flex h-20 items-center pt-4 w-full">
        <a href="/" aria-label="Home">
          <div className="flex h-10 gap-1 text-3xl font-bold">
            &lt;
            <span className="text-4xl text-primary">Lyenx</span>
            /&gt;
          </div>
        </a>

        <ul className="menu menu-horizontal ml-auto hidden gap-4 p-0 md:flex">
          {navItems.map(({ href, label }: { href: string; label: string }) => (
            <li className="rounded-xl" key={href}>
              <Button variant="ghost" asChild className="text-lg font-normal">
                <a href={href}>{label}</a>
              </Button>
            </li>
          ))}
          {socialItems.map(({ href, label, icon }) => (
            <li
              className="tooltip tooltip-bottom tooltip-primary rounded-xl"
              data-tip={label}
              key={href}
            >
              <Button variant="ghost" size="icon" asChild>
                <a href={href} aria-label={label}>
                  <Icon icon={icon} className="text-3xl" />
                </a>
              </Button>
            </li>
          ))}
        </ul>
        <div className="dropdown dropdown-end ml-auto flex md:hidden">
          <Button variant="ghost" size="icon" className="m-1">
            <Icon icon="carbon:menu" className="text-3xl" />
          </Button>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow-2xl"
          >
            <ul className="menu menu-vertical">
              {navItems.map(
                ({ href, label }: { href: string; label: string }) => (
                  <li key={href}>
                    <Button
                      variant="ghost"
                      asChild
                      className="text-lg"
                      key={href}
                    >
                      <a href={href}>{label}</a>
                    </Button>
                  </li>
                )
              )}
              <ul className="menu menu-horizontal">
                {socialItems.map(({ href, label, icon }) => (
                  <li
                    className="tooltip tooltip-bottom tooltip-primary"
                    data-tip={label}
                    key={href}
                  >
                    <Button variant="ghost" size="icon" asChild>
                      <a href={href}>
                        <Icon icon={icon} className="text-3xl" />
                      </a>
                    </Button>
                  </li>
                ))}
              </ul>
            </ul>
          </ul>
        </div>
      </nav>
      <Separator className="mt-3" />
    </div>
  );
}
