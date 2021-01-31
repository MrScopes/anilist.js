import { Client } from './index';
const client = new Client();

(async () => {
    const media = await client.searchMedia({ genre_in: ['ACTION'] });
    console.log(media);
})();