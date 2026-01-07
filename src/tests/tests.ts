import test from 'node:test';
import assert from 'node:assert/strict';
import { MediaBuilder } from '../index.js';

test('MediaBuilder Anime by Title', async () => {
    const builder = new MediaBuilder()
        .getAnime('My Hero Academia')
        .title()
        .episodes()
        .description();
    
    const media = await builder.request();

    assert.equal(media.id, 21459);
    assert.equal(media.title?.english, 'My Hero Academia');
});

test('Error Test', async () => {
    const builder = new MediaBuilder().getAnime('This Anime Doesn\'t Exist 1234567890');
    await assert.rejects(() => builder.request(), 'It should not find a real anime.');
});