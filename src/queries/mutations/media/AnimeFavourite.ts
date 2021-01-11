const AnimeFavorite = `
mutation ($id: Int) { 
    ToggleFavourite(animeId: $id) { 
        anime { 
            edges { 
                node { 
                    id
                } 
            } 
        } 
    } 
}
`

export { AnimeFavorite };