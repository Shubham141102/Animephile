
var resp = {}
var res = {}
const getTopAnime = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime`).then(
        (res) => res.json()
      );
    resp =  response.data
}
// export default res = getTopAnime().then(
//     () => {
//         return [resp]
//     }
// )
// export res = getTopAnime().then(
//     () => {
//         return resp
//     }
// )

// export default [
//     {
//         title: "Attack on Titan",
//         description: "The best one out there"
//     },
//     {
//         title: "Fullmetal Alchemist",
//         description: "Makes you think"
//     }, 
//     {
//         title: "Assasination Classroom",
//         description: "Nice concept"
//     },
//     {
//         title: "Death Note",
//         description: "Great plot"
//     },
//     {
//         title: "Dragon Ball",
//         description: "Full-on action"
//     },
//     {
//         title: "Naruto",
//         description: "The best from the best"
//     },
  
// ]