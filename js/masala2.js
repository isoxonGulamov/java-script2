let a = 10;
let b = 70;
for(let i = 0; i < b + 1; i++ ){
  if(i < a){
  continue
  }
  console.log(i)
}
console.log("Jami sonlar:"+ (b - a + 1))
if(a > b){
  console.log("Kechirasiz Brat siz a < b ifodaga amal qiling !")
}else{
  console.log("Zo'r brat a < b ifadaga amal qildiz ")
}