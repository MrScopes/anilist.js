const StaffQuery = `
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

export { StaffQuery };