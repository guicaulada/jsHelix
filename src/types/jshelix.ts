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
  ) => Promise<helix.Response<helix.Commercial[]>>;

  // Analytics
  getExtensionAnalytics: (
    query?: helix.ExtensionAnalyticsQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.ExtensionAnalytics[]>>;
  getGameAnalytics: (
    query?: helix.GameAnalyticsQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.GameAnalytics[]>>;

  // Bits
  getCheermotes: (
    query?: helix.CheermotesQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.Cheermote[]>>;
  getBitsLeaderboard: (
    query?: helix.BitsLeaderboardQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.BitsLeaderboard[]>>;
  getExtensionsTransactions: (
    query: helix.ExtensionTransactionQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.ExtensionTransaction[]>>;

  // Clip
  createClip: (
    query: helix.CreateClipQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.CreatedClip[]>>;
  getClips: (
    query: helix.ClipQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.Clip[]>>;

  // Entitlements
  createEntitlementGrantsUploadURL: (
    query: helix.EntitlementGrantsQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.EntitlementGrant[]>>;
  getCodeStatus: (
    query: helix.CodeQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.Code[]>>;
  redeemCode: (
    query: helix.CodeQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.Code[]>>;

  // Games
  getTopGames: (
    query?: helix.PaginationQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.Game[]>>;
  getGames: (
    query: helix.GameQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.Game[]>>;

  // Moderation
  checkAutoModStatus: (
    query: helix.AutoModQuery,
    body: helix.AutoModBody,
    options?: Options,
  ) => Promise<helix.Response<helix.AutoModMessage[]>>;
  getBannedUsers: (
    query: helix.BannedUserQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.BannedUser[]>>;
  getBannedEvents: (
    query: helix.EventQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.BannedEvent[]>>;
  getModerators: (
    query: helix.ModeratorQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.Moderator[]>>;
  getModeratorEvents: (
    query: helix.EventQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.Event[]>>;

  // Search
  searchCategories: (
    query: helix.SearchQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.Game[]>>;
  searchChannels: (
    query: helix.ChannelSearchQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.Channel[]>>;

  // Streams
  getStreamKey: (
    query: helix.StreamKeyQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.StreamKey[]>>;
  getStreams: (
    query?: helix.StreamQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.Stream[]>>;
  getStreamsMetadata: (
    query?: helix.StreamQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.StreamMeta[]>>;
  createStreamMarker: (
    body: helix.CreateStreamMarkerBody,
    options?: Options,
  ) => Promise<helix.Response<helix.CreatedStreamMarker[]>>;
  getStreamMarkers: (
    query: helix.StreamMarkerQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.StreamMarker[]>>;

  // Channels
  getChannelInformation: (
    query: helix.ChannelInformationQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.ChannelInformation[]>>;
  modifyChannelInformation: (
    query: helix.ModifyChannelInformationQuery,
    options?: Options,
  ) => Promise<helix.Response<RequestResponse>>;

  // Subscriptions
  getBroadcasterSubscriptions: (
    query: helix.BroadcasterSubscriptionQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.BroadcasterSubscription[]>>;

  // Tags
  getAllStreamTags: (
    query?: helix.AllStreamTagsQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.StreamTag[]>>;
  getStreamTags: (
    query: helix.StreamTagsQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.StreamTag[]>>;
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
  ) => Promise<helix.Response<helix.User[]>>;
  getUserFollows: (
    query: helix.UserFollowsQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.UserFollow[]>>;
  updateUser: (
    query?: helix.UpdateUserQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.User[]>>;
  getUserExtensions: (
    options?: Options,
  ) => Promise<helix.Response<helix.Extension[]>>;
  getUserActiveExtensions: (
    query?: helix.UserActiveExtensionQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.UserExtension>>;
  updateUserExtensions: (
    body: helix.UpdateUserExtensionBody,
    options?: Options,
  ) => Promise<helix.Response<helix.UserExtension>>;

  // Videos
  getVideos: (
    query: helix.VideoQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.Video[]>>;
  getWebhookSubscriptions: (
    query?: helix.PaginationQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.WebhookSubscription[]>>;

  // Hype
  getHypeTrainEvents: (
    query: helix.HypeTrainEventsQuery,
    options?: Options,
  ) => Promise<helix.Response<helix.HypeTrainEvent[]>>;
}
