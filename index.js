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

// A) Leve em consideração que a divisão não deve permitir dividendo 0
const hashmapMath = {
  div : (a, b) => {
    if(b === 0) return null
    return a / b
  }
}

// B) A função sum permite um array como parâmetro de entrada e adiciona todos os seus elementos.
const hashmapMath = {
  sum : ([]) => [].reduce((acc, num ) => acc + num),
}

// C) A função de subtração permite um array como parâmetro de entrada e subtrai todos os seus elementos.
const hashmapMath = {
  sub : ([]) => [].reduce((acc, num ) => acc - num),
}

// D) Função de multiplicação - Idem
const hashmapMath = {
  mul : ([]) => [].reduce((acc, num ) => acc * num),
}

// E) A função de divisão aceita dois parâmetros: a e b.
const hashmapMath = {
  div : (a, b) => {
    if(typeof a !== 'number' && b !== 'number') return null
    if(b === 0) return null
    return a / b
  }
}

const hashmapMath = {
  div : (a, b) => {
    if(typeof a !== 'number' && b !== 'number') return null
    if(b === 0) return null
    return a / b
  },
  sum : ([]) => [].reduce((acc, num ) => acc + num),
  sub : ([]) => [].reduce((acc, num ) => acc - num),
  mul : ([]) => [].reduce((acc, num ) => acc * num),
}

// 3 - Crie um algoritmo que gere o seguinte padrão de ID aleatório: XXXX-AAAA-BBBB-CCCC
// Onde os padrões XXXX, AAAA, BBBB e CCCC são alfanuméricos aleatórios
// O padrão é uma string: "XXXX-AAAA-BBBB-CCCC"
// O resultado deve ser armazenado em uma variável. Por exemplo:
// let id = generarId()
// id vale ~ abc1-bb12-234a-bcc2

function generarId(length){
  let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  let b = [];
  for (var i=0; i<length; i++) {
      var j = (Math.random() * (a.length-1)).toFixed(0);
      b[i] = a[j];
  }
  return b.join("");
}

let ida = generarId(4)
let idb = generarId(4)
let idc = generarId(4)
let idd = generarId(4)
let id = `${ida.toString()}-${idb.toString()}-${idc.toString()}-${idd.toString()}`
console.log(id)