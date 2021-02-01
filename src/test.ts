import { Client } from './index';
const client = new Client();

(async () => {
    const media = await client.getMedia(1);

    const genres = await media.getGenres();
    const tags = await media.getTags();
    const studios = await media.getStudios();
    const meta = await media.getMeta();

    //@ts-ignore
    media.genres = genres;
    //@ts-ignore
    media.tags = tags;
    //@ts-ignore
    media.studios = studios;
    //@ts-ignore
    media.meta = meta;

    console.log(media);
})();