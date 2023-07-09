import { getUserReplies } from "@/lib/api";
import ThreadCard from "./ThreadCard";

type Props = {
  userID: string;
  username: string;
};

async function RepliesFeed({ userID, username }: Props) {
  const data = await getUserReplies(username, userID);
  return (
    <div className="max-w-2xl mx-auto">
      {data.map((item, index) => {
        return <ThreadCard data={item} key={index} />;
      })}
    </div>
  );
}

export default RepliesFeed;
