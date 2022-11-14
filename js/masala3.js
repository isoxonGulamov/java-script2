let a = 100;
let b = 70;
let son
for(let i = b - 1; i > a ; i-- ){
  if(i < a){
  continue
  }
  console.log(i)
}
console.log("Jami sonlar:"+ (b - a - 1))
if(a > b){
  console.log("Kechirasiz Brat siz a < b ifodaga amal qiling !")
}else{
  console.log("Zo'r brat a < b ifadaga amal qildiz ")
}