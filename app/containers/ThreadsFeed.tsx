import { getUserThreads } from "@/lib/api";
import { PostElement } from "@/types/types";

type Props = {
  userID: string;
  username: string;
};

async function ThreadsFeed({ userID, username }: Props) {
  const data = await getUserThreads(username, userID);
  return <div></div>;
}

export default ThreadsFeed;
