/* eslint-disable @typescript-eslint/camelcase */
import jsHelix from "../index";
import { UserData } from "../types/helix";

const HELIX_CLIENT = process.env.HELIX_CLIENT || "";
const HELIX_TOKEN = process.env.HELIX_TOKEN || "";

let HELIX_USER: UserData;

describe("index", () => {
  beforeAll(async () => {
    const hapi = jsHelix(HELIX_CLIENT, HELIX_TOKEN);
    HELIX_USER = (await hapi.getUsers()).data[0];
  });

  it("Calls jsHelix with clientId and token", () => {
    const hapi = jsHelix("clientId", "token");
    expect(hapi.url).toEqual("https://api.twitch.tv");
    expect(hapi.headers).toEqual({
      "Client-ID": "clientId",
      "Content-Type": "application/json",
      Authorization: "Bearer token",
    });
  });

  it("Calls jsHelix with only clientId", () => {
    const hapi = jsHelix("clientId");
    expect(hapi.url).toEqual("https://api.twitch.tv");
    expect(hapi.headers).toEqual({
      "Client-ID": "clientId",
      "Content-Type": "application/json",
    });
  });

  it("Calls startCommercial with clientId and token", async () => {
    const hapi = jsHelix(HELIX_CLIENT, HELIX_TOKEN);
    try {
      const result = await hapi.startCommercial({
        broadcaster_id: HELIX_USER.id,
        length: 30,
      });
      expect(result.data).toBeDefined();
      result.data.forEach((ad) => {
        expect(ad.length).toBeDefined();
        expect(ad.message).toBeDefined();
        expect(ad.retryAfter).toBeDefined();
      });
    } catch (result) {
      expect(result.error).toBeDefined();
      expect(result.message).toEqual(
        `the channel '${HELIX_USER.login}' is not currently live and needs to be in order to start commercials.`,
      );
    }
  });

  it("Calls getExtensionAnalytics with clientId and token", async () => {
    const hapi = jsHelix(HELIX_CLIENT, HELIX_TOKEN);
    try {
      const result = await hapi.getExtensionAnalytics();
      expect(result.data).toBeDefined();
      result.data.forEach((extension) => {
        expect(extension.URL).toBeDefined();
        expect(extension.date_range).toBeDefined();
        expect(extension.extension_id).toBeDefined();
        expect(extension.type).toBeDefined();
      });
    } catch (result) {
      expect(result.error).toBeDefined();
      expect(result.message).toEqual("Report Not Found");
    }
  });

  it("Calls getCheermotes with clientId and token", async () => {
    const hapi = jsHelix(HELIX_CLIENT, HELIX_TOKEN);
    const result = await hapi.getCheermotes();
    expect(result.data).toBeDefined();
    result.data.forEach((cheermote) => {
      expect(cheermote.is_charitable).toBeDefined();
      expect(cheermote.last_updated).toBeDefined();
      expect(cheermote.order).toBeDefined();
      expect(cheermote.prefix).toBeDefined();
      expect(cheermote.tiers).toBeDefined();
      expect(cheermote.type).toBeDefined();
    });
  });

  it("Calls getBitsLeaderboard with clientId and token", async () => {
    const hapi = jsHelix(HELIX_CLIENT, HELIX_TOKEN);
    const result = await hapi.getBitsLeaderboard();
    expect(result.data).toBeDefined();
    expect(result.date_range).toBeDefined();
    expect(result.total).toBeDefined();
    result.data.forEach((leaderboard) => {
      expect(leaderboard.rank).toBeDefined();
      expect(leaderboard.score).toBeDefined();
      expect(leaderboard.user_id).toBeDefined();
      expect(leaderboard.user_name).toBeDefined();
    });
  });

  it("Calls getGameAnalytics with clientId and token", async () => {
    const hapi = jsHelix(HELIX_CLIENT, HELIX_TOKEN);
    try {
      const result = await hapi.getGameAnalytics();
      expect(result.data).toBeDefined();
      result.data.forEach((games) => {
        expect(games.URL).toBeDefined();
        expect(games.date_range).toBeDefined();
        expect(games.game_id).toBeDefined();
        expect(games.type).toBeDefined();
      });
    } catch (result) {
      expect(result.error).toBeDefined();
      expect(result.message).toEqual("User Has No Access To Any Games");
    }
  });

  it("Calls getBitsLeaderboard with clientId and token", async () => {
    const hapi = jsHelix(HELIX_CLIENT, HELIX_TOKEN);
    try {
      const result = await hapi.getExtensionsTransactions({
        extension_id: "abcd",
      });
      expect(result.data).toBeDefined();
      result.data.forEach((transaction) => {
        expect(transaction.broadcaster_id).toBeDefined();
        expect(transaction.broadcaster_name).toBeDefined();
        expect(transaction.id).toBeDefined();
        expect(transaction.product_data).toBeDefined();
        expect(transaction.product_data.cost).toBeDefined();
        expect(transaction.product_data.cost.amount).toBeDefined();
        expect(transaction.product_data.cost.type).toBeDefined();
        expect(transaction.product_data.displayName).toBeDefined();
        expect(transaction.product_data.inDevelopment).toBeDefined();
        expect(transaction.product_data.sku).toBeDefined();
        expect(transaction.product_type).toBeDefined();
        expect(transaction.timestamp).toBeDefined();
        expect(transaction.user_id).toBeDefined();
        expect(transaction.user_name).toBeDefined();
      });
    } catch (result) {
      expect(result.error).toBeDefined();
      expect(result.message).toEqual("must provide valid app access token");
    }
  });
});
