import { Media } from '../structures/media.js';
import { Builder } from './builder.js';

export class MediaBuilder extends Builder<Media> {
    override field = 'Media';

    constructor(token?: string) {
        super(Media, token);
        this.queryBuilder.setRoot('query');
    }

    getAnime(search: string | number) {
        if (typeof search === 'string') {
            this.addField({ search: search, type: ':ANIME' });
        } else {
            this.addField({ id: search, type: ':ANIME' });
        }

        return this.addSubField('id');
    }

    getManga(search: string | number) {
        if (typeof search === 'string') {
            this.addField({ search: search, type: ':MANGA' });
        } else {
            this.addField({ id: search, type: ':MANGA' });
        }

        return this.addSubField('id');
    }

    getMedia(search: string | number) {
        if (typeof search === 'string') {
            this.addField({ search: search });
        } else {
            this.addField({ id: search });
        }

        return this.addSubField('id');
    }

    airingSchedule = () => this.addSubField('airingSchedule nodes { id airingAt episode timeUntilAiring }');
    autoCreateForumThread = () => this.addSubField('autoCreateForumThread');
    averageScore = () => this.addSubField('averageScore');
    bannerImage = () => this.addSubField('bannerImage');
    chapters = () => this.addSubField('chapters');
    characters = () => this.addSubField(`characters { nodes { id name { full } } }`);
    countryOfOrigin = () => this.addSubField('countryOfOrigin');
    coverImage = () => this.addSubField(`coverImage { extraLarge large medium color }`);
    description = () => this.addSubField('description');
    duration = () => this.addSubField('duration');
    endDate = () => this.addSubField('endDate { year month day }');
    episodes = () => this.addSubField('episodes');
    externalLinks = () => this.addSubField(`externalLinks { id url site }`);
    favourites = () => this.addSubField('favourites');
    format = () => this.addSubField('format');
    genres = () => this.addSubField('genres');
    hashtags = () => this.addSubField('hashtags');
    isMal = () => this.addSubField('isMal');
    isAdult = () => this.addSubField('isAdult');
    isFavourite = () => this.addSubField('isFavourite');
    isFavouriteBlocked = () => this.addSubField('isFavouriteBlocked');
    isLicensed = () => this.addSubField('isLicensed');
    isLocked = () => this.addSubField('isLocked');
    isRecommendationBlocked = () => this.addSubField('isRecommendationBlocked');
    isReviewBlocked = () => this.addSubField('isReviewBlocked');
    meanScore = () => this.addSubField('meanScore');
    mediaListEntry = () => this.addSubField(`mediaListEntry { completedAt { year month day } createdAt customLists hiddenFromStatusLists id media { id title { romaji english native userPreferred } } mediaId notes priority private progress progressVolumes repeat score startedAt { year month day } status updatedAt user { id name } userId }`);
    nextAiringEpisode = () => this.addSubField(`nextAiringEpisode { id airingAt episode timeUntilAiring }`);
    popularity = () => this.addSubField('popularity');
    rankings = () => this.addSubField(`rankings { id rank type year season allTime context }`);
    recommendations = () => this.addSubField(`recommendations { nodes { id rating media { id title { romaji english native userPreferred } } } }`);
    relations = () => this.addSubField(`relations { edges { relationType node { id title { romaji english native userPreferred } } } }`);
    reviews = () => this.addSubField(`reviews { nodes { id siteUrl summary rating score user { id name } } }`);
    season = () => this.addSubField('season');
    seasonInt = () => this.addSubField('seasonInt');
    seasonYear = () => this.addSubField('seasonYear');
    siteUrl = () => this.addSubField('siteUrl');
    source = () => this.addSubField('source');
    staff = () => this.addSubField(`staff { edges { role node { id age gender name { full native alternative } } } }`);
    startDate = () => this.addSubField('startDate { year month day }');
    stats = () => this.addSubField(`stats { scoreDistribution { score amount } statusDistribution { status amount } }`);
    status = () => this.addSubField('status');
    streamingEpisodes = () => this.addSubField(`streamingEpisodes { title thumbnail url site }`);
    studios = () => this.addSubField(`studios { edges { isMain favouriteOrder node { id name } } }`);
    synonyms = () => this.addSubField('synonyms');
    tags = () => this.addSubField(`tags { id name description category rank isMediaSpoiler isGeneralSpoiler isAdult }`);
    title = () => this.addSubField(`title { romaji english native userPreferred }`);
    trending = () => this.addSubField('trending');
    type = () => this.addSubField('type')
    updatedAt = () => this.addSubField('updatedAt');
    volumes = () => this.addSubField('volumes');
}
