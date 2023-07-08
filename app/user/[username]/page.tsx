/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import threadsAPI from "@/lib/apiclient";
import { getCompleteUserDetails } from "@/lib/api";
import { Main, MainUser, ThreadItemTypename } from "@/types/types";
import { useParams } from "next/navigation";
import Image from "next/image";
import { getData } from "@/lib/getData";
import { useEffect, useState } from "react";
type Props = {};
type useApi = {
  data: Main;
  isError: boolean;
  isLoading: boolean;
};

async function page({
  params: { username },
}: {
  params: { username: string };
}) {
  //   const { data, isLoading, isError }: useApi =
  //     getCompleteUserDetails("thevarunmayya");
  //   const user = data && data.user;

  //   if (isError) return "An error has occurred.";
  //   if (isLoading) return "Loading...";
  console.log(username);
  const data = await getData(username);
  return (
    <div>
      <div>{data && data.biography}</div>
      <div>{data && data.follower_count} follower_count</div>
      <div>
        {data && (
          <Image
            src={data.profile_pic_url}
            width={100}
            height={100}
            alt="pfp"
          />
        )}
      </div>
    </div>
  );
}

export default page;
