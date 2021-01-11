const CharacterFavorite = `
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

export { CharacterFavorite };