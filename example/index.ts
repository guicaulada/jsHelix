/* eslint-disable @typescript-eslint/no-non-null-assertion */
import jsHelix from "../src"; // "jshelix"

const TWITCH_CLIENT = process.env.TWITCH_CLIENT;
const TWITCH_TOKEN = process.env.TWITCH_TOKEN;

const hapi = jsHelix(TWITCH_CLIENT!, TWITCH_TOKEN);

hapi
  .getUsers({ login: "Sighmir" })
  .then((users) => {
    hapi
      .getUserFollows({ from_id: users.data![0].id })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
