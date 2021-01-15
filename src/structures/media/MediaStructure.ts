import { Client } from '../..';
import { Media, MutationSaveMediaListEntryArgs } from '../../types/types';
import { UpdateEntry, DeleteEntry, AnimeFavorite, MangaFavorite } from '../../queries/mutations';

/** Represents an Anime or Manga. */
export class MediaStructure {
    info: Media;
    client?: Client;

    constructor(json: any, client: Client) {
        if (json.errors) throw new Error(JSON.stringify(json.errors));
        this.info = json;
        if (client.token) this.client = client;
    }

    /**
     * Update an entry.\
     * **REQUIRES YOU TO BE LOGGED IN!**
     * @param entry what to update
     * @example
     * .updateEntry({ score: 80, completedAt: Date.now() });
     */
    async updateEntry(entry: MutationSaveMediaListEntryArgs) {
        if (!this.client?.token) throw new Error('This feature requires you to be logged in.');

        Object.assign(entry, { mediaId: this.info.id });
        return await this.client.utilities.APIRequest(UpdateEntry, entry, this.client);
    }

    /**
     * Remove this from your media entries.\
     * Requires you to be logged in.
     */
    async deleteEntry() {
        if (!this.client?.token) throw new Error('This feature requires you to be logged in.');
        return await this.client.utilities.APIRequest(DeleteEntry, { id: this.info.mediaListEntry?.id }, this.client);
    }

    /**
     * Toggle this media's favourited status.\
     * Requires you to be logged in.
     */
    async favourite() {
        if (!this.client?.token) throw new Error('This feature requires you to be logged in.');

        let mutation = AnimeFavorite;
        if (this.info.format === 'MANGA') mutation = MangaFavorite;

        return await this.client.utilities.APIRequest(mutation, { id: this.info.id }, this.client);
    }

}