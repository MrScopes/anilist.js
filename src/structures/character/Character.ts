import { Client } from '../..';
import { CharacterMeta } from '../../queries/CharacterQueries';
import { Base } from '../Base';

export class Character extends Base {
    name: { 
        first: string;
        last: string;
        full: string;
        native: string;
    }
    
    /** Represents an AniList Anime or Manga. */
    constructor(data: any, client: Client) {
        super(client, data.id);

        this.name = data.name;
    }

    /** Get some missing useful info. */
    async getMeta(): Promise<{
        description: string;
        image: {
            large: string;
            medium: string;
        }
        isFavourite: boolean;
        favourites: number;
        modNotes: string;
    }> {
        return await this.client.utilities.APIRequest(CharacterMeta, { id: this.id });
    }
}