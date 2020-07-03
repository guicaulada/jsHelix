import * as helix from "./helix";
import { RequestHeaders, RequestMethod, RequestResponse } from "./request";

export interface Options {
  headers?: object;
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
  ) => Promise<helix.PaginationResponse<helix.ExtensionAnalyticsData[]>>;
  getGameAnalytics: (
    query?: helix.GameAnalyticsQuery,
    options?: Options,
  ) => Promise<helix.PaginationResponse<helix.GameAnalyticsData[]>>;

  // Bits
  getCheermotes: (
    query?: helix.CheermotesQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.CheermotesData[]>>;
  getBitsLeaderboard: (
    query?: helix.BitsLeaderboardQuery,
    options?: Options,
  ) => Promise<helix.TotalDateRangeResponse<helix.BitsLeaderboardData[]>>;
  getExtensionsTransactions: (
    query: helix.ExtensionTransactionQuery,
    options?: Options,
  ) => Promise<helix.PaginationResponse<helix.ExtensionTransactionData[]>>;

  // Clip
  createClip: (
    query: helix.CreateClipQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.CreateClipData[]>>;
  getClips: (
    query: helix.ClipQuery,
    options?: Options,
  ) => Promise<helix.PaginationResponse<helix.ClipData[]>>;

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
    query?: helix.TopGamesQuery,
    options?: Options,
  ) => Promise<helix.PaginationResponse<helix.GameData[]>>;
  getGames: (
    query: helix.GameQuery,
    options?: Options,
  ) => Promise<helix.PaginationResponse<helix.GameData[]>>;

  // Moderation
  checkAutoModStatus: (
    query: helix.CheckAutoModQuery,
    body: helix.CheckAutoModBody,
    options?: Options,
  ) => Promise<helix.Response<helix.CheckAutoModData[]>>;
  getBannedUsers: (
    query: helix.BannedUserQuery,
    options?: Options,
  ) => Promise<helix.PaginationResponse<helix.BannedUserData[]>>;
  getBannedEvents: (
    query: helix.BannedEventQuery,
    options?: Options,
  ) => Promise<helix.PaginationResponse<helix.BannedEventData[]>>;
  getModerators: (
    query: helix.ModeratorQuery,
    options?: Options,
  ) => Promise<helix.PaginationResponse<helix.ModeratorData[]>>;
  getModeratorEvents: (
    query: helix.ModeratorEventQuery,
    options?: Options,
  ) => Promise<helix.PaginationResponse<helix.ModeratorEventData[]>>;

  // Search
  searchCategories: (
    query: helix.CategorySearchQuery,
    options?: Options,
  ) => Promise<helix.PaginationResponse<helix.GameData[]>>;
  searchChannels: (
    query: helix.ChannelSearchQuery,
    options: Options,
  ) => Promise<helix.PaginationResponse<helix.ChannelSearchData[]>>;

  // Streams
  getStreamKey: (
    query: helix.StreamKeyQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.StreamKeyData[]>>;
  getStreams: (
    query?: helix.StreamQuery,
    options?: Options,
  ) => Promise<helix.PaginationResponse<helix.StreamData[]>>;
  getStreamsMetadata: (
    query: helix.StreamQuery,
    options?: Options,
  ) => Promise<helix.PaginationResponse<helix.StreamMetadata[]>>;
  createStreamMarker: (
    body: helix.CreateStreamMarkerBody,
    options?: Options,
  ) => Promise<helix.Response<helix.CreateStreamMarkerData[]>>;
  getStreamMarkers: (
    query: helix.StreamMarkerQuery,
    options?: Options,
  ) => Promise<helix.PaginationResponse<helix.StreamMarkerData[]>>;

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
  ) => Promise<helix.PaginationResponse<helix.BroadcasterSubscriptionData[]>>;

  // Tags
  getAllStreamTags: (
    query: helix.AllStreamTagsQuery,
    options?: Options,
  ) => Promise<helix.PaginationResponse<helix.StreamTagData[]>>;
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
  createUserFollows: (
    body: helix.CreateUserFollowsBody,
    query?: helix.CreateUserFollowsQuery,
    options?: Options,
  ) => Promise<RequestResponse>;
  deleteUserFollows: (
    query: helix.DeleteUserFollowsQuery,
    options: Options,
  ) => Promise<RequestResponse>;
  getUsers: (
    query?: helix.UserQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.UserData[]>>;
  getUsersFollows: (
    query: helix.UserFollowsQuery,
    options?: Options,
  ) => Promise<helix.TotalPaginationResponse<helix.UserFollowData[]>>;
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
  ) => Promise<helix.PaginationResponse<helix.VideoData[]>>;
  getWebhookSubscriptions: (
    query?: helix.WebhookSubscriptionQuery,
    options?: Options,
  ) => Promise<helix.TotalPaginationResponse<helix.WebhookSubscriptionData[]>>;

  // Hype
  getHypeTrainEvents: (
    query: helix.HypeTrainEventsQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.HypeTrainEventData[]>>;
}
