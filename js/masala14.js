let s = 10;
let natija = 0
for(let i = 0; i < s; i++){
    if(i%2 == 0){
      continue
    }
    console.log(i)
    natija = natija + i + (2*s - 1)
}
console.log(natija)