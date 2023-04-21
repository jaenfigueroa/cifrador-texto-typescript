import { encrypt, decrypt } from './modules/encryption'

const input = document.querySelector<HTMLTextAreaElement>('#textarea1')
const encryptButton = document.querySelector<HTMLButtonElement>('#encryptButton')
const decryptButton = document.querySelector<HTMLButtonElement>('#decryptButton')
const warningSection = document.querySelector<HTMLElement>('#warningSection')
const resultsSection = document.querySelector<HTMLElement>('#resultsSection')
const results = document.querySelector<HTMLTextAreaElement>('#textarea2')
const copyButton = document.querySelector<HTMLButtonElement>('#copyButton')

if (
  input &&
  encryptButton &&
  decryptButton &&
  warningSection &&
  resultsSection &&
  results &&
  copyButton){

  // TRAER TEXTO DEL INPUT
  const getTextValue = ():string => {
    return input.value
  }

  // MOSTRAR RESULTADOS, ALTERNANDO LAS SECCIONES
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

  // ELIMINAR CARACTERES NO ADMITIDOS
  const clearInput = (value:string):string => {
    return value.replace(/[^a-z\s]+/g, '')
  }

  // ESCUCHADORES DE EVENTOS
  input.addEventListener('input', (e: Event) => {
    input.value = clearInput((e.target as HTMLInputElement).value)
  })

  encryptButton.addEventListener('click', () => {
    showResults(encrypt(getTextValue()))
  })

  decryptButton.addEventListener('click', () => {
    showResults(decrypt(getTextValue()))
  })

  copyButton.addEventListener('click', copyText)

} else {
  console.log('Algunos elementos del DOM no se encontraron o no tienen el tipo esperado.')
}

