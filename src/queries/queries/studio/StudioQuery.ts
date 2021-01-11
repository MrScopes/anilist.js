const StudioQuery = `
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

export { StudioQuery };