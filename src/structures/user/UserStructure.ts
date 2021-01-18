import { Client } from '../..';
import { UserFollow } from '../../queries/mutations';
import { UserStatsQuery } from '../../queries/queries';
import { User, UserStatisticTypes } from '../../types/types';

/** Represents an AniList User. */
export class UserStructure {
    info: User;
    client?: Client;

    constructor(json: any, client: Client) {
        if (json.errors) throw new Error(JSON.stringify(json.errors));
        this.info = json;
        if (client.token) this.client = client;
    }
    
    /**
     * Follow this user.\
     * Requires you to be logged in.
     */
    async follow() {
        if (!this.client?.token) throw new Error('This feature requires you to be logged in.');
        return this.client.utilities.APIRequest(UserFollow, { userId: this.info.id }, this.client);
    }

    /** Get this user's AniList stats. */
    async getStats(): Promise<UserStatisticTypes> {
        return this.client?.utilities.APIRequest(UserStatsQuery, { id: this.info.id }, this.client)
    }
}