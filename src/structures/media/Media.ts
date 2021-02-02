import { Client, Genre, Tag } from '../..';

import { MediaGenres, MediaStudios, MediaTags, MediaMeta, MediaEntryQuery } from '../../queries/MediaQueries';
import { FuzzyDate, MediaFormat, MediaSeason, MediaStatus } from '../../types/types';

export class Media {
    client: Client;

    id: number;
    title: { 
        romaji: string;
        english?: string;
        native?: string;
        userPreferred: string
    }
    format: MediaFormat;
    seasonYear: number;
    episodes?: number;
    chapters?: number;
    volumes?: number;

    /** Represents an AniList Anime or Manga. */
    constructor(data: any, client: Client) {
        this.client = client;

        this.id = data.id;
        this.title = data.title;
        if (data.format) this.format = data.format;
        if (data.seasonYear) this.seasonYear = data.seasonYear;
        if (data.episodes) this.episodes = data.episodes;
        if (data.chapters) this.chapters = data.chapters;
        if (data.volumes) this.volumes = data.volumes;
    }

    /** Get some missing useful info. */
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

    /** Get this Media's studios. */
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

    /** Get this Media's genres. */
    async getGenres(): Promise<Genre[]> {
        return (await this.client.utilities.APIRequest(MediaGenres, { id: this.id })).genres;
    }

    /** Get this Media's tags. */
    async getTags(): 
        Promise<{
            name: Tag;
            isMediaSpoiler: boolean;
        }[]> {

        return (await this.client.utilities.APIRequest(MediaTags, { id: this.id })).tags;
    }

    /**
     * Get the current user's media entry id for this media.
     * @param token the user token, defaults to client token.
     */
    async getMediaEntry(token?: string): Promise<number> {
        return (await this.client.utilities.APIRequest(MediaEntryQuery, { id: this.id }, token || this.client.token)).mediaListEntry;  
    }

}