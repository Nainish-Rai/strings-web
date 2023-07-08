import { Thread } from "@/types/types";
import PostCard from "../components/PostCard";

type Props = {
  data: Thread;
};

function ThreadCard({ data }: Props) {
  return (
    <div className="my-16">
      {data.thread_items.map((item, index) => {
        return <PostCard data={item} key={index} />;
      })}
    </div>
  );
}

export default ThreadCard;
