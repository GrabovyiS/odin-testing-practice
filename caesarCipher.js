function caesarCipher(string, inputKey = 0) {
  key = inputKey % 26;
  let cypheredString = '';

  for (let i = 0; i < string.length; i++) {
    cypheredString = cypheredString + caesarCipherChar(string[i], key);
  }

  return cypheredString;
}

function caesarCipherChar(char, key) {
  if (!isAlpha(char)) {
    return char;
  }

  if (char >= 'a' && char <= 'z') {
    const alphabetNumber = char.charCodeAt(0) - 'a'.charCodeAt(0);
    const cypheredAlphabetNumber = (alphabetNumber + key) % 26;
    const cypheredChar = String.fromCharCode(
      'a'.charCodeAt(0) + cypheredAlphabetNumber
    );
    return cypheredChar;
  }

  if (char >= 'A' && char <= 'Z') {
    const alphabetNumber = char.charCodeAt(0) - 'A'.charCodeAt(0);
    const cypheredAlphabetNumber = (alphabetNumber + key) % 26;
    const cypheredChar = String.fromCharCode(
      'A'.charCodeAt(0) + cypheredAlphabetNumber
    );
    return cypheredChar;
  }
}

function isAlpha(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

module.exports = caesarCipher;
