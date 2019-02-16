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
    this.url = 'https://api.twitch.tv/helix/'
    this.oauth = oauth
    this.headers = {
      "Authorization": `Bearer ${oauth.replace('oauth:','')}`
    }
  }

  //async request(method, path, query, passQueryOnHeader=false) {
  async request(apiCall, query) {

    const httpMethod = apiCall[0],
      apiURL         = this.url + apiCall[1],
      queryOnHeader  = ( apiCall[2] || false ),
      headers        = { headers: this.headers };

    if(queryOnHeader) {
      headers.json = query;
    }
    else {
      apiURL = apiURL + qs.stringify(query);
    }

    return JSON.parse((async () => {
      switch(httpMethod) {
        case 'get':
          return await rp.get(apiURL, headers);

        case 'post':
          return await rp.post(apiURL, headers);

        case 'put':
          return await rp.put(apiURL, headers);
      }
    })());
  }

  async perform(action, query) {
    const method = {
      getExtensionAnalytics:            ['get',  'analytics/extensions?'],
      getGameAnalytics:                 ['get',  'analytics/games?'],
      getBitsLeaderboard:               ['get',  'bits/leaderboard?'],
      createClip:                       ['post', 'clips?'],
      getClip:                          ['get',  'clips?'],
      createEntitlementGrantsUploadURL: ['post', 'entitlements/upload?'],
      getCodeStatus:                    ['get',  'entitlements/codes?'],
      redeemCode:                       ['post', 'entitlements/codes?'],
      getTopGames:                      ['get',  'games/top?'],
      getGames:                         ['get',  'games?'],
      getStreams:                       ['get',  'streams?'],
      getStreamsMetadata:               ['get',  'streams/metadata?'],
      getStreamMarkers:                 ['get',  'streams/markers?'],
      getBroadcasterSubscriptions:      ['get',  'subscriptions?'],
      getUserSubscriptions:             ['get',  'subscriptions?'],
      getAllStreamTags:                 ['get',  'tags/streams?'],
      getStreamTags:                    ['get',  'streams/tags?'],
      getUsers:                         ['get',  'users?'],
      getUsersFollows:                  ['get',  'users/follows?'],
      updateUser:                       ['put',  'users?'],
      getUserExtensions:                ['get',  'users/extensions/list?'],
      getUserActiveExtensions:          ['get',  'users/extensions?'],
      getVideos:                        ['get',  'videos?'],
      getWebhookSubscriptions:          ['get',  'webhooks/subscriptions?'],
      createSteamMarker:                ['post', 'streams/markers', true],
      updateUserExtensions:             ['put',  'users/extensions', true],
      replaceStreamTags:                ['put',  'streams/tags', true],
    };

    if (method.action == undefined) {
      console.log('Unknown method.');
      return;
    }

    return await this.request(method.action, query);
  }
}

module.exports = Helix
