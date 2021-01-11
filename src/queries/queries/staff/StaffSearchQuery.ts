const StaffSearchQuery = `
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

export { StaffSearchQuery };