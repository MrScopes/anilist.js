const StudioSearchQuery = `
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

export { StudioSearchQuery };