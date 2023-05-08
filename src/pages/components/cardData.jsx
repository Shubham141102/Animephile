const jikanjs = require('@mateoaranda/jikanjs');


var res
var resData = {}
const getUser = async () => {

    const response = await jikanjs.loadAnime(31240, 'episodes', 15);
    return response
}
res = getUser()
export default res
// export default [
//     {
//         title: "Attack on Titan",
//         episode: "S:3 E:2"
//     },
//     {
//         title: "Fullmetal Alchemist",
//         episode: "S:3 E:2"
//     }, 
//     {
//         title: "Assasination Classroom",
//         episode: "S:3 E:2"
//     },
//     {
//         title: "Death Note",
//         episode: "S:3 E:2"
//     },
//     {
//         title: "Dragon Ball",
//         episode: "S:3 E:2"
//     },
//     {
//         title: "Naruto",
//         episode: "S:3 E:2"
//     }

// ]