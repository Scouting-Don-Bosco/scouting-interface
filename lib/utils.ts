import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Cookies from "js-cookie";
import { get } from "@/components/api/backend-wrapper";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface AllowedResponse {
  allowed: boolean;
  message?: string;
}

interface TokenVerificationResponse {
  success: boolean;
  message?: string;
}

export enum Permission {
  VIEW_MEMBERS = "VIEW_MEMBERS",
  VIEW_GROUPS = "VIEW_GROUPS",
  EDIT_MEMBERS = "EDIT_MEMBERS",
  EDIT_GROUPS = "EDIT_GROUPS",
  VIEW_USERS = "VIEW_USERS",
  EDIT_USERS = "EDIT_USERS",
  EDIT_NEWS = "EDIT_NEWS",
  CREATE_NEWS = "CREATE_NEWS",
  DELETE_NEWS = "DELETE_NEWS",
}

export async function isAuthorized(route?: string) {
  const token = Cookies.get("sc_token");
  if (!token) {
    return false;
  }

  const tokenVerification = await get("/auth/verify", token);

  if (!tokenVerification.success) {
    console.error(
      "Token verification failed with message " + tokenVerification.message
    );
    return false;
  }

  if (!route) {
    return true;
  }

  const allowedResponse: AllowedResponse = await get("/auth/allowed", token, {
    route,
  });
  return allowedResponse.allowed;
}

export async function hasPerms(perms: Permission[]) {
  const token = Cookies.get("sc_token");
  if (!token) {
    return false;
  }

  const tokenVerification = await get("/auth/verify", token);

  if (!tokenVerification.success) {
    return false;
  }

  const allowedResponse: AllowedResponse = await get("/auth/perms", token, {
    perms,
  });
  return allowedResponse.allowed;
}
