import threadsAPI from "./apiclient";
export async function getUserData(username: string) {
  const userID = await threadsAPI.getUserIDfromUsername(username);
  if (!userID) {
    return;
  }
  const userData = await threadsAPI.getUserProfile(username, userID);
  // Recommendation: handle errors
  if (!userData) {
    throw new Error("Failed to fetch data");
  }

  return userData;
}
export async function getUserDataWithID(username: string, userID: string) {
  const userData = await threadsAPI.getUserProfile(username, userID);
  // Recommendation: handle errors
  if (!userData) {
    throw new Error("Failed to fetch data");
  }

  return userData;
}

export async function getUserThreads(username: string, userID: string) {
  const threadsData = await threadsAPI.getUserProfileThreads(username, userID);
  if (!threadsData) {
    throw new Error("Failed to fetch data");
  }
  return threadsData;
}
export async function getUserReplies(username: string, userID: string) {
  const repliesData = await threadsAPI.getUserProfileReplies(username, userID);
  if (!repliesData) {
    throw new Error("Failed to fetch data");
  }
  return repliesData;
}

export async function getPostId(ThreadId: string) {
  const postId = await threadsAPI.getPostIDfromThreadID(ThreadId);
  if (!postId) {
    throw new Error("Failed to fetch data");
  }
  return postId;
}
export async function getPostDetailsWithoutId(threadId: string) {
  const postID = await threadsAPI.getPostIDfromThreadID("CuX_UYABrr7");
  if (!postID) {
    return;
  }
  const postData = await threadsAPI.getThreads(postID);
  if (!postData) {
    throw new Error("Failed to fetch data");
  }
  return postData;
}
export async function getPostDetails(postId: string) {
  const postData = await threadsAPI.getThreads(postId);
  if (!postData) {
    throw new Error("Failed to fetch data");
  }
  return postData;
}
export async function getPostLikers(postId: string) {
  const likesData = await threadsAPI.getThreadLikers(postId);
  if (!likesData) {
    throw new Error("Failed to fetch data");
  }
  return likesData;
}
