// 1- Crie um algoritmo que percorre uma array unidimensional contendo letras e números: [ “a”, 10, “b”, “hola”, 122, 15]

const array = ['a', 10, 'b', 'hola', 122, 15];

// A) Obtenha uma array contendo apenas as letras
const onlyLetters = array.filter((letter) => typeof letter !== 'number')

console.log(onlyLetters)

// B) Obtenha uma array contendo apenas os números
const onlyNumbers = array.filter((number) => typeof number !== 'string')

console.log(onlyNumbers)

// C) Obtenha o maior número da array acima
 const onlyNumbersC = array.filter((number) => typeof number !== 'string')
 console.log(onlyNumbersC)
const max = onlyNumbersC.reduce(function(a, b){
  return Math.max(a,b)
})

console.log(max)

// 2 - Crie um hashmap (ou um objeto simples em JavaScript) que contenha as funções elementares de adição, subtração, multiplicação e divisão.

const hashmapMath = {
  div : (a, b) => {
    if(typeof a !== 'number' && b !== 'number') return null
    if(b === 0) return null
    return a / b
  },
  sum : (array) => array.reduce((acc, num ) => acc + num),
  sub : (array) => array.reduce((acc, num ) => acc - num),
  mul : (array) => array.reduce((acc, num ) => acc * num),
}

// 3 - Crie um algoritmo que gere o seguinte padrão de ID aleatório: XXXX-AAAA-BBBB-CCCC
// Onde os padrões XXXX, AAAA, BBBB e CCCC são alfanuméricos aleatórios
// O padrão é uma string: "XXXX-AAAA-BBBB-CCCC"
// O resultado deve ser armazenado em uma variável. Por exemplo:
// let id = generarId()
// id vale ~ abc1-bb12-234a-bcc2

function generateId(length){
  let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  let b = [];
  for (var i=0; i<length; i++) {
      var j = (Math.random() * (a.length-1)).toFixed(0);
      b[i] = a[j];
  }
  return b.join("");
}

let ida = generateId(4)
let idb = generateId(4)
let idc = generateId(4)
let idd = generateId(4)
let id = `${ida.toString()}-${idb.toString()}-${idc.toString()}-${idd.toString()}`
console.log(id)