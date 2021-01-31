![Downloads](https://img.shields.io/npm/dt/anilist.js) ![Dependences](https://img.shields.io/david/MrScopes/anilist.js)

![](https://nodei.co/npm/anilist.js.png)

## Table of Contents
- [About](#about)
- [Notes](#notes)
- [Example Usage](#example-usage)

## About
anilist.js was originally created for [AniSearch](https://github.com/MrScopes/AniSearch) by myself (MrScopes#5548), but was later adapted from javascript to typescript. It has since seen 4 recodes, 2 of the latter being in typescript.
- Why use this over other wrappers?
    - anilist.js is written 100% in typescript so there's auto completions for EVERYTHING including genres and tags.
    - anilist.js is completely promise based and fully object oriented.
    - this isn't exactly a reason to use it, but I love learning and communication so I respond to any issues and pull requests as soon as I see them. don't be afraid to report ANY issues or suggestions in the repo or contact me on discord.

## Notes
- API Key
    - An API Key isn't required but is required for certain methods such as `Media#updateEntry()`.
    - Getting your API Key is a somewhat difficult process, so I made an easy, open-source website for getting it: https://anilist-token.glitch.me. It's hosted on glitch so you know 100% the code is safe.
- Exported Types
    - All structures are exported, check src/index for everything that is exported.
- v1 -> v2
    - v1 code will remain on the v1 branch permanently. this process repeats with v2, and so forth. master will always contain the current version.
    - anilist.js now operates under an MIT license.
    - tsconfig has been cleaned up.
    - package.json and yarn.lock no longer include devDependencies.
    - Client#utilities no longer exists, Client now extends BaseClient, and there's now BaseClient#APIRequest() and it uses BaseClient#token
    - a lot of stuff is streamlined:
        - manually typed interfaces
        - edges and nodes reduced to simple arrays, example `.studios.edges.nodes[0].id` is `.studios[0].id`
        - APIRequest now returns the json and is handled in each structure, instead of \<Response>.\<DataType>
        - Media#info.property, Character#info.property, etc. has been reduced to Media#property, ex:
        ```ts
        client.getMedia(1).then(media => console.log(media.title)) // instead of console.log(media.info.title)
        ```


## Example Usage
```js
import { Client } from 'anilist.js';
const client = new Client(/* Valid API Token (Optional) */);

(async () => {

    const search = await client.searchMedia({ search: 'My Hero Academia' });

    console.log(search.results.map(result => result.title.english || result.title.romaji));
    // ['My Hero Academia', 'My Hero Academia Season 2', ...]

    search.results[0].favourite(); // requires api token in client constructor, or pass in method as .favourite({ token: xxx })

})();
```