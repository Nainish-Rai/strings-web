import Link from "next/link";
import SearchBar from "./components/SearchBar";
import accarray from "@/lib/homeacc";

export default function Home() {
  return (
    <main className="w-full h-[80%]  flex justify-center items-center">
      <div className="lg:-ml-16">
        <SearchBar />
        <h4 className="text-2xl w-full text-center my-5">or Explore</h4>
        <div className="flex flex-wrap justify-center max-w-xl">
          {accarray.map((item, key) => {
            return (
              <Link key={key} href={`/user/${item}/a`}>
                <div className="border p-4 hover:bg-zinc-900 rounded-lg m-2">
                  {item}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
