import { Client } from '../..';
import { PageInfo } from '../../types/types';
import { MediaStructure } from './MediaStructure';

/** Search results for an Anime or Manga. */
export class MediaSearchResults {
    pageInfo: PageInfo;
    Results: MediaStructure[];

    constructor(json: any, client: Client) {
        if (json.errors) throw new Error(JSON.stringify(json.errors));

        this.pageInfo = json.pageInfo;
        this.Results = json.Results.map((result: any) => new MediaStructure(result, client));
    }
}