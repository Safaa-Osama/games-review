
import { Ui } from "./ui.js"




export class Game {
    constructor() {
        this.uiObj = new Ui();
        this.getGame('sailing');
       document.querySelectorAll('.navbar a').forEach((linkItem){
    linkItem.addEventListener('click',  {
        

    });
})
    }



    async getGame(category) {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'dc55ed9fbemshca07799d31fc69ep10b984jsnba29287ee61d',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            this.uiObj.displayAllGames(result);


        } catch (error) {
            console.error(error);
        }
    }


}