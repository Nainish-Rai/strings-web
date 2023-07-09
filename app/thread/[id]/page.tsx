import { getPostDetails, getPostLikers } from "@/lib/api";
import { Suspense } from "react";
import PostHero from "@/app/containers/PostHero";
import Loader from "@/app/components/Loader";
import ThreadRepliesFeed from "@/app/containers/ThreadRepliesFeed";

async function page({ params: { id } }: { params: { id: string } }) {
  const postData = await getPostDetails(id);
  const likesData = await getPostLikers(id);
  return (
    <div className="w-full ">
      <div className="w-full max-w-7xl mx-auto">
        <Suspense fallback={<Loader />}>
          <PostHero data={postData.containing_thread.thread_items[0]} />
        </Suspense>
        <Suspense fallback={<Loader />}>
          {postData.reply_threads && (
            <ThreadRepliesFeed data={postData.reply_threads} />
          )}
        </Suspense>
        <Suspense fallback={<Loader />}></Suspense>
      </div>
    </div>
  );
}

export default page;
