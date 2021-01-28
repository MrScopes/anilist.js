import { Client, Media } from './index';
const client = new Client();

(async () => {
    const media = await client.getMedia(1);
    console.log(`${media.studios[0].name} is ${media.studios[0].isMain ? 'the' : 'not the'} main studio for ${media.title.romaji}.`);
})();