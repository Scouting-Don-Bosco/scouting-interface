"use client";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();
  useEffect(() => {
    Cookies.remove("sc_token");
    router.push("/");
    setTimeout(() => {}, 1000);
  }, []);
  return (
    <div>
      <span>Uitloggen...</span>
    </div>
  );
}
