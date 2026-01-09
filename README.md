![Downloads](https://img.shields.io/npm/dt/anilist.js) ![Dependences](https://img.shields.io/librariesio/release/npm/anilist.js) ![Size](https://img.shields.io/npm/unpacked-size/anilist.js)

![](https://nodei.co/npm/anilist.js.png)

## Table of Contents
- [Information](#information)
- [Code](#code)
- [Example Usage](#example-usage)

# Information
anilist.js was originally for my discord bot, but now it's sort of just a passion project.
Feel free to make an issue or contact me on discord with any questions.
Everything is written in typescript and mostly typed out manually.
Co-Pilot assisted with repitition, if there's any weird edge cases contact me.

Overhead is extremely low (see [tests/overhead.ts](src/tests/overhead.ts))\
Builder pipeline overhead: 532.630ms total (5.326µs/iter)\
Manual pipeline overhead: 357.486ms total (3.575µs/iter)\
~**1.7 microseconds of extra work per request**, or about **<0.01% of a real HTTP request**.\
This test is 100k iterations of having dummy data and using the builder vs manually using fetch.

# Code
The core code has changed significantly from old versions of this wrapper, now everything is a builder to trim requests and clean it up in general. I used to have just a simple `getMedia` which took an ID, but I had no way of allowing users to customize what data they wanted. So now, I use a builder. Example:
`new MediaBuilder().getAnime('One Piece').title().episodes().request()`
This will return `Promise<Media>`, where `Media` contains the properties (in this situation, `id`, `title`, and `episodes`). There's also stuff you can do if you pass in your API Token, example `#Media.favorite('token')`, or if you pass in token to `MediaBuilder()` it will save it to the builder.

# Example Usage
```ts
import { MediaBuilder } from 'anilist.js';

const builder = new MediaBuilder()
    .getAnime('My Hero Academia')
    .title() // adds { title: { english: 'My Hero Academia', romaji: 'Boku No Hero Academia', native: '...', userPreferred: 'works if token is passed in' }
    .episodes(); // adds { episodes: number }

const media = await builder.request();

console.log(`${media.title?.english} has ${media.episodes} episodes.`);
```

#### Mutations
```ts
const builder = new MediaBuilder('MY API TOKEN')
    .getManga(85486)
    .title()
    .chapters()
    .volumes()
    .description()
    .staff()
    .startDate()
    .endDate()
    .isFavourite();
    
const media = await builder.request();

console.log(`
    Let's check ${media.title.romaji}!
    It's written by ${media.staff[0].name.full} (${media.staff.length} total staff members).
    It must have taken a while to write ${media.volumes} volumes and ${media.chapters} chapters.
    The story started on ${media.startDate.year}-${media.startDate.month}-${media.startDate.day} and ended on ${media.endDate.year}-${media.endDate.month}-${media.endDate.day}.
    It's favourited by ${media.favourites} users.
`);

if (media.isFavourite) {
    console.log('I already have it favourited.');
} else {
    await media.toggleFavourite();
    console.log(`I favourited ${media.title.english}.`);
}

>        Let's check Boku no Hero Academia!
>        It's written by Kouhei Horikoshi (25 total staff members).
>        It must have taken a while to write 42 volumes and 432 chapters.
>        The story started on 2014-7-7 and ended on 2024-8-5.
>        It's favourited by 9485 users. I'll also favourite it! 
>        ...
```

#### Query Builder
A helpful utility for building graphql queries is built in and used internally.
```ts
const builder = new QueryBuilder()
    .setRoot('query') // or 'mutation'

    .addField('Media', { search: 'My Hero Academia', type: ':ANIME' }) // : in a string indicates GraphQL Enum
    .addSubObject('Media', 'title', ['english', 'native', 'romaji']) // or just addSubField('...', 'title { english native romaji }')
    .addSubField('Media', 'episodes')
    .addSubField('Media', 'description')

    .addField('Character', { id: 100 })
    .addSubObject('Character', 'name', ['full', 'native'])
    .addSubField('Character', 'age');

const query = builder.build();

/*
query { 
    Media(search: "My Hero Academia", type: ANIME) { 
        title { 
            english 
            native 
            romaji 
        } 
        episodes 
        description 
    } 
     
    Character(id: 100) { 
        name { 
            full 
            native 
        } 
        age 
        } 
    }
}
*/
```

# Error Handling
Errors are simple to handle. Here's an example response object.
```ts
type Response = {
	query?: string;
	errors?: { 
		message: string;
		status: number;
		locations: { 
			line: number; 
			column: number; 
		}[];
		validation?: Record<string, string[]>;
	}[];
	data?: any;
};
```
Errors will be set if there's an error in the request, and the promise will be rejected.\
Data will be set when the request is successful, etc. Data won't need to be handled by you unless you manually make the request. All of the structures will handle the data for you.\
Let's force a dummy error:
```ts
    const builder = new MediaBuilder().getAnime('ThisAnimeDoesNotExist12345')

    try {
        const media = await builder.request();
        console.log(media.id);
    } catch (error) {
        console.log('Caught error as expected:', error);
    }

> Caught error as expected: {
>  query: 'query { Media(search: "ThisAnimeDoesNotExist12345", type: ANIME) { id } }',
>  errors: [ { message: 'Not Found.', status: 404, locations: [Array] } ]
> }
```
