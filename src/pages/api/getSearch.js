

export default async function getSearch(req, res) {


    const response = await fetch(`https://api.jikan.moe/v4/anime/?letter=${req}`).then(
        (res) => res.json()
      );
    
}