export const CharacterQuery = `
query ($id: Int) {
  Character(id: $id) {
    id
    name {
      first
      last
      full
      native
      alternative
    }
    image {
      large
      medium
    }
    description
    isFavourite
    siteUrl
    media {
      edges {
        node {
          id
          title {
            romaji
            english
            native
            userPreferred
          }
        }
      }
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
    }
    favourites
    modNotes
  }
}
`

export const CharacterSearchQuery = `
query ($search: String, $sort: [CharacterSort], $page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }
    Results: characters(search: $search, sort: $sort) {
      id
      name {
        first
        last
        full
        native
        alternative
      }
      image {
        large
        medium
      }
      description
      isFavourite
      siteUrl
      media {
        edges {
          node {
            id
            title {
              romaji
              english
              native
              userPreferred
            }
          }
        }
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
      }
      favourites
      modNotes
    }
  }
}
`

export const MediaQuery = `
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
    Results: media(id: $id, idMal: $idMal, startDate: $startDate, endDate: $endDate, season: $season, seasonYear: $seasonYear, type: $type, format: $format, status: $status, episodes: $episodes, duration: $duration, chapters: $chapters, volumes: $volumes, isAdult: $isAdult, genre: $genre, tag: $tag, minimumTagRank: $minimumTagRank, tagCategory: $tagCategory, onList: $onList, licensedBy: $licensedBy, averageScore: $averageScore, popularity: $popularity, source: $source, countryOfOrigin: $countryOfOrigin, search: $search, id_not: $id_not, id_in: $id_in, id_not_in: $id_not_in, idMal_not: $idMal_not, idMal_in: $idMal_in, idMal_not_in: $idMal_not_in, startDate_greater: $startDate_greater, startDate_lesser: $startDate_lesser, startDate_like: $startDate_like, endDate_greater: $endDate_greater, endDate_lesser: $endDate_lesser, endDate_like: $endDate_like, format_in: $format_in, format_not: $format_not, format_not_in: $format_not_in, status_in: $status_in, status_not: $status_not, status_not_in: $status_not_in, episodes_greater: $episodes_greater, episodes_lesser: $episodes_lesser, duration_greater: $duration_greater, duration_lesser: $duration_lesser, chapters_greater: $chapters_greater, chapters_lesser: $chapters_lesser, volumes_greater: $volumes_greater, volumes_lesser: $volumes_lesser, genre_in: $genre_in, genre_not_in: $genre_not_in, tag_in: $tag_in, tag_not_in: $tag_not_in, tagCategory_in: $tagCategory_in, tagCategory_not_in: $tagCategory_not_in, licensedBy_in: $licensedBy_in, averageScore_not: $averageScore_not, averageScore_greater: $averageScoreGreater, averageScore_lesser: $averageScore_lesser, popularity_not: $popularity_not, popularity_greater: $popularity_greater, popularity_lesser: $popularity_lesser, source_in: $source_in, sort: $sort) {
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

export const StaffQuery = `
query ($id: Int) {
    Staff(id: $id) {
      id
      name {
        first
        last
        full
        native
      }
      language
      image {
        large
        medium
      }
      description
      isFavourite
      siteUrl
      staffMedia {
        edges {
          node {
            id
            title {
              romaji
              english
              native
              userPreferred
            }
          }
        }
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
      }
      characterMedia {
        edges {
          node {
            id
            title {
              romaji
              english
              native
              userPreferred
            }
          }
        }
      }
      submitter {
        id
        name
      }
      submissionStatus
      submissionNotes
      favourites
      modNotes
    }
  }
`

export const StaffSearchQuery = `
query ($id: Int, $page: Int, $perPage: Int, $search: String, $id_not: Int, $id_in: [Int], $id_not_in: [Int], $sort: [StaffSort]) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      Results: staff(id: $id, search: $search, id_not: $id_not, id_in: $id_in, id_not_in: $id_not_in, sort: $sort) {
        id
        name {
          first
          last
          full
          native
        }
        language
        image {
          large
          medium
        }
        description
        isFavourite
        siteUrl
        staffMedia {
          edges {
            node {
              id
              title {
                romaji
                english
                native
                userPreferred
              }
            }
            relationType
          }
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
        }
        characterMedia {
          edges {
            node {
              id
              title {
                romaji
                english
                native
                userPreferred
              }
            }
          }
        }
        submitter {
          id
          name
        }
        submissionStatus
        submissionNotes
        favourites
        modNotes
      }
    }
  }
`

export const StudioQuery = `
query ($id: Int) {
    Studio(id: $id) {
      id
      name
      isAnimationStudio
      media {
        edges {
          node {
            id
            title {
              romaji
              english
              native
              userPreferred
            }
          }
          isMainStudio
        }
      }
      siteUrl
      isFavourite
      favourites
    }
  }
`

export const StudioSearchQuery = `
query ($id: Int, $page: Int, $perPage: Int, $search: String, $id_not: Int, $id_in: [Int], $id_not_in: [Int], $sort: [StudioSort]) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      Results: studios(id: $id, search: $search, id_not: $id_not, id_in: $id_in, id_not_in: $id_not_in, sort: $sort) {
        id
        name
        isAnimationStudio
        media {
          edges {
            node {
              id
              title {
                romaji
                english
                native
                userPreferred
              }
            }
            isMainStudio
          }
        }
        siteUrl
        isFavourite
        favourites
      }
    }
  }
`

export const UserQuery = `
query ($id: Int) {
    User(id: $id) {
      id
      name
      about
      avatar {
        large
        medium
      }
      bannerImage
      isFollowing
      isFollower
      isBlocked
      bans
      options {
        titleLanguage
        displayAdultContent
        airingNotifications
        profileColor
      }
      mediaListOptions {
        scoreFormat
        rowOrder
        useLegacyLists
        sharedTheme
        sharedThemeEnabled
      }
      favourites {
        anime {
          pageInfo {
            total
            perPage
            currentPage
            lastPage
            hasNextPage
          }
          edges {
            node {
              id
              title {
                romaji
                english
                native
                userPreferred
              }
            }
          }
        }
        manga {
          pageInfo {
            total
            perPage
            currentPage
            lastPage
            hasNextPage
          }
          edges {	
            node {
              id
              title {
                romaji
                english
                native
                userPreferred
              }
            }
  
          }
        }
        characters {
          pageInfo {
            total
            perPage
            currentPage
            lastPage
            hasNextPage
          }
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
        }
        staff {
          pageInfo {
            total
            perPage
            currentPage
            lastPage
            hasNextPage
          }
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
        }
        studios {
          pageInfo {
            total
            perPage
            currentPage
            lastPage
            hasNextPage
          }
          edges {
            id
          }
        }
      }
      unreadNotificationCount
      siteUrl
      donatorTier
      donatorBadge
      moderatorStatus
      updatedAt
    }
  }
`

export const UserStatsQuery = `
query ($id: Int) {
  User(id: $id) {
    statistics {
      anime {
        count
        meanScore
        standardDeviation
        minutesWatched
        episodesWatched
        chaptersRead
        volumesRead
        formats {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          format
        }
        statuses {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          status
        }
        scores {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          score
        }
        lengths {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          length
        }
        releaseYears {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          releaseYear
        }
        startYears {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          startYear
        }
        genres {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          genre
        }
        tags {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          tag {
            id
          }
        }
        countries {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          country
        }
        voiceActors {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          voiceActor {
            id
          }
          characterIds
        }
        staff {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          staff {
            id
          }
        }
        studios {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          studio {
            id
          }
        }
      }
      manga {
        count
        meanScore
        standardDeviation
        minutesWatched
        episodesWatched
        chaptersRead
        volumesRead
        formats {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          format
        }
        statuses {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          status
        }
        scores {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          score
        }
        lengths {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          length
        }
        releaseYears {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          releaseYear
        }
        startYears {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          startYear
        }
        genres {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          genre
        }
        tags {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          tag {
            id
          }
        }
        countries {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          country
        }
        voiceActors {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          voiceActor {
            id
          }
          characterIds
        }
        staff {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          staff {
            id
          }
        }
        studios {
          count
          meanScore
          minutesWatched
          chaptersRead
          mediaIds
          studio {
            id
          }
        }
      }
    }
  }
}
`

export const UserSearchQuery = `
query ($id: Int, $name: String, $search: String, $sort: [UserSort], $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      Results: users(id: $id, name: $name, search: $search, sort: $sort) {
        id
        name
        about
        avatar {
          large
          medium
        }
        bannerImage
        isFollowing
        isFollower
        isBlocked
        bans
        options {
          titleLanguage
          displayAdultContent
          airingNotifications
          profileColor
        }
        mediaListOptions {
          scoreFormat
          rowOrder
          useLegacyLists
          sharedTheme
          sharedThemeEnabled
        }
        favourites {
          anime {
            pageInfo {
              total
              perPage
              currentPage
              lastPage
              hasNextPage
            }
            edges {
              node {
                id
                title {
                  romaji
                  english
                  native
                  userPreferred
                }
              }
            }
          }
          manga {
            pageInfo {
              total
              perPage
              currentPage
              lastPage
              hasNextPage
            }
            edges {
              node {
                id
                title {
                  romaji
                  english
                  native
                  userPreferred
                }
              }
            }
          }
          characters {
            pageInfo {
              total
              perPage
              currentPage
              lastPage
              hasNextPage
            }
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
          }
          staff {
            pageInfo {
              total
              perPage
              currentPage
              lastPage
              hasNextPage
            }
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
          }
          studios {
            pageInfo {
              total
              perPage
              currentPage
              lastPage
              hasNextPage
            }
            edges {
              id
            }
          }
        }
        unreadNotificationCount
        siteUrl
        donatorTier
        donatorBadge
        moderatorStatus
        updatedAt
      }
    }
  }      
`

export const ViewerQuery = `
query {
  Viewer {
    id
    name
    about
    avatar {
      large
      medium
    }
    bannerImage
    isFollowing
    isFollower
    isBlocked
    bans
    options {
      titleLanguage
      displayAdultContent
      airingNotifications
      profileColor
    }
    mediaListOptions {
      scoreFormat
      rowOrder
      useLegacyLists
      sharedTheme
      sharedThemeEnabled
    }
    favourites {
      anime {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        edges {
          node {
            id
            title {
              romaji
              english
              native
              userPreferred
            }
          }
        }
      }
      manga {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        edges {	
          node {
            id
            title {
              romaji
              english
              native
              userPreferred
            }
          }

        }
      }
      characters {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
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
      }
      staff {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
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
      }
      studios {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        edges {
          id
        }
      }
    }
    unreadNotificationCount
    siteUrl
    donatorTier
    donatorBadge
    moderatorStatus
    updatedAt
  }
}
`