"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import Link from "next/link";
import { isAuthorized } from "@/lib/utils";
import { useEffect, useState } from "react";
import LoginNav from "./login.nav";

export const NavMenu = () => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    isAuthorized().then((res) => setIsAuth(res));
  });

  function onNavChange() {
    setTimeout(() => {
      const triggers = document.querySelectorAll(
        '.submenu-trigger[data-state="open"]'
      );
      if (triggers.length === 0) return;

      const firstTrigger = triggers[0] as HTMLElement;
      const viewports = document.getElementsByClassName("submenu-viewport");

      if (viewports.length > 0) {
        const viewport = viewports[0] as HTMLElement;
        viewport.style.left = `${firstTrigger.offsetLeft}px`;
      }
    });
  }
  return (
    <div className="flex mb-3 pt-3">
      <div className="flex items-start align-bottom pl-5 w-full">
        <div className="w-20 h-20">
          <a href="/">
            <Image
              src={logo}
              alt="Scouting Don Bosco Logo"
              className="object-fit"
            />
          </a>
        </div>
        <NavigationMenu className="ms-8 my-auto" onValueChange={onNavChange}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Groepen</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link href="/groepen/welpen" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Welpen
                  </NavigationMenuLink>
                </Link>
                <Link href="/groepen/kabouters" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Kabouters
                  </NavigationMenuLink>
                </Link>
                <Link href="/groepen/gidsen" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Gidsen
                  </NavigationMenuLink>
                </Link>
                <Link href="/groepen/verkenners" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Verkenners
                  </NavigationMenuLink>
                </Link>
                <Link href="/groepen/rowans" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Rowans
                  </NavigationMenuLink>
                </Link>
                <Link href="/groepen/sherpas" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Sherpa's
                  </NavigationMenuLink>
                </Link>
                <Link href="/groepen/pivos" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Stam
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Over ons</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link href="/over-ons/vereniging" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Vereniging
                  </NavigationMenuLink>
                </Link>
                <Link href="/over-ons/bestuur" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Bestuur
                  </NavigationMenuLink>
                </Link>
                <Link href="/over-ons/leiding" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Leiding
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex flex-row-reverse items-end align-bottom pr-5 w-full">
        <LoginNav isAuth={isAuth} className="ms-8 my-auto" />
      </div>
    </div>
  );
};
