import { ThreadsAPI } from "threads-api";
import { NextResponse } from "next/server";
export const GET = async (req: Request) => {
  const threadsAPI = new ThreadsAPI();
  const username = req.url.slice(req.url.lastIndexOf("/") + 1);

  try {
    const userID = await threadsAPI.getUserIDfromUsername(username);
    if (!userID) {
      return;
    }
    const user = await threadsAPI.getUserProfile(username, userID);
    const posts = await threadsAPI.getUserProfileThreads(username, userID);
    const replies = await threadsAPI.getUserProfileReplies(username, userID);

    return NextResponse.json({ userID, user, posts, replies });
  } catch (error) {
    return NextResponse.error();
  }
};
