# v2 is incomplete!

### v1 -> v2 (major changes)
- anilist.js now operates under an MIT license.
- tsconfig has been cleaned up.
- package.json and yarn.lock no longer include devDependencies.
- Client#utilities no longer exists, Client now extends BaseClient, and there's now BaseClient#APIRequest() and it uses BaseClient#token
- A lot of stuff will be streamlined:
    - manually typed interfaces
    - edges and nodes reduced to simple arrays, example `.studios.edges.nodes[0].id` is `.studios[0].id`
    - Utilities#APIRequest now returns the json and is handled in each structure, instead of \<Response>.\<DataType>
    - Media#info.property, Character#info.property, etc. has been reduced to Media#property

an example of these changes:
```ts
const media = await client.getMedia(1);
console.log(`${media.studios[0].name} is ${media.studios[0].isMain ? 'the' : 'not the'} main studio for ${media.title.romaji}.`); 
// Sunrise is the main studio for Cowboy Bebop.
```
before this would have been
```ts
const media = await client.getMedia(1);
console.log(`${media.studios.edges[0].node.name} is ${media.studios.edges[0].isMain ? 'the' : 'not the'} main studio for ${media.info.title.romaji}.`); 
// Sunrise is the main studio for Cowboy Bebop.
```