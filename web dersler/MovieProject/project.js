const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement= document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


//UI object Staart
const ui = new UI();

// Storage object uret 
const storage = new Storage();
 
// all events download
addEventListener();

function addEventListener(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);

    });

    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);


}

function addFilm(e){
const title = titleElement.ariaValueMax;
const director = directorElement.value;
const url = urlElement.value;

if(title===""|| director === "" || url === ""){
    //Hata
    UI.displayMessages("Tüm alanları doldurun...","danger");
}
else{
// yeni film 
     const newFilm = new Film(title,director,url);
     ui.addFilmToUI(newFilm); // arayuze Film ekleme 
     storage.addFilmToStorage(newFilm);// storage film ekleme 
     ui.displayMessages("Film basariyla eklendi...","success")
}


ui.clearInputs(titleElement,urlElement,directorElement);
    e.preventDefault();
}
UI.prototype.displayMessages = function(){


}
function deleteFilm(e){
    if (e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.parentElementSibling.textContent);

        ui.displayMessages("Silme islemi basarili... ","success");

    }
}
function clearAllFilms(){

    if(confirm("Emin misiniz ? ")){

        ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
    }
    

}
