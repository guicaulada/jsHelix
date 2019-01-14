/**
  Helix.js - A wrapper for the new Twitch API.
  Copyright (C) 2019  Sighmir

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
console.log('\n\
Helix.js - A wrapper for the new Twitch API.  Copyright (C) 2019  Sighmir\n\
This is free software, and you are welcome to redistribute it under certain conditions;\n\
This program comes with ABSOLUTELY NO WARRANTY;\n')

const rp = require('request-promise');
const qs = require('querystring')

class Helix {
  constructor(oauth) {
    this.url = 'https://api.twitch.tv/helix'
    this.oauth = oauth
    this.headers = {
      "Authorization": `Bearer ${oauth.replace('oauth:','')}`
    }
  }

  async getExtensionAnalytics(query) {
    return JSON.parse(await rp.get(this.url + '/analytics/extensions?' + qs.stringify(query), { headers: this.headers }))
  }

  async getGameAnalytics(query) {
    return JSON.parse(await rp.get(this.url + '/analytics/games?' + qs.stringify(query), { headers: this.headers }))
  }

  async getBitsLeaderboard(query) {
    return JSON.parse(await rp.get(this.url + '/bits/leaderboard?' + qs.stringify(query), { headers: this.headers }))
  }

  async createClip(query) {
    return JSON.parse(await rp.post(this.url + '/clips?' + qs.stringify(query), { headers: this.headers }))
  }

  async getClip(query) {
    return JSON.parse(await rp.get(this.url + '/clips?' + qs.stringify(query), { headers: this.headers }))
  }

  async createEntitlementGrantsUploadURL(query) {
    return JSON.parse(await rp.post(this.url + '/entitlements/upload?' + qs.stringify(query), { headers: this.headers }))
  }

  async getCodeStatus(query) {
    return JSON.parse(await rp.get(this.url + '/entitlements/codes?' + qs.stringify(query), { headers: this.headers }))
  }

  async redeemCode(query) {
    return JSON.parse(await rp.post(this.url + '/entitlements/codes?' + qs.stringify(query), { headers: this.headers }))
  }

  async getTopGames(query) {
    return JSON.parse(await rp.get(this.url + '/games/top?' + qs.stringify(query), { headers: this.headers }))
  }

  async getGames(query) {
    return JSON.parse(await rp.get(this.url + '/games?' + qs.stringify(query), { headers: this.headers }))
  }

  async getStreams(query) {
    return JSON.parse(await rp.get(this.url + '/streams?' + qs.stringify(query), { headers: this.headers }))
  }

  async getStreamsMetadata(query) {
    return JSON.parse(await rp.get(this.url + '/streams/metadata?' + qs.stringify(query), { headers: this.headers }))
  }

  async createSteamMarker(query) {
    return JSON.parse(await rp.post(this.url + '/streams/markers', { headers: this.headers, json: query }))
  }

  async getStreamMarkers(query) {
    return JSON.parse(await rp.get(this.url + '/streams/markers?' + qs.stringify(query), { headers: this.headers }))
  }

  async getUsers(query) {
    return JSON.parse(await rp.get(this.url + '/users?' + qs.stringify(query), { headers: this.headers }))
  }

  async getUsersFollows(query) {
    return JSON.parse(await rp.get(this.url + '/users/follows?' + qs.stringify(query), { headers: this.headers }))
  }

  async updateUser(query) {
    return JSON.parse(await rp.put(this.url + '/users?' + qs.stringify(query), { headers: this.headers }))
  }

  async getUserExtensions(query) {
    return JSON.parse(await rp.get(this.url + '/users/extensions/list?' + qs.stringify(query), { headers: this.headers }))
  }

  async getUserActiveExtensions(query) {
    return JSON.parse(await rp.get(this.url + '/users/extensions?' + qs.stringify(query), { headers: this.headers }))
  }

  async updateUserExtensions(query) {
    return JSON.parse(await rp.put(this.url + '/users/extensions', { headers: this.headers, json: query }))
  }

  async getVideos(query) {
    return JSON.parse(await rp.get(this.url + '/videos?' + qs.stringify(query), { headers: this.headers }))
  }

  async getWebhookSubscriptions(query) {
    return JSON.parse(await rp.get(this.url + '/webhooks/subscriptions?' + qs.stringify(query), { headers: this.headers }))
  }
}

module.exports = Helix