import { Client, Genre, Tag } from '../..';

import { MediaGenres, MediaStudios, MediaTags, MediaMeta } from '../../queries/queries';
import { FuzzyDate, MediaFormat, MediaSeason, MediaStatus } from '../../types/types';

export class Media {
    client: Client;

    id: number;
    title: { 
        romaji: string;
        english?: string;
        native?: string;
        userPreferred?: string
    }

    /** Represents an AniList Anime or Manga. */
    constructor(data: any, client: Client) {
        this.client = client;

        this.id = data.id;
        this.title = data.title;
    }

    /** Get `description`, `format`, `status`, `coverImage`, `startDate`, `endDate`, `season`, and `seasonYear`. */
    async getMeta(): Promise<{
        description: string;
        format: MediaFormat;
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
        seasonYear: number;
    }> {
        return await this.client.APIRequest(MediaMeta, { id: this.id });
    }

    /** Get this Media's studios. */
    async getStudios(): 
        Promise<{
            id: number;
            name: string;
            /** If the studio is a main studio for this media. */
            isMain: boolean;
        }[]> {

        const data = await this.client.APIRequest(MediaStudios, { id: this.id });

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

    /** Get this Media's genres. */
    async getGenres(): Promise<Genre[]> {
        return (await this.client.APIRequest(MediaGenres, { id: this.id })).genres;
    }

    /** Get this Media's tags. */
    async getTags(): 
        Promise<{
            name: Tag;
            isMediaSpoiler: boolean;
        }[]> {

        return (await this.client.APIRequest(MediaTags, { id: this.id })).tags;
    }
}