"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {};

function SearchBar({}: Props) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchTerm && router.push(`/user/${searchTerm}/a`);
        }}
        className="w-full max-w-2xl py-16 flex-col p-12  flex gap-8 border rounded-lg "
      >
        <h3 className="text-xl text-center">Enter Your Username</h3>
        <Input
          type="text"
          placeholder="Username"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
        />

        <Button type="submit" className="w-full">
          Get Profile
        </Button>
      </form>
    </div>
  );
}

export default SearchBar;
