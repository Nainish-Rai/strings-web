import { ThreadsUser } from "@/types/types";
import Image from "next/image";

type Props = {
  data: ThreadsUser;
};

function ProfileCard({ data }: Props) {
  return (
    <div className="w-full flex items-center my-5 rounded-3xl justify-between border  p-6">
      <div className="h-full flex flex-col">
        <h2 className=" text-6xl text-primary justify-self-start">
          {data.full_name}
        </h2>
        <h3 className="text-xs text-gray-400  my-2 ">{data.username}</h3>
        <p className="my-4 text-sm text-gray-300 max-w-2xl font-medium">
          {data.biography}
        </p>
        <p className="text-xs my-2 text-gray-400">
          {data.follower_count} followers
        </p>
      </div>
      <div>
        <Image
          src={data.hd_profile_pic_versions[0].url}
          className=" aspect-square w-64 rounded-lg"
          height={640}
          width={640}
          alt="pfp"
        />
      </div>
    </div>
  );
}

export default ProfileCard;
