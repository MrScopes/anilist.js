![](https://nodei.co/npm/anilist.js.png?downloads=true)\
NPM module for communicating with Anilist.\
Find any bugs or have any suggestions?\
Create an issue on the repo or contact me on Discord @MrScopes#5548

## Table of Contents
- [Documentation](#documentation)
- [Notes](#notes)

## Example
```js
const { Client } = require('anilist.js');
const AniList = new Client('API TOKEN'); // token is only required for some features

(async () => {

    // list the 3 most popular MHA seasons
    const search = await AniList.searchMedia({ search: 'My Hero Academia', format: 'TV', perPage: 3, sort: 'POPULARITY_DESC' });
    console.log(search.Results.map(result => result.info.title));

    // toggle favourite status for naruto (character)
    const characters = await AniList.searchCharacters({ search: 'Naruto Uzumaki' });
    const naruto = characters.Results[0];
    await naruto.favourite(); // this requires an api token

})();
```    

## Documentation
Note: `variables` parameters are 100% auto completion compatible.\
These docs are most likely temporary.\
View the [example usage](#example).\
_Italics_ represents authorization required.
- Methods:
    - `.getMedia(id)`
    - `.searchMedia(variables)`
    <br><br>
    - `.getCharacter(id)`
    - `.searchCharacters(variables)`
    <br><br>
    - _`.me()`_ -> Currently authorized user
    - `.getUser(id)`
    - `.searchUsers(variables)`
    <br><br>
    - `.getStaff(id)`
    - `.searchStaff(variables)`
    <br><br>
    - `.getStudio(id)`
    - `.searchStudios(variables)`

- Structures:
    - Search Results:
        - .Results[\<StructureType>]
        - .pageInfo
    <br><br>    
    - `Media >`
        - .info
        - _.updateEntry(variables)_
        - _.deleteEntry()_
        - _.favourite()_
    <br><br>    
    - `Character >`
        - .info
        - _.favourite()_
    <br><br>
    - _`Viewer (EXTENDS User) >`_ represents the current authorized user
        - _.updateUser(variables)_
    - `User >`
        - .info
        - _.follow()_
        - .getStats()
    <br><br>    
    - `Staff >`
        - .info
        - _.favourite()_
    <br><br>    
    - `Studio >`
        - .info
        - _.favourite()_              

## Notes:
- This is my first large npm module. So some things might not work 100% as intended.

- The JSON output is massive, so keep the following in mind:
    - A lot of data is taken out, for example, in user info: statistics is taken out
    - nodes are taken out. use `edges[] > node`
    - for `edges[] > node`, only important info is left in like `id`, `title (or name)`

- API Key:
    - API Keys are needed for user-specific methods, but you can still get media, characters, etc.
    - Get yours @ [https://anilist-token.glitch.me/](https://anilist-token.glitch.me/). This is secure, created by me, and open source.

- Types:
    - Types are mainly auto generated, but not every property is 100% supported (this is mainly so the json isn't more massive than it is).