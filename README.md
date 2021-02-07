![Downloads](https://img.shields.io/npm/dt/anilist.js) ![Dependences](https://img.shields.io/david/MrScopes/anilist.js)

![](https://nodei.co/npm/anilist.js.png)

## Table of Contents
- [About](#about)
- [Notes](#notes)
- [Example Usage](#example-usage)

## About
anilist.js was originally created for [AniSearch](https://github.com/MrScopes/AniSearch) by myself (MrScopes#5548), but was later adapted from javascript to typescript. It has since seen 4 recodes, 2 of the latter being in typescript.
- Why use this over other wrappers?
    - anilist.js is written 100% in typescript so there's auto completions for EVERYTHING.
    - anilist.js is completely promise based and fully object oriented.
    - this isn't exactly a reason to use it, but I love learning and communication so I respond to any issues and pull requests as soon as I see them. don't be afraid to report ANY issues or suggestions in the repo or contact me on discord.

## Notes
- API Key
    - An API Key isn't required but is required for certain methods such as `Media#updateEntry()`.
    - Getting your API Key involves creating an oauth client, so I made an easy, open-source website for getting your key: https://anilist-token.glitch.me. It's hosted on glitch so you know 100% the code is safe.
- Exported Structures
    - Major structures are exported through the module:
        - `Client`
        - `Media`
        - `Character`
    - You can access the custom typed interfaces via `Types.<>`
- v1 -> v2
    - There's a lot of changes from v1 to v2. Some of the changes include:
        - anilist.js now operates under an MIT license.
        - reduced response sizes for ALL structures
        - removed the `.info` property from EVERY structure


## Example Usage
```js
import { Client } from 'anilist.js';
const client = new Client();

client.searchMedia({ search: 'My Hero Academia' }).then(response => {
    console.log(response.results.map(result => result.title.english));
    // ['My Hero Academia', 'My Hero Academia Season 2', ...]

    response.results[0].favourite();
    // requires api token in client constructor, or pass in method as .favourite({ token: xxx })
});
```
or resolve with await instead of callbacks
```ts
const media = await client.getMedia(1);
const { description } = await media.getMeta();

console.log(`
    Title: ${media.title.romaji}
    Description: ${description}
`);
```