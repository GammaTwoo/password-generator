const characterRange = document.getElementById
('characterRange')
const characterNumber = document.getElementById
('characterNumber')

const form = document.getElementById
('generatorForm')

const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('specialCharacters')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
)

characterNumber.addEventListener('input', syncCharacterAmount)
characterRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = +characterNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const specialCharacters = includeSymbolsElement.checked
    let isNull 
    if ( characterAmount >= 0 && characterAmount <= 0 ) { isNull = NaN } else { isNull = characterAmount }
    if (!isNaN(isNull)){
        const password = generatePassword( characterAmount, includeUppercase, includeNumbers, specialCharacters)
        localStorage.setItem("password", password)
        window.location.assign("../../index.html");
    } else {
        window.alert('Please choose a number')
    }
})

function generatePassword( characterAmount, includeUppercase, includeNumbers, specialCharacters ) {

    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if (specialCharacters) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

    
    const passwordCharacters = []
    for (let i = 0; i< characterAmount; i++ ) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++ ) {
        array.push(i)
    }
    return array
}

function syncCharacterAmount(e) {
    const value = e.target.value
    characterNumber.value = value
    characterRange.value = value
};
