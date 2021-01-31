import { Client } from '../../client/Client';

export class Media {
    /** The anilist.js Client */
    client: Client;

    /** The media's id */
    id: number;
    /** The media's titles */
    title: { 
        /** Romaji Title */
        romaji: string;
        /** English title */
        english?: string;
        /** Native title */
        native?: string;
        /** User preferred title */
        userPreferred?: string
    }
    /** The media's studios */
    studios?: {
        /** The studio's id */
        id: number;
        /** The studio's name */
        name: string;
        /** If this studio is a main studio of the media. */
        isMain: boolean;
    }[]

    /** Represents an AniList Media. */
    constructor(json: any, client: Client) {
        this.client = client;

        const media = json.Media;

        this.id = media.id;
        this.title = media.title;
        
        if (media.studios) {
            let studios = media.studios.edges;

            for (const index in studios) {
                const studio = studios[index].node;
                if (studio) studios[index] = { 
                    id: studio.id, 
                    name: studio.name, 
                    isMain: studios[index].isMain 
                };
            }
            
            this.studios = studios;
        }
    }
}