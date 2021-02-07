import { Client,  } from './index';
const client = new Client();

// Media test
client.getMedia(1).then(media => console.log(media.title.romaji));

// Character test
client.getCharacter(1).then(character => console.log(character.name.full));