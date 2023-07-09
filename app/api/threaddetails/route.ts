import { ThreadsAPI } from "threads-api";
import { NextResponse } from "next/server";
export const GET = async () => {
  const threadsAPI = new ThreadsAPI();
  try {
    const post = await threadsAPI.getThreads("3142366043275361213");
    const likesData = await threadsAPI.getThreadLikers("3142366043275361213");
    return NextResponse.json({ post, likesData });
  } catch (error) {
    return NextResponse.error();
  }
};
