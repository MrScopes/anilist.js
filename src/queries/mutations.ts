export const CharacterFavorite = `
mutation ($id: Int) { 
    ToggleFavourite(characterId: $id) { 
        characters { 
            edges { 
                node { 
                    id
                } 
            } 
        } 
    } 
}
`

export const AnimeFavorite = `
mutation ($id: Int) { 
    ToggleFavourite(animeId: $id) { 
        anime { 
            edges { 
                node { 
                    id
                } 
            } 
        } 
    } 
}
`

export const DeleteEntry = `
mutation ($id: Int) {
    DeleteMediaListEntry(id: $id) {
      deleted
    }
  }
`

export const MangaFavorite = `
mutation ($id: Int) { 
    ToggleFavourite(mangaId: $id) { 
        manga { 
            edges { 
                node { 
                    id
                } 
            } 
        } 
    } 
}
`

export const UpdateEntry = `
mutation ($id: Int, $mediaId: Int, $status: MediaListStatus, $score: Float, $scoreRaw: Int, $progress: Int, $progressVolumes: Int, $repeat: Int, $priority: Int, $private: Boolean, $notes: String, $hiddenFromStatusLists: Boolean, $customLists: [String], $advancedScores: [Float], $startedAt: FuzzyDateInput, $completedAt: FuzzyDateInput) {
  SaveMediaListEntry(id: $id, mediaId: $mediaId, status: $status, score: $score, scoreRaw: $scoreRaw, progress: $progress, progressVolumes: $progressVolumes, repeat: $repeat, priority: $priority, private: $private, notes: $notes, hiddenFromStatusLists: $hiddenFromStatusLists, customLists: $customLists, advancedScores: $advancedScores, startedAt: $startedAt, completedAt: $completedAt) {
    id
    userId
    mediaId
    status
    score
    progress
    progressVolumes
    repeat
    priority
    private
    notes
    hiddenFromStatusLists
    customLists
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
  }
}
`

export const StaffFavorite = `
mutation ($id: Int) { 
    ToggleFavourite(staffId: $id) { 
        staff { 
            edges { 
                node { 
                    id
                } 
            } 
        } 
    } 
}
`

export const StudioFavorite = `
mutation ($id: Int) { 
    ToggleFavourite(studioId: $id) { 
        studios { 
            edges { 
                node { 
                    id
                } 
            } 
        } 
    } 
}
`

export const UserFollow = `
mutation($userId: Int) {
    ToggleFollow(userId: $userId) {
      id
      name
    }
  }
`

export const ViewerUpdate = `
mutation ($about: String, $titleLanguage: UserTitleLanguage, $displayAdultContent: Boolean, $airingNotifications: Boolean, $scoreFormat: ScoreFormat, $rowOrder: String, $profileColor: String, $donatorBadge: String, $notificationOptions: [NotificationOptionInput], $animeListOptions: MediaListOptionsInput, $mangaListOptions: MediaListOptionsInput) {
    UpdateUser(about: $about, titleLanguage: $titleLanguage, displayAdultContent: $displayAdultContent, airingNotifications: $airingNotifications, scoreFormat: $scoreFormat, rowOrder: $rowOrder, profileColor: $profileColor, donatorBadge: $donatorBadge, notificationOptions: $notificationOptions, animeListOptions: $animeListOptions, mangaListOptions: $mangaListOptions) {
      id
      name
      about
    }
  }  
`