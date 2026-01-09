import test from 'node:test';
import assert from 'node:assert/strict';
import { MediaBuilder, QueryBuilder } from 'anilist.js';

test('MediaBuilder Anime by Title', async () => {
    const builder = new MediaBuilder()
        .getAnime('My Hero Academia')
        .title()
        .episodes()
        .description();
    
    const media = await builder.request();

    console.log(media);

    assert.equal(media.id, 21459);
    assert.equal(media.title?.english, 'My Hero Academia');
});

test('Error Test', async () => {
    const builder = new MediaBuilder().getAnime('This Anime Doesn\'t Exist 1234567890')
    await assert.rejects(() => builder.request(), 'It should not find a real anime.');
});

test('QueryBuilder Test', () => {
    const builder = new QueryBuilder()
        .setRoot('query')

        .addField('Media', { search: 'My Hero Academia', type: ':ANIME' })
        .addSubObject('Media', 'title', ['english', 'native', 'romaji'])
        .addSubField('Media', 'episodes')
        .addSubField('Media', 'description')

        .addField('Character', { id: 100 })
        .addSubObject('Character', 'name', ['full', 'native'])
        .addSubField('Character', 'age');

    const query = builder.build();

    assert.equal(query,
    `query { Media(search: "My Hero Academia", type: ANIME) { title { english native romaji } episodes description } Character(id: 100) { name { full native } age } }`);
});