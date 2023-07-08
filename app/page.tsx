import Image from "next/image";
import Link from "next/link";
import { ThreadsAPI } from "threads-api";
import SearchBar from "./components/SearchBar";

// async function getData() {
//   const threadsAPI = new ThreadsAPI();
//   // const res = await fetch('https://api.example.com/...')
//   const username = "thevarunmayya";
//   const userID = "7695520761";
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
//   const user = await threadsAPI.getUserProfile(username, userID);
//   console.log(user);
//   // Recommendation: handle errors
//   if (!user) {
//     // Ths will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return user;
// }

export default function Home() {
  return (
    <main>
      <Link href="/user/thevarunmayya">view profile</Link>
      <SearchBar />
    </main>
  );
}
