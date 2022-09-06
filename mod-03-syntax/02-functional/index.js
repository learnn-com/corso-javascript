function containsNumber (array) {
  return array.some((element) => typeof element === 'number')
}

function isPangram (sentence) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const letters = sentence.toLowerCase().split('')

  return alphabet.split('').every((letter) => letters.includes(letter))
}

function isPalindrome (sentence) {
  const letters = sentence.toLowerCase().split('')
  return letters.join('') === letters.reverse().join('')
}
