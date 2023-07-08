export interface Main {
  userID: string;
  user: MainUser;
  posts: PostElement[];
  replies: Reply[];
}

export interface PostElement {
  thread_items: PostThreadItem[];
  id: string;
}

export interface PostThreadItem {
  post: PurplePost;
  line_type: LineType;
  view_replies_cta_string: string;
  reply_facepile_users: ReplyFacepileUser[];
  should_show_replies_cta: boolean;
  __typename: ThreadItemTypename;
}

export enum ThreadItemTypename {
  XDTThreadItem = "XDTThreadItem",
}

export enum LineType {
  Line = "line",
  None = "none",
  Squiggle = "squiggle",
}

export interface PurplePost {
  user: QuotedPostUser;
  image_versions2: PostImageVersions2;
  original_width: number;
  original_height: number;
  video_versions: any[];
  carousel_media: CarouselMedia[] | null;
  carousel_media_count: number | null;
  pk: string;
  has_audio: null;
  text_post_app_info: PurpleTextPostAppInfo;
  caption: Caption | null;
  taken_at: number;
  like_count: number;
  code: string;
  media_overlay_info: null;
  id: string;
}

export interface Caption {
  text: string;
}

export interface CarouselMedia {
  image_versions2: CarouselMediaImageVersions2;
  video_versions: VideoVersion[];
  has_audio: null;
  original_height: number;
  original_width: number;
  pk: string;
  id: string;
}

export interface CarouselMediaImageVersions2 {
  candidates: BioLink[];
}

export interface BioLink {
  url: string;
}

export interface VideoVersion {
  type: number;
  url: string;
  __typename: string;
}

export interface PostImageVersions2 {
  candidates: HDProfilePicVersion[];
}

export interface HDProfilePicVersion {
  height: number;
  url: string;
  width: number;
  __typename?: HDProfilePicVersionTypename;
}

export enum HDProfilePicVersionTypename {
  XDTImageCandidate = "XDTImageCandidate",
}

export interface PurpleTextPostAppInfo {
  link_preview_attachment: LinkPreviewAttachment | null;
  share_info: PurpleShareInfo;
  reply_to_author: ReplyToAuthor | null;
  is_post_unavailable: boolean;
}

export interface LinkPreviewAttachment {
  display_url: string;
  favicon_url: null;
  image_url: string;
  title: string;
  url: string;
}

export interface ReplyToAuthor {
  username: string;
  id: null;
}

export interface PurpleShareInfo {
  quoted_post: QuotedPost | null;
  reposted_post: RepostedPost | null;
}

export interface QuotedPost {
  text_post_app_info: QuotedPostTextPostAppInfo;
  user: QuotedPostUser;
  pk: string;
  media_overlay_info: null;
  code: string;
  caption: Caption;
  image_versions2: PostImageVersions2;
  original_width: number;
  original_height: number;
  video_versions: VideoVersion[];
  carousel_media: null;
  carousel_media_count: null;
  has_audio: boolean | null;
  like_count: number;
  taken_at: number;
  id: string;
}

export interface QuotedPostTextPostAppInfo {
  is_post_unavailable: boolean;
  share_info: FluffyShareInfo;
  direct_reply_count?: number;
  link_preview_attachment: null;
  reply_to_author?: null;
}

export interface FluffyShareInfo {
  quoted_post: null;
}

export interface QuotedPostUser {
  is_verified: boolean;
  username: string;
  id: null;
  profile_pic_url: string;
  pk?: string;
}

export interface RepostedPost {
  pk: string;
  user: QuotedPostUser;
  image_versions2: PostImageVersions2;
  original_width: number;
  original_height: number;
  video_versions: any[];
  carousel_media: CarouselMedia[] | null;
  carousel_media_count: number | null;
  has_audio: null;
  text_post_app_info: QuotedPostTextPostAppInfo;
  caption: Caption;
  like_count: number;
  taken_at: number;
  code: string;
  id: string;
}

export interface ReplyFacepileUser {
  __typename: ReplyFacepileUserTypename;
  id: null;
  profile_pic_url: string;
}

export enum ReplyFacepileUserTypename {
  XDTUserDict = "XDTUserDict",
}

export interface Reply {
  thread_items: ReplyThreadItem[];
  id: string;
}

export interface ReplyThreadItem {
  post: FluffyPost;
  line_type: LineType;
  view_replies_cta_string: null | string;
  reply_facepile_users: ReplyFacepileUser[];
  should_show_replies_cta: boolean;
  __typename: ThreadItemTypename;
}

export interface FluffyPost {
  user: QuotedPostUser;
  image_versions2: PostImageVersions2;
  original_width: number;
  original_height: number;
  video_versions: any[];
  carousel_media: null;
  carousel_media_count: null;
  pk: string;
  has_audio: null;
  text_post_app_info: FluffyTextPostAppInfo;
  caption: Caption;
  taken_at: number;
  like_count: number;
  code: string;
  media_overlay_info: null;
  id: string;
}

export interface FluffyTextPostAppInfo {
  link_preview_attachment: null;
  share_info: PurpleShareInfo;
  reply_to_author: ReplyToAuthor | null;
  is_post_unavailable: boolean;
}

export interface MainUser {
  is_private: boolean;
  profile_pic_url: string;
  username: string;
  hd_profile_pic_versions: HDProfilePicVersion[];
  is_verified: boolean;
  biography: string;
  biography_with_entities: null;
  follower_count: number;
  profile_context_facepile_users: null;
  bio_links: BioLink[];
  pk: string;
  full_name: string;
  id: null;
}
