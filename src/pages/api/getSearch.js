

export default async function getSearch(req, res) {

    const param = req.body
    res = await fetch(`https://api.jikan.moe/v4/anime/?letter=${param}`).then(
        (res) => res.json()
    );  
}