
const BaseURL = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'dc55ed9fbemshca07799d31fc69ep10b984jsnba29287ee61d',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
};


async function getGames() {
    const response = await fetch(BaseURL, options);
    const data = await response.json(); 
    console.log(data); 
}
getGames();
// displayAllGames(data);







// category:
// mmorpg
// shooter
// sailing
// permadeath
// superhero
// pixel



// Endpoints: Below are the available endpoints:
// /games: Retrieve a list of all free-to-play games.
//     / game ? id = { game_id } : Retrieve details of a specific game by its ID.
// / games ? category = { category_name } : Retrieve a list of all available games from a specific genre.
// / games ? platform = { platform_name } : Retrieve a list of all available games from a specific platform.
// / games ? sort - by={ sort_name }: Sort games by release date, alphabetical or relevance.
// Making Requests: You can make HTTP GET requests to the endpoints using tools like cURL, Postman,
//     or by directly accessing the URLs in your web browser.

