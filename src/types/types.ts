import { Tag } from './Tag'
import { Genre } from './Genre';

export { Tag };
export { Genre };

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
	countryOfOrigin?: number;
	search?: string;
	id_not?: number;
	id_in?: number[];
	id_not_in?: number[];
	idMal_not?: number;
	idMal_in?: number[];
	idMal_not_in?: number[];
	startDate_greater?: number;
	startDate_lesser?: number;
	startDate_like?: string;
	endDate_greater?: number;
	endDate_lesser?: number;
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

export type MediaType = 
| 'ANIME'
| 'MANGA';

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

export type MediaStatus = 
| 'FINISHED'
| 'RELEASING'
| 'NOT_YET_RELEASED'
| 'CANCELLED'
| 'HIATUS';

export type FuzzyDate = {
	year?: number;
	month?: number;
	day?: number;
};

export type MediaSeason = 
| 'WINTER'
| 'SPRING'
| 'SUMMER'
| 'FALL';

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
	total?: number;
	perPage?: number;
	currentPage?: number;
	lastPage?: number;
	hasNextPage?: boolean;
};