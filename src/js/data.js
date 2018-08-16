// alert('data');
// DOM
//Splash 
const body = document.getElementById('body');
const splashContainer = document.getElementById('splash-container');
const mainContainer = document.getElementById('main-container');
//Contenedores
const restaurantContainer = document.querySelector('.restaurants-container'); 
//Inputs
const inputSearch = document.getElementById('search-by-district');
const searchButton = document.getElementById('search-button');


// SPLASH
mainContainer.style.display = 'none';

const hideSplash = () => {
    splashContainer.style.display = 'none';
    mainContainer.style.display = 'block';
    body.classList.remove('green');
    body.classList.add('w3-light-grey');

}

setTimeout(hideSplash, 2000);

//MENU

const w3_open = () => {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

const w3_close = () => {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

//FUNCIONALIDAD
const findFood = () => {
    searchByDiscrit = inputSearch.value;
    console.log(searchByDiscrit);
    getData(searchByDiscrit)
}
searchButton.addEventListener('click', findFood);