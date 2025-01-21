const CryptoJS = require('crypto-js');

// Função para criptografar texto
function encryptMessage(message, secretKey) {
    return CryptoJS.AES.encrypt(message, secretKey).toString();
}

// Função para descriptografar texto
function decryptMessage(encryptedMessage, secretKey) {
    const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}

// Exemplo de uso
const secretKey = "MinhaChaveSecreta123";
const originalMessage = "Texto confidencial";

const encryptedMessage = encryptMessage(originalMessage, secretKey);
console.log("Texto Criptografado:", encryptedMessage);

const decryptedMessage = decryptMessage(encryptedMessage, secretKey);
console.log("Texto Descriptografado:", decryptedMessage);
