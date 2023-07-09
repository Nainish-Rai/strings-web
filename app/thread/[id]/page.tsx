import { getPostDetails, getPostLikers } from "@/lib/api";
import { Suspense } from "react";
import PostHero from "@/app/containers/PostHero";
import { PiScribbleLoopBold } from "react-icons/pi";
import ThreadRepliesFeed from "@/app/containers/ThreadRepliesFeed";

async function page({ params: { id } }: { params: { id: string } }) {
  const postData = await getPostDetails(id);
  const likesData = await getPostLikers(id);
  return (
    <div className="w-full ">
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full flex justify-center font-medium gap-2 text-2xl items-center mx-auto p-4">
          <PiScribbleLoopBold size={30} /> Pearls
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <PostHero data={postData.containing_thread.thread_items[0]} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          {postData.reply_threads && (
            <ThreadRepliesFeed data={postData.reply_threads} />
          )}
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}></Suspense>
      </div>
    </div>
  );
}

export default page;
