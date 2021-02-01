import { Client } from '../../client/Client';
import { PageInfo } from '../../types/types';
import { Media } from './Media';

export class MediaSearchResults {
    client: Client;

    pageInfo: PageInfo;
    results: Media[];

    /** Represents search results for Anime or Manga. */
    constructor(data: any, client: Client) {
        this.pageInfo = data.pageInfo;
        this.results = data.results.map(result => new Media(result, client));
    }
}