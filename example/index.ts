import jsHelix from "../src"; // "jshelix"

const HELIX_CLIENT_ID = process.env.HELIX_CLIENT_ID;
const HELIX_TOKEN = process.env.HELIX_TOKEN;

const hapi = jsHelix(HELIX_CLIENT_ID!, HELIX_TOKEN);

hapi
  .getUsers({ login: "Sighmir" })
  .then((users) => {
    hapi
      .getUsersFollows({ from_id: users.data[0].id })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
