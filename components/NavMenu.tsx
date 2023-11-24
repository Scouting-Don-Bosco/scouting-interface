"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import Link from "next/link";

export const NavMenu = () => {
  return (
    <div className="flex items-start align-bottom">
      <div className="w-20 h-20">
        <Image
          src={logo}
          alt="Scouting Don Bosco Logo"
          className="object-fit"
        ></Image>
      </div>
      <NavigationMenu className="ms-8 my-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item one</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Link href="/groups/welpen" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Welpen
                </NavigationMenuLink>
              </Link>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
