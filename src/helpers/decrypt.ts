import { DICTIONARY } from '../services/dictionary'

export const decrypt = (text:string):string => {
  for (const key in DICTIONARY) {
    text = text.replace(new RegExp(DICTIONARY[key], 'g'), key)
  }
  return text
}