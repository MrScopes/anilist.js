import { Utilities } from './Utilities';

import { Character, Media } from '..';
import { MediaSearchResults } from '../structures/media/MediaSearchResults';

import { MediaQuery, MediaSearchQuery } from '../queries/MediaQueries';
import { CharacterQuery } from '../queries/CharacterQueries';
import { MediaSearchVariables } from '../types/types';

/** Represents an anilist.js Client. */
export class Client {
    token?: string;
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

    /**
     * Gets an AniList Anime or Manga character.
     * @param id The Character's ID.
     */
    async getCharacter(id: number) {
        const data = await this.utilities.APIRequest(CharacterQuery, { id });
        return new Character(data, this);
    }
}