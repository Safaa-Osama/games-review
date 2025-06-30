
// if (localStorage.getItem("myGames") !== null) {
//     gamesList = JSON.parse(localStorage.getItem("data"));
//     displayAllGames(data);
// }


// //............object.........
// developer: "NEOWIZ"
// genre: "Shooter"
// id: 533
// platform: "PC (Windows)"
// publisher: "NEOWIZ"
// short_description: "A.V.A is a free-to-play online first-person shooter with multiple game modes, unique customizations, as well as PvP and PvE gameplay."
// thumbnail: "https://www.freetogame.com/g/533/thumbnail.jpg"
// title: "A.V.A Global"


function displayAllGames(data) {
    let games = '';
    for (let i = 0; i < data.length; i++) {
        games += ` <div class="main col-md-4 col-lg-3 col-sm-6">
          <div class="card p-3 bg-black text-light">
            <img
              src="${data[i].thumbnail}"
              alt="game's picture"
              class="img-thumbnail"
            />
            <div class="title d-flex justify-content-between my-2">
              <h5>${data[i].title}</h5>
              <button class="btn btn_custom px-1 py-0">Free</button>
            </div>
            <p>${data[i].description}</p>

            <div class="link_group d-flex justify-content-between">
              <a href="#">${data[i].category}</a>
              <a href="#">${data[i].platform}</a>
            </div>
          </div>
        </div>`
    }
    document.getElementById('rowData').innerHTML = games;
    // localStorage.setItem("myGames", JSON.stringify(data));

}

function displayGameDetails(){
 let details = ` <div class="col  w-29">
            <h2 class="my-2">name of game</h2>
            <img class="details-img w-100 img-thumbnail" src="${thumbnail}" alt="">
        </div>
        <div class="col p-3 w-69">
            <h3 class="my-4">title: ${Game.title}</h3>

            <h5>Category: ${Game.category}<span class="badge text-bg-info>"> mmors</span></h5>
            <h5>Platform: Lorem, ipsum<span class="badge text-bg-info>"> windows</span></h5>
            <h5>Status: Lorem, ipsum <span class="badge text-bg-info>"> live</span ></h5>
            <p class="my-2">${Game.short_description}</p>

            <button class="btn btn-outline-warning my-3">show games</button>
        </div>`
    

    document.getElementById('gameDetails').innerHTML = details;
}

   




let gameBtn = document.getElementById("gameBtn");
gameBtn.addEventListener("click", function () {
  displayGameDetails();
});