import { encrypt, decrypt } from './modules/encryption'

const input = document.querySelector<HTMLTextAreaElement>('#textarea1')
const encryptButton = document.querySelector<HTMLButtonElement>('#encryptButton')
const decryptButton = document.querySelector<HTMLButtonElement>('#decryptButton')
const warningSection = document.querySelector<HTMLElement>('#warningSection')
const resultsSection = document.querySelector<HTMLElement>('#resultsSection')
const results = document.querySelector<HTMLTextAreaElement>('#textarea2')
const copyButton = document.querySelector<HTMLButtonElement>('#copyButton')

// TRAER TEXTO DEL INPUT
const getTextValue = (): string => {
  if (!input) {
    throw new Error('EL elemento "input" no esta definido')
  }

  return input.value
}

// ALTERNAR ENTRE LAS SECCIONES
const toogleVisibility = (text:string) => {
  if (!warningSection || !resultsSection) {
    throw new Error('El elemento "warningSection" o "resultsSection" no estan definidos')
  }

  warningSection.classList.toggle('novisible', !!text)
  resultsSection.classList.toggle('novisible', !text)
}

// MOSTRAR RESULTADOS
const showResults = (text: string) => {
  if (!results) {
    throw new Error('El elemento "results" no está definido')
  }

  results.value = text
  toogleVisibility(text)
}

// MOSTRA MENSAJE COPIADO && CAMBIAR ESTILOS DEL BOTON
const copyButtonShowMessage = () => {
  if (!copyButton) {
    throw new Error('El elemento "copyButton" no esta definido')
  }

  copyButton.innerText = 'Texto copiado :D'
  copyButton.classList.add('button--copy')

  setTimeout(() => {
    copyButton.innerText = 'Copiar'
    copyButton.classList.remove('button--copy')
  }, 1000)
}

// COPIAR TEXTO
const copyText = () => {
  if (!results) {
    throw new Error('El elemento "results" no esta definido')
  }

  navigator.clipboard.writeText(results.value)

  // ** cambiar estilos del boton
  copyButtonShowMessage
}

// ELIMINAR CARACTERES NO ADMITIDOS
const clearInput = (value: string): string => {
  return value.replace(/[^a-z\s]+/g, '')
}

// ESCUCHADORES DE EVENTOS
input?.addEventListener('input', (e: Event) => {
  input.value = clearInput((e.target as HTMLInputElement).value)
})

encryptButton?.addEventListener('click', () => {
  showResults(encrypt(getTextValue()))
})

decryptButton?.addEventListener('click', () => {
  showResults(decrypt(getTextValue()))
})

copyButton?.addEventListener('click', copyText)

