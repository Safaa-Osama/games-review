

export class Ui {
  displayAllGames(data) {
    let games = "";
    for (let i = 0; i < data.length; i++) {
      games += ` <div class="main col-md-4 col-lg-3 col-sm-6">
          <div class="card bg-black text-light h-100 " data-id="${data[i].id}">
<div class="card-body">
 <img
              src="${data[i].thumbnail}"
              alt="game's picture"
              class="img-thumbnail"
            />
            <div class="title d-flex justify-content-between my-2">
              <h5>${data[i].title}</h5>
              <button class="btn btn_custom px-1 py-0">Free</button> 
            </div>
            <p>${data[i].short_description}</p>
</div>

<div class="link_group d-flex justify-content-between card-footer ">
              <a href="#">${data[i].genre}</a>
              <a href="#">${data[i].platform}</a>
            </div>

          </div>
          
            
        </div>`;
    }
    document.getElementById("rowData").innerHTML = games;
  }

  displayGameDetails(gameObj) {
    let details = ` <div class="col-4">
            <h2 class="my-2">Details Game</h2>
            <img class="details-img w-100 img-thumbnail" src="${gameObj.thumbnail}" alt="">
        </div>
        <div class="p-3 col-8">
            <h3 class="my-4">title: ${gameObj.title}</h3>

            <h5>Category:<span class="badge text-bg-info"> ${gameObj.genre}</span></h5>
            <h5>Platform: <span class="badge text-bg-info"> ${gameObj.platform}</span></h5>
            <h5>Status: ${gameObj.status} <span class="badge text-bg-info">live</span ></h5>
            <p class="my-2">${gameObj.description}</p>

            <button class="btn btn-outline-warning my-3">show games</button>
        </div>`;

    document.getElementById("gameDetails").innerHTML = details;
  }
}
