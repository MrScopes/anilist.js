import { Client } from '../..';
import { Genre, Tag } from '../../types/types';

import { MediaGenres, MediaStudios, MediaTags, MediaMeta, MediaEntryQuery } from '../../queries/MediaQueries';
import { FuzzyDate, MediaFormat, MediaSeason, MediaStatus } from '../../types/types';
import { Base } from '../Base';

export class Media extends Base {
    title: { 
        romaji: string;
        english?: string;
        native?: string;
        userPreferred: string;
    }
    format: MediaFormat;
    seasonYear: number;
    episodes?: number;
    chapters?: number;
    volumes?: number;

    constructor(data: any, client: Client) {
        super(client, data.id);

        this.title = data.title;
        if (data.format) this.format = data.format;
        if (data.seasonYear) this.seasonYear = data.seasonYear;
        if (data.episodes) this.episodes = data.episodes;
        if (data.chapters) this.chapters = data.chapters;
        if (data.volumes) this.volumes = data.volumes;
    }

    async getMeta(): Promise<{
        description: string;
        status: MediaStatus;
        coverImage: {
            extraLarge: string; 
            large: string;
            medium: string;
            color: string;
        };
        bannerImage: string;
        startDate: FuzzyDate;
        endDate: FuzzyDate;
        season: MediaSeason;
    }> {
        return await this.client.utilities.APIRequest(MediaMeta, { id: this.id });
    }

    async getStudios(): 
        Promise<{
            id: number;
            name: string;
            isMain: boolean;
        }[]> {

        const data = await this.client.utilities.APIRequest(MediaStudios, { id: this.id });

        const studios = data.studios.edges;

        for (const index in studios) {
            const studio = studios[index].node;
            if (studio) studios[index] = { 
                id: studio.id, 
                name: studio.name, 
                isMain: studios[index].isMain 
            };
        }
        
        return studios;
    }

    async getGenres(): Promise<Genre[]> {
        return (await this.client.utilities.APIRequest(MediaGenres, { id: this.id })).genres;
    }

    async getTags(): 
        Promise<{
            name: Tag;
            isMediaSpoiler: boolean;
        }[]> {

        return (await this.client.utilities.APIRequest(MediaTags, { id: this.id })).tags;
    }

    async getMediaEntry(APIToken?: string): Promise<number> {
        return (await this.client.utilities.APIRequest(MediaEntryQuery, { id: this.id }, APIToken || this.client.token)).mediaListEntry;  
    }
}