"use client";
import { get } from "@/components/api/backend-wrapper";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface GroupInfo {
  title: string;
  content: string;
}

export default function GroupPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [groupInfo, setGroupInfo] = useState<GroupInfo>();
  const slug = params.slug;

  useEffect(() => {
    if (!loaded) {
      get(`/groups/${slug}/info`)
        .then((info) => {
          setGroupInfo(info);
          setLoaded(true);
        })
        .catch((err) => {
          router.push("/not-found", { headers: { "not-found-message": err } });
        });
    }
  }, [loaded, slug, router]);

  return (
    <div>
      {loaded && (
        <>
          <span>{groupInfo?.title}</span>
          <p dangerouslySetInnerHTML={{ __html: groupInfo?.content || "" }} />
        </>
      )}
    </div>
  );
}
