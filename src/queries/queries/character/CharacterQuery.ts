const CharacterQuery = `
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

export { CharacterQuery };