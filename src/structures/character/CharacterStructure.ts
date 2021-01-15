import { Client } from '../..';
import { Character } from '../../types/types';
import { CharacterFavorite } from '../../queries/mutations';

/** Represents an Anime or Manga Character. */
export class CharacterStructure {
    info: Character;
    client?: Client;

    constructor(json: any, client: Client) {
        if (json.errors) throw new Error(JSON.stringify(json.errors));
        this.info = json;
        if (client.token) this.client = client;
    }

    /**
     * Toggle this character's favourited status.\
     * Requires you to be logged in.
     */
    async favourite() {
        if (!this.client?.token) throw new Error('This feature requires you to be logged in.');
        return await this.client.utilities.APIRequest(CharacterFavorite, { id: this.info.id }, this.client);
    }
}