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

        const media = json.Page || json;

        this.pageInfo = media.pageInfo;

        this.results = media.results.map(result => new Media(result, client));
    }
}