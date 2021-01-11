require('dotenv').config();

import Client from './index';
const AniList = new Client(process.env.token);

(async function () {
    const me = await AniList.getMedia(1);
    me.update({ score: 10 });
})();