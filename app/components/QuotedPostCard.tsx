import { QuotedPost } from "@/types/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: QuotedPost;
};

function QuotedPostCard({ post }: Props) {
  const user = post.user;
  return (
    <div className="flex border p-4 rounded-xl flex-col max-w-xl px-8 pr-16 w-full">
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
        <div className="ml-6">
          <div>
            {post.caption && (
              <p className="text-gray-200 ml-5 -mt-1 text-sm my-1">
                {post.caption.text}
              </p>
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

            {/* {post.video_versions.length != 0 && (
      <VideoPlayer url=""" />
    )} */}
            {/* {post.video_versions.length != 0 && (
      <VideoPlayer url=""" />
    )} */}
          </div>
          <div className=" ml-6 text-gray-200 mt-4 text-xs ">
            {post.like_count} likes{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuotedPostCard;
