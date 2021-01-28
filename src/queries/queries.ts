export const MediaQuery = `
query ($id: Int) {
    Media(id: $id) {
      id
      title {
        romaji
        english
        native
        userPreferred
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
    }
  }  
`