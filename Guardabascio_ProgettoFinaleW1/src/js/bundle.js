(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

// Funzione per nascondere i coockie
CookieId.addEventListener('click', function () {
    document.getElementById('cookie').style.display = "none";
    document.getElementById('cookie').classList.add
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





},{}]},{},[1]);
