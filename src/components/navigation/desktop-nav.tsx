"use client"

import React from "react"
import Image from "next/image"
import { useSelectedLayoutSegment } from "next/navigation"
import { Dumbbell, Sword } from "lucide-react"

import { tw } from "@/libs/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/common/navigation-menu"

import { buttonVariants } from "../common/button"

interface IDesktopNavProps {
  white?: boolean
}

// TODO: Clean this up it is a bit messy
export const DesktopNav = ({ white }: IDesktopNavProps) => {
  const segment = useSelectedLayoutSegment()

  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, children, title, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        {/* TODO: Replace with NextLink */}
        <a
          className={tw(
            "focus:shadow-violet7 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors focus:shadow-[0_0_0_2px]",
            white ? "hover:bg-muted/50" : "hover:bg-muted/10",
            className
          )}
          {...props}
          ref={ref}
        >
          <div
            className={tw(
              "mb-[5px] font-medium leading-[1.2]",
              white ? "text-foreground" : "text-primary-foreground"
            )}
          >
            {title}
          </div>
          <p
            className={tw(
              "text-sm leading-[1.4]",
              white ? "text-foreground/70" : "text-primary-foreground/70"
            )}
          >
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  ))
  ListItem.displayName = NavigationMenuLink.displayName

  const ListItemImage = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, children, title, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        {/* TODO: Replace with NextLink */}
        <a
          className={tw(
            "focus:shadow-violet7 flex select-none items-center gap-4 rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors focus:shadow-[0_0_0_2px]",
            white ? "hover:bg-muted/50" : "hover:bg-muted/10",
            className
          )}
          {...props}
          ref={ref}
        >
          <div
            className={tw(
              "item-center relative flex h-full w-10 rounded-full  p-2",
              white
                ? "bg-muted text-muted-foreground"
                : "bg-muted/20 text-primary"
            )}
          >
            <Sword />
          </div>
          <div>
            <div
              className={tw(
                "mb-[5px] font-medium leading-[1.2]",
                white ? "text-foreground" : "text-secondary-foreground"
              )}
            >
              {title}
            </div>
            <p
              className={tw(
                "text-sm leading-[1.4]",
                white ? "text-foreground/70" : "text-primary-foreground/70"
              )}
            >
              {children}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  ))
  ListItemImage.displayName = NavigationMenuLink.displayName

  const RosterItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, children, title, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        {/* TODO: Replace with NextLink */}

        <a
          className={tw(
            "block select-none rounded-[6px] px-3 py-2 text-[15px] leading-none no-underline outline-none transition-colors focus:shadow-[0_0_0_2px]",
            white ? "hover:bg-muted/50" : "hover:bg-muted/10",
            className
          )}
          {...props}
          ref={ref}
        >
          <div
            className={tw(
              "mb-[5px] text-sm font-medium leading-[1.2]",
              white ? "text-foreground" : "text-secondary-foreground"
            )}
          >
            {title}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  ))
  RosterItem.displayName = NavigationMenuLink.displayName

  return (
    <NavigationMenu
      delayDuration={100}
      className={tw(
        "z-50 w-full gap-6",
        "hidden xl:block",
        white
          ? "absolute bg-background text-foreground"
          : "absolute bg-transparent text-background"
      )}
    >
      <NavigationMenuList className="relative flex w-full items-center px-8 py-2">
        {/* XXX:Logo */}
        <NavigationMenuItem className="mr-10">
          <NavigationMenuLink
            className="flex items-center justify-center gap-1"
            href="/"
          >
            <div className=" relative flex h-20 w-20 items-center justify-center">
              <Image
                src="/logo.svg"
                alt="logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div>
              <h1 className="text-sm font-bold">THE CALGARY</h1>
              <h2 className="font-serif text-4xl font-bold">BISONS</h2>
            </div>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <div className="relative flex w-full items-center">
          {/* XXX:Programs */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[700px]  sm:grid-cols-[0.6fr_1fr]">
                <li className="row-span-5 grid">
                  <NavigationMenuLink asChild>
                    <a
                      className={tw(
                        "focus:shadow-violet7 flex h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]",
                        white
                          ? "from-muted/90 to-muted/50"
                          : "from-muted/30 to-muted/10"
                      )}
                      href="/"
                    >
                      <Dumbbell size={32} />
                      <div
                        className={tw(
                          "mb-[7px] mt-4 text-[18px] font-medium leading-[1.2]",
                          white ? "text-foregound" : "text-secondary-foreground"
                        )}
                      >
                        Off Season Training
                      </div>
                      <p className="text-mauve4 text-[14px] leading-[1.3]">
                        Personal coaching in strength and conditioning, hitting,
                        pitching, and fielding.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <h1 className="px-3 text-sm font-semibold text-muted-foreground">
                  Summer Programs
                </h1>
                <ListItemImage
                  href="https://stitches.dev/"
                  title="18U Programs"
                >
                  The highest level of instruction and playing opportunities
                  within Baseball Alberta
                </ListItemImage>
                <ListItemImage href="/colors" title="15U Programs">
                  The highest level of instruction and playing opportunities
                  within Baseball Alberta
                </ListItemImage>
                <ListItemImage
                  href="https://icons.radix-ui.com/"
                  title="13U Programs"
                >
                  The highest level of instruction and playing opportunities
                  within Baseball Alberta
                </ListItemImage>
                <ListItemImage
                  href="https://icons.radix-ui.com/"
                  title="11U Programs"
                >
                  The highest level of instruction and playing opportunities
                  within Baseball Alberta
                </ListItemImage>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* XXX:About Us */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
                <ListItem
                  title="Who Are We?"
                  href="/docs/primitives/overview/introduction"
                >
                  The perfect place to start if you have any questions.
                </ListItem>
                <ListItem
                  title="Coaching Staff"
                  href="/docs/primitives/overview/getting-started"
                >
                  A detailed list of our coaches, their teams, and achievements.
                </ListItem>
                <ListItem
                  title="Our Facilities"
                  href="/docs/primitives/guides/styling"
                >
                  A complete guide to our facilites including their location and
                  use.
                </ListItem>
                <ListItem
                  title="Frequently Asked Questions"
                  href="/docs/primitives/guides/animation"
                >
                  A one stop shop for all your buring questions.
                </ListItem>
                <ListItem
                  title="Alumni"
                  href="/docs/primitives/overview/accessibility"
                >
                  A comprehensive list of all our alumni since 2008.
                </ListItem>
                <ListItem
                  title="Jim Lawson"
                  href="/docs/primitives/overview/releases"
                >
                  A memoriam dedicated to our late founder — Jim Lawson
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* XXX:Rosters */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Rosters</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="m-0 grid list-none gap-x-[10px] gap-y-[15px] p-[22px] sm:w-[700px] sm:grid-flow-col sm:grid-rows-1">
                <li>
                  <h1 className="mb-3 px-3 text-sm font-semibold text-muted-foreground">
                    18U Rosters
                  </h1>
                  <ul>
                    <RosterItem
                      title="Tier 1 AAA Orange"
                      href="/docs/primitives/overview/introduction"
                    />
                    <RosterItem
                      title="Tier 2 AAA Blue"
                      href="/docs/primitives/overview/introduction"
                    />
                    <RosterItem
                      title="AA Black"
                      href="/docs/primitives/overview/introduction"
                    />
                  </ul>
                </li>
                <li>
                  <h1 className="mb-3 px-3 text-sm font-semibold text-muted-foreground">
                    15U Rosters
                  </h1>
                  <ul>
                    <RosterItem
                      title="Tier 1 AAA Orange"
                      href="/docs/primitives/overview/introduction"
                    />
                    <RosterItem
                      title="Tier 2 AAA Blue"
                      href="/docs/primitives/overview/introduction"
                    />
                    <RosterItem
                      title="AA Black"
                      href="/docs/primitives/overview/introduction"
                    />
                  </ul>
                </li>
                <li>
                  <h1 className="mb-3 px-3 text-sm font-semibold text-muted-foreground">
                    13U Rosters
                  </h1>
                  <ul>
                    <RosterItem
                      title="Tier 1 AAA Orange"
                      href="/docs/primitives/overview/introduction"
                    />
                    <RosterItem
                      title="Tier 1 AA Blue"
                      href="/docs/primitives/overview/introduction"
                    />
                  </ul>
                </li>
                <li>
                  <h1 className="mb-3 px-3 text-sm font-semibold text-muted-foreground">
                    11U Rosters
                  </h1>
                  <ul>
                    <RosterItem
                      title="AA Black"
                      href="/docs/primitives/overview/introduction"
                    />
                  </ul>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* XXX:Gallery */}
          <NavigationMenuItem>
            <NavigationMenuLink
              className={tw(
                navigationMenuTriggerStyle(),
                "highlight cursor-pointer"
              )}
            >
              Gallery
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* XXX:News */}
          <NavigationMenuItem>
            <NavigationMenuLink
              className={tw(
                navigationMenuTriggerStyle(),
                "highlight cursor-pointer"
              )}
            >
              News
            </NavigationMenuLink>
          </NavigationMenuItem>
        </div>

        <div className="relative flex w-full items-center justify-end justify-self-end">
          {/* XXX:Gallery */}
          <NavigationMenuItem>
            <NavigationMenuLink
              className={tw(
                navigationMenuTriggerStyle(),
                "highlight cursor-pointer"
              )}
              href="/schedule"
            >
              Schedule
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* XXX:News */}
          <NavigationMenuItem>
            <NavigationMenuLink
              className={tw(
                navigationMenuTriggerStyle(),
                "highlight cursor-pointer"
              )}
            >
              Contact Us
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* XXX:News */}
          <NavigationMenuItem>
            <NavigationMenuLink
              className={tw(
                buttonVariants({ hierarchy: "default", size: "default" }),
                "ml-px"
              )}
            >
              Register
            </NavigationMenuLink>
          </NavigationMenuItem>
        </div>
        {/* <NavigationMenuIndicator /> */}
      </NavigationMenuList>

      <NavigationMenuViewport
        className={tw(
          "data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn",
          white
            ? "bg-background text-foreground shadow"
            : "bg-secondary text-secondary-foreground"
        )}
      />
    </NavigationMenu>
  )
}
