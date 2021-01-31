import { Tag } from './Tag'
import { Genre } from './Genre';

export type MediaSearchVariables = {
	page?: number;
	perPage?: number;
	id?: number;
	idMal?: number;
	startDate?: FuzzyDate;
	endDate?: FuzzyDate;
	season?: MediaSeason;
	seasonYear?: number;
	type?: MediaType;
	format?: MediaFormat;
	status?: MediaStatus;
	episodes?: number;
	duration?: number;
	chapters?: number;
	volumes?: number;
	isAdult?: boolean;
	genre?: string;
	tag?: string;
	minimumTagRank?: number;
	tagCategory?: string;
	onList?: boolean;
	licensedBy?: string;
	averageScore?: number;
	popularity?: number;
	source?: MediaSource;
	countryOfOrigin?: ['CountryCode'];
	search?: string;
	id_not?: number;
	id_in?: number[];
	id_not_in?: number[];
	idMal_not?: number;
	idMal_in?: number[];
	idMal_not_in?: number[];
	startDate_greater?: ['FuzzyDateInt'];
	startDate_lesser?: ['FuzzyDateInt'];
	startDate_like?: string;
	endDate_greater?: ['FuzzyDateInt'];
	endDate_lesser?: ['FuzzyDateInt'];
	endDate_like?: string;
	format_in?: MediaFormat[];
	format_not?: MediaFormat;
	format_not_in?: MediaFormat[];
	status_in?: MediaStatus[];
	status_not?: MediaStatus;
	status_not_in?: MediaStatus[];
	episodes_greater?: number;
	episodes_lesser?: number;
	duration_greater?: number;
	duration_lesser?: number;
	chapters_greater?: number;
	chapters_lesser?: number;
	volumes_greater?: number;
	volumes_lesser?: number;
	genre_in?: Genre[];
	genre_not_in?: Genre[];
	tag_in?: Tag[];
	tag_not_in?: Tag[];
	tagCategory_in?: string[];
	tagCategory_not_in?: string[];
	licensedBy_in?: string[];
	averageScore_not?: number;
	averageScore_greater?: number;
	averageScore_lesser?: number;
	popularity_not?: number;
	popularity_greater?: number;
	popularity_lesser?: number;
	source_in?: MediaSource[];
	sort?: MediaSort[];
};

export type MediaSort = 
| 'ID'
| 'ID_DESC'
| 'TITLE_ROMAJI'
| 'TITLE_ROMAJI_DESC'
| 'TITLE_ENGLISH'
| 'TITLE_ENGLISH_DESC'
| 'TITLE_NATIVE'
| 'TITLE_NATIVE_DESC'
| 'TYPE'
| 'TYPE_DESC'
| 'FORMAT'
| 'FORMAT_DESC'
| 'START_DATE'
| 'START_DATE_DESC'
| 'END_DATE'
| 'END_DATE_DESC'
| 'SCORE'
| 'SCORE_DESC'
| 'POPULARITY'
| 'POPULARITY_DESC'
| 'TRENDING'
| 'TRENDING_DESC'
| 'EPISODES'
| 'EPISODES_DESC'
| 'DURATION'
| 'DURATION_DESC'
| 'STATUS'
| 'STATUS_DESC'
| 'CHAPTERS'
| 'CHAPTERS_DESC'
| 'VOLUMES'
| 'VOLUMES_DESC'
| 'UPDATED_AT'
| 'UPDATED_AT_DESC'
| 'SEARCH_MATCH'
| 'FAVOURITES'
| 'FAVOURITES_DESC';

/** Media type enum, anime or manga. */
export type MediaType = 
| 'ANIME'
| 'MANGA';

/** The format the media was released in */
export type MediaFormat = 
| 'TV'
| 'TV_SHORT'
| 'MOVIE'
| 'SPECIAL'
| 'OVA'
| 'ONA'
| 'MUSIC'
| 'MANGA'
| 'NOVEL'
| 'ONE_SHOT';

/** The current releasing status of the media */
export type MediaStatus = 
| 'FINISHED'
| 'RELEASING'
| 'NOT_YET_RELEASED'
| 'CANCELLED'
| 'HIATUS';

/** Date object that allows for incomplete date values (fuzzy) */
export type FuzzyDate = {
	/** Numeric Year (2017) */
	year?: number;
	/** Numeric Month (3) */
	month?: number;
	/** Numeric Day (24) */
	day?: number;
};

export type MediaSeason = 
| 'WINTER'
| 'SPRING'
| 'SUMMER'
| 'FALL';

/** Source type the media was adapted from */
export type MediaSource = 
| 'ORIGINAL'
| 'MANGA'
| 'LIGHT_NOVEL'
| 'VISUAL_NOVEL'
| 'VIDEO_GAME'
| 'OTHER'
| 'NOVEL'
| 'DOUJINSHI'
| 'ANIME';

export type PageInfo = {
	/** The total number of items */
	total?: number;
	/** The count on a page */
	perPage?: number;
	/** The current page */
	currentPage?: number;
	/** The last page */
	lastPage?: number;
	/** If there is another page */
	hasNextPage?: boolean;
  };