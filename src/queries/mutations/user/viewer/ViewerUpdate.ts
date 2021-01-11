const ViewerUpdate = `
mutation ($about: String, $titleLanguage: UserTitleLanguage, $displayAdultContent: Boolean, $airingNotifications: Boolean, $scoreFormat: ScoreFormat, $rowOrder: String, $profileColor: String, $donatorBadge: String, $notificationOptions: [NotificationOptionInput], $animeListOptions: MediaListOptionsInput, $mangaListOptions: MediaListOptionsInput) {
    UpdateUser(about: $about, titleLanguage: $titleLanguage, displayAdultContent: $displayAdultContent, airingNotifications: $airingNotifications, scoreFormat: $scoreFormat, rowOrder: $rowOrder, profileColor: $profileColor, donatorBadge: $donatorBadge, notificationOptions: $notificationOptions, animeListOptions: $animeListOptions, mangaListOptions: $mangaListOptions) {
      id
      name
      about
    }
  }  
`

export { ViewerUpdate };