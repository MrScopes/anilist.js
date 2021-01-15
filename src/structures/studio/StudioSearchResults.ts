import { Client } from '../..';
import { PageInfo } from '../../types/types';
import { StudioStructure } from './StudioStructure';

/** Search results for an Animation or production company. */
export class StudioSearchResults {
    pageInfo: PageInfo;
    Results: StudioStructure[];

    constructor(json: any, client: Client) {
        if (json.errors) throw new Error(JSON.stringify(json.errors));

        this.pageInfo = json.pageInfo;
        this.Results = json.Results.map((result: any) => new StudioStructure(result, client));
    }
}