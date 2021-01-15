import { Client } from '../..';
import { PageInfo } from '../../types/types';
import { UserStructure } from './UserStructure';

/** Represents search results for an AniList User. */
export class UserSearchResults {
    pageInfo: PageInfo;
    Results: UserStructure[];

    constructor(json: any, client: Client) {
        if (json.errors) throw new Error(JSON.stringify(json.errors));

        this.pageInfo = json.pageInfo;
        this.Results = json.Results.map((result: any) => new UserStructure(result, client));
    }
}