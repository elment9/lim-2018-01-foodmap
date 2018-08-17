// alert('main');


let searchByDiscrit = '';

window.filterRestaurants = (list, searchByDiscrit) => {


    if (searchByDiscrit !== '') {

        const filteredRestaurants = list.filter(element => {

            return element.distrito.toUpperCase().indexOf(searchByDiscrit.toUpperCase()) > -1;

        })
        return filteredRestaurants;

    } else {
        return list;
    }

}

window.onload = () => { getData('') }

printRestaurant = (allRestaurants) => {
    allRestaurants.forEach(restaurant => {
        restaurantContainer.innerHTML +=
            `
<div class="w3-third w3-container w3-margin-bottom">
    <img src="${restaurant.image}" alt="${restaurant.nombre}" style="width:100%" class="w3-hover-opacity">
    <div class="w3-container w3-white">
        <p>
            <b>${restaurant.nombre}</b>
        </p>
        <button class ="action-button shadow animate green-button" onclick="document.getElementById('${restaurant.nombre}').style.display='block'">Ver más</button> 
    </div>

    <div id="${restaurant.nombre}" class="modal">
    <div class="modal-content">
      <div class="modal-header">
          <span onclick="document.getElementById('${restaurant.nombre}').style.display='none'" class="closeBtn">&times;</span>
          <h2>${restaurant.nombre}</h2>
      </div>
      <div class="modal-body">
        <p>${restaurant.descripción}</p>
        <p><b>Dirección: </b>${restaurant.dirección}</p>
      </div>

    </div>
  </div>

`
    });
}


const getData = (searchByDiscrit) => {


    fetch('/data/limaRestaurant.json')
        .then(response =>
            response.json())
        .then(result => {

            restaurantContainer.innerHTML = '';

            const allRestaurants = filterRestaurants(result, searchByDiscrit)
            printRestaurant(allRestaurants)
            console.log(allRestaurants);
        })


}


    // swal("Here's the title!", "...and here's the text!");
