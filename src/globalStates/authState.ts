import { atom } from 'recoil'

export const authState = atom<string>({
  key: 'auth',
  default: '',
})
