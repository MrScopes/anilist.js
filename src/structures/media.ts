import { Base } from './base.js';

export class Media extends Base {
    constructor(data: any) {
        data = data.data.Media;
        super(data);

        for (const [key, value] of Object.entries(data)) {
            (this as any)[key] = value;
        }

        if (data.airingSchedule) {
            this.airingSchedule = data.airingSchedule.nodes.map((node: any) => ({
                airingAt: node.airingAt,
                episode: node.episode, 
                id: node.id,
                timeUntilAiring: node.timeUntilAiring,
            }));
        }

        if (data.characters) {
            this.characters = data.characters.nodes.map((node: any) => ({
                id: node.id,
                name: node.name.full,
            }));
        }

        if (data.relations) {
            this.relations = data.relations.edges.map((edge: any) => ({
                relationType: edge.relationType,
                ...edge.node,
            }));
        }

        if (data.reviews) {
            this.reviews = data.reviews.nodes.map((node: any) => ({
                id: node.id,
                siteUrl: node.siteUrl,
                summary: node.summary,
                rating: node.rating,
                score: node.score,
                user: {
                    id: node.user.id,
                    name: node.user.name,
                },
            }));
        }

        if (data.staff) {
            this.staff = data.staff.edges.map((edge: any) => ({
                id: edge.node.id,
                age: edge.node.age,
                name: {
                    full: edge.node.name.full,
                    native: edge.node.name.native,
                    alternative: edge.node.name.alternative,
                },
                role: edge.role,
                gender: edge.node.gender,
            }));
        }
        
        if (data.studios) {
            this.studios = data.studios.edges.map((edge: any) => ({
                id: edge.node.id,
                name: edge.node.name,
                isMain: edge.isMain,
                favouriteOrder: edge.favouriteOrder,
            }));
        }
    }

    declare airingSchedule?: {
        airingAt?: number;
        episode?: number;
        id?: number;
        timeUntilAiring?: number;
    }[];

    declare autoCreateForumThread?: boolean;
    declare averageScore?: number;
    declare bannerImage?: string;
    declare chapters?: number;

    declare characters?: {
        id?: number;
        name?: string;
    }[];

    declare countryOfOrigin?: string;

    declare coverImage?: {
        extraLarge?: string;
        large?: string;
        medium?: string;
        color?: string;
    };

    declare description?: string;
    declare duration?: number;

    declare endDate?: {
        year?: number;
        month?: number;
        day?: number;
    };

    declare externalLinks?: {
        id?: number;
        url?: string;
        site?: string;
    }[];

    declare favourites?: number;
    declare format?: string;
    declare genres?: string[];
    declare hashtags?: string[];
    declare isMal?: boolean;
    declare isAdult?: boolean
    declare isFavourite?: boolean;
    declare isFavouriteBlocked?: boolean;
    declare isLicensed?: boolean
    declare isLocked?: boolean;
    declare isRecommendationBlocked?: boolean;
    declare isReviewBlocked?: boolean;
    declare meanScore?: number;

    declare mediaListEntry?: {
        completedAt?: {
            year?: number;
            month?: number;
            day?: number;
        };
        createdAt?: number;
        customLists?: object;
        hiddenFromStatusLists?: boolean;
        id?: number;
        media?: {
            id?: number;
            title?: {
                romaji?: string;
                english?: string;
                native?: string;
                userPreferred?: string;
            };
        };
        mediaId?: number;
        notes?: string;
        priority?: number;
        private?: boolean;
        progress?: number;
        progressVolumes?: number;
        repeat?: number;
        score?: number;
        startedAt?: {
            year?: number;
            month?: number;
            day?: number;
        };
        status?: string;
        updatedAt?: number;
        user?: {
            id?: number;
            name?: string;
        };
        userId?: number;
    };

    declare modNotes?: string;

    declare nextAiringEpisode?: {
        id?: number;
        airingAt?: number;
        episode?: number;
        timeUntilAiring?: number;
    };

    declare popularity?: number;

    declare rankings?: {
        id?: number;
        rank?: number;
        type?: string;
        year?: number;
        season?: string;
        allTime?: boolean;
        context?: string;
    }[];

    declare recommendations?: {
        id?: number;
        rating?: number;
        media?: {
            id?: number;
            title?: {
                romaji?: string;
                english?: string;
                native?: string;
                userPreferred?: string;
            };
        };
    }[];

    declare relations?: {
        relationType?: string;
        id?: number;
        title?: {
            romaji?: string;
            english?: string;
            native?: string;
            userPreferred?: string;
        };
    }[];

    declare reviews?: {
        id?: number;
        siteUrl?: string;
        summary?: string;
        rating?: number;
        score?: number;
        user?: {
            id?: number;
            name?: string;
        };
    }[];

    declare season?: string;
    declare seasonInt?: number;
    declare seasonYear?: number;
    declare siteUrl?: string;
    declare source?: string;

    declare staff?: {
        id?: number;
        age?: number;
        name?: {
            full?: string;
            native?: string;
            alternative?: string[];
        };
        role?: string;
        gender?: string;
    }[];

    declare startDate?: {
        year?: number;
        month?: number;
        day?: number;
    };
    
    declare stats?: {
        statusDistribution?: { 
            amount?: number;
            score?: number;
        }[];
        scoreDistribution?: { 
            amount?: number;
            score?: number;
        }[];
    };

    declare status?: string;

    declare streamingEpisodes?: {
        title?: string;
        thumbnail?: string;
        url?: string;
        site?: string;
    }[];

    declare studios?: {
        id?: number;
        name?: string;
        isMain?: boolean
        favouriteOrder?: number;
    }[];

    declare synonyms?: string[];

    declare tags?: {
        id?: number;
        name?: string;
        description?: string;
        category?: string;
        rank?: number;
        isMediaSpoiler?: boolean;
        isGeneralSpoiler?: boolean;
        isAdult?: boolean;
    }[];

    declare title?: {
        romaji?: string;
        english?: string;
        native?: string;
        userPreferred?: string;
    }

    declare trailer?: {
        id?: string;
        site?: string;
        thumbnail?: string;
    }

    declare trending?: number;

    declare trends?: {
        id?: number;
        averageScore?: number;
        date?: number;
        trending?: number;
    }[];

    declare type?: string;
    declare updatedAt?: number;
    declare volumes?: number;
}