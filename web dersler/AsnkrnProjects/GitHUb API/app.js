const githubForm = document.getElementById("github-from");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();


eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);

}

function getData(e){
    let username = nameInput.value.trim();

    if (username === ""){
        alert("Lutfen gecerli bir kullanici adi giriniz. ");

    }
    else{

        github.getGithubData(username)
        .then(response =>{
            if (response.user.message === "Not Found"){
                ui.showError("Kullanıcı Bulunamadı");
            }
            else {
                ui.addSearchedUserToUI(username);
                Storage.addSearchedUserToStorage(username);
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
            }
        })
        .catch(err => ui.showError(err));
    }


    ui.clearInput();//input Temizleme
    e.preventDefault();
    function clearAllSearched(){
        // Tüm arananları temizle
        if (confirm("Emin misiniz ?")){
            Storage.clearAllSearchedUsersFromStorage(); // Storagedan Temizleme
            ui.clearAllSearchedFromUI();
        }
    
    
    
    
    }
    function getAllSearched(){
        // Arananları Storagedan al ve Uiye ekle
    
        let users = Storage.getSearchedUsersFromStorage();
    
        let result = "";
        users.forEach(user => {
            // <li class="list-group-item">asdaskdjkasjkşdjşasjd</li>
            result += `<li class="list-group-item">${user}</li>`;
    
        });
    
        lastUsers.innerHTML = result;
    
    }}