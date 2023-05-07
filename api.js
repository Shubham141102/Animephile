const jikanjs = require('@mateoaranda/jikanjs');
res = async ()=>{return  await jikanjs.loadAnime(31240, 'episodes', 15);}


const getUser = async () => {

    const response = await jikanjs.loadAnime(31240, 'episodes', 15);
    console.log(response)
}

getUser()