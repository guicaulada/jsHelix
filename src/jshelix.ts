import request from "./request";
import * as helix from "./types/helix";
import { ExecuteArguments, JSHelix, Options } from "./types/jshelix";
import { RequestHeaders, RequestResponse } from "./types/request";

export default function jsHelix(clientId: string, token?: string): JSHelix {
  const url = "https://api.twitch.tv";
  const headers = {
    "Client-ID": clientId,
    "Content-Type": "application/json",
  } as RequestHeaders;

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  function execute<T>(args: ExecuteArguments): Promise<T> {
    return request<T>({
      headers: {
        ...headers,
        ...args.options.headers,
      },
      method: args.method,
      url: `${args.options.url || url}${args.path}`,
      body: args.body,
      query: args.query,
    });
  }

  // Ads
  function startCommercial(
    body: helix.StartCommercialBody,
    options: Options = {},
  ): Promise<helix.Response<helix.StartCommercialData[]>> {
    return execute<helix.Response<helix.StartCommercialData[]>>({
      options,
      method: "POST",
      path: "/helix/channels/commercial",
      body,
    });
  }

  // Analytics
  function getExtensionAnalytics(
    query?: helix.ExtensionAnalyticsQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.ExtensionAnalyticsData[]>> {
    return execute<helix.Response<helix.ExtensionAnalyticsData[]>>({
      options,
      method: "GET",
      path: "/helix/analytics/extensions",
      query,
    });
  }

  function getGameAnalytics(
    query?: helix.GameAnalyticsQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.GameAnalyticsData[]>> {
    return execute<helix.Response<helix.GameAnalyticsData[]>>({
      options,
      method: "GET",
      path: "/helix/analytics/games",
      query,
    });
  }

  // Bits
  function getCheermotes(
    query?: helix.CheermotesQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.CheermotesData[]>> {
    return execute<helix.Response<helix.CheermotesData[]>>({
      options,
      method: "GET",
      path: "/helix/bits/cheermotes",
      query,
    });
  }

  function getBitsLeaderboard(
    query?: helix.BitsLeaderboardQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.BitsLeaderboardData[]>> {
    return execute<helix.Response<helix.BitsLeaderboardData[]>>({
      options,
      method: "GET",
      path: "/helix/bits/leaderboard",
      query,
    });
  }

  function getExtensionsTransactions(
    query: helix.ExtensionTransactionQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.ExtensionTransactionData[]>> {
    return execute<helix.Response<helix.ExtensionTransactionData[]>>({
      options,
      method: "GET",
      path: "/helix/extensions/transactions",
      query,
    });
  }

  // Clip
  function createClip(
    query: helix.CreateClipQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.CreateClipData[]>> {
    return execute<helix.Response<helix.CreateClipData[]>>({
      options,
      method: "POST",
      path: "/helix/clips",
      query,
    });
  }

  function getClips(
    query: helix.ClipQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.ClipData[]>> {
    return execute<helix.Response<helix.ClipData[]>>({
      options,
      method: "GET",
      path: "/helix/clips",
      query,
    });
  }

  // Entitlements
  function createEntitlementGrantsUploadURL(
    query: helix.EntitlementGrantsQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.EntitlementGrantsData[]>> {
    return execute<helix.Response<helix.EntitlementGrantsData[]>>({
      options,
      method: "POST",
      path: "/helix/entitlements/upload",
      query,
    });
  }

  function getCodeStatus(
    query: helix.CodeQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.CodeData[]>> {
    return execute<helix.Response<helix.CodeData[]>>({
      options,
      method: "GET",
      path: "/helix/entitlements/codes",
      query,
    });
  }

  function redeemCode(
    query: helix.CodeQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.CodeData[]>> {
    return execute<helix.Response<helix.CodeData[]>>({
      options,
      method: "POST",
      path: "/helix/entitlements/code",
      query,
    });
  }

  // Games
  function getTopGames(
    query?: helix.PaginationQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.GameData[]>> {
    return execute<helix.Response<helix.GameData[]>>({
      options,
      method: "GET",
      path: "/helix/games/top",
      query,
    });
  }

  function getGames(
    query: helix.GameQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.GameData[]>> {
    return execute<helix.Response<helix.GameData[]>>({
      options,
      method: "GET",
      path: "/helix/games",
      query,
    });
  }

  // Moderation
  function checkAutoModStatus(
    query: helix.AutoModQuery,
    body: helix.AutoModBody,
    options: Options = {},
  ): Promise<helix.Response<helix.AutoModData[]>> {
    return execute<helix.Response<helix.AutoModData[]>>({
      options,
      method: "POST",
      path: "/helix/moderation/enforcements/status",
      query,
      body,
    });
  }

  function getBannedUsers(
    query: helix.BannedUserQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.BannedUserData[]>> {
    return execute<helix.Response<helix.BannedUserData[]>>({
      options,
      method: "GET",
      path: "/helix/moderation/banned",
      query,
    });
  }

  function getBannedEvents(
    query: helix.BannedEventQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.BannedEventData[]>> {
    return execute<helix.Response<helix.BannedEventData[]>>({
      options,
      method: "GET",
      path: "/helix/moderation/banned/events",
      query,
    });
  }

  function getModerators(
    query: helix.ModeratorQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.ModeratorData[]>> {
    return execute<helix.Response<helix.ModeratorData[]>>({
      options,
      method: "GET",
      path: "/helix/moderation/moderators",
      query,
    });
  }

  function getModeratorEvents(
    query: helix.ModeratorEventQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.ModeratorEventData[]>> {
    return execute<helix.Response<helix.ModeratorEventData[]>>({
      options,
      method: "GET",
      path: "/helix/moderation/moderators/events",
      query,
    });
  }

  // Search
  function searchCategories(
    query: helix.SearchQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.GameData[]>> {
    return execute<helix.Response<helix.GameData[]>>({
      options,
      method: "GET",
      path: "/helix/search/categories",
      query,
    });
  }

  function searchChannels(
    query: helix.ChannelSearchQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.ChannelSearchData[]>> {
    return execute<helix.Response<helix.ChannelSearchData[]>>({
      options,
      method: "GET",
      path: "/helix/search/channels",
      query,
    });
  }

  // Streams
  function getStreamKey(
    query: helix.StreamKeyQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.StreamKeyData[]>> {
    return execute<helix.Response<helix.StreamKeyData[]>>({
      options,
      method: "GET",
      path: "/helix/streams/key",
      query,
    });
  }

  function getStreams(
    query?: helix.StreamQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.StreamData[]>> {
    return execute<helix.Response<helix.StreamData[]>>({
      options,
      method: "GET",
      path: "/helix/streams",
      query,
    });
  }

  function getStreamsMetadata(
    query: helix.StreamQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.StreamMetadata[]>> {
    return execute<helix.Response<helix.StreamMetadata[]>>({
      options,
      method: "GET",
      path: "/helix/streams/metadata",
      query,
    });
  }

  function createStreamMarker(
    body: helix.CreateStreamMarkerBody,
    options: Options = {},
  ): Promise<helix.Response<helix.CreateStreamMarkerData[]>> {
    return execute<helix.Response<helix.CreateStreamMarkerData[]>>({
      options,
      method: "POST",
      path: "/helix/streams/markers",
      body,
    });
  }

  function getStreamMarkers(
    query: helix.StreamMarkerQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.StreamMarkerData[]>> {
    return execute<helix.Response<helix.StreamMarkerData[]>>({
      options,
      method: "GET",
      path: "/helix/streams/markers",
      query,
    });
  }

  // Channels
  function getChannelInformation(
    query: helix.ChannelInformationQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.ChannelInformationData[]>> {
    return execute<helix.Response<helix.ChannelInformationData[]>>({
      options,
      method: "GET",
      path: "/helix/channels",
      query,
    });
  }

  function modifyChannelInformation(
    query: helix.ModifyChannelInformationQuery,
    options: Options = {},
  ): Promise<helix.Response<RequestResponse>> {
    return execute<helix.Response<RequestResponse>>({
      options,
      method: "PATCH",
      path: "/helix/channels",
      query,
    });
  }

  // Subscriptions
  function getBroadcasterSubscriptions(
    query: helix.BroadcasterSubscriptionQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.BroadcasterSubscriptionData[]>> {
    return execute<helix.Response<helix.BroadcasterSubscriptionData[]>>({
      options,
      method: "GET",
      path: "/helix/subscriptions",
      query,
    });
  }

  // Tags
  function getAllStreamTags(
    query: helix.AllStreamTagsQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.StreamTagData[]>> {
    return execute<helix.Response<helix.StreamTagData[]>>({
      options,
      method: "GET",
      path: "/helix/tags/streams",
      query,
    });
  }

  function getStreamTags(
    query: helix.StreamTagsQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.StreamTagData[]>> {
    return execute<helix.Response<helix.StreamTagData[]>>({
      options,
      method: "GET",
      path: "/helix/streams/tags",
      query,
    });
  }

  function replaceStreamTags(
    query: helix.StreamTagsQuery,
    body?: helix.ReplaceStreamTagBody,
    options: Options = {},
  ): Promise<RequestResponse> {
    return execute<RequestResponse>({
      options,
      method: "PUT",
      path: "/helix/streams/tags",
      query,
      body,
    });
  }

  // Users
  function createUserFollows(
    body: helix.CreateUserFollowBody,
    query?: helix.CreateUserFollowQuery,
    options: Options = {},
  ): Promise<RequestResponse> {
    return execute({
      options,
      method: "POST",
      path: "/helix/users/follows",
      query,
      body,
    });
  }

  function deleteUserFollows(
    query: helix.DeleteUserFollowQuery,
    options: Options,
  ): Promise<RequestResponse> {
    return execute<RequestResponse>({
      options,
      method: "DELETE",
      path: "/helix/users/follows",
      query,
    });
  }

  function getUsers(
    query?: helix.UserQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.UserData[]>> {
    return execute<helix.Response<helix.UserData[]>>({
      options,
      method: "GET",
      path: "/helix/users",
      query,
    });
  }

  function getUsersFollows(
    query: helix.UserFollowsQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.UserFollowData[]>> {
    return execute<helix.Response<helix.UserFollowData[]>>({
      options,
      method: "GET",
      path: "/helix/users/follows",
      query,
    });
  }

  function updateUser(
    query?: helix.UpdateUserQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.UserData[]>> {
    return execute<helix.Response<helix.UserData[]>>({
      options,
      method: "PUT",
      path: "/helix/users",
      query,
    });
  }

  function getUserExtensions(
    options: Options = {},
  ): Promise<helix.Response<helix.ExtensionData[]>> {
    return execute<helix.Response<helix.ExtensionData[]>>({
      options,
      method: "GET",
      path: "/helix/users/extensions/list",
    });
  }

  function getUserActiveExtensions(
    query?: helix.UserActiveExtensionQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.UserExtensionData>> {
    return execute<helix.Response<helix.UserExtensionData>>({
      options,
      method: "GET",
      path: "/helix/users/extensions",
      query,
    });
  }

  function updateUserExtensions(
    body: helix.UpdateUserExtensionBody,
    options: Options = {},
  ): Promise<helix.Response<helix.UserExtensionData>> {
    return execute<helix.Response<helix.UserExtensionData>>({
      options,
      method: "PUT",
      path: "/helix/users/extensions",
      body,
    });
  }

  // Videos
  function getVideos(
    query: helix.VideoQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.VideoData[]>> {
    return execute<helix.Response<helix.VideoData[]>>({
      options,
      method: "GET",
      path: "/helix/videos",
      query,
    });
  }

  function getWebhookSubscriptions(
    query?: helix.WebhookSubscriptionQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.WebhookSubscriptionData[]>> {
    return execute<helix.Response<helix.WebhookSubscriptionData[]>>({
      options,
      method: "GET",
      path: "/helix/webhooks/subscriptions",
      query,
    });
  }

  function getHypeTrainEvents(
    query: helix.HypeTrainEventsQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.HypeTrainEventData[]>> {
    return execute<helix.Response<helix.HypeTrainEventData[]>>({
      options,
      method: "GET",
      path: "/helix/hypetrain/events",
      query,
    });
  }

  return {
    url,
    headers,

    // Ads
    startCommercial,

    // Analytics
    getExtensionAnalytics,
    getGameAnalytics,

    // Bits
    getCheermotes,
    getBitsLeaderboard,
    getExtensionsTransactions,

    // Clip
    createClip,
    getClips,

    // Entitlements
    createEntitlementGrantsUploadURL,
    getCodeStatus,
    redeemCode,

    // Games
    getTopGames,
    getGames,

    // Moderation
    checkAutoModStatus,
    getBannedUsers,
    getBannedEvents,
    getModerators,
    getModeratorEvents,

    // Search
    searchCategories,
    searchChannels,

    // Streams
    getStreamKey,
    getStreams,
    getStreamsMetadata,
    createStreamMarker,
    getStreamMarkers,

    // Channels
    getChannelInformation,
    modifyChannelInformation,

    // Subscriptions
    getBroadcasterSubscriptions,

    // Tags
    getAllStreamTags,
    getStreamTags,
    replaceStreamTags,

    // Users
    createUserFollows,
    deleteUserFollows,
    getUsers,
    getUsersFollows,
    updateUser,
    getUserExtensions,
    getUserActiveExtensions,
    updateUserExtensions,

    // Videos
    getVideos,
    getWebhookSubscriptions,

    // Hype
    getHypeTrainEvents,
  };
}
