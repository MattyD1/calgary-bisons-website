"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronUp, Dumbbell, Menu, Sword, X } from "lucide-react"

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

interface IMobileNavProps {
  white?: boolean
}

const MobileNav = ({ white }: IMobileNavProps) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div
      className={tw(
        "z-50 w-full gap-6 text-background",
        "xl:hidden",
        white
          ? "absolute bg-transparent text-foreground"
          : "absolute bg-transparent text-background",
        showMobileMenu
          ? "bg-secondary text-secondary-foreground"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between px-8 py-4 md:py-2">
        <div className="flex items-center gap-1">
          <div className="relative flex h-12 w-12 items-center justify-center md:h-20 md:w-20">
            <Image
              src="/logo.svg"
              alt="logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div>
            <h1 className="text-xs font-bold md:text-sm">THE CALGARY</h1>
            <h2 className="font-serif text-2xl font-bold md:text-3xl">
              BISONS
            </h2>
          </div>
        </div>

        <button
          className="flex flex-col gap-[6px]"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {showMobileMenu && (
        <nav className="absolute flex w-full flex-col bg-secondary px-8 py-4 ">
          <div>
            <MobileNavItem title="Programs">
              <ul className="one m-0 grid list-none gap-x-[10px] pb-8 pt-2 sm:grid-cols-[0.6fr_1fr]  md:w-[700px]">
                <li className="row-span-5 mb-6 grid sm:mb-0">
                  <div>
                    <a
                      className="focus:shadow-violet7 flex h-full w-full
                    select-none flex-col justify-end rounded-[6px] bg-gradient-to-b from-muted/30 to-muted/10 p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                      href="/"
                    >
                      <Dumbbell size={32} />
                      <div className="mb-[7px] mt-4 text-[18px] font-medium leading-[1.2] text-white">
                        Off Season Training
                      </div>
                      <p className="text-mauve4 text-[14px] leading-[1.3]">
                        Personal coaching in strength and conditioning, hitting,
                        pitching, and fielding.
                      </p>
                    </a>
                  </div>
                </li>
                <h1 className="text-sm font-semibold text-muted-foreground sm:px-3">
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
            </MobileNavItem>
            <Divider />
            <MobileNavItem title="About Us">
              <ul className="m-0 -ml-3 grid list-none gap-x-[10px] pb-8 pt-2 sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
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
            </MobileNavItem>
            <Divider />
            <MobileNavItem title="Rosters">
              <ul className="m-0 -ml-3 grid list-none grid-cols-2 gap-x-[10px] gap-y-[15px] pb-8 pt-2 sm:grid-flow-col md:grid-cols-4">
                <li>
                  <h1 className="px-3 text-sm font-semibold text-muted-foreground">
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
                  <h1 className="px-3 text-sm font-semibold text-muted-foreground">
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
                  <h1 className="px-3 text-sm font-semibold text-muted-foreground">
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
                  <h1 className="px-3 text-sm font-semibold text-muted-foreground">
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
            </MobileNavItem>
            <Divider />
            <MobileNavItem title="Gallery" />
            <Divider />
            <MobileNavItem title="News" />
            <Divider />
            <MobileNavItem title="Contact Us" />
            <Divider />
          </div>
          <div className="flex justify-between gap-8 py-8 md:justify-end">
            <Link
              href="#"
              className={tw(
                buttonVariants({ hierarchy: "basic", size: "default" }),
                "-ml-6 text-lg"
              )}
            >
              Game Schedule
            </Link>
            <Link
              href="#"
              className={tw(
                buttonVariants({ hierarchy: "default", size: "default" })
              )}
            >
              Register!
            </Link>
          </div>
        </nav>
      )}
    </div>
  )
}

const MobileNavItem = ({ ...props }) => {
  const [isOpened, setIsOpened] = React.useState<boolean>(false)

  return (
    <div>
      <button
        className={tw(
          "flex w-full items-center  justify-between py-4 font-serif tracking-wider",
          "text-2xl sm:text-3xl"
        )}
        onClick={() => setIsOpened(!isOpened)}
      >
        {props.title}

        {props.children && (
          <>{isOpened ? <ChevronUp size={28} /> : <ChevronDown size={28} />}</>
        )}
      </button>
      {props.children && (
        <div className={tw(isOpened ? "block" : "hidden")}>
          {props.children}
        </div>
      )}
    </div>
  )
}

const ListItemImage = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, children, title, ...props }, ref) => (
  <li>
    <div>
      {/* TODO: Replace with NextLink */}
      <a
        className={tw(
          " focus:shadow-violet7 flex select-none items-center gap-4 rounded-[6px] py-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-muted/10 focus:shadow-[0_0_0_2px] sm:p-3",
          className
        )}
        {...props}
        ref={ref}
      >
        <div className="item-center relative flex h-full w-10 rounded-full bg-muted/20 p-2 text-primary">
          <Sword />
        </div>
        <div>
          <div className="mb-[5px] font-medium leading-[1.2] text-primary-foreground">
            {title}
          </div>
          <p className="text-sm leading-[1.4]  text-primary-foreground/70">
            {children}
          </p>
        </div>
      </a>
    </div>
  </li>
))
ListItemImage.displayName = NavigationMenuLink.displayName

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, children, title, ...props }, ref) => (
  <li>
    <div>
      {/* TODO: Replace with NextLink */}
      <a
        className={tw(
          "focus:shadow-violet7 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-muted/10 focus:shadow-[0_0_0_2px]",
          className
        )}
        {...props}
        ref={ref}
      >
        <div className="mb-[5px] font-medium leading-[1.2] text-primary-foreground">
          {title}
        </div>
        <p className="text-sm leading-[1.4] text-primary-foreground/70">
          {children}
        </p>
      </a>
    </div>
  </li>
))
ListItem.displayName = NavigationMenuLink.displayName

const RosterItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, children, title, ...props }, ref) => (
  <li>
    <div>
      {/* TODO: Replace with NextLink */}

      <a
        className={tw(
          "block select-none rounded-[6px] px-3 py-2 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-muted/10 focus:shadow-[0_0_0_2px]",
          className
        )}
        {...props}
        ref={ref}
      >
        <div className="mb-[5px] text-sm font-medium leading-[1.2] text-primary-foreground">
          {title}
        </div>
      </a>
    </div>
  </li>
))
RosterItem.displayName = NavigationMenuLink.displayName

const Divider = () => {
  return <div className="h-px w-full bg-muted-foreground/40"></div>
}

export default MobileNav
