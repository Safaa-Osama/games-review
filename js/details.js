import { Ui } from "./ui.js";

export class Details{
    constructor(id){
    this.uiObj= new Ui();   
    this.gameDetails(id);


	document.querySelector(".games").classList.add('d-none')
	document.querySelector(".details").classList.remove('d-none')

	document.querySelector('.layer i').addEventListener( 'click' , function(){
		document.querySelector(".games").classList.remove('d-none')
	document.querySelector(".details").classList.add('d-none')
	} )
	
}


    async gameDetails(id) {
		document.querySelector('.loading').classList.remove('d-none')
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'dc55ed9fbemshca07799d31fc69ep10b984jsnba29287ee61d',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const detailsObj = await response.json();
this.uiObj.displayGameDetails(detailsObj);

} catch (error) {
	console.error(error);
}
finally {
      document.querySelector(".loading").classList.add("d-none");
    }
    }


}