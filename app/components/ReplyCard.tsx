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
import QuotedPostCard from "./QuotedPostCard";
import RepostedPost from "./RepostedPost";
import AvatarGroup from "./AvatarGroup";

type Props = {
  data: ThreadItem;
};

function ReplyCard({ data }: Props) {
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
        <Link href={`/user/${user.username}/${user.pk}`}>
          <h4 className="font-medium">{user.username}</h4>
        </Link>
      </div>
      <div className="flex max-h-full">
        <div>
          <SimpleLine />
        </div>
        <div>
          <div>
            {post.caption && (
              <Link href={`/thread/${data.post.pk}`}>
                <p className="text-gray-800  dark:text-gray-200  ml-5 -mt-1 text-sm my-1">
                  {post.caption.text}
                </p>
              </Link>
            )}
          </div>

          <div className="mt-3 ml-6">
            {/* for image posts */}
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
            {/* For external links */}
            {post.text_post_app_info.link_preview_attachment && (
              <a
                href={post.text_post_app_info.link_preview_attachment.url}
                className="href"
                target="_blank"
              >
                <div className="border rounded-xl">
                  <Image
                    src={
                      post.text_post_app_info.link_preview_attachment.image_url
                    }
                    height={post.original_height}
                    width={post.original_width}
                    alt="img"
                    className="w-full rounded-lg"
                  />
                  <div className=" p-2 px-4">
                    <h5 className="text-gray-400 text-xs">
                      {
                        post.text_post_app_info.link_preview_attachment
                          .display_url
                      }
                    </h5>
                    <h4 className="text-sm">
                      {post.text_post_app_info.link_preview_attachment.title}
                    </h4>
                  </div>
                </div>
              </a>
            )}
            {/* quoted post */}
            {post.text_post_app_info.share_info &&
              post.text_post_app_info.share_info.quoted_post != undefined && (
                <QuotedPostCard
                  post={post.text_post_app_info.share_info.quoted_post}
                />
              )}
            {/* {post.video_versions.length != 0 && (
        <VideoPlayer url=""" />
      )} */}
            {/* {post.video_versions.length != 0 && (
        <VideoPlayer url=""" />
      )} */}
          </div>

          <div className="flex ml-6 mt-4 gap-5">
            <PiHeartBold size={22} />
            <PiChatCircleBold size={22} />
            <PiRepeatBold size={22} />
            <PiPaperPlaneTiltBold size={22} />
          </div>
          <div className=" ml-6 text-gray-950 dark:text-gray-400 mt-4 text-xs ">
            {post.like_count} likes{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReplyCard;
