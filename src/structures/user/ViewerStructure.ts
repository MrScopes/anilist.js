import Client from '../..';
import { ViewerUpdate } from '../../queries/mutations/user/viewer/ViewerUpdate';
import { MutationUpdateUserArgs, User } from '../../types/types';

/** Represents the client user. */
export class ViewerStructure {
    info: User;
    client?: Client;

    constructor(json: any, client: Client) {
        if (json.errors) throw new Error(JSON.stringify(json.errors));
        this.info = json;
        if (client.token) this.client = client;
    }

    /**
     * Update the authorized user.\
     * Requires you to be logged in.
     * @param entry what to update
     * @example
     * .update({ about: 'Hi' });
     */
    async update(entry: MutationUpdateUserArgs) {
        if (!this.client?.token) throw new Error('This feature requires you to be logged in.');

        const json = await this.client.utilities.APIRequest(ViewerUpdate, entry, this.client);
        if (json.errors) throw new Error(JSON.stringify(json.errors));

        return json;
    }
}