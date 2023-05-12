document.getElementById("btn").addEventListener("click",function(){
// XMLHTTPRquest
 
 const xhr = new XMLHttpRequest();

 xhr.onload = function(){
   // console.log(this.readyState);
    if(this.status === 200){
        //console.log(this.responseText);
        document.getElementById("ajax").textContent = this.responseText;
        
    }
 }

// console.log(xhr);
// xhr.onreadystatechange = function(){

//     // console.log(this,this.readyState);
//     //console.log(this.status);

//     if (this.status == 200 && this.readyState == 4){

//         //response hazir 
//         console.log(this.responseText);
//     }
// }
xhr.open("GET","example.txt",true);

xhr.send();


});