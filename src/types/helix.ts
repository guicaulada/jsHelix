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

export interface Options {
  headers?: object;
  url?: string;
}

export interface PaginationCursor {
  cursor: string;
}

export interface DateRange {
  started_at: string;
  ended_at: string;
}

export interface Data<T> {
  data: T;
}

export type Response<T> = RequestResponse & Data<T>;

export interface TotalResponse<T> extends Response<T> {
  total: integer;
}

export interface PaginationResponse<T> extends Response<T> {
  pagination?: PaginationCursor;
}

export interface DateRangeResponse<T> extends Response<T> {
  date_range: DateRange;
}

export type TotalDateRangeResponse<T> = DateRangeResponse<T> & TotalResponse<T>;

export type TotalPaginationResponse<T> = PaginationResponse<T> &
  TotalResponse<T>;

export interface AfterPaginationQuery {
  after?: string;
}

export interface BeforePaginationQuery {
  before?: string;
}

export interface FirstPaginationQuery {
  first?: integer;
}

export type FirstAfterPaginationQuery = AfterPaginationQuery &
  FirstPaginationQuery;

export type FirstBeforePaginationQuery = BeforePaginationQuery &
  FirstPaginationQuery;

export type PaginationQuery =
  | AfterPaginationQuery
  | BeforePaginationQuery
  | FirstAfterPaginationQuery
  | FirstBeforePaginationQuery;

export type FirstlessPaginationQuery =
  | AfterPaginationQuery
  | BeforePaginationQuery;

export interface StartCommercialBody {
  broadcaster_id: string;
  length: CommercialLength;
}

export interface StartCommercialData {
  length: integer;
  message: string;
  retryAfter: integer;
}

export interface BaseAnalyticsQuery extends AfterPaginationQuery {
  type?: AnalyticsType;
}

export type RangeAnalyticsQuery = BaseAnalyticsQuery & DateRange;

export type AnalyticsQuery = BaseAnalyticsQuery | RangeAnalyticsQuery;

export interface AnalyticsData {
  URL: string;
  date_range: DateRange;
  type: AnalyticsType;
}

export interface BaseExtensionAnalyticsQuery extends BaseAnalyticsQuery {
  extension_id?: string;
}

export interface RangeExtensionAnalyticsQuery extends RangeAnalyticsQuery {
  extension_id?: string;
}

export type ExtensionAnalyticsQuery =
  | BaseExtensionAnalyticsQuery
  | RangeExtensionAnalyticsQuery;

export interface ExtensionAnalyticsData extends AnalyticsData {
  extension_id: string;
}

export interface BaseGameAnalyticsQuery extends BaseAnalyticsQuery {
  game_id?: string;
}

export interface RangeGameAnalyticsQuery extends RangeAnalyticsQuery {
  game_id?: string;
}

export type GameAnalyticsQuery =
  | BaseGameAnalyticsQuery
  | RangeGameAnalyticsQuery;

export interface GameAnalyticsData extends AnalyticsData {
  game_id: string;
}

export interface CheermotesQuery {
  broadcaster_id?: string;
}

export interface CheermotesImages {
  animated: map<string>;
  static: map<string>;
}

export interface CheermotesSortedImages {
  dark: CheermotesImages;
  light: CheermotesImages;
}

export interface CheermoteTier {
  min_bits: integer;
  id: CheermoteTierId;
  color: string;
  images: CheermotesSortedImages;
  can_cheer: boolean;
  show_in_bits_card: boolean;
}

export interface CheermotesData {
  prefix: string;
  tiers: CheermoteTier[];
  type: CheermoteType;
  order: integer;
  last_updated: string;
  is_charitable: boolean;
}

export interface BitsLeaderboardQuery {
  count?: integer;
  period?: Period;
  started_at?: string;
  user_id?: string;
}

export interface BitsLeaderboardData {
  user_id: string;
  user_name: string;
  rank: integer;
  score: integer;
}

export interface ExtensionTransactionQuery extends AfterPaginationQuery {
  extension_id: string;
  id?: repeatable;
}

export interface ExtensionTransactionCostData {
  amount: integer;
  type: "bits";
}

export interface ExtensionTransactionProductData {
  domain?: string;
  broadcast?: boolean;
  sku: string;
  cost: ExtensionTransactionCostData;
  displayName: string;
  inDevelopment: boolean;
}

export interface ExtensionTransactionData {
  id: string;
  timestamp: string;
  broadcaster_id: string;
  broadcaster_name: string;
  user_id: string;
  user_name: string;
  product_type: "BITS_IN_EXTENSION";
  product_data: ExtensionTransactionProductData;
}

export interface CreateClipQuery {
  broadcaster_id: string;
  has_delay?: boolean;
}

export interface CreateClipData {
  id: string;
  edit_url: string;
}

export type BaseClipQuery = PaginationQuery;

export type RangeClipQuery = PaginationQuery & DateRange;

export type BroadcasterClipQuery = BaseClipQuery & {
  broadcaster_id: string;
};

export type RangeBroadcasterClipQuery = RangeClipQuery & {
  broadcaster_id: string;
};

export type GameClipQuery = BaseClipQuery & {
  game_id: string;
};

export type RangeGameClipQuery = RangeClipQuery & GameClipQuery;

export type IdClipQuery = BaseClipQuery & {
  id: repeatable;
};

export type RangeIdClipQuery = RangeClipQuery & IdClipQuery;

export type ClipQuery =
  | BroadcasterClipQuery
  | GameClipQuery
  | IdClipQuery
  | RangeBroadcasterClipQuery
  | RangeGameClipQuery
  | RangeIdClipQuery;

export interface ClipData {
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

export interface EntitlementGrantsData {
  url: string;
}

export interface CodeQuery {
  code: repeatable;
  user_id: integer;
}

export interface CodeData {
  code: string;
  status: CodeStatus;
}

export type TopGamesQuery = PaginationQuery;

export interface IdGameQuery {
  id: repeatable;
}

export interface NameGameQuery {
  name: repeatable;
}

export type GameQuery =
  | IdGameQuery
  | NameGameQuery
  | (IdGameQuery & NameGameQuery);

export interface GameData {
  id: string;
  name: string;
  box_art_url: string;
}

export interface CheckAutoModQuery {
  broadcaster_id: string;
}

export interface CheckAutoModBodyData {
  msg_id: string;
  msg_text: string;
  user_id: string;
}

export interface CheckAutoModBody {
  data: Data<CheckAutoModBodyData[]>;
}

export interface CheckAutoModData {
  msg_id: string;
  is_permitted: boolean;
}

export type BannedUserQuery = FirstlessPaginationQuery & {
  broadcaster_id: string;
  user_id?: repeatable;
};

export interface BannedUserData {
  user_id: string;
  user_name: string;
  expires_at: string;
}

export type BannedEventQuery = FirstAfterPaginationQuery & {
  broadcaster_id: string;
  user_id?: repeatable;
};

export interface BannedEventEventData {
  broadcaster_id: string;
  broadcaster_name: string;
  user_id: string;
  user_name: string;
  expires_at: string;
}
export interface BannedEventData {
  id: string;
  event_type: string;
  event_timestamp: string;
  version: string;
  event_data: BannedEventEventData;
}

export type ModeratorQuery = AfterPaginationQuery & {
  broadcaster_id: string;
  user_id?: repeatable;
};

export interface ModeratorData {
  user_id: string;
  user_name: string;
}

export interface ModeratorEventQuery {
  broadcaster_id: string;
  user_id?: repeatable;
}

export interface ModeratorEventEventData {
  broadcaster_id: string;
  broadcaster_name: string;
  user_id: string;
  user_name: string;
}

export interface ModeratorEventData {
  id: string;
  event_type: string;
  event_timestamp: string;
  version: string;
  event_data: ModeratorEventEventData;
}

export interface SearchQuery {
  query: string;
}

export type CategorySearchQuery = SearchQuery & FirstAfterPaginationQuery;

export type ChannelSearchQuery = SearchQuery &
  FirstAfterPaginationQuery & {
    live_only?: boolean;
  };

export interface OffChannelSearchData {
  broadcaster_language: string;
  display_name: string;
  game_id: string;
  id: string;
  is_live: boolean;
  tags_ids: string[];
  thumbnail_url: string;
  title: string;
  started_at: string;
}
export type LiveChannelSearchData = OffChannelSearchData & {
  tags_ids: string[];
  started_at: string;
};

export type ChannelSearchData = LiveChannelSearchData | OffChannelSearchData;

export interface StreamKeyQuery {
  broadcaster_id: string;
}

export interface StreamKeyData {
  stream_key: string;
}

export type StreamQuery = PaginationQuery & {
  game_id?: repeatable;
  language?: repeatable;
  user_id?: repeatable;
  user_login?: repeatable;
};

export interface StreamData {
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

export interface OverwatchMetadata {
  broadcaster: {
    hero?: OverwatchHero;
  };
}

export interface HearthstoneHero {
  type: string;
  class: string;
  name: string;
}

export interface HearthstoneMetadata {
  broadcaster: {
    hero?: HearthstoneHero;
  };
  opponent: {
    hero?: HearthstoneHero;
  };
}

export interface StreamMetadata {
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

export interface CreateStreamMarkerData {
  id: integer;
  created_at: string;
  description: string;
  position_seconds: integer;
}

export type UserStreamMarkerQuery = PaginationQuery & {
  user_id: string;
};

export type VideoStreamMarkerQuery = PaginationQuery & {
  video_id: string;
};

export type StreamMarkerQuery = UserStreamMarkerQuery | VideoStreamMarkerQuery;

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

export interface StreamMarkerData {
  user_id: string;
  user_name: string;
  videos: StreamMarkerVideo[];
}

export interface ChannelInformationQuery {
  broadcaster_id: string;
}

export interface ChannelInformationData {
  status: string;
  broadcaster_id: string;
  game_id: string;
  broadcaster_language: string;
  title: string;
  description: string;
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

export interface BroadcasterSubscriptionData {
  broadcaster_id: string;
  broadcaster_name: string;
  is_gift: boolean;
  tier: SubscriptionTier;
  plan_name: string;
  user_id: string;
  user_name: string;
}

export type AllStreamTagsQuery = FirstAfterPaginationQuery & {
  tag_id?: repeatable;
};

export interface StreamTagData {
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

export interface CreateUserFollowsBody {
  from_id: string;
  to_id: string;
}

export interface CreateUserFollowsQuery {
  allow_notifications?: boolean;
}

export interface DeleteUserFollowsQuery {
  from_id: string;
  to_id: string;
}

export interface UserQuery {
  login?: repeatable;
  id?: repeatable;
}

export interface UserData {
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

export type UserFollowsFromQuery = FirstAfterPaginationQuery & {
  from_id: string;
};

export type UserFollowsToQuery = FirstAfterPaginationQuery & {
  to_id: string;
};

export type UserFollowsFromAndToQuery = UserFollowsFromQuery &
  UserFollowsToQuery;

export type UserFollowsQuery =
  | UserFollowsFromQuery
  | UserFollowsToQuery
  | UserFollowsFromAndToQuery;

export interface UserFollowData {
  from_id: string;
  from_name: string;
  to_id: string;
  to_name: string;
  followed_at: string;
}

export interface UpdateUserQuery {
  description?: string;
}

export type ExtensionType = "component" | "mobile" | "panel" | "overlay";

export interface ExtensionData {
  id: string;
  version: string;
  name: string;
  can_activate: boolean;
  type: ExtensionType[];
}

export interface UserActiveExtensionQuery {
  user_id?: string;
}

export interface DetailedExtensionData {
  active?: boolean;
  id?: string;
  version?: string;
  name?: string;
  x?: integer;
  y?: integer;
}

export interface UserExtensionData {
  panel: {
    [key: string]: DetailedExtensionData;
  };
  overlay: {
    [key: string]: DetailedExtensionData;
  };
  component: {
    [key: string]: DetailedExtensionData;
  };
}

export type UpdateUserExtensionBody = Data<UserExtensionData>;

export interface IdVideoQuery {
  id: repeatable;
}

export type OptionalVideoQuery = PaginationQuery & {
  language?: string;
  period?: Period;
  sort?: VideoSort;
  type?: VideoTypeQuery;
};

export type UserVideoQuery = OptionalVideoQuery & {
  user_id: string;
};

export type GameVideoQuery = OptionalVideoQuery & {
  game_id: string;
};

export type VideoQuery = IdVideoQuery | UserVideoQuery | GameVideoQuery;

export interface VideoData {
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

export type WebhookSubscriptionQuery = FirstAfterPaginationQuery;

export interface WebhookSubscriptionData {
  topic: string;
  callback: string;
  expires_at: string;
}

export type HypeTrainEventsQuery = FirstPaginationQuery & {
  broadcaster_id: string;
  id?: string;
  cursor?: string;
};

export interface HypeTrainEventContribution {
  total: integer;
  type: string;
  user: string;
}

export interface HypeTrainEventEventData {
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

export interface HypeTrainEventData {
  id: string;
  event_type: string;
  event_timestamp: string;
  version: string;
  event_data: HypeTrainEventEventData;
}
