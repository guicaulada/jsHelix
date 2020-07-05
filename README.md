# jsHelix

[![Pipeline Status](https://github.com/Sighmir/jsHelix/workflows/CI/CD/badge.svg?branch=develop)](https://github.com/Sighmir/jsHelix/actions?query=workflow%3ACI%2FCD+branch%3Adevelop) [![Coverage Status](https://codecov.io/gh/Sighmir/jsHelix/branch/develop/graph/badge.svg)](https://codecov.io/gh/Sighmir/jsHelix/branch/develop) [![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?branch=develop&project=jsHelix&metric=alert_status)](https://sonarcloud.io/dashboard?branch=develop&id=jsHelix)

**jsHelix** is a Typescript wrapper to the [Twitch Helix API](https://dev.twitch.tv/docs/api/reference/).

## Requirements

- Tested against New Twitch API (Helix)
- For Node.js you will need the [xmlhttprequest](https://www.npmjs.com/package/xmlhttprequest) library.
- A Twitch token, get yours here: https://twitchtokengenerator.com

## Documentation

### Getting Started

If you are using Node.js, install jsHelix using npm:

```bash
$ npm install jshelix
```

You can now require and use jshelix like so:

```ts
import jsHelix from "jshelix";

const HELIX_CLIENT = process.env.HELIX_CLIENT;
const HELIX_TOKEN = process.env.HELIX_TOKEN;

const hapi = jsHelix(HELIX_CLIENT!, HELIX_TOKEN);

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
```

Refer to the [Helix API Documentation](https://dev.twitch.tv/docs/api/reference/) and the [jsHelix Example](https://github.com/Sighmir/jsHelix/tree/master/example) for more information.

### Browser

You can also load this script on your browser like so:

```html
<script src="https://cdn.jsdelivr.net/npm/jshelix/dist/bundle.js"></script>
```

You can now use the class HelixAPI normally on the page, like you would on Node.js.

## License

```
jsHelix - Helix API Javascript Library.
Copyright (C) 2019  Guilherme Caulada (Sighmir)

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
```
