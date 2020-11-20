import { RequestResponse } from "./request";

export type integer = number;

export type repeatable = string | string[];

export type map<T> = {
  [key: string]: T;
};

export type CommercialLength = 30 | 60 | 90 | 120 | 150 | 180;

export type AnalyticsType = "overview_v1" | "overview_v2";

export type CheermoteTierId =
  | "1"
  | "100"
  | "500"
  | "1000"
  | "5000"
  | "10k"
  | "100k";

export type CheermoteType =
  | "global_first_party"
  | "global_third_party"
  | "channel_custom"
  | "display_only"
  | "sponsored";

export type Period = "all" | "day" | "week" | "month";

export type VideoSort = "time" | "trending" | "views";

export type VideoType = "upload" | "archive" | "highlight";

export type Viewable = "private" | "public";

export type VideoTypeQuery = "all" | VideoType;

export type ExtensionType = "component" | "mobile" | "panel" | "overlay";

export type CodeStatus =
  | "SUCCESSFULLY_REDEEMED"
  | "ALREADY_CLAIMED"
  | "EXPIRED"
  | "USER_NOT_ELIGIBLE"
  | "NOT_FOUND"
  | "INACTIVE"
  | "UNUSED"
  | "INCORRECT_FORMAT"
  | "INTERNAL_ERROR";

export enum SubscriptionTier {
  "Tier 1" = "1000",
  "Tier 2" = "2000",
  "Tier 3" = "3000",
}

export type RedemptionStatus = "UNFULFILLED" | "FULFILLED" | "CANCELED";

export type RedemptionUpdateStatus = "FULFILLED" | "CANCELED";

export type RedemptionSort = "OLDEST" | "NEWEST";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface Pagination {
  cursor?: string;
}

export interface DateRange {
  started_at?: string;
  ended_at?: string;
}

export interface Response<T> extends RequestResponse<T> {
  total?: integer;
  pagination?: Pagination;
  date_range?: DateRange;
}

export interface PaginationQuery {
  after?: string;
  before?: string;
  first?: integer;
}

export interface StartCommercialBody {
  broadcaster_id: string;
  length: CommercialLength;
}

export interface Commercial {
  length: CommercialLength;
  message: string;
  retryAfter: integer;
}

export interface AnalyticsQuery extends PaginationQuery, DateRange {
  type?: AnalyticsType;
}

export interface Analytics {
  URL: string;
  date_range: DateRange;
  type: AnalyticsType;
}

export interface ExtensionAnalyticsQuery extends AnalyticsQuery {
  extension_id?: string;
}

export interface ExtensionAnalytics extends Analytics {
  extension_id: string;
}

export interface GameAnalyticsQuery extends AnalyticsQuery {
  game_id?: string;
}

export interface GameAnalytics extends Analytics {
  game_id: string;
}

export interface CheermotesQuery {
  broadcaster_id?: string;
}

export interface CheermoteImagesByState {
  animated: map<string>;
  static: map<string>;
}

export interface CheermoteImages {
  dark: CheermoteImagesByState;
  light: CheermoteImagesByState;
}

export interface CheermoteTier {
  min_bits: integer;
  id: CheermoteTierId;
  color: string;
  images: CheermoteImages;
  can_cheer: boolean;
  show_in_bits_card: boolean;
}

export interface Cheermote {
  prefix: string;
  tiers: CheermoteTier[];
  type: CheermoteType;
  order: integer;
  last_updated: string;
  is_charitable: boolean;
}

export interface BitsLeaderboardQuery extends DateRange {
  count?: integer;
  period?: Period;
  user_id?: string;
}

export interface BitsLeaderboard {
  user_id: string;
  user_name: string;
  rank: integer;
  score: integer;
}

export interface ExtensionTransactionQuery extends PaginationQuery {
  extension_id: string;
  id?: repeatable;
}

export interface ExtensionTransactionCost {
  amount: integer;
  type: "bits";
}

export interface ExtensionTransactionProduct {
  domain?: string;
  broadcast?: boolean;
  sku: string;
  cost: ExtensionTransactionCost;
  displayName: string;
  inDevelopment: boolean;
}

export interface ExtensionTransaction {
  id: string;
  timestamp: string;
  broadcaster_id: string;
  broadcaster_name: string;
  user_id: string;
  user_name: string;
  product_type: "BITS_IN_EXTENSION";
  product_data: ExtensionTransactionProduct;
}

export interface CreateCustomRewardQuery {
  broadcaster_id: string;
}

export interface CreateCustomRewardBody extends UpdateCustomRewardBody {
  title: string;
  cost: integer;
}

export interface RewardImage {
  url_1x: string;
  url_2x: string;
  url_4x: string;
}

export interface CustomReward {
  broadcaster_name: string;
  broadcaster_id: string;
  id: string;
  image: RewardImage;
  background_color: string;
  is_enabled: boolean;
  cost: integer;
  title: string;
  prompt: string;
  is_user_input_required: boolean;
  max_per_stream_setting: {
    is_enabled: boolean;
    max_per_stream: integer;
  };
  max_per_user_per_stream_setting: {
    is_enabled: boolean;
    max_per_user_per_stream: integer;
  };
  global_cooldown_setting: {
    is_enabled: boolean;
    global_cooldown_seconds: integer;
  };
  is_paused: boolean;
  is_in_stock: boolean;
  default_image: RewardImage;
  should_redemptions_skip_request_queue: boolean;
  redemptions_redeemed_current_stream?: integer;
  cooldown_expires_at?: string;
}

export interface DeleteCustomRewardQuery {
  broadcaster_id: string;
  id: string;
}

export interface GetCustomRewardsQuery {
  broadcaster_id: string;
  id?: repeatable;
  only_manageable_rewards?: boolean;
}

export interface GetCustomRewardRedemptionQuery extends PaginationQuery {
  broadcaster_id: string;
  reward_id: string;
  id?: repeatable;
  status?: RedemptionStatus;
  sort?: RedemptionSort;
}

export interface RedemptionReward {
  id: string;
  title: string;
  prompt: string;
  cost: integer;
}

export interface CustomRewardRedemption {
  broadcaster_name: string;
  broadcaster_id: string;
  id: string;
  user_id: string;
  user_name: string;
  user_input: string;
  status: string;
  redeemed_at: string;
  reward: RedemptionReward;
}

export interface UpdateCustomRewardQuery {
  broadcaster_id: string;
  id: string;
}

export interface UpdateCustomRewardBody {
  title?: string;
  prompt?: string;
  cost?: integer;
  background_color?: string;
  is_enabled?: boolean;
  is_user_input_required?: boolean;
  is_max_per_stream_enabled?: boolean;
  max_per_stream?: integer;
  is_max_per_user_per_stream_enabled?: boolean;
  max_per_user_per_stream?: integer;
  is_global_cooldown_enabled?: boolean;
  global_cooldown_seconds?: integer;
  is_paused?: boolean;
  should_redemptions_skip_request_queue?: boolean;
}

export interface UpdateCustomRewardRedemptionStatusQuery {
  broadcaster_id: string;
  reward_id: string;
  id: repeatable;
}

export interface UpdateCustomRewardRedemptionStatusBody {
  status: RedemptionUpdateStatus;
}

export interface CreateClipQuery {
  broadcaster_id: string;
  has_delay?: boolean;
}

export interface CreatedClip {
  id: string;
  edit_url: string;
}

export interface ClipQuery extends PaginationQuery, DateRange {
  broadcaster_id?: string;
  game_id?: string;
  id?: repeatable;
}

export interface Clip {
  id: string;
  url: string;
  embed_url: string;
  broadcaster_id: string;
  broadcaster_name: string;
  creator_id: string;
  creator_name: string;
  video_id: string;
  game_id: string;
  language: string;
  title: string;
  view_count: integer;
  created_at: string;
  thumbnail_url: string;
}

export interface EntitlementGrantsQuery {
  manifest_id: string;
  type: "bulk_drops_grant";
}

export interface EntitlementGrant {
  url: string;
}

export interface CodeQuery {
  code: repeatable;
  user_id: string;
}

export interface Code {
  code: string;
  status: CodeStatus;
}

export interface GameQuery {
  id?: repeatable;
  name?: repeatable;
}

export interface Game {
  id: string;
  name: string;
  box_art_url: string;
}

export interface AutoModQuery {
  broadcaster_id: string;
}

export interface AutoModData {
  msg_id: string;
  msg_text: string;
  user_id: string;
}

export interface AutoModBody {
  data: AutoModData[];
}

export interface AutoModMessage {
  msg_id: string;
  is_permitted: boolean;
}

export interface BannedUserQuery extends PaginationQuery {
  broadcaster_id: string;
  user_id?: repeatable;
}

export interface BannedUser {
  user_id: string;
  user_name: string;
  expires_at: string;
}

export interface EventQuery extends PaginationQuery {
  broadcaster_id: string;
  user_id?: repeatable;
}

export interface EventData {
  broadcaster_id: string;
  broadcaster_name: string;
  user_id: string;
  user_name: string;
}

export interface Event {
  id: string;
  event_type: string;
  event_timestamp: string;
  version: string;
  event_data: EventData;
}

export interface BanEventData extends EventData {
  expires_at: string;
}
export interface BannedEvent extends Event {
  event_data: BanEventData;
}

export interface ModeratorQuery extends PaginationQuery {
  broadcaster_id: string;
  user_id?: repeatable;
}

export interface Moderator {
  user_id: string;
  user_name: string;
}

export interface SearchQuery extends PaginationQuery {
  query: string;
}

export interface ChannelSearchQuery extends SearchQuery {
  live_only?: boolean;
}

export interface Channel {
  broadcaster_language: string;
  display_name: string;
  game_id: string;
  id: string;
  is_live: boolean;
  thumbnail_url: string;
  title: string;
  tags_ids?: string[];
  started_at?: string;
}

export interface StreamKeyQuery {
  broadcaster_id: string;
}

export interface StreamKey {
  stream_key: string;
}

export interface StreamQuery extends PaginationQuery {
  game_id?: repeatable;
  language?: repeatable;
  user_id?: repeatable;
  user_login?: repeatable;
}

export interface Stream {
  id: string;
  user_id: string;
  user_name: string;
  game_id: string;
  type: string;
  title: string;
  viewer_count: integer;
  started_at: string;
  language: string;
  thumbnail_url: string;
}

export interface OverwatchHero {
  role: string;
  name: string;
  ability: string;
}

export interface HearthstoneHero {
  type: string;
  class: string;
  name: string;
}

export interface HeroMetadata<T> {
  hero?: T;
}

export interface OverwatchMetadata {
  broadcaster: HeroMetadata<OverwatchHero>;
}

export interface HearthstoneMetadata {
  broadcaster: HeroMetadata<HearthstoneHero>;
  opponent: HeroMetadata<HearthstoneHero>;
}

export interface StreamMeta {
  user_id: string;
  user_name: string;
  game_id?: string;
  overwatch?: OverwatchMetadata;
  hearthstone?: HearthstoneMetadata;
}

export interface CreateStreamMarkerBody {
  user_id: string;
  description?: string;
}

export interface CreatedStreamMarker {
  id: string;
  created_at: string;
  description: string;
  position_seconds: integer;
}

export interface StreamMarkerQuery extends PaginationQuery {
  user_id?: string;
  video_id?: string;
}

export interface StreamMarker {
  id: string;
  created_at: string;
  description: string;
  position_seconds: integer;
  URL: string;
}

export interface StreamMarkerVideo {
  video_id: string;
  markers: StreamMarker[];
}

export interface StreamMarker {
  user_id: string;
  user_name: string;
  videos: StreamMarkerVideo[];
}

export interface ChannelInformationQuery {
  broadcaster_id: string;
}

export interface ChannelInformation {
  game_name: string;
  broadcaster_id: string;
  game_id: string;
  broadcaster_language: string;
  title: string;
  description?: string;
  status?: string;
}

export interface ModifyChannelInformationQuery {
  broadcaster_id: string;
  status?: string;
  game_id?: string;
  broadcaster_language?: string;
  title?: string;
  description?: string;
}

export interface BroadcasterSubscriptionQuery {
  broadcaster_id: string;
  user_id?: repeatable;
}

export interface BroadcasterSubscription {
  broadcaster_id: string;
  broadcaster_name: string;
  is_gift: boolean;
  tier: SubscriptionTier;
  plan_name: string;
  user_id: string;
  user_name: string;
}

export interface AllStreamTagsQuery extends PaginationQuery {
  tag_id?: repeatable;
}

export interface StreamTag {
  tag_id: string;
  is_auto: boolean;
  localization_names: map<string>;
  localization_descriptions: map<string>;
}

export interface StreamTagsQuery {
  broadcaster_id: string;
}

export interface ReplaceStreamTagBody {
  tag_ids: string[];
}

export interface CreateUserFollowBody {
  from_id: string;
  to_id: string;
}

export interface CreateUserFollowQuery {
  allow_notifications?: boolean;
}

export interface DeleteUserFollowQuery {
  from_id: string;
  to_id: string;
}

export interface UserQuery {
  login?: repeatable;
  id?: repeatable;
}

export interface User {
  id: string;
  login: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: integer;
  email: string;
}

export interface UserFollowsQuery {
  from_id?: string;
  to_id?: string;
}

export interface UserFollow {
  from_id: string;
  from_name: string;
  to_id: string;
  to_name: string;
  followed_at: string;
}

export interface UpdateUserQuery {
  description?: string;
}

export interface Extension {
  id: string;
  version: string;
  name: string;
  can_activate: boolean;
  type: ExtensionType[];
}

export interface UserActiveExtensionQuery {
  user_id?: string;
}

export interface DetailedExtension {
  active: boolean;
  id?: string;
  version?: string;
  name?: string;
  x?: integer;
  y?: integer;
}

export interface UserExtension {
  panel: map<DetailedExtension>;
  overlay: map<DetailedExtension>;
  component: map<DetailedExtension>;
}

export interface UpdateUserExtensionBody {
  data: UserExtension;
}

export interface VideoQuery extends PaginationQuery {
  id?: repeatable;
  user_id?: string;
  game_id?: string;
  language?: string;
  period?: Period;
  sort?: VideoSort;
  type?: VideoTypeQuery;
}

export interface Video {
  id: string;
  user_id: string;
  user_name: string;
  title: string;
  description: string;
  created_at: string;
  published_at: string;
  url: string;
  thumbnail_url: string;
  viewable: Viewable;
  view_count: integer;
  language: string;
  type: VideoType;
  duration: string;
}

export interface WebhookSubscription {
  topic: string;
  callback: string;
  expires_at: string;
}

export interface HypeTrainEventsQuery extends PaginationQuery {
  broadcaster_id: string;
  id?: string;
  cursor?: string;
}

export interface HypeTrainEventContribution {
  total: integer;
  type: string;
  user: string;
}

export interface HypeTrainEventData {
  broadcaster_id: string;
  cooldown_end_time: string;
  expires_at: string;
  goal: integer;
  id: string;
  last_contribution: HypeTrainEventContribution;
  level: integer;
  started_at: string;
  top_contributions: HypeTrainEventContribution[];
  total: integer;
}

export interface HypeTrainEvent extends Omit<Event, "event_data"> {
  event_data: HypeTrainEventData;
}
