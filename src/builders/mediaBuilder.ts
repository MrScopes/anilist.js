import { Media } from '../structures/media.js';
import { Builder } from './builder.js';

export class MediaBuilder extends Builder<Media> {
    constructor(token?: string) {
        super(Media, token);
        this.root = 'query';
        this.field = 'Media';
        this.query = 'id';
    }

    getAnime(search: string | number) {
        if (typeof search === 'string') {
            return this.appendVariables({ search: search, type: ':ANIME' });
        }

        return this.appendVariables({ id: search,type: ':ANIME' });
    }

    getManga(search: string | number) {
        if (typeof search === 'string') {
            return this.appendVariables({ search: search, type: ':MANGA' });
        }

        return this.appendVariables({ id: search,type: ':MANGA' });
    }
    
    airingSchedule = () => this.appendQuery(`airingSchedule { nodes { airingAt episode id timeUntilAiring } }`);
    autoCreateForumThread = () => this.appendQuery('autoCreateForumThread');
    averageScore = () => this.appendQuery('averageScore');
    bannerImage = () => this.appendQuery('bannerImage');
    chapters = () => this.appendQuery('chapters');
    characters = () => this.appendQuery(`characters { nodes { id name { full } } }`);
    countryOfOrigin = () => this.appendQuery('countryOfOrigin');
    coverImage = () => this.appendQuery(`coverImage { extraLarge large medium color }`);
    description = () => this.appendQuery('description');
    duration = () => this.appendQuery('duration');
    endDate = () => this.appendQuery('endDate { year month day }');
    episodes = () => this.appendQuery('episodes');
    externalLinks = () => this.appendQuery('externalLinks { id url site }');
    favourites = () => this.appendQuery('favourites');
    format = () => this.appendQuery('format');
    genres = () => this.appendQuery('genres');
    hashtags = () => this.appendQuery('hashtags');
    isMal = () => this.appendQuery('isMal');
    isAdult = () => this.appendQuery('isAdult');
    isFavourite = () => this.appendQuery('isFavourite');
    isFavouriteBlocked = () => this.appendQuery('isFavouriteBlocked');
    isLicensed = () => this.appendQuery('isLicensed');
    isLocked = () => this.appendQuery('isLocked');
    isRecommendationBlocked = () => this.appendQuery('isRecommendationBlocked');
    isReviewBlocked = () => this.appendQuery('isReviewBlocked');
    meanScore = () => this.appendQuery('meanScore');
    mediaListEntry = () => this.appendQuery(`mediaListEntry { completedAt { year month day } createdAt customLists hiddenFromStatusLists id media { id title { romaji english native userPreferred } } mediaId notes priority private progress progressVolumes repeat score startedAt { year month day } status updatedAt user { id name } userId }`);
    nextAiringEpisode = () => this.appendQuery(`nextAiringEpisode { id airingAt episode timeUntilAiring }`);
    popularity = () => this.appendQuery('popularity');
    rankings = () => this.appendQuery(`rankings { id rank type year season allTime context }`);
    recommendations = () => this.appendQuery(`recommendations { nodes { id rating media { id title { romaji english native userPreferred } } } }`)
    relations = () => this.appendQuery(`relations { edges { relationType node { id title { romaji english native userPreferred } } } }`);
    reviews = () => this.appendQuery(`reviews { nodes { id siteUrl summary rating score user { id name } } }`);
    season = () => this.appendQuery('season');
    seasonInt = () => this.appendQuery('seasonInt');
    seasonYear = () => this.appendQuery('seasonYear');
    siteUrl = () => this.appendQuery('siteUrl');
    source = () => this.appendQuery('source');
    staff = () => this.appendQuery(`staff { edges { role node { id age gender name { full native alternative } } } }`);
    startDate = () => this.appendQuery('startDate { year month day }');
    stats = () => this.appendQuery(`stats { scoreDistribution { score amount } statusDistribution { status amount } }`);
    status = () => this.appendQuery('status');
    streamingEpisodes = () => this.appendQuery(`streamingEpisodes { title thumbnail url site }`);
    studios = () => this.appendQuery(`studios { edges { isMain favouriteOrder node { id name } } }`);
    synonyms = () => this.appendQuery('synonyms');
    tags = () => this.appendQuery(`tags { id name description category rank isMediaSpoiler isGeneralSpoiler isAdult }`);
    title = () => this.appendQuery(`title { romaji english native userPreferred }`);
    trending = () => this.appendQuery('trending');
    type = () => this.appendQuery('type')
    updatedAt = () => this.appendQuery('updatedAt');
    volumes = () => this.appendQuery('volumes');
}