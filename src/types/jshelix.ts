import * as helix from "./helix";
import { RequestHeaders } from "./request";

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
  ) => Promise<helix.Response<helix.ExtensionAnalyticsData[]>>;
  getGameAnalytics: (
    query?: helix.GameAnalyticsQuery,
    options?: helix.Options,
  ) => Promise<helix.Response<helix.GameAnalyticsData[]>>;

  // Bits
  getCheermotes: () => (
    query?: helix.CheermotesQuery,
    options?: helix.Options,
  ) => Promise<helix.Response<helix.CheermotesData[]>>;
  getBitsLeaderboard: (
    query?: helix.BitsLeaderboardQuery,
    options?: helix.Options,
  ) => Promise<helix.Response<helix.BitsLeaderboardData[]>>;
  getExtensionsTransactions: (
    query: helix.ExtensionsTransactionsQuery,
    options?: helix.Options,
  ) => Promise<helix.Response<helix.ExtensionsTransactionsData[]>>;

  // Clip
  createClip: () => helix.Response;
  getClips: () => helix.Response;

  // Entitlements
  createEntitlementGrantsUploadURL: () => helix.Response;
  getCodeStatus: () => helix.Response;
  redeemCode: () => helix.Response;

  // Games
  getTopGames: () => helix.Response;
  getGames: () => helix.Response;

  // Moderation
  checkAutoModStatus: () => helix.Response;
  getBannedUsers: () => helix.Response;
  getBannedEvents: () => helix.Response;
  getModerators: () => helix.Response;
  getModeratorEvents: () => helix.Response;

  // Search
  searchCategories: () => helix.Response;
  searchChannels: () => helix.Response;

  // Streams
  getStreamKey: () => helix.Response;
  getStreams: () => helix.Response;
  getStreamsMetadata: () => helix.Response;
  createStreamMarker: () => helix.Response;
  getStreamMarkers: () => helix.Response;

  // Channels
  getChannelInformation: () => helix.Response;
  modifyChannelInformation: () => helix.Response;

  // Subscriptions
  getBroadcasterSubscriptions: () => helix.Response;

  // Tags
  getAllStreamTags: () => helix.Response;
  getStreamTags: () => helix.Response;
  replaceStreamTags: () => helix.Response;

  // Users
  createUserFollows: () => helix.Response;
  deleteUserFollows: () => helix.Response;
  getUsers: () => helix.Response;
  getUsersFollows: () => helix.Response;
  updateUser: () => helix.Response;
  getUserExtensions: () => helix.Response;
  getUserActiveExtensions: () => helix.Response;
  updateUserExtensions: () => helix.Response;

  // Videos
  getVideos: () => helix.Response;
  getWebhookSubscriptions: () => helix.Response;

  // Hype
  getHypeTrainEvents: () => helix.Response;
}
