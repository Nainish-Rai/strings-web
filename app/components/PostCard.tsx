import { ThreadItem } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: ThreadItem;
};

function PostCard({ data }: Props) {
  const post = data.post;
  const user = data.post.user;
  return (
    <div className="flex">
      <div>
        <Image src={user.profile_pic_url} width={30} height={30} alt="o" />
        <Link href={`/user/${user.pk}`}>
          <h4 className="">{user.username}</h4>
        </Link>
      </div>
      <div></div>
    </div>
  );
}

export default PostCard;
