import jsHelix from "../index";

describe("index", () => {
  it("Calls default jsHelix mock with clientId and token", () => {
    const hapi = jsHelix("clientId", "token");
    expect(hapi.url).toEqual("https://api.twitch.tv");
    expect(hapi.headers).toEqual({
      "Client-ID": "clientId",
      "Content-Type": "application/json",
      Authorization: "Bearer token",
    });
  });

  it("Calls default jsHelix mock with only clientId", () => {
    const hapi = jsHelix("clientId");
    expect(hapi.url).toEqual("https://api.twitch.tv");
    expect(hapi.headers).toEqual({
      "Client-ID": "clientId",
      "Content-Type": "application/json",
    });
  });
});
