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

export async function getUserThreads(username: string, userID: string) {
  const threadsData = await threadsAPI.getUserProfileThreads(username, userID);
  if (!threadsData) {
    throw new Error("Failed to fetch data");
  }
  return threadsData;
}
