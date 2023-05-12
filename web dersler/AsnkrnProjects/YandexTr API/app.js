// prototype , ajax , callback
addEventListener();

function addEventListener(){
    document.getElementById("translate-from").addEventListener("submit",translateWord)
    // CHange
    document.getElementById("language").onchange = function(){
        // Arayuz islemleri 
    }

}
const translate = new Translate(document.getElementById("word").value,document.getElementById("language").value);


function translateWord(e){
    translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value);

translate.translateWord(function(err,response){
if (err){
    // hata 
    console.log(err);
}
else{
    ui.displayTranslate(response);
}

});
    e.preventDefault();
}