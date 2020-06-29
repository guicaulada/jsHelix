import { RequestBody, RequestQuery, RequestResponse } from "./request";

export type integer = number;

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

export type VideoType = "all" | "upload" | "archive" | "highlight";

export interface Options {
  headers?: object;
  url?: string;
}

export interface PaginationResponse extends RequestBody {
  cursor: string;
}

export interface DateRange extends RequestBody {
  started_at: string;
  ended_at: string;
}

export interface Response<T extends RequestBody | RequestBody[]>
  extends RequestResponse {
  data: T;
  total?: integer;
  pagination?: PaginationResponse;
  date_range?: DateRange;
}

export interface StartCommercialBody extends RequestBody {
  broadcaster_id: string;
  length: CommercialLength;
}

export interface StartCommercialData extends RequestQuery {
  length?: integer;
  message?: string;
  retryAfter?: integer;
}

export interface AnalyticsQuery extends RequestQuery {
  after?: string;
  ended_at?: string;
  first?: integer;
  started_at?: string;
  type: AnalyticsType;
}

export interface AnalyticsData extends RequestBody {
  URL: string;
  date_range: DateRange;
  type: AnalyticsType;
}

export interface ExtensionAnalyticsQuery extends AnalyticsQuery {
  extension_id?: string;
}

export interface ExtensionAnalyticsData extends AnalyticsData {
  extension_id: string;
}

export interface GameAnalyticsQuery extends AnalyticsQuery {
  game_id?: string;
}

export interface GameAnalyticsData extends AnalyticsData {
  game_id: string;
}

export interface CheermotesQuery extends RequestQuery {
  broadcaster_id?: string;
}

export interface CheermotesImages extends RequestBody {
  animated: {
    [key: string]: string;
  };
  static: {
    [key: string]: string;
  };
}

export interface CheermoteTier extends RequestBody {
  min_bits: integer;
  id: CheermoteTierId;
  color: string;
  images: {
    dark: CheermotesImages;
    light: CheermotesImages;
  };
  can_cheer: boolean;
  show_in_bits_card: boolean;
}

export interface CheermotesData extends RequestBody {
  prefix: string;
  tiers: CheermoteTier[];
  type: CheermoteType;
  order: integer;
  last_updated: string;
  is_charitable: boolean;
}

export interface BitsLeaderboardQuery extends RequestQuery {
  count?: integer;
  period?: Period;
  started_at?: string;
  user_id?: string;
}

export interface BitsLeaderboardData extends RequestBody {
  user_id: string;
  user_name: string;
  rank: integer;
  score: integer;
}

export interface ExtensionsTransactionsQuery extends RequestQuery {
  extension_id: string;
  id?: string | string[];
  after?: string;
  first?: integer;
}

export interface ExtensionsTransactionsData extends RequestBody {
  id: string;
  timestamp: string;
  broadcaster_id: string;
  broadcaster_name: string;
  user_id: string;
  user_name: string;
  product_type: "BITS_IN_EXTENSION";
  product_data: {
    domain?: string;
    broadcast?: boolean;
    sku: string;
    cost: {
      amount: integer;
      type: "bits";
    };
    displayName: string;
    inDevelopment: boolean;
  };
}

export interface CreateClipQuery extends RequestQuery {
  broadcaster_id: string;
  has_delay?: boolean;
}

export interface CreateClipData extends RequestBody {
  id: string;
  edit_url: string;
}

export interface ClipQuery extends RequestQuery {
  broadcaster_id?: string;
  game_id?: string;
  id?: string;
  after?: string;
  before?: string;
  ended_at?: string;
  first?: string;
  started_at?: string;
}

export interface ClipData extends RequestBody {
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
  view_count: number;
  created_at: string;
  thumbnail_url: string;
}

export interface EntitlementGrantsQuery extends RequestQuery {
  manifest_id: string;
  type: string;
}

export interface EntitlementGrantsData extends RequestBody {
  url: string;
}

export interface CodeQuery extends RequestQuery {
  code: string[];
  user_id: number;
}

export interface CodeData extends RequestBody {
  code: string;
  status: CodeStatus;
}

export enum CodeStatus {
  "SUCCESSFULLY_REDEEMED",
  "ALREADY_CLAIMED",
  "EXPIRED",
  "USER_NOT_ELIGIBLE",
  "NOT_FOUND",
  "INACTIVE",
  "UNUSED",
  "INCORRECT_FORMAT",
  "INTERNAL_ERROR",
}

export interface TopGamesQuery extends RequestQuery {
  after?: string;
  before?: string;
  first?: number;
}

export interface GameQuery extends RequestQuery {
  id?: string[];
  name?: string[];
}

export interface GameData extends RequestBody {
  id: string;
  name: string;
  box_art_url: string;
}

export interface BroadcasterQuery extends RequestQuery {
  broadcaster_id: string;
}

export type CheckAutoModQuery = BroadcasterQuery;

export interface CheckAutoModBody extends RequestBody {
  msg_id: string;
  msg_text: string;
  user_id: string;
}

export interface CheckAutoModData extends RequestBody {
  msg_id: string;
  is_permitted: boolean;
}

export interface BannedUserQuery extends BroadcasterQuery {
  user_id?: string[];
  after?: string;
  before?: string;
}

export interface BannedUserData extends RequestBody {
  user_id: string;
  user_name: string;
  expires_at: string;
}

export interface BannedEventQuery extends BroadcasterQuery {
  user_id?: string[];
  after?: string;
  first?: string;
}

export interface BannedEventData extends RequestBody {
  id: string;
  event_type: string;
  event_timestamp: string;
  version: string;
  event_data: {
    broadcaster_id: string;
    broadcaster_name: string;
    user_id: string;
    user_name: string;
    expires_at: string;
  };
}

export interface ModeratorQuery extends BroadcasterQuery {
  user_id?: string[];
  after?: string;
}

export interface ModeratorData extends RequestBody {
  user_id: string;
  user_name: string;
}

export interface ModeratorEventQuery extends BroadcasterQuery {
  user_id?: string[];
}

export interface ModeratorEventData extends RequestBody {
  id: string;
  event_type: string;
  event_timestamp: string;
  version: string;
  event_data: {
    broadcaster_id: string;
    broadcaster_name: string;
    user_id: string;
    user_name: string;
  };
}

export interface SearchQuery extends RequestQuery {
  query: string;
}

export interface CategorySearchQuery extends SearchQuery {
  first?: number;
  after?: string;
}

export interface ChannelSearchQuery extends SearchQuery {
  first?: number;
  after?: string;
  live_only?: boolean;
}

export interface ChannelSearchData extends RequestBody {
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

export type StreamKeyQuery = BroadcasterQuery;

export interface StreamKeyData extends RequestBody {
  stream_key: string;
}

export interface StreamQuery extends RequestQuery {
  after?: string;
  before?: string;
  first?: number;
  game_id?: string;
  language?: string;
  user_id?: string;
  user_login?: string;
}

export interface StreamData extends RequestBody {
  id: string;
  user_id: string;
  user_name: string;
  game_id: string;
  type: string;
  title: string;
  viewer_count: number;
  started_at: string;
  language: string;
  thumbnail_url: string;
}

export interface StreamMetadata extends RequestBody {
  user_id: string;
  user_name: string;
  game_id?: string;
  overwatch?: {
    broadcaster: {
      hero: {
        role: string;
        name: string;
        ability: string;
      };
    };
  };
  hearthstone?: {
    broadcaster: {
      hero: {
        type: string;
        class: string;
        name: string;
      };
    };
    opponent: {
      hero: {
        type: string;
        class: string;
        name: string;
      };
    };
  };
}

export interface CreateStreamMarkerBody extends RequestBody {
  user_id: string;
  description?: string;
}

export interface CreateStreamMarkerData extends RequestBody {
  id: number;
  created_at: string;
  description: string;
  position_seconds: number;
}

export interface StreamMarkerQuery extends RequestQuery {
  user_id?: string;
  video_id?: string;
  after?: string;
  before?: string;
  first?: string;
}

export interface StreamMarker extends RequestBody {
  id: string;
  created_at: string;
  description: string;
  position_seconds: number;
  URL: string;
}

export interface StreamMarkerVideo extends RequestBody {
  video_id: string;
  markers: StreamMarker[];
}

export interface StreamMarkerData extends RequestBody {
  user_id: string;
  user_name: string;
  videos: StreamMarkerVideo[];
}

export type ChannelInformationQuery = BroadcasterQuery;

export interface ChannelInformationData extends RequestBody {
  status: string;
  broadcaster_id: string;
  game_id: string;
  broadcaster_language: string;
  title: string;
  description: string;
}

export interface ModifyChannelInformationQuery extends BroadcasterQuery {
  status?: string;
  game_id?: string;
  broadcaster_language?: string;
  title?: string;
  description?: string;
}

export interface BroadcasterSubscriptionQuery extends BroadcasterQuery {
  user_id?: string[];
}

export interface BroadcasterSubscriptionData extends RequestBody {
  broadcaster_id: string;
  broadcaster_name: string;
  is_gift: boolean;
  tier: string;
  plan_name: string;
  user_id: string;
  user_name: string;
}

export interface AllStreamTagsQuery extends RequestQuery {
  after?: string;
  first?: number;
  tag_id?: string;
}

export interface StreamTagData extends RequestBody {
  tag_id: string;
  is_auto: boolean;
  localization_names: {
    [key: string]: string;
  };
  localization_descriptions: {
    [key: string]: string;
  };
}

export type StreamTagsQuery = BroadcasterQuery;

export interface ReplaceStreamTagBody extends RequestBody {
  tag_ids: string[];
}

export interface CreateUserFollowsBody extends RequestBody {
  from_id: string;
  to_id: string;
  allow_notifications?: boolean;
}

export interface DeleteUserFollowsQuery extends RequestQuery {
  from_id: string;
  to_id: string;
}

export interface UserQuery extends RequestQuery {
  id: string;
  login: string;
}

export interface UserData extends RequestBody {
  id: string;
  login: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: number;
  email: string;
}

export interface UserFollowsQuery extends RequestQuery {
  from_id?: string;
  to_id?: string;
  first?: number;
  after?: string;
}

export interface UserFollowData extends RequestBody {
  from_id: string;
  from_name: string;
  to_id: string;
  to_name: string;
  followed_at: string;
}

export interface UpdateUserQuery extends RequestQuery {
  description?: string;
}

export type ExtensionType = "component" | "mobile" | "panel" | "overlay";

export interface MinimalExtensionData extends RequestBody {
  id: string;
  version: string;
  name: string;
  can_activate: boolean;
  type: ExtensionType[];
}

export interface UserActiveExtensionQuery extends RequestQuery {
  user_id?: string;
}

export interface ExtensionData extends RequestBody {
  active?: boolean;
  id?: string;
  version?: string;
  name?: string;
  x?: number;
  y?: number;
}

export interface UserExtensionData extends RequestBody {
  panel: {
    [key: string]: ExtensionData;
  };
  overlay: {
    [key: string]: ExtensionData;
  };
  component: {
    [key: string]: ExtensionData;
  };
}

export type UpdateUserExtensionBody = UserExtensionData;

export interface VideoQuery extends RequestQuery {
  id?: string;
  user_id?: string;
  game_id?: string;
  after?: string;
  before?: string;
  first?: number;
  language?: string;
  period?: Period;
  sort?: VideoSort;
  type?: VideoType;
}

export interface VideoData extends RequestBody {
  id: string;
  user_id: string;
  user_name: string;
  title: string;
  description: string;
  created_at: string;
  published_at: string;
  url: string;
  thumbnail_url: string;
  viewable: string;
  view_count: number;
  language: string;
  type: string;
  duration: string;
}

export interface WebhookSubscriptionQuery extends RequestQuery {
  after?: string;
  first?: number;
}

export interface WebhookSubscriptionData extends RequestBody {
  topic: string;
  callback: string;
  expires_at: string;
}

export interface HypeTrainEventsQuery extends RequestQuery {
  broadcaster_id: string;
  first?: number;
  id?: string;
  cursor?: string;
}

export interface HypeTrainEventData extends RequestBody {
  id: string;
  event_type: string;
  event_timestamp: string;
  version: string;
  event_data: {
    broadcaster_id: string;
    cooldown_end_time: string;
    expires_at: string;
    goal: number;
    id: string;
    last_contribution: {
      total: number;
      type: string;
      user: string;
    };
    level: number;
    started_at: string;
    top_contributions: [
      {
        total: number;
        type: string;
        user: string;
      },
    ];
    total: number;
  };
}
