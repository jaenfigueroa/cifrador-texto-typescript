import { DICTIONARY } from '../services/dictionary'

export const encrypt = (text:string):string => {
  for (const key in DICTIONARY) {
    text = text.replaceAll(key, DICTIONARY[key])
  }
  return text
}

export const decrypt = (text:string):string => {
  for (const key in DICTIONARY) {
    text = text.replaceAll(DICTIONARY[key], key)
  }
  return text
}