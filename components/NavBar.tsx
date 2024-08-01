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

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About",
    href: "/profile",
  },
];

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
          <Image src="/avatar.svg" alt="juicy" width={50}></Image>
        </Link>
      </NavbarBrand>
      <NavbarContent
        className="rounded-full py-1 h-auto bg-gradient-to-b from-zinc-50/70 to-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md dark:from-zinc-900/70 dark:to-zinc-800/90 dark:ring-zinc-100/10 [--spotlight-color:rgb(236_252_203_/_0.6)] dark:[--spotlight-color:rgb(217_249_157_/_0.07)] pointer-events-auto relative z-50 hidden md:block"
        justify="center">
        <div className="flex bg-transparent px-3 text-sm font-medium text-zinc-800 dark:text-zinc-200">
          {menuItems.map((item) => (
            <NavbarItem key={item.name} isActive={item.href === pathName}>
              <Link
                color="danger"
                className={`relative block whitespace-nowrap px-3 py-2 transition ${
                  item.href === pathName
                    ? "font-bold"
                    : "text-default-foreground"
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
        {menuItems.map((item, index) => (
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
