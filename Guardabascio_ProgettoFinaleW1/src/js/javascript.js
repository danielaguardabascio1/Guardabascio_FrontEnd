// Funzione per nascondere i coockie
CookieId.addEventListener('click', function () {
    document.getElementById('cookie').style.display = "none";
});




var listArticle= document.getElementsByClassName('like');

for(var i = 0; i<listArticle.length ; i++){
    listArticle[i].addEventListener('click' , function (){
        if(this.classList.contains('like')){
             this.classList.toggle('like_green');
        }
        else {
        this.classList.toggle('like');
    }
            
    })
}