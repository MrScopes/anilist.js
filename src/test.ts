import { Client } from './index';
const client = new Client();

(async () => {
    const media = await client.searchMedia({ perPage: 3, genre_in: ['ACTION'] });
    console.log(media.results[0].studios);
})();