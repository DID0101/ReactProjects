const form =document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todolist = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelector(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){//tum event list leri

form.addEventListener("submit",addTodo);

}

function addTodo(e){
    const newTodo = todoInput.value.trim();
    if(newTodo===""){
        /*<div class="alert alert-success">
  <strong>Success!</strong> Indicates a successful or positive action.
</div>*/

        showAlert("denger","Lutfen bir todo girin ");
    }
    else{
        addTodoToUI(newTodo);
    }

    



    e.preventDefault();

}
function showAlert(type,message){
const alert = document.createElement("div");
alert.className = 'alert alert-${type}';
alert.textContent= message;
console.log(alert)

}

function addTodo(newTodo){// String degerini list item olrak  UI ya eklemek
   /* <!-- <li class="list-group-item d-flex justify-content-between">
    Todo 1
    <a href = "#" class ="delete-item">
        <i class = "fa fa-remove"></i>
    </a>

</li>-->*/
//list Item olustium=rma 
    const listItem =document.createElement("li");
    // link olusturma 
    const link = "#";
    link.className ="delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";
    listItem,className = "list-group-item d-flex justify-content-between";
        // Text Node Ekleme
     
        listItem.appendChild(document.createTextNode(newTodo));
        listItem.appendChild(link);

        //Todo Liste List Item i ekleme
    todolist.appendChild(listItem);
   // console.log(listItem);
   todolist.value=""; 



}
