import { DICTIONARY } from '../services/dictionary'

export const decrypt = (text:string):string => {
  for (const key in DICTIONARY) {
    text = text.replaceAll(DICTIONARY[key], key)
  }
  return text
}