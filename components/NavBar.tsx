"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  Image,
} from "@nextui-org/react";
import React from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { RiMoonLine, RiSunLine, RiRssLine } from "react-icons/ri";
import { NAV_LIST } from "@/lib/const";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const pathName = usePathname();

  return (
    <Navbar
      className="bg-transparent"
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:text-danger]",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-[20px]",
          "data-[active=true]:after:right-[20px]",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-danger",
        ],
      }}>
      <NavbarBrand className="flex-1">
        <Link href="/" className="text-default-800 dark:text-white-100">
          <svg
            width="50"
            height="52"
            viewBox="0 0 760 768"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M498 235.792C630.548 235.792 738 343.243 738 475.792C738 608.34 690.548 755.792 558 755.792C458.56 755.792 339.476 672.802 286.19 575.376C283.498 575.651 280.765 575.792 278 575.792C233.817 575.792 198 539.974 198 495.792C198 455.926 227.159 422.872 265.312 416.792C291.599 312.771 385.81 235.792 498 235.792ZM261.859 481.337L270.141 512.246Z"
              fill="white"
            />
            <path
              d="M261.859 481.337L270.141 512.246M498 235.792C630.548 235.792 738 343.243 738 475.792C738 608.34 690.548 755.792 558 755.792C458.56 755.792 339.476 672.802 286.19 575.376C283.498 575.651 280.765 575.792 278 575.792C233.817 575.792 198 539.974 198 495.792C198 455.926 227.159 422.872 265.312 416.792C291.599 312.771 385.81 235.792 498 235.792Z"
              stroke="black"
              stroke-width="24"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M603.781 452.574C621.18 494.468 628.945 523.446 627.075 539.508C625.205 555.57 613.514 560.331 592 553.791"
              stroke="black"
              stroke-width="16"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M538 625.792C551.776 631.125 565.109 633.792 578 633.792C590.891 633.792 604.224 631.125 618 625.792"
              stroke="black"
              stroke-width="16"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M536 372.792C549.255 372.792 560 383.537 560 396.792C560 410.046 549.255 420.792 536 420.792C522.745 420.792 512 410.046 512 396.792C512 383.537 522.745 372.792 536 372.792ZM674 372.792C687.255 372.792 698 383.537 698 396.792C698 410.046 687.255 420.792 674 420.792C660.745 420.792 650 410.046 650 396.792C650 383.537 660.745 372.792 674 372.792Z"
              fill="black"
            />
            <path
              d="M512 372.792C520 368.125 528 365.792 536 365.792C544 365.792 552 368.125 560 372.792"
              stroke="black"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M650 372.792C658 368.125 666 365.792 674 365.792C682 365.792 690 368.125 698 372.792"
              stroke="black"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M628.391 339.126C631.391 334.126 688.391 316.126 708.391 319.126C728.391 322.126 757.391 348.126 757.391 348.126C757.391 348.126 730.391 337.126 705.391 337.126C680.391 337.126 645.391 355.126 645.391 355.126C645.391 355.126 625.391 344.126 628.391 339.126Z"
              fill="black"
              stroke="black"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M581 339.126C578 334.126 521 316.126 501 319.126C481 322.126 452 348.126 452 348.126C452 348.126 479 337.126 504 337.126C529 337.126 564 355.126 564 355.126C564 355.126 584 344.126 581 339.126Z"
              fill="black"
              stroke="black"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M193 7.79131C257 -0.208693 310.152 18.2783 334.024 69.4811C376.239 51.2385 425.304 42.7913 481 42.7913C595.126 42.7913 669.748 93.3862 713 160.791C745.084 210.791 758.084 277.458 752 360.791L748.341 359.953C688.927 346.272 665 340.791 627 316.791C601.667 300.791 568.333 276.458 527 243.791C490.333 293.791 461.333 326.791 440 342.791C408 366.791 323 403.791 270 421.791C217 439.791 198 454.791 198 504.791C198 538.125 224.667 561.791 278 575.791C291.996 602.824 306.996 626.158 323 645.791C339.004 665.425 359.004 682.425 383 696.791C301.667 712.125 228.333 712.125 163 696.791C97.6667 681.458 45.3333 647.791 6 595.791C60.6667 591.791 93.6667 567.125 105 521.791C135.469 399.915 59 375.791 59 235.791C59 95.7913 113.7 17.7038 193 7.79131Z"
              fill="black"
              stroke="black"
              stroke-width="12"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M260 551.792V599.792"
              stroke="black"
              stroke-width="12"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M260 673.792C273.255 673.792 284 663.046 284 649.792C284 640.955 276 622.955 260 595.792C244 622.955 236 640.955 236 649.792C236 663.046 246.745 673.792 260 673.792Z"
              fill="white"
              stroke="black"
              stroke-width="12"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </NavbarBrand>
      <NavbarContent
        className="hidden md:flex h-fit rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
        justify="center">
        <div className="flex bg-transparent px-3 text-sm font-medium">
          {NAV_LIST.map((item) => (
            <NavbarItem key={item.name} isActive={item.href === pathName}>
              <Link
                color="foreground"
                className={`relative font-normal block whitespace-nowrap px-3 py-2 text-zinc-600 dark:text-zinc-200 transition !hover:text-danger ${
                  item.href === pathName ? "text-danger font-semibold" : ""
                }`}
                href={item.href}>
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>
      <NavbarContent justify="end">
        <Link
          href="/feed.xml"
          color="foreground"
          className="h-10 w-10 flex justify-center rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 text-sm shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition duration-300 dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 ">
          <RiRssLine />
        </Link>
        <button
          className="h-10 w-10 flex justify-center items-center rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 text-sm shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition duration-300 dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 "
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }>
          {theme === "light" ? <RiMoonLine /> : <RiSunLine />}
        </button>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarMenu className="sm:hidden">
        {NAV_LIST.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            isActive={item.href === pathName}>
            <Link
              className={`w-full ${
                item.href === pathName
                  ? "text-danger"
                  : "text-default-foreground"
              }`}
              href={item.href}
              size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
