require('dotenv').config();

import { Client } from './index';
const AniList = new Client(process.env.token);

(async function () {
    const user = await AniList.me();
    const stats = await user.getStats();
    console.log(stats);
})();