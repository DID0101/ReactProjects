class Github {

    constructor(){
        this.url = "https://api.github.com/users/";
    }
async getGithubData(username){
    const reponseUser = await fetch(this.url + username);
    const reponseRepo = await fetch(this.url + username +"/repos");

    const userData = await responseUser.json();
    const repoData = await responseRepo.json();
    return{
        user:userData,
        repo:repoData
    }

}
}