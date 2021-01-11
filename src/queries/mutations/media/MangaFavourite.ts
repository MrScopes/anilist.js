const MangaFavorite = `
mutation ($id: Int) { 
    ToggleFavourite(mangaId: $id) { 
        manga { 
            edges { 
                node { 
                    id
                } 
            } 
        } 
    } 
}
`

export { MangaFavorite };