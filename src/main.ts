import { encrypt } from './helpers/encrypt'
import { decrypt } from './helpers/decrypt'

const input:HTMLTextAreaElement | null = document.querySelector('#textarea1')
const encryptButton:HTMLButtonElement | null = document.querySelector('#encryptButton')
const decryptButton:HTMLButtonElement | null = document.querySelector('#decryptButton')
const warningSection:HTMLElement | null = document.querySelector('#warningSection')
const resultsSection:HTMLElement | null = document.querySelector('#resultsSection')
const results:HTMLTextAreaElement | null = document.querySelector('#textarea2')
const copyButton:HTMLButtonElement | null = document.querySelector('#copyButton')

// TRAER TEXTO
const getTextValue = ():string => {
  return input!.value
}

// MOSTRAR RESULTADOS, ALTERNAR ENTRE LAS SECCIONES
const showResults = (text:string) => {
  results!.value = text

  warningSection!.classList.toggle('novisible', !!text)
  resultsSection!.classList.toggle('novisible', !text)
}

// COPIAR TEXTO
const copyText = () => {
  navigator.clipboard.writeText(results!.value)

  // ** cambiar estilos del boton
  copyButton!.innerText = 'Texto copiado :D'
  copyButton!.classList.add('button--copy')

  setTimeout(() => {
    copyButton!.innerText = 'Copiar'
    copyButton!.classList.remove('button--copy')
  }, 1000)
}

encryptButton!.addEventListener('click', ()=>{
  showResults(encrypt(getTextValue()))
})
decryptButton!.addEventListener('click', ()=>{
  showResults(decrypt(getTextValue()))
})
copyButton!.addEventListener('click', copyText)