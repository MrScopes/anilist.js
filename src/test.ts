import { Client } from './index';
const client = new Client();

client.getMedia(1).then(media => {
    console.log(media);
});