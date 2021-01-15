import { Client } from '../..';
import { StudioFavorite } from '../../queries/mutations';
import { Studio } from '../../types/types';

/** Represents an Animation or production company. */
export class StudioStructure {
    info: Studio;
    client?: Client;

    constructor(json: any, client: Client) {
        if (json.errors) throw new Error(JSON.stringify(json.errors));
        this.info = json;
        if (client.token) this.client = client;
    }

    /**
     * Toggle this studio's favourited status.\
     * Requires you to be logged in.
     */
    async favourite() {
        if (!this.client?.token) throw new Error('This feature requires you to be logged in.');
        return await this.client.utilities.APIRequest(StudioFavorite, { id: this.info.id }, this.client);
    }  
}