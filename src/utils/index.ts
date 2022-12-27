export const createHeader = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

export const unixToDate = (unixTime: number) => {
  const date = new Date(unixTime)
  return String(date.getFullYear() + '年' + Number(date.getMonth() + 1) + '月' + date.getDate() + '日')
}

// TODO
export const dateToUnix = (date: Date) => {
  return
}
