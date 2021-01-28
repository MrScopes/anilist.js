import { BaseClient } from './BaseClient';
import { Media } from '../structures/Media';

import * as Queries from '../queries/queries';

/** Represents an anilist.js Client. */
export class Client extends BaseClient {
    /**
     * Creates a new Client.\
     * You can get your Api Token @ https://anilist-token.glitch.me/
     * @param token Client's AniList token.
     */
    constructor(token?: string) {
        super(token);
    }

    /**
     * Gets an AniList Anime or Manga.
     * @param id The Media's ID.
     */
    async getMedia(id: number) {
        const req = await this.APIRequest(Queries.MediaQuery, { id });
        return new Media(req, this);
    }
}