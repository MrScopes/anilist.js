import { Client } from '../..';
import { PageInfo } from '../../types/types';
import { CharacterStructure } from './CharacterStructure';

/** Search results for an Anime or Manga Character. */
export class CharacterSearchResults {
    pageInfo: PageInfo;
    Results: CharacterStructure[];

    constructor(json: any, client: Client) {
        if (json.errors) throw new Error(JSON.stringify(json.errors));
        this.pageInfo = json.pageInfo;
        this.Results = json.Results.map((result: any) => new CharacterStructure(result, client));
    }
}