import { getUserThreads } from "@/lib/api";
import ThreadCard from "./ThreadCard";

type Props = {
  userID: string;
  username: string;
};

async function ThreadsFeed({ userID, username }: Props) {
  const data = await getUserThreads(username, userID);
  return (
    <div>
      {data.map((item, index) => {
        return <ThreadCard data={item} key={index} />;
      })}
    </div>
  );
}

export default ThreadsFeed;
