const UserFollow = `
mutation($userId: Int) {
    ToggleFollow(userId: $userId) {
      id
      name
    }
  }
`

export { UserFollow };