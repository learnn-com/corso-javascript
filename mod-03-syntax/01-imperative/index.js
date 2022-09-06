function containsNumbers (array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      return true
    }
  }

  return false
}

function isPangram (sentence) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const letters = sentence.toLowerCase().split('')

  for (let i = 0; i < alphabet.length; i++) {
    if (!letters.includes(alphabet[i])) {
      return false
    }
  }

  return true
}

function isPalindrome (sentence) {
  const letters = sentence.toLowerCase().split('')
  const reversed = []

  for (let i = letters.length - 1; i >= 0; i--) {
    reversed.push(letters[i])
  }

  return letters.join('') === reversed.join('')
}
