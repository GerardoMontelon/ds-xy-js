let obj = {}
let arrayrandom=[];
let numeroale=1000;

const add    = (key, value) => obj[key] = value

for (var i=0; i<100000; i++){
  arrayrandom[i] = Math.floor(Math.random() * numeroale);
  
  
}
for (var i=0; i<100000; i++){
  add(arrayrandom[i],'name')
  
  
}

console.log(obj);