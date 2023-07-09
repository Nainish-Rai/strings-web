import { getUserData, getUserDataWithID } from "@/lib/api";
import { Suspense } from "react";
import ThreadsFeed from "@/app/containers/ThreadsFeed";
import ProfileCard from "@/app/containers/ProfileCard";
import RepliesFeed from "@/app/containers/RepliesFeed";
import { ThreadsUser } from "@/types/types";
import Loader from "@/app/components/Loader";

async function page({
  params: { username, userID },
}: {
  params: { username: string; userID: string };
}) {
  let data: ThreadsUser | undefined;
  if (userID != "a") {
    data = await getUserDataWithID(username, userID);
    console.log("from id");
  } else {
    data = await getUserData(username);
  }
  if (data)
    return (
      <div className="w-full ">
        <div className="w-full max-w-7xl mx-auto">
          <Suspense fallback={<Loader />}>
            {data && <ProfileCard data={data} />}
          </Suspense>
          <Suspense fallback={<Loader />}>
            {data && <ThreadsFeed userID={data?.pk} username={username} />}
          </Suspense>
          <Suspense fallback={<Loader />}>
            {data && <RepliesFeed userID={data?.pk} username={username} />}
          </Suspense>
        </div>
      </div>
    );
  else {
    return <div>User does not exist</div>;
  }
}

export default page;
