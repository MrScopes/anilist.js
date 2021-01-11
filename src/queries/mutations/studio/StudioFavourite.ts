const StudioFavorite = `
mutation ($id: Int) { 
    ToggleFavourite(studioId: $id) { 
        studios { 
            edges { 
                node { 
                    id
                } 
            } 
        } 
    } 
}
`

export { StudioFavorite };