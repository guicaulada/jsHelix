import request from "./request";
import * as helix from "./types/helix";
import { JSHelix } from "./types/jshelix";
import { RequestResponse } from "./types/request";

export default function jsHelix(clientId: string, token: string): JSHelix {
  const url = "https://api.twitch.tv";
  const headers = {
    "client-id": clientId,
    Authorization: `Bearer ${token}`,
  };

  // Ads
  function startCommercial(
    body: helix.StartCommercialBody,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.StartCommercialData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.StartCommercialData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "POST",
      url: `${options.url || url}/helix/channels/commercial`,
      body,
    });
  }

  // Analytics
  function getExtensionAnalytics(
    query?: helix.ExtensionAnalyticsQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.ExtensionAnalyticsData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.ExtensionAnalyticsData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/analytics/extensions`,
      query,
    });
  }

  function getGameAnalytics(
    query?: helix.GameAnalyticsQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.GameAnalyticsData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.GameAnalyticsData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/analytics/games`,
      query,
    });
  }

  // Bits
  function getCheermotes(
    query?: helix.CheermotesQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.CheermotesData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.CheermotesData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/bits/cheermotes`,
      query,
    });
  }

  function getBitsLeaderboard(
    query?: helix.BitsLeaderboardQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.BitsLeaderboardData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.BitsLeaderboardData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/bits/leaderboard`,
      query,
    });
  }

  function getExtensionsTransactions(
    query: helix.ExtensionsTransactionsQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.ExtensionsTransactionsData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.ExtensionsTransactionsData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/extensions/transactions`,
      query,
    });
  }

  // Clip
  function createClip(
    query: helix.CreateClipQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.CreateClipData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.CreateClipData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "POST",
      url: `${options.url || url}/helix/clips`,
      query,
    });
  }

  function getClips(
    query: helix.ClipQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.ClipData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.ClipData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/clips`,
      query,
    });
  }

  // Entitlements
  function createEntitlementGrantsUploadURL(
    query: helix.EntitlementGrantsQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.EntitlementGrantsData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.EntitlementGrantsData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "POST",
      url: `${options.url || url}/helix/entitlements/upload`,
      query,
    });
  }

  function getCodeStatus(
    query: helix.CodeQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.CodeData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.CodeData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/entitlements/codes`,
      query,
    });
  }

  function redeemCode(
    query: helix.CodeQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.CodeData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.CodeData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "POST",
      url: `${options.url || url}/helix/entitlements/code`,
      query,
    });
  }

  // Games
  function getTopGames(
    query?: helix.TopGamesQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.GameData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.GameData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/games/top`,
      query,
    });
  }

  function getGames(
    query: helix.GameQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.GameData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.GameData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/games`,
      query,
    });
  }

  // Moderation
  function checkAutoModStatus(
    body: helix.CheckAutoModBody,
    query: helix.CheckAutoModQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.CheckAutoModData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.CheckAutoModData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "POST",
      url: `${options.url || url}/helix/moderation/enforcements/status`,
      body,
      query,
    });
  }

  function getBannedUsers(
    query: helix.BannedUserQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.BannedUserData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.BannedUserData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/moderation/banned`,
      query,
    });
  }

  function getBannedEvents(
    query: helix.BannedEventQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.BannedEventData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.BannedEventData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/moderation/banned/events`,
      query,
    });
  }

  function getModerators(
    query: helix.ModeratorQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.ModeratorData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.ModeratorData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/moderation/moderators`,
      query,
    });
  }

  function getModeratorEvents(
    query: helix.ModeratorEventQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.ModeratorEventData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.ModeratorEventData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/moderation/moderators/events`,
      query,
    });
  }

  // Search
  function searchCategories(
    query: helix.CategorySearchQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.GameData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.GameData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/search/categories`,
      query,
    });
  }

  function searchChannels(
    query: helix.ChannelSearchQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.ChannelSearchData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.ChannelSearchData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/search/channels`,
      query,
    });
  }

  // Streams
  function getStreamKey(
    query: helix.StreamKeyQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.StreamKeyData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.StreamKeyData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/streams/key`,
      query,
    });
  }

  function getStreams(
    query?: helix.StreamQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.StreamData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.StreamData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/streams`,
      query,
    });
  }

  function getStreamsMetadata(
    query: helix.StreamQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.StreamMetadata[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.StreamMetadata[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/streams/metadata`,
      query,
    });
  }

  function createStreamMarker(
    body: helix.CreateStreamMarkerBody,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.CreateStreamMarkerData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.CreateStreamMarkerData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "POST",
      url: `${options.url || url}/helix/streams/markers`,
      body,
    });
  }

  function getStreamMarkers(
    query: helix.StreamMarkerQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.StreamMarkerData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.StreamMarkerData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/streams/markers`,
      query,
    });
  }

  // Channels
  function getChannelInformation(
    query: helix.ChannelInformationQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.ChannelInformationData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.ChannelInformationData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/channels`,
      query,
    });
  }

  function modifyChannelInformation(
    query: helix.ModifyChannelInformationQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.ChannelInformationData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.ChannelInformationData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "PATCH",
      url: `${options.url || url}/helix/channels`,
      query,
    });
  }

  // Subscriptions
  function getBroadcasterSubscriptions(
    query: helix.BroadcasterSubscriptionQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.BroadcasterSubscriptionData[]> | string> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.BroadcasterSubscriptionData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/subscriptions`,
      query,
    });
  }

  // Tags
  function getAllStreamTags(
    query: helix.AllStreamTagsQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.StreamTagData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.StreamTagData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/tags/streams`,
      query,
    });
  }

  function getStreamTags(
    query: helix.StreamTagsQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.StreamTagData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.StreamTagData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/streams/tags`,
      query,
    });
  }

  function replaceStreamTags(
    body: helix.ReplaceStreamTagBody,
    query: helix.StreamTagsQuery,
    options: helix.Options = {},
  ): Promise<RequestResponse> {
    if (!options.headers) options.headers = {};
    return request<RequestResponse>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "PUT",
      url: `${options.url || url}/helix/streams/tags`,
      body,
      query,
    });
  }

  // Users
  function createUserFollows(
    body: helix.CreateUserFollowsBody,
    options: helix.Options = {},
  ): Promise<RequestResponse> {
    if (!options.headers) options.headers = {};
    return request({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "POST",
      url: `${options.url || url}/helix/users/follows`,
      body,
    });
  }

  function deleteUserFollows(
    query: helix.DeleteUserFollowsQuery,
    options: helix.Options = {},
  ): Promise<RequestResponse> {
    if (!options.headers) options.headers = {};
    return request<RequestResponse>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "DELETE",
      url: `${options.url || url}/helix/users/follows`,
      query,
    });
  }

  function getUsers(
    query: helix.UserQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.UserData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.UserData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/users`,
      query,
    });
  }

  function getUsersFollows(
    query: helix.UserFollowsQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.UserFollowData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.UserFollowData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/users/follows`,
      query,
    });
  }

  function updateUser(
    query: helix.UpdateUserQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.UserData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.UserData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "PUT",
      url: `${options.url || url}/helix/users`,
      query,
    });
  }

  function getUserExtensions(
    options: helix.Options = {},
  ): Promise<helix.Response<helix.MinimalExtensionData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.MinimalExtensionData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/users/extensions/list`,
    });
  }

  function getUserActiveExtensions(
    query: helix.UserActiveExtensionQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.UserExtensionData>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.UserExtensionData>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/users/extensions`,
      query,
    });
  }

  function updateUserExtensions(
    body: helix.UpdateUserExtensionBody,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.UserExtensionData>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.UserExtensionData>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "PUT",
      url: `${options.url || url}/helix/users/extensions`,
      body,
    });
  }

  // Videos
  function getVideos(
    query: helix.VideoQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.VideoData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.VideoData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/videos`,
      query,
    });
  }

  function getWebhookSubscriptions(
    query: helix.WebhookSubscriptionQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.WebhookSubscriptionData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.WebhookSubscriptionData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/webhooks/subscriptions`,
      query,
    });
  }

  function getHypeTrainEvents(
    query: helix.HypeTrainEventsQuery,
    options: helix.Options = {},
  ): Promise<helix.Response<helix.HypeTrainEventData[]>> {
    if (!options.headers) options.headers = {};
    return request<helix.Response<helix.HypeTrainEventData[]>>({
      headers: {
        ...headers,
        ...options.headers,
      },
      method: "GET",
      url: `${options.url || url}/helix/hypetrain/events`,
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
