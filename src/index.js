import CryptoJS from "crypto-js"
const aes = CryptoJS.AES
const encrypt = aes.encrypt
const decrypt = aes.decrypt

console.log(decrypt(encrypt("SECRET", "wow"), "wow").toString(CryptoJS.enc.Utf8))