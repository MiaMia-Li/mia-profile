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
} from "@nextui-org/react";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

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
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
      <NavbarBrand className="flex-1">
        <Link href="/" className="text-default-800 dark:text-white-100">
          <Image src="avatar.svg" width={60} height={60} alt="juicy"></Image>
          {/* <span className="text-2xl ml-4 text-orange-500">MiaMia</span> */}
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name} isActive={item.href === pathName}>
            <Link
              color="danger"
              className={`text-xl ${
                item.href === pathName ? "font-bold" : "text-default-foreground"
              }`}
              href={item.href}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <button
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
          className="rounded transition-colors duration-300">
          {theme === "light" ? (
            <RiMoonLine className="w-6 h-6" />
          ) : (
            <RiSunLine className="w-6 h-6" />
          )}
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
