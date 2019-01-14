# Helix.js
A wrapper for the new Twitch API.  

This library is mapped to the https://dev.twitch.tv/docs/api/reference.  

## Installation

Use `npm install @sighmir/helix.js`

## Example

```js
let Helix = require("@sighmir/helix.js");

let helix = new Helix('oauth:your_oauth_token')
let printStreams = async () => {
  console.log(await helix.getStreams({user_login: 'username'}))
}

printStreams()
```

## License
```
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
```
