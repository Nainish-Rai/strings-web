import { ThreadItem } from "@/types/types";
import {
  PiHeartBold,
  PiChatCircleBold,
  PiPaperPlaneTiltBold,
  PiRepeatBold,
} from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import SwiggleLine from "./SwiggleLine";
import SimpleLine from "./SimpleLine";

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
          className="aspect-square rounded-full w-8 h-8 "
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
      <div className="flex">
        <div className="h-full relative">
          {data.line_type == "squiggle" ? <SwiggleLine /> : <SimpleLine />}
        </div>
        <div>
          <div className="mt-3 ml-10">
            {post.image_versions2.candidates.length != 0 &&
              post.video_versions.length == 0 && (
                <Image
                  src={post.image_versions2.candidates[3].url}
                  height={post.original_height}
                  width={post.original_width}
                  alt="img"
                  className="w-full rounded-lg"
                />
              )}
            {post.text_post_app_info.link_preview_attachment && (
              <a
                href={post.text_post_app_info.link_preview_attachment.url}
                className="href"
                target="_blank"
              >
                <Image
                  src={
                    post.text_post_app_info.link_preview_attachment.image_url
                  }
                  height={post.original_height}
                  width={post.original_width}
                  alt="img"
                  className="w-full rounded-lg"
                />
              </a>
            )}
            {/* {post.video_versions.length != 0 && (
          <VideoPlayer url=""" />
        )} */}
            {/* {post.video_versions.length != 0 && (
          <VideoPlayer url=""" />
        )} */}
          </div>
          <div className="flex ml-10 mt-4 gap-5">
            <PiHeartBold size={22} />
            <PiChatCircleBold size={22} />
            <PiRepeatBold size={22} />
            <PiPaperPlaneTiltBold size={22} />
          </div>
          <div className=" ml-10 text-gray-200 mt-4 text-xs ">
            {data.view_replies_cta_string} & {post.like_count} likes{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
