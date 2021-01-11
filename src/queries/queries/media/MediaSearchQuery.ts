const MediaSearchQuery = `
query ($search: String, $page: Int, $perPage: Int, $sort: [MediaSort], $type: MediaType, $season: MediaSeason, $seasonYear: Int, $format: MediaFormat, $status: MediaStatus, $isAdult: Boolean, $includedGenres: [String], $excludedGenres: [String], $includedTags: [String], $excludedTags: [String], $yearLike: String, $popularityGreaterThan: Int, $averageGreaterThan: Int, $episodesGreaterThan: Int, $episodesLessThan: Int, $country: CountryCode, $source: MediaSource, $licensedBy: [String]) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }
    Results: media(search: $search, sort: $sort, type: $type, season: $season, seasonYear: $seasonYear, format: $format, status: $status, isAdult: $isAdult, genre_in: $includedGenres, genre_not_in: $excludedGenres, tag_in: $includedTags, tag_not_in: $excludedTags, startDate_like: $yearLike, popularity_greater: $popularityGreaterThan, averageScore_greater: $averageGreaterThan, episodes_greater: $episodesGreaterThan, episodes_lesser: $episodesLessThan, countryOfOrigin: $country, source: $source, licensedBy_in: $licensedBy) {
      id
      title {
        romaji
        english
        native
      }
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
      favourites
      coverImage {
        extraLarge
        large
        color
      }
      characters {
        edges {
          node {
            id
            name {
              first
              last
              full
              native
            }
          }
          role
        }
        pageInfo {
          total
          perPage
          hasNextPage
          currentPage
          lastPage
        }
      }
      staff {
        edges {
          node {
            id
            name {
              first
              last
              full
              native
            }
          }
        }
        pageInfo {
          total
          perPage
          hasNextPage
          currentPage
          lastPage
        }
      }
      relations {
        edges {
          node {
            id
            isAdult
            title {
              romaji
              english
              native
            }
            format
            type
            coverImage {
              large
            }
          }
          relationType
        }
      }
      studios {
        edges {
          node {
            id
            name
          }
          isMain
        }
      }
      recommendations {
        edges {
          node {
            id
            rating
            userRating
            user {
              id
              name
            }
          }
        }
        pageInfo {
          total
          perPage
          hasNextPage
          currentPage
          lastPage
        }
      }
      bannerImage
      duration
      format
      type
      status
      episodes
      chapters
      volumes
      season
      description
      averageScore
      meanScore
      popularity
      genres
      siteUrl
      isFavourite
      countryOfOrigin
      isLicensed
      synonyms
      trending
      rankings {
        id
        rank
        type
        format
        year
        season
        allTime
        context
      }
      stats {
        scoreDistribution {
          score
          amount
        }
        statusDistribution {
          status
          amount
        }
        airingProgression {
          episode
          score
          watching
        }
      }
      tags {
        id
        name
        description
        isGeneralSpoiler
        isMediaSpoiler
        rank
      }
      nextAiringEpisode {
        airingAt
        timeUntilAiring
        episode
      }
      streamingEpisodes {
        title
        thumbnail
        url
        site
      }
      reviews {
        pageInfo {
          total
          perPage
          hasNextPage
          currentPage
          lastPage
        }
      }
      mediaListEntry {
        user {
          mediaListOptions {
            scoreFormat
            animeList {
              advancedScoring
              advancedScoringEnabled
              customLists
            }
            mangaList {
              advancedScoring
              advancedScoringEnabled
              customLists
            }
          }
        }
        id
        status
        score
        progress
        progressVolumes
        repeat
        priority
        private
        notes
        hiddenFromStatusLists
        customLists(asArray: true)
        advancedScores
        startedAt {
          year
          month
          day
        }
        completedAt {
          year
          month
          day
        }
        updatedAt
        createdAt
      }
    }
  }
}
`

export { MediaSearchQuery };