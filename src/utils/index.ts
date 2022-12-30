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

export const dateToUnix = (date: string): number => new Date(date.replace(/日/, '').replace(/[年月]+/g, '-')).getTime()

export const showScope = (scope: 'public' | 'private' | 'hidden') =>
  scope === 'public' ? '公開' : scope === 'hidden' ? '非表示' : '非公開'
