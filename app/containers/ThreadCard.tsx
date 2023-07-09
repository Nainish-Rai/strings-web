import { Thread } from "@/types/types";
import PostCard from "../components/PostCard";

type Props = {
  data: Thread;
};

function ThreadCard({ data }: Props) {
  return (
    <div className="flex gap-4 px-2 md:px-0 flex-col w-full border-y py-10">
      {data.thread_items.map((item, index) => {
        return <PostCard data={item} key={index} />;
      })}
    </div>
  );
}

export default ThreadCard;
