const MediaQuery = `
query ($id: Int) {
    Media(id: $id) {
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
`

export { MediaQuery };