import aes from 'crypto-js/aes'
import cryptojs from 'crypto-js'

export const encryptString = (string) => {
  const key = process.env.REACT_APP_ENCRYPT_KEY
  return aes.encrypt(string, key)
}

export const decryptHash = (hash) => {
  const key = process.env.REACT_APP_ENCRYPT_KEY
  const plaintext = aes.decrypt(hash.toString(), key)
  return plaintext.toString(cryptojs.enc.Utf8)
}

const transformToArray = (prmstr) => {
  let params = {}
  let prmarr = prmstr.split('&')
  for (let i = 0; i < prmarr.length; i++) {
    let tmparr = prmarr[i].split('=')
    params[tmparr[0]] = tmparr[1]
  }
  return params
}

export const getSearchParameters = () => {
  let prmstr = window.location.search.substr(1)
  return prmstr !== null && prmstr !== '' ? transformToArray(prmstr) : {}
}
