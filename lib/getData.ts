import threadsAPI from "./apiclient";
export async function getData(username: string) {
  const userID = await threadsAPI.getUserIDfromUsername(username);
  if (!userID) {
    return;
  }
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  const user = await threadsAPI.getUserProfile(username, userID);
  // Recommendation: handle errors
  if (!user) {
    // Ths will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return user;
}
