import { encrypt, decrypt } from '../ts/modules/encryption';

test('Debe encriptar el texto', () => {
  expect(encrypt('jaenfigueroa'))
    .toEqual('jaienternfimesgufatenterroberai')
  expect(encrypt('otorongo durmiendo'))
    .toEqual('obertoberroberngober dufatrmimesenterndober')
  expect(encrypt('me gusta el cafe con leche'))
    .toEqual('menter gufatstai enterl caifenter cobern lenterchenter')
  expect(encrypt('el perro corre por el parque sin cesar'))
    .toEqual('enterl penterrrober coberrrenter poberr enterl pairqufatenter simesn centersair')
})

test('Debe desencriptar el texto', () => {
  expect(decrypt('jaienternfimesgufatenterroberai'))
    .toEqual('jaenfigueroa')
  expect(decrypt('obertoberroberngober dufatrmimesenterndober'))
    .toEqual('otorongo durmiendo')
  expect(decrypt('menter gufatstai enterl caifenter cobern lenterchenter'))
    .toEqual('me gusta el cafe con leche')
  expect(decrypt('enterl penterrrober coberrrenter poberr enterl pairqufatenter simesn centersair'))
    .toEqual('el perro corre por el parque sin cesar')
})



