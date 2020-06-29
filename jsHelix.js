function isNode() {
  return typeof module !== 'undefined' && module.exports
}

class ExtendableProxy {
  constructor(getset={}) {
    return new Proxy(this, getset);
  }
}

class HelixAPI extends ExtendableProxy {
  constructor(clientId, token) {
    super({
      get: function (hapi, func) {
        if (hapi[func] != null) return hapi[func]
        return function (...params) { return hapi.perform(func, ...params) }
      }
    })
    this.clientId = clientId
    this.auth = token.replace('oauth:', '')
    this.url = 'https://api.twitch.tv'
    this.headers = {
      'client-id': clientId,
      'Authorization': `Bearer ${this.auth}`
    }
  }

  send(method, path, params) {
    var self = this
    return new Promise(function (resolve, reject) {
      var request = false
      if (isNode()) {
        request = require('xmlhttprequest').XMLHttpRequest
      } else {
        request = XMLHttpRequest
      }
      if (request) {
        var http_request = new request()
        http_request.open(method, self.url+path, true)
        for (var h in self.headers) {
          http_request.setRequestHeader(h, self.headers[h])
        }
        http_request.send(JSON.stringify(params))
        http_request.onreadystatechange = function () {
          if (http_request.readyState == 4) {
            if (Number(http_request.status.toString()[0]) == 2) {
              try {
                resolve(JSON.parse(http_request.responseText))
              } catch {
                resolve(http_request.responseText)
              }
            } else {
              try {
                reject(JSON.parse(http_request.responseText))
              } catch {
                reject(http_request.responseText)
              }
            }
          }
        }
      } else {
        reject('There was a problem importing the XMLHttpRequest class.')
      }
    })
  }

  perform(action, ...params) {
    const method = {
      // Analytics
      getExtensionAnalytics: [`GET`, `/helix/analytics/extensions?${this.serialize(params[0])}${this.serialize(params[0])}`],
      getGameAnalytics: [`GET`, `/helix/analytics/games?${this.serialize(params[0])}${this.serialize(params[0])}`],
      // Bits
      getBitsLeaderboard: [`GET`, `/helix/bits/leaderboard?${this.serialize(params[0])}`],
      getExtensionsTransactions: [`GET`, `/helix/extensions/transactions?${this.serialize(params[0])}`],
      // Clip
      createClip: [`POST`, `/helix/clips?${this.serialize(params[0])}`],
      getClips: [`GET`, `/helix/clips?${this.serialize(params[0])}`],
      // Entitlements
      createEntitlementGrantsUploadURL: [`POST`, `/helix/entitlements/upload?${this.serialize(params[0])}`],
      getCodeStatus: [`GET`, `/helix/entitlements/codes?${this.serialize(params[0])}`],
      redeemCode: [`POST`, `/helix/entitlements/code?${this.serialize(params[0])}`],
      // Games
      getTopGames: [`GET`, `/helix/games/top?${this.serialize(params[0])}`],
      getGames: [`GET`, `/helix/games?${this.serialize(params[0])}`],
      // Streams
      getStreams: [`GET`, `/helix/streams?${this.serialize(params[0])}`],
      getStreamsMetadata: [`GET`, `/helix/streams/metadata?${this.serialize(params[0])}`],
      createStreamMarker: [`POST`, `/helix/streams/markers`, params[0]],
      getStreamMarkers: [`GET`, `/helix/streams/markers?${this.serialize(params[0])}`],
      // Subscriptions
      getBroadcasterSubscriptions: [`GET`, `/helix/subscriptions?${this.serialize(params[0])}`],
      getBroadcasterSubscribers: [`GET`, `/helix/subscriptions?${this.serialize(params[0])}`],
      // Tags
      getAllStreamTags: [`GET`, `/helix/tags/streams?${this.serialize(params[0])}`],
      getStreamTags: [`GET`, `/helix/streams/tags?${this.serialize(params[0])}`],
      replaceStreamTags: [`PUT`, `/helix/streams/tags`, params[0]],
      // Users
      getUsers: [`GET`, `/helix/users?${this.serialize(params[0])}`],
      getUsersFollows: [`GET`, `/helix/users/follows?${this.serialize(params[0])}`],
      updateUser: [`PUT`, `/helix/users?${this.serialize(params[0])}`],
      getUserExtensions: [`GET`, `/helix/users/extensions/list?${this.serialize(params[0])}`],
      getUserActiveExtensions: [`GET`, `/helix/users/extensions?${this.serialize(params[0])}`],
      updateUserExtensions: [`PUT`, `/helix/users/extensions`, params[0]],
      // Videos
      getVideos: [`GET`, `/helix/videos?${this.serialize(params[0])}`],
      getWebhookSubscriptions: [`GET`, `/helix/webhooks/subscriptions?${this.serialize(params[0])}`],
    }

    if (method[action] == undefined) {
      console.log('Unknown method.')
      return
    }

    return this.send(...method[action])
  }

  setRequestHeader(header, value) {
    self.headers[header] = value
  }

  serialize(obj) {
    var str = []
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        if (obj[p].constructor.name == 'Array') {
          for (let e of obj[p]) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(e))
          }
        } else {
          str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
        }
      }
    }
    return str.join("&")
  }
}

if (isNode()) {
  module.exports = HelixAPI
}