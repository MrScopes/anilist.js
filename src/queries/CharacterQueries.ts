export const CharacterQuery = `
query ($id: Int) {
    Character(id: $id) {
      id
      name {
        first
        last
        full
        native
      }
    }
  }  
`;

export const CharacterMeta = `
query ($id: Int) {
    Character(id: $id) {
      description
      image {
        large
        medium
      }
      isFavourite
      favourites
      modNotes
    }
  }  
`;