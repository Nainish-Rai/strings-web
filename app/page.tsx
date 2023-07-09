import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className="w-full h-[80%]  flex justify-center items-center">
      <div className="-ml-16">
        <SearchBar />
      </div>
    </main>
  );
}
