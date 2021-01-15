import { Client } from '../..';
import { StaffFavorite } from '../../queries/mutations';
import { Staff } from '../../types/types';

/** Represents a Voice actor or production staff. */
export class StaffStructure {
    info: Staff;
    client?: Client;

    constructor(json: any, client: Client) {
        if (json.errors) throw new Error(JSON.stringify(json.errors));
        this.info = json;
        if (client.token) this.client = client;
    }

    /**
     * Toggle this staff's favourited status.\
     * Requires you to be logged in.
     */
    async favourite() {
        if (!this.client?.token) throw new Error('This feature requires you to be logged in.');
        return await this.client.utilities.APIRequest(StaffFavorite, { id: this.info.id }, this.client);
    }
}