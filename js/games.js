import { Ui } from "./ui.js";
import { Details } from "./details.js";

export class Game {
    constructor() {
        this.uiObj = new Ui();
        this.getGame("mmorpg");
        document.querySelectorAll(".navbar a").forEach((linkItem) => {
            linkItem.addEventListener("click", (e) => {
                let category = e.target.textContent.toLowerCase();
                document.querySelector(".navbar .active").classList.remove('active');
                linkItem.classList.add('active');
                this.getGame(category);
            });
        });
    }

    async getGame(category) {
		document.querySelector('.loading').classList.remove('d-none')
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: "GET",
            headers: {
                "x-rapidapi-key": "dc55ed9fbemshca07799d31fc69ep10b984jsnba29287ee61d",
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
            },
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            this.uiObj.displayAllGames(result);
            this.cardClick();

        } catch (error) {
            console.error(error);
        }
        finally {
      document.querySelector(".loading").classList.add("d-none");
    }
    }


    cardClick(){
        document.querySelectorAll('.card').forEach(function(card){
card.addEventListener( 'click', function(){
let cardId = card.dataset.id;
   new Details(cardId);
}
)
        }
        )
    }
}
