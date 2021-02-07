import { Utilities } from './Utilities';

import { Character, Media } from '..';
import { MediaSearchResults } from '../structures/media/MediaSearchResults';

import { MediaQuery, MediaSearchQuery } from '../queries/MediaQueries';
import { CharacterQuery } from '../queries/CharacterQueries';
import { MediaSearchVariables } from '../types/types';

export class Client {
    token?: string;
    utilities: Utilities;

    constructor(token?: string) {
        if (token) this.token = token;
        this.utilities = new Utilities();
    }

    async getMedia(id: number) {
        const data = await this.utilities.APIRequest(MediaQuery, { id });
        return new Media(data, this);
    }

    async searchMedia(variables: MediaSearchVariables) {
        const data = await this.utilities.APIRequest(MediaSearchQuery, variables);
        return new MediaSearchResults(data, this);
    }

    async getCharacter(id: number) {
        const data = await this.utilities.APIRequest(CharacterQuery, { id });
        return new Character(data, this);
    }
}