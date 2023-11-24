"use client";
import { useEffect } from "react";
import { useState } from "react";

export default function GroupPage({ params }: { params: { slug: string } }) {
  const [loaded, setLoaded] = useState(false);
  const slug = params.slug;
  useEffect(() => {
    if (slug !== typeof "string" || slug !== undefined) {
      setTimeout(() => {
        setLoaded(true);
      }, 1000);
    }
  }, [loaded, slug]);

  return (
    <>
      {loaded && <div>loaded!</div>}
      {!loaded && <div>not loaded!</div>}
    </>
  );
}
