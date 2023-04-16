import { encrypt } from './helpers/encrypt'
import { decrypt } from './helpers/decrypt'

const input = document.querySelector('#textarea1') as HTMLTextAreaElement
const encryptButton = document.querySelector('#encryptButton') as HTMLButtonElement
const decryptButton = document.querySelector('#decryptButton') as HTMLButtonElement
const warningSection = document.querySelector('#warningSection') as HTMLElement
const resultsSection = document.querySelector('#resultsSection') as HTMLElement
const results = document.querySelector('#textarea2') as HTMLTextAreaElement
const copyButton = document.querySelector('#copyButton') as HTMLButtonElement

// TRAER TEXTO
const getTextValue = ():string => {
  return input.value
}

// MOSTRAR RESULTADOS, ALTERNAR ENTRE LAS SECCIONES
const showResults = (text:string) => {
  results.value = text

  warningSection.classList.toggle('novisible', !!text)
  resultsSection.classList.toggle('novisible', !text)
}

// COPIAR TEXTO
const copyText = () => {
  navigator.clipboard.writeText(results.value)

  // ** cambiar estilos del boton
  copyButton.innerText = 'Texto copiado :D'
  copyButton.classList.add('button--copy')

  setTimeout(() => {
    copyButton.innerText = 'Copiar'
    copyButton.classList.remove('button--copy')
  }, 1000)
}

// ESCUCHADORES DE EVENTOS
encryptButton.addEventListener('click', ()=>{
  showResults(encrypt(getTextValue()))
})
decryptButton.addEventListener('click', ()=>{
  showResults(decrypt(getTextValue()))
})
copyButton.addEventListener('click', copyText)

input.addEventListener('input', (event:Event) => {
  const newText:string = (event.target as HTMLInputElement).value.replace(/[^a-z\s]+/g , '')
  input.value = newText
})
