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

function PostCard({ data }: Props) {
  const post = data.post;
  const user = data.post.user;
  const isRepostedPost =
    data.post.text_post_app_info.share_info.reposted_post != null;
  if (isRepostedPost) {
    return (
      <div>
        <h3 className="text-sm text-gray-400 pb-4 flex items-center gap-2 pl-2">
          <svg
            aria-label="Repost"
            color="rgb(97, 97, 97)"
            fill="rgb(97, 97, 97)"
            height="16"
            role="img"
            viewBox="0 0 24 24"
            width="16"
          >
            <title>Repost</title>
            <path d="M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z"></path>
          </svg>{" "}
          {user.username} reposted
        </h3>

        <RepostedPost post={post.text_post_app_info.share_info.reposted_post} />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col max-w-lg w-full">
        <div className="flex gap-4">
          <Image
            src={user.profile_pic_url}
            className="aspect-square rounded-full w-8 h-8 "
            width={30}
            height={30}
            crossOrigin="anonymous"
            alt="o"
          />
          <Link href={`/user/${user.username}/${user.pk}`}>
            <h4 className="font-medium">{user.username}</h4>
          </Link>
        </div>
        <div className="flex w-full max-h-full">
          <div className="max-h-full ">
            {data.line_type == "squiggle" ? (
              <SwiggleLine />
            ) : (
              <div className="max-h-full h-full">
                <SimpleLine />
                {data.reply_facepile_users.length == 3 && (
                  <AvatarGroup
                    p1={data.reply_facepile_users[0].profile_pic_url}
                    p2={data.reply_facepile_users[1].profile_pic_url}
                    p3={data.reply_facepile_users[2].profile_pic_url}
                  />
                )}{" "}
              </div>
            )}
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

            <div className="mt-3 ml-6 flex max-w-full">
              {/* for image posts */}
              {post.image_versions2.candidates.length != 0 &&
                post.video_versions.length == 0 && (
                  <Image
                    src={post.image_versions2.candidates[3].url}
                    height={post.original_height}
                    width={post.original_width}
                    alt="img"
                    crossOrigin="anonymous"
                    className="w-full object-cover rounded-lg"
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
                        post.text_post_app_info.link_preview_attachment
                          .image_url
                      }
                      height={post.original_height}
                      width={post.original_width}
                      alt="img"
                      crossOrigin="anonymous"
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
            <div className=" ml-6 text-gray-950 dark:text-gray-200 mt-4 text-xs ">
              {data.view_replies_cta_string} & {post.like_count} likes{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCard;
