import aes from "crypto-js/aes.js"
const encrypt = aes.encrypt
const decrypt = aes.decrypt

console.log(encrypt("balls", "wow"))