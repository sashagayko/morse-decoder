const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arr = [];
  let str =''
  while (expr !=='') {
    arr.push(expr.slice(0,10))
    expr =expr.slice(10)
  }
  arr =arr.map(el => {
    if (el === '**********') {
      el=' '
    } else {
      for (let i = 0; i < el.length-1; i=i+2) {
        if (el[i]+el[i+1] == '10') {
          str += '.'
        } else if (el[i]+el[i+1] == '11') {
          str += '-'
        } else {}
      }
      el =str;
      str=''
    }
    return el      
  })
  arr =  arr.map((el) => {
    MORSE_TABLE[el] ? el = MORSE_TABLE[el]: ' '
    return el
    })
  return arr.join('')
}

module.exports = {
    decode
}
