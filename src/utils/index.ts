export const createHeader = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}
