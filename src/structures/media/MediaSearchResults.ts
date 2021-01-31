import { Client } from '../../client/Client';
import { PageInfo } from '../../types/types';
import { Media } from './Media';

export class MediaSearchResults {
    /** The anilist.js Client */
    client: Client;

    pageInfo: PageInfo;

    /** The search results. */
    results: Media[];

    /** Represents an AniList Media's search results. */
    constructor(json: any, client: Client) {
        this.client = client;

        const media = json.Page;

        this.pageInfo = media.pageInfo;
        this.results = media.results;

        for (const result in this.results) {
            if (this.results[0].studios) {
                let studios = media.results[result].studios.edges;
    
                for (const index in studios) {
                    const studio = studios[index].node;
                    if (studio) studios[index] = { 
                        id: studio.id, 
                        name: studio.name, 
                        isMain: studios[index].isMain 
                    };
                }
                
                this.results[result].studios = studios;
            }
        }
    }
}