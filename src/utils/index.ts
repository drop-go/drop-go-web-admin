export const header = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}
