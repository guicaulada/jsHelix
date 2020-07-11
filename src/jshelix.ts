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
  ): Promise<helix.Response<helix.Commercial[]>> {
    return execute<helix.Response<helix.Commercial[]>>({
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
  ): Promise<helix.Response<helix.ExtensionAnalytics[]>> {
    return execute<helix.Response<helix.ExtensionAnalytics[]>>({
      options,
      method: "GET",
      path: "/helix/analytics/extensions",
      query,
    });
  }

  function getGameAnalytics(
    query?: helix.GameAnalyticsQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.GameAnalytics[]>> {
    return execute<helix.Response<helix.GameAnalytics[]>>({
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
  ): Promise<helix.Response<helix.Cheermote[]>> {
    return execute<helix.Response<helix.Cheermote[]>>({
      options,
      method: "GET",
      path: "/helix/bits/cheermotes",
      query,
    });
  }

  function getBitsLeaderboard(
    query?: helix.BitsLeaderboardQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.BitsLeaderboard[]>> {
    return execute<helix.Response<helix.BitsLeaderboard[]>>({
      options,
      method: "GET",
      path: "/helix/bits/leaderboard",
      query,
    });
  }

  function getExtensionsTransactions(
    query: helix.ExtensionTransactionQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.ExtensionTransaction[]>> {
    return execute<helix.Response<helix.ExtensionTransaction[]>>({
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
  ): Promise<helix.Response<helix.CreatedClip[]>> {
    return execute<helix.Response<helix.CreatedClip[]>>({
      options,
      method: "POST",
      path: "/helix/clips",
      query,
    });
  }

  function getClips(
    query: helix.ClipQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.Clip[]>> {
    return execute<helix.Response<helix.Clip[]>>({
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
  ): Promise<helix.Response<helix.EntitlementGrant[]>> {
    return execute<helix.Response<helix.EntitlementGrant[]>>({
      options,
      method: "POST",
      path: "/helix/entitlements/upload",
      query,
    });
  }

  function getCodeStatus(
    query: helix.CodeQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.Code[]>> {
    return execute<helix.Response<helix.Code[]>>({
      options,
      method: "GET",
      path: "/helix/entitlements/codes",
      query,
    });
  }

  function redeemCode(
    query: helix.CodeQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.Code[]>> {
    return execute<helix.Response<helix.Code[]>>({
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
  ): Promise<helix.Response<helix.Game[]>> {
    return execute<helix.Response<helix.Game[]>>({
      options,
      method: "GET",
      path: "/helix/games/top",
      query,
    });
  }

  function getGames(
    query: helix.GameQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.Game[]>> {
    return execute<helix.Response<helix.Game[]>>({
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
  ): Promise<helix.Response<helix.AutoModMessage[]>> {
    return execute<helix.Response<helix.AutoModMessage[]>>({
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
  ): Promise<helix.Response<helix.BannedUser[]>> {
    return execute<helix.Response<helix.BannedUser[]>>({
      options,
      method: "GET",
      path: "/helix/moderation/banned",
      query,
    });
  }

  function getBannedEvents(
    query: helix.EventQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.BannedEvent[]>> {
    return execute<helix.Response<helix.BannedEvent[]>>({
      options,
      method: "GET",
      path: "/helix/moderation/banned/events",
      query,
    });
  }

  function getModerators(
    query: helix.ModeratorQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.Moderator[]>> {
    return execute<helix.Response<helix.Moderator[]>>({
      options,
      method: "GET",
      path: "/helix/moderation/moderators",
      query,
    });
  }

  function getModeratorEvents(
    query: helix.EventQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.Event[]>> {
    return execute<helix.Response<helix.Event[]>>({
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
  ): Promise<helix.Response<helix.Game[]>> {
    return execute<helix.Response<helix.Game[]>>({
      options,
      method: "GET",
      path: "/helix/search/categories",
      query,
    });
  }

  function searchChannels(
    query: helix.ChannelSearchQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.Channel[]>> {
    return execute<helix.Response<helix.Channel[]>>({
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
  ): Promise<helix.Response<helix.StreamKey[]>> {
    return execute<helix.Response<helix.StreamKey[]>>({
      options,
      method: "GET",
      path: "/helix/streams/key",
      query,
    });
  }

  function getStreams(
    query?: helix.StreamQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.Stream[]>> {
    return execute<helix.Response<helix.Stream[]>>({
      options,
      method: "GET",
      path: "/helix/streams",
      query,
    });
  }

  function getStreamsMetadata(
    query?: helix.StreamQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.StreamMeta[]>> {
    return execute<helix.Response<helix.StreamMeta[]>>({
      options,
      method: "GET",
      path: "/helix/streams/metadata",
      query,
    });
  }

  function createStreamMarker(
    body: helix.CreateStreamMarkerBody,
    options: Options = {},
  ): Promise<helix.Response<helix.CreatedStreamMarker[]>> {
    return execute<helix.Response<helix.CreatedStreamMarker[]>>({
      options,
      method: "POST",
      path: "/helix/streams/markers",
      body,
    });
  }

  function getStreamMarkers(
    query: helix.StreamMarkerQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.StreamMarker[]>> {
    return execute<helix.Response<helix.StreamMarker[]>>({
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
  ): Promise<helix.Response<helix.ChannelInformation[]>> {
    return execute<helix.Response<helix.ChannelInformation[]>>({
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
  ): Promise<helix.Response<helix.BroadcasterSubscription[]>> {
    return execute<helix.Response<helix.BroadcasterSubscription[]>>({
      options,
      method: "GET",
      path: "/helix/subscriptions",
      query,
    });
  }

  // Tags
  function getAllStreamTags(
    query?: helix.AllStreamTagsQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.StreamTag[]>> {
    return execute<helix.Response<helix.StreamTag[]>>({
      options,
      method: "GET",
      path: "/helix/tags/streams",
      query,
    });
  }

  function getStreamTags(
    query: helix.StreamTagsQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.StreamTag[]>> {
    return execute<helix.Response<helix.StreamTag[]>>({
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
  function createUserFollow(
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

  function deleteUserFollow(
    query: helix.DeleteUserFollowQuery,
    options: Options = {},
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
  ): Promise<helix.Response<helix.User[]>> {
    return execute<helix.Response<helix.User[]>>({
      options,
      method: "GET",
      path: "/helix/users",
      query,
    });
  }

  function getUserFollows(
    query: helix.UserFollowsQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.UserFollow[]>> {
    return execute<helix.Response<helix.UserFollow[]>>({
      options,
      method: "GET",
      path: "/helix/users/follows",
      query,
    });
  }

  function updateUser(
    query?: helix.UpdateUserQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.User[]>> {
    return execute<helix.Response<helix.User[]>>({
      options,
      method: "PUT",
      path: "/helix/users",
      query,
    });
  }

  function getUserExtensions(
    options: Options = {},
  ): Promise<helix.Response<helix.Extension[]>> {
    return execute<helix.Response<helix.Extension[]>>({
      options,
      method: "GET",
      path: "/helix/users/extensions/list",
    });
  }

  function getUserActiveExtensions(
    query?: helix.UserActiveExtensionQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.UserExtension>> {
    return execute<helix.Response<helix.UserExtension>>({
      options,
      method: "GET",
      path: "/helix/users/extensions",
      query,
    });
  }

  function updateUserExtensions(
    body: helix.UpdateUserExtensionBody,
    options: Options = {},
  ): Promise<helix.Response<helix.UserExtension>> {
    return execute<helix.Response<helix.UserExtension>>({
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
  ): Promise<helix.Response<helix.Video[]>> {
    return execute<helix.Response<helix.Video[]>>({
      options,
      method: "GET",
      path: "/helix/videos",
      query,
    });
  }

  function getWebhookSubscriptions(
    query?: helix.PaginationQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.WebhookSubscription[]>> {
    return execute<helix.Response<helix.WebhookSubscription[]>>({
      options,
      method: "GET",
      path: "/helix/webhooks/subscriptions",
      query,
    });
  }

  function getHypeTrainEvents(
    query: helix.HypeTrainEventsQuery,
    options: Options = {},
  ): Promise<helix.Response<helix.HypeTrainEvent[]>> {
    return execute<helix.Response<helix.HypeTrainEvent[]>>({
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
    createUserFollow,
    deleteUserFollow,
    getUsers,
    getUserFollows,
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
