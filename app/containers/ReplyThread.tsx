import { Thread } from "@/types/types";
import ReplyCard from "../components/ReplyCard";

type Props = {
  data: Thread;
};

function ReplyThread({ data }: Props) {
  return (
    <div className="flex gap-4 flex-col border-y py-10">
      {data.thread_items.map((item, index) => {
        return <ReplyCard data={item} key={index} />;
      })}
    </div>
  );
}

export default ReplyThread;
