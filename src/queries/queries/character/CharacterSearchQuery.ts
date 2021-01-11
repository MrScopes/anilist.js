const CharacterSearchQuery = `
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

export { CharacterSearchQuery };