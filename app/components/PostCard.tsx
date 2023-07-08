import { ThreadItem } from "@/types/types";
import {
  PiHeartBold,
  PiChatCircleBold,
  PiPaperPlaneTiltBold,
  PiRepeatBold,
} from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: ThreadItem;
};

function PostCard({ data }: Props) {
  const post = data.post;
  const user = data.post.user;
  return (
    <div className="flex flex-col max-w-lg w-full">
      <div className="flex gap-4">
        <Image
          src={user.profile_pic_url}
          className="aspect-square w-8 h-8 "
          width={30}
          height={30}
          alt="o"
        />
        <div>
          <Link href={`/user/${user.username}/${user.pk}`}>
            <h4 className="font-medium">{user.username}</h4>
          </Link>
          {post.caption && (
            <p className="text-gray-200 text-sm my-1">{post.caption.text}</p>
          )}
        </div>
      </div>
      <div className="mt-3 ml-10">
        {post.image_versions2.candidates.length != 0 && (
          <Image
            src={post.image_versions2.candidates[0].url}
            height={post.original_height}
            width={post.original_width}
            alt="img"
            className="w-full rounded-lg"
          />
        )}
      </div>
      <div className="flex ml-10 mt-4 gap-5">
        <PiHeartBold size={22} />
        <PiChatCircleBold size={22} />
        <PiRepeatBold size={22} />
        <PiPaperPlaneTiltBold size={22} />
      </div>
    </div>
  );
}

export default PostCard;