"use client";
import Api from "@/lib/api";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function load() {
      const api = new Api();
      const result = api
        .login("webmaster@scoutingdonbosco.nl", "MerijnScouting^6618")
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    load();
  }, []);
  return (
    <>
      <h1>home page!</h1>
    </>
  );
}

