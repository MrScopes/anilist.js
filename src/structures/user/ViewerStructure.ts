import { Client } from '../..';
import { ViewerUpdate } from '../../queries/mutations';
import { MutationUpdateUserArgs } from '../../types/types';
import { UserStructure } from './UserStructure';

/** Represents the client user. */
export class ViewerStructure extends UserStructure {
    constructor(json: any, client: Client) {
        super(json, client);
    }

    /**
     * Update the authorized user.\
     * Requires you to be logged in.
     * @param entry what to update
     * @example
     * .updateUser({ about: 'Hi' });
     */
    async updateUser(entry: MutationUpdateUserArgs) {
        if (!this.client?.token) throw new Error('This feature requires you to be logged in.');
        return await this.client.utilities.APIRequest(ViewerUpdate, entry, this.client);
    }
}