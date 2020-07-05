import * as helix from "./helix";
import { RequestHeaders, RequestMethod, RequestResponse } from "./request";

export interface Options {
  headers?: helix.map<string>;
  url?: string;
}

export interface ExecuteArguments {
  method: RequestMethod;
  path: string;
  query?: unknown;
  body?: unknown;
  options: Options;
}

export interface JSHelix {
  url: string;
  headers: RequestHeaders;

  // Ads
  startCommercial: (
    body: helix.StartCommercialBody,
    options?: Options,
  ) => Promise<helix.Response<helix.StartCommercialData[]>>;

  // Analytics
  getExtensionAnalytics: (
    query?: helix.ExtensionAnalyticsQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.ExtensionAnalyticsData[]>>;
  getGameAnalytics: (
    query?: helix.GameAnalyticsQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.GameAnalyticsData[]>>;

  // Bits
  getCheermotes: (
    query?: helix.CheermotesQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.CheermotesData[]>>;
  getBitsLeaderboard: (
    query?: helix.BitsLeaderboardQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.BitsLeaderboardData[]>>;
  getExtensionsTransactions: (
    query: helix.ExtensionTransactionQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.ExtensionTransactionData[]>>;

  // Clip
  createClip: (
    query: helix.CreateClipQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.CreateClipData[]>>;
  getClips: (
    query: helix.ClipQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.ClipData[]>>;

  // Entitlements
  createEntitlementGrantsUploadURL: (
    query: helix.EntitlementGrantsQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.EntitlementGrantsData[]>>;
  getCodeStatus: (
    query: helix.CodeQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.CodeData[]>>;
  redeemCode: (
    query: helix.CodeQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.CodeData[]>>;

  // Games
  getTopGames: (
    query?: helix.PaginationQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.GameData[]>>;
  getGames: (
    query: helix.GameQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.GameData[]>>;

  // Moderation
  checkAutoModStatus: (
    query: helix.AutoModQuery,
    body: helix.AutoModBody,
    options?: Options,
  ) => Promise<helix.Response<helix.AutoModData[]>>;
  getBannedUsers: (
    query: helix.BannedUserQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.BannedUserData[]>>;
  getBannedEvents: (
    query: helix.EventQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.BannedEventData[]>>;
  getModerators: (
    query: helix.ModeratorQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.ModeratorData[]>>;
  getModeratorEvents: (
    query: helix.EventQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.Event[]>>;

  // Search
  searchCategories: (
    query: helix.SearchQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.GameData[]>>;
  searchChannels: (
    query: helix.ChannelSearchQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.ChannelSearchData[]>>;

  // Streams
  getStreamKey: (
    query: helix.StreamKeyQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.StreamKeyData[]>>;
  getStreams: (
    query?: helix.StreamQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.StreamData[]>>;
  getStreamsMetadata: (
    query?: helix.StreamQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.StreamMetadata[]>>;
  createStreamMarker: (
    body: helix.CreateStreamMarkerBody,
    options?: Options,
  ) => Promise<helix.Response<helix.CreateStreamMarkerData[]>>;
  getStreamMarkers: (
    query: helix.StreamMarkerQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.StreamMarkerData[]>>;

  // Channels
  getChannelInformation: (
    query: helix.ChannelInformationQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.ChannelInformationData[]>>;
  modifyChannelInformation: (
    query: helix.ModifyChannelInformationQuery,
    options?: Options,
  ) => Promise<helix.Response<RequestResponse>>;

  // Subscriptions
  getBroadcasterSubscriptions: (
    query: helix.BroadcasterSubscriptionQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.BroadcasterSubscriptionData[]>>;

  // Tags
  getAllStreamTags: (
    query?: helix.AllStreamTagsQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.StreamTagData[]>>;
  getStreamTags: (
    query: helix.StreamTagsQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.StreamTagData[]>>;
  replaceStreamTags: (
    query: helix.StreamTagsQuery,
    body?: helix.ReplaceStreamTagBody,
    options?: Options,
  ) => Promise<RequestResponse>;

  // Users
  createUserFollow: (
    body: helix.CreateUserFollowBody,
    query?: helix.CreateUserFollowQuery,
    options?: Options,
  ) => Promise<RequestResponse>;
  deleteUserFollow: (
    query: helix.DeleteUserFollowQuery,
    options?: Options,
  ) => Promise<RequestResponse>;
  getUsers: (
    query?: helix.UserQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.UserData[]>>;
  getUserFollows: (
    query: helix.UserFollowsQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.UserFollowData[]>>;
  updateUser: (
    query?: helix.UpdateUserQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.UserData[]>>;
  getUserExtensions: (
    options?: Options,
  ) => Promise<helix.Response<helix.ExtensionData[]>>;
  getUserActiveExtensions: (
    query?: helix.UserActiveExtensionQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.UserExtensionData>>;
  updateUserExtensions: (
    body: helix.UpdateUserExtensionBody,
    options?: Options,
  ) => Promise<helix.Response<helix.UserExtensionData>>;

  // Videos
  getVideos: (
    query: helix.VideoQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.VideoData[]>>;
  getWebhookSubscriptions: (
    query?: helix.PaginationQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.WebhookSubscriptionData[]>>;

  // Hype
  getHypeTrainEvents: (
    query: helix.HypeTrainEventsQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.HypeTrainEvent[]>>;
}
