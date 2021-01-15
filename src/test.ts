require('dotenv').config();

import { Client } from './index';
const AniList = new Client(process.env.token);

(async function () {
    const media = await AniList.searchMedia({ genre_in: ['ACTION'] });
    console.log(media);
})();