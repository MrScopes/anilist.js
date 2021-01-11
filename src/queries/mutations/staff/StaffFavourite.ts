const StaffFavorite = `
mutation ($id: Int) { 
    ToggleFavourite(staffId: $id) { 
        staff { 
            edges { 
                node { 
                    id
                } 
            } 
        } 
    } 
}
`

export { StaffFavorite };