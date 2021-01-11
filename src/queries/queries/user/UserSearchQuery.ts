const UserSearchQuery = `
query ($id: Int, $name: String, $search: String, $sort: [UserSort], $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      Results: users(id: $id, name: $name, search: $search, sort: $sort) {
        id
        name
        about
        avatar {
          large
          medium
        }
        bannerImage
        isFollowing
        isFollower
        isBlocked
        bans
        options {
          titleLanguage
          displayAdultContent
          airingNotifications
          profileColor
        }
        mediaListOptions {
          scoreFormat
          rowOrder
          useLegacyLists
          sharedTheme
          sharedThemeEnabled
        }
        favourites {
          anime {
            pageInfo {
              total
              perPage
              currentPage
              lastPage
              hasNextPage
            }
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
          manga {
            pageInfo {
              total
              perPage
              currentPage
              lastPage
              hasNextPage
            }
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
            pageInfo {
              total
              perPage
              currentPage
              lastPage
              hasNextPage
            }
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
            }
          }
          staff {
            pageInfo {
              total
              perPage
              currentPage
              lastPage
              hasNextPage
            }
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
            }
          }
          studios {
            pageInfo {
              total
              perPage
              currentPage
              lastPage
              hasNextPage
            }
            edges {
              id
            }
          }
        }
        unreadNotificationCount
        siteUrl
        donatorTier
        donatorBadge
        moderatorStatus
        updatedAt
      }
    }
  }      
`

export { UserSearchQuery };