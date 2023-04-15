import { DICTIONARY } from '../services/dictionary'

export const encrypt = (text:string):string => {
  for (const key in DICTIONARY) {
    text = text.replace(new RegExp(key, 'g'), DICTIONARY[key])
  }
  return text
}