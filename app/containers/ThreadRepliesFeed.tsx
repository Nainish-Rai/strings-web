import { Thread } from "@/types/types";
import ReplyThread from "./ReplyThread";
type Props = {
  data: Thread[];
};

function ThreadRepliesFeed({ data }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      {data.map((item, index) => {
        return <ReplyThread data={item} key={index} />;
      })}
    </div>
  );
}

export default ThreadRepliesFeed;
