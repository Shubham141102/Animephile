// const jikanjs = require('@mateoaranda/jikanjs');


// var res

// const getUser = async () => {

//     const response = await jikanjs.loadAnime(31240, 'episodes', 15);
//     res = response
// }

// getUser().then(
//     () => {
//         console.log("The response is")
//         console.log(res)
//     }
// )

const jikanjs = require('@mateoaranda/jikanjs');
const getUser = async () => {

    const response = await jikanjs.loadAnime(31240, 'episodes', 15);
    return response
}
var res = getUser()
export default res