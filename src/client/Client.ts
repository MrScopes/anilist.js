import { Utilities } from './Utilities';

import { Media, MediaSearchResults, MediaSearchVariables } from '..';

import { MediaQuery, MediaSearchQuery } from '../queries/MediaQueries';

/** Represents an anilist.js Client. */
export class Client {
    /** The Client's token. */
    token?: string;

    /** The Client's utilities. */
    utilities: Utilities;

    /**
     * Creates a new Client.\
     * You can get your Api Token @ https://anilist-token.glitch.me/
     * @param token Client's AniList token.
     */
    constructor(token?: string) {
        if (token) this.token = token;
        this.utilities = new Utilities();
    }

    /**
     * Gets an AniList Anime or Manga.
     * @param id The Media's ID.
     */
    async getMedia(id: number) {
        const data = await this.utilities.APIRequest(MediaQuery, { id });
        return new Media(data, this);
    }

    /**
    * Gets the media with the maching variables.
    * @param variables filter variables
    * @example
    * .searchMedia({ format: 'OVA', includedTags: ['Body Horror'] })
    */
    async searchMedia(variables: MediaSearchVariables) {
        const data = await this.utilities.APIRequest(MediaSearchQuery, variables);
        return new MediaSearchResults(data, this);
    }
}