import { Client } from '../..';
import { PageInfo } from '../../types/types';
import { StaffStructure } from './StaffStructure';

/** Search results for a Voice actor or production staff. */
export class StaffSearchResults {
    pageInfo: PageInfo;
    Results: StaffStructure[];

    constructor(json: any, client: Client) {
        if (json.errors) throw new Error(JSON.stringify(json.errors));

        this.pageInfo = json.pageInfo;
        this.Results = json.Results.map((result: any) => new StaffStructure(result, client));
    }
}