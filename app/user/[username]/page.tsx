import { getUserData } from "@/lib/api";
import { Suspense } from "react";
import ThreadsFeed from "@/app/containers/ThreadsFeed";
import ProfileCard from "@/app/containers/ProfileCard";

async function page({
  params: { username },
}: {
  params: { username: string };
}) {
  const data = await getUserData(username);

  return (
    <div className="w-full ">
      <div className="w-full max-w-7xl mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          {data && <ProfileCard data={data} />}
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          {data && <ThreadsFeed userID={data?.pk} username={username} />}
        </Suspense>
      </div>
    </div>
  );
}

export default page;
