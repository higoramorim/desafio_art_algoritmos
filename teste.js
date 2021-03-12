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