import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { useEffect, useState } from "react";
import { cn, isAuthorized } from "@/lib/utils";

interface LoginNavProps {
  isAuth: boolean;
  className?: string;
}

export default function LoginNav(props: LoginNavProps) {
  return (
    <NavigationMenu className={cn(props.className)}>
      <NavigationMenuList>
        {
          //check if user is authorized/authenticated using isAuthorized function
          //if user is authorized/authenticated, show logout button and dashboard button
          //if user is not authorized/authenticated, show login button
          props.isAuth ? (
            <>
              <NavigationMenuItem>
                <Link href="/dashboard" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Dashboard
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/auth/logout" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Uitloggen
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </>
          ) : (
            <NavigationMenuItem>
              <Link href="/auth/login" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Inloggen
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        }
      </NavigationMenuList>
    </NavigationMenu>
  );
}
