export const MediaQuery = `
query ($id: Int) {
    Media(id: $id) {
      id
      title {
        romaji
        english
        native
        userPreferred
	  }
    }
  }  
`;

export const MediaMeta = `
query ($id: Int) {
	Media(id: $id) {
		description
		format
		status
		coverImage {
			extraLarge
			large
			medium
			color
		}
		bannerImage
		startDate {
			year
			month
			day
		}
		endDate {
			year
			month
			day
		}
		season
		seasonYear
	}
}  
`;

export const MediaStudios = `
query ($id: Int) {
	Media(id: $id) {
		studios {
			edges {
				node {
					id
					name
				}
				isMain
			}
		}
	}
}
`;

export const MediaGenres = `
query ($id: Int) {
	Media(id: $id) {
		genres
	}
}
`;

export const MediaTags = `
query ($id: Int) {
	Media(id: $id) {
		tags {
			name
			isMediaSpoiler
		}
	}
}
`;


export const MediaSearchQuery = `
query ($search: String, $page: Int, $perPage: Int, $sort: [MediaSort], $type: MediaType, $season: MediaSeason, $seasonYear: Int, $format: MediaFormat, $status: MediaStatus, $isAdult: Boolean, $source: MediaSource, $countryOfOrigin: CountryCode, $licensedBy: String, $id_in: [Int], $id_not_in: [Int], $id: Int, $idMal: Int, $startDate: FuzzyDateInt, $endDate: FuzzyDateInt, $episodes: Int, $duration: Int, $chapters: Int, $volumes: Int, $genre: String, $tag: String, $minimumTagRank: Int, $tagCategory: String, $onList: Boolean, $averageScore: Int, $id_not: Int, $idMal_not: Int, $idMal_in: [Int], $idMal_not_in: [Int], $startDate_greater: FuzzyDateInt, $startDate_lesser: FuzzyDateInt, $startDate_like: String, $popularity: Int, $endDate_greater: FuzzyDateInt, $endDate_like: String, $format_in: [MediaFormat], $format_not: MediaFormat, $format_not_in: [MediaFormat], $status_in: [MediaStatus], $status_not: MediaStatus, $status_not_in: [MediaStatus], $episodes_greater: Int, $episodes_lesser: Int, $duration_greater: Int, $duration_lesser: Int, $chapters_greater: Int, $chapters_lesser: Int, $volumes_greater: Int, $volumes_lesser: Int, $genre_in: [String], $genre_not_in: [String], $tag_in: [String], $tag_not_in: [String], $tagCategory_in: [String], $tagCategory_not_in: [String], $endDate_lesser: FuzzyDateInt, $licensedBy_in: [String], $averageScore_not: Int, $averageScoreGreater: Int, $averageScore_lesser: Int, $popularity_not: Int, $popularity_greater: Int, $popularity_lesser: Int, $source_in: [MediaSource]) {
	Page(page: $page, perPage: $perPage) {
		pageInfo {	  
			total	  
			perPage	  
			currentPage
			lastPage	  
			hasNextPage	
		}	
		results: media(id: $id, idMal: $idMal, startDate: $startDate, endDate: $endDate, season: $season, seasonYear: $seasonYear, type: $type, format: $format, status: $status, episodes: $episodes, duration: $duration, chapters: $chapters, volumes: $volumes, isAdult: $isAdult, genre: $genre, tag: $tag, minimumTagRank: $minimumTagRank, tagCategory: $tagCategory, onList: $onList, licensedBy: $licensedBy, averageScore: $averageScore, popularity: $popularity, source: $source, countryOfOrigin: $countryOfOrigin, search: $search, id_not: $id_not, id_in: $id_in, id_not_in: $id_not_in, idMal_not: $idMal_not, idMal_in: $idMal_in, idMal_not_in: $idMal_not_in, startDate_greater: $startDate_greater, startDate_lesser: $startDate_lesser, startDate_like: $startDate_like, endDate_greater: $endDate_greater, endDate_lesser: $endDate_lesser, endDate_like: $endDate_like, format_in: $format_in, format_not: $format_not, format_not_in: $format_not_in, status_in: $status_in, status_not: $status_not, status_not_in: $status_not_in, episodes_greater: $episodes_greater, episodes_lesser: $episodes_lesser, duration_greater: $duration_greater, duration_lesser: $duration_lesser, chapters_greater: $chapters_greater, chapters_lesser: $chapters_lesser, volumes_greater: $volumes_greater, volumes_lesser: $volumes_lesser, genre_in: $genre_in, genre_not_in: $genre_not_in, tag_in: $tag_in, tag_not_in: $tag_not_in, tagCategory_in: $tagCategory_in, tagCategory_not_in: $tagCategory_not_in, licensedBy_in: $licensedBy_in, averageScore_not: $averageScore_not, averageScore_greater: $averageScoreGreater, averageScore_lesser: $averageScore_lesser, popularity_not: $popularity_not, popularity_greater: $popularity_greater, popularity_lesser: $popularity_lesser, source_in: $source_in, sort: $sort) {	  
			id	  
			title {	
				romaji	
				english	
				native  
			}
		}
	}
}
`;