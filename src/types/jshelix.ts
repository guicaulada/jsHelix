import * as helix from "./helix";
import { RequestHeaders, RequestResponse } from "./request";

export interface JSHelix {
  url: string;
  headers: RequestHeaders;

  // Ads
  startCommercial: (
    body: helix.StartCommercialBody,
    options?: helix.Options,
  ) => Promise<helix.Response<helix.StartCommercialData[]>>;

  // Analytics
  getExtensionAnalytics: (
    query?: helix.ExtensionAnalyticsQuery,
    options?: helix.Options,
  ) => Promise<helix.PaginationResponse<helix.ExtensionAnalyticsData[]>>;
  getGameAnalytics: (
    query?: helix.GameAnalyticsQuery,
    options?: helix.Options,
  ) => Promise<helix.PaginationResponse<helix.GameAnalyticsData[]>>;

  // Bits
  getCheermotes: (
    query?: helix.CheermotesQuery,
    options?: helix.Options,
  ) => Promise<helix.Response<helix.CheermotesData[]>>;
  getBitsLeaderboard: (
    query?: helix.BitsLeaderboardQuery,
    options?: helix.Options,
  ) => Promise<helix.TotalDateRangeResponse<helix.BitsLeaderboardData[]>>;
  getExtensionsTransactions: (
    query: helix.ExtensionTransactionQuery,
    options?: helix.Options,
  ) => Promise<helix.PaginationResponse<helix.ExtensionTransactionData[]>>;

  // Clip
  createClip: (
    query: helix.CreateClipQuery,
    options?: helix.Options,
  ) => Promise<helix.Response<helix.CreateClipData[]>>;
  getClips: (
    query: helix.ClipQuery,
    options?: helix.Options,
  ) => Promise<helix.PaginationResponse<helix.ClipData[]>>;

  // Entitlements
  createEntitlementGrantsUploadURL: (
    query: helix.EntitlementGrantsQuery,
    options?: helix.Options,
  ) => Promise<helix.Response<helix.EntitlementGrantsData[]>>;
  getCodeStatus: (
    query: helix.CodeQuery,
    options?: helix.Options,
  ) => Promise<helix.Response<helix.CodeData[]>>;
  redeemCode: (
    query: helix.CodeQuery,
    options?: helix.Options,
  ) => Promise<helix.Response<helix.CodeData[]>>;

  // Games
  getTopGames: (
    query?: helix.TopGamesQuery,
    options?: helix.Options,
  ) => Promise<helix.PaginationResponse<helix.GameData[]>>;
  getGames: (
    query: helix.GameQuery,
    options?: helix.Options,
  ) => Promise<helix.PaginationResponse<helix.GameData[]>>;

  // Moderation
  checkAutoModStatus: (
    query: helix.CheckAutoModQuery,
    body: helix.CheckAutoModBody,
    options?: helix.Options,
  ) => Promise<helix.Response<helix.CheckAutoModData[]>>;
  getBannedUsers: (
    query: helix.BannedUserQuery,
    options?: helix.Options,
  ) => Promise<helix.PaginationResponse<helix.BannedUserData[]>>;
  getBannedEvents: (
    query: helix.BannedEventQuery,
    options?: helix.Options,
  ) => Promise<helix.PaginationResponse<helix.BannedEventData[]>>;
  getModerators: (
    query: helix.ModeratorQuery,
    options?: helix.Options,
  ) => Promise<helix.PaginationResponse<helix.ModeratorData[]>>;
  getModeratorEvents: (
    query: helix.ModeratorEventQuery,
    options?: helix.Options,
  ) => Promise<helix.PaginationResponse<helix.ModeratorEventData[]>>;

  // Search
  searchCategories: (
    query: helix.CategorySearchQuery,
    options?: helix.Options,
  ) => Promise<helix.PaginationResponse<helix.GameData[]>>;
  searchChannels: (
    query: helix.ChannelSearchQuery,
    options: helix.Options,
  ) => Promise<helix.PaginationResponse<helix.ChannelSearchData[]>>;

  // Streams
  getStreamKey: (
    query: helix.StreamKeyQuery,
    options?: helix.Options,
  ) => Promise<helix.Response<helix.StreamKeyData[]>>;
  getStreams: (
    query?: helix.StreamQuery,
    options?: helix.Options,
  ) => Promise<helix.PaginationResponse<helix.StreamData[]>>;
  getStreamsMetadata: (
    query: helix.StreamQuery,
    options?: helix.Options,
  ) => Promise<helix.PaginationResponse<helix.StreamMetadata[]>>;
  createStreamMarker: (
    body: helix.CreateStreamMarkerBody,
    options?: helix.Options,
  ) => Promise<helix.Response<helix.CreateStreamMarkerData[]>>;
  getStreamMarkers: (
    query: helix.StreamMarkerQuery,
    options?: helix.Options,
  ) => Promise<helix.PaginationResponse<helix.StreamMarkerData[]>>;

  // Channels
  getChannelInformation: (
    query: helix.ChannelInformationQuery,
    options?: helix.Options,
  ) => Promise<helix.Response<helix.ChannelInformationData[]>>;
  modifyChannelInformation: (
    query: helix.ModifyChannelInformationQuery,
    options?: helix.Options,
  ) => Promise<helix.Response<RequestResponse>>;

  // Subscriptions
  getBroadcasterSubscriptions: (
    query: helix.BroadcasterSubscriptionQuery,
    options?: helix.Options,
  ) => Promise<helix.PaginationResponse<helix.BroadcasterSubscriptionData[]>>;

  // Tags
  getAllStreamTags: (
    query: helix.AllStreamTagsQuery,
    options?: helix.Options,
  ) => Promise<helix.PaginationResponse<helix.StreamTagData[]>>;
  getStreamTags: (
    query: helix.StreamTagsQuery,
    options?: helix.Options,
  ) => Promise<helix.Response<helix.StreamTagData[]>>;
  replaceStreamTags: (
    query: helix.StreamTagsQuery,
    body?: helix.ReplaceStreamTagBody,
    options?: helix.Options,
  ) => Promise<RequestResponse>;

  // Users
  createUserFollows: (
    body: helix.CreateUserFollowsBody,
    query?: helix.CreateUserFollowsQuery,
    options?: helix.Options,
  ) => Promise<RequestResponse>;
  deleteUserFollows: (
    query: helix.DeleteUserFollowsQuery,
    options: helix.Options,
  ) => Promise<RequestResponse>;
  getUsers: (
    query?: helix.UserQuery,
    options?: helix.Options,
  ) => Promise<helix.Response<helix.UserData[]>>;
  getUsersFollows: (
    query: helix.UserFollowsQuery,
    options?: helix.Options,
  ) => Promise<helix.TotalPaginationResponse<helix.UserFollowData[]>>;
  updateUser: (
    query?: helix.UpdateUserQuery,
    options?: helix.Options,
  ) => Promise<helix.Response<helix.UserData[]>>;
  getUserExtensions: (
    options?: helix.Options,
  ) => Promise<helix.Response<helix.ExtensionData[]>>;
  getUserActiveExtensions: (
    query?: helix.UserActiveExtensionQuery,
    options?: helix.Options,
  ) => Promise<helix.Response<helix.UserExtensionData>>;
  updateUserExtensions: (
    body: helix.UpdateUserExtensionBody,
    options?: helix.Options,
  ) => Promise<helix.Response<helix.UserExtensionData>>;

  // Videos
  getVideos: (
    query: helix.VideoQuery,
    options?: helix.Options,
  ) => Promise<helix.PaginationResponse<helix.VideoData[]>>;
  getWebhookSubscriptions: (
    query?: helix.WebhookSubscriptionQuery,
    options?: helix.Options,
  ) => Promise<helix.TotalPaginationResponse<helix.WebhookSubscriptionData[]>>;

  // Hype
  getHypeTrainEvents: (
    query: helix.HypeTrainEventsQuery,
    options?: helix.Options,
  ) => Promise<helix.Response<helix.HypeTrainEventData[]>>;
}
