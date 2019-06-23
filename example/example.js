let HelixAPI = require('..') //jshelix

const HELIX_TOKEN = process.env.HELIX_TOKEN
const HELIX_LOGIN = process.env.HELIX_LOGIN

let hapi = new HelixAPI(HELIX_TOKEN)

hapi.getUsers({ login: HELIX_LOGIN }).then((users) => {
  hapi.getUsersFollows({ from_id: users.data[0].id }).then((data) => {
    console.log(data)
  }).catch(err => console.log(err))
}).catch(err => console.log(err))
