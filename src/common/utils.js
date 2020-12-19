import aes from 'crypto-js/aes';
import cryptojs from 'crypto-js';

export const encryptString = (string) => {
    const key = process.env.REACT_APP_ENCRYPT_KEY
    return aes.encrypt(string, key)
}

export const decryptHash = (hash) => {
    const key = process.env.REACT_APP_ENCRYPT_KEY
    const plaintext = aes.decrypt(hash.toString(), key)
    return plaintext.toString(cryptojs.enc.Utf8)
}