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
//Modal
// let modal = document.getElementById('simpleModal');
const modalBtn = document.getElementById('modalBtn');
const closeBtn = document.getElementsByClassName('closeBtn')[0];

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
//Buscar por distrito
const findFood = () => {
    searchByDiscrit = inputSearch.value;
    console.log(searchByDiscrit);
    getData(searchByDiscrit)
}
searchButton.addEventListener('click', findFood);

//Modal

// Abrir modal
// const openModal = () => {
//     modal.style.display = 'block';
// }

// Cerrar modal
// const closeModal = () => {
//     modal.style.display = 'none';
// }

// Cerrar modal fuera de clic
// const outsideClick = (e) => {
//     if (e.target == modal) {
//         modal.style.display = 'none';
//     }
// }

// modalBtn.addEventListener('click', ()=> 
// alert('hola')
// );
// closeBtn.addEventListener('click', closeModal);
// window.addEventListener('click', outsideClick);

