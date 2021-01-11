import Client from '../..';
import { Media, MutationSaveMediaListEntryArgs } from '../../types/types';
import { MediaUpdate } from '../../queries/mutations/media/MediaUpdate';
import { AnimeFavorite } from '../../queries/mutations/media/AnimeFavourite';
import { MangaFavorite } from '../../queries/mutations/media/MangaFavourite';

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
     * .update({ score: 80, completedAt: Date.now() });
     */
    async update(entry: MutationSaveMediaListEntryArgs) {
        if (!this.client?.token) throw new Error('This feature requires you to be logged in.');

        Object.assign(entry, { mediaId: this.info.id });
        const json = await this.client.utilities.APIRequest(MediaUpdate, entry, this.client);
        if (json.errors) throw new Error(JSON.stringify(json.errors));

        return json;
    }

    /**
     * Toggle this media's favourited status.\
     * Requires you to be logged in.
     */
    async favourite() {
        if (!this.client?.token) throw new Error('This feature requires you to be logged in.');

        let mutation = AnimeFavorite;
        if (this.info.format === 'MANGA') mutation = MangaFavorite;

        const json = await this.client.utilities.APIRequest(mutation, { id: this.info.id }, this.client);
        if (json.errors) throw new Error(JSON.stringify(json.errors));

        return json;
    }
}