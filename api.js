const jikanjs = require('@mateoaranda/jikanjs');
res = async ()=>{return  await jikanjs.loadAnime(31240, 'episodes', 15);}
data = res
console.log(data)