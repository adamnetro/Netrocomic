var icnDrk = document.querySelector('.icon-dark button');
var body = document.querySelector('body');
var header = document.querySelector('header');
var headerImg = document.querySelector('header img');
var box = document.querySelector('.box');
var icoLang = document.querySelector('.navi h1');
var menuLang = document.querySelector('.menu-lang');
var wrtSpan = document.querySelectorAll(".wrt-dfnt span");
var title = document.querySelector('title');
var backList = document.querySelector('.back-list-books');
var opnMenSrch = document.querySelector('.opn-men-srch');
var fullSearch = document.querySelector('.full-search');


window.addEventListener('blur', () => {
    title.innerText = "مهلا! اين انت ذاهب "
})

window.addEventListener('focus', () => {
    title.innerText = "لقد عدت :)";
})

var isChanged = JSON.parse(localStorage.getItem('l7ala') || false);

function tarier5alfya(){
    if(!isChanged){
        icnDrk.style = "color: rgb(255, 238, 0); transition: 0.2s ease;"
        body.style = "background-color: rgb(32, 32, 32); transition:0.2s ease; color:white;"
        header.style = "background-color: rgb(32, 32, 32); transition:0.2s ease; box-shadow: 1px 1px 20px rgba(255, 255, 255, 0.199);"
        for (var i = 0; i < wrtSpan.length; i++) {
            wrtSpan[i].style.color = "white";
          }
          backList.style = "background-color: rgb(32, 32, 32); color: white; box-shadow: 1px 1px 20px rgba(255, 255, 255, 0.199); transition:0.2s ease;"
          icoLang.style.color = "white"
        headerImg.src = "images/full logo2-ar.png"
        box.style.color = "white"
        icoLang.style.color = "white"
        menuLang.style = "background-color: rgb(32, 32, 32) ; color: white ;border-right: white 3px solid; border-bottom: white 3px solid; transition:0.2s ease;"
        localStorage.setItem('l7ala', JSON.stringify(false));
        isChanged = true;
    }else {
        icnDrk.style = "color: #B2BABB; transition: 0.2s ease;"
        body.style = "background-color: white; transition:0.2s ease; color:black;"
        header.style = "background-color: white; transition:0.2s ease; box-shadow: 15px 15px 35px rgba(0, 0, 0, 0.199);"
        for (var i = 0; i < wrtSpan.length; i++) {
            wrtSpan[i].style.color = "black";
          }
        backList.style = "background-color: white; color: black; box-shadow: 15px 15px 35px rgba(0, 0, 0, 0.199); transition:0.2s ease;"
        icoLang.style.color = "black"
        headerImg.src = "images/full logo-ar.png"
        box.style.color = "black"
        icoLang.style.color = "black"
        menuLang.style = "background-color: rgba(255, 255, 255, 0.904); color: black ;border-right: black 3px solid; border-bottom: black 3px solid; transition:0.2s ease;"
        localStorage.setItem('l7ala', JSON.stringify(true));
        isChanged = false;
    }
}

tarier5alfya();

icnDrk.addEventListener('click', function() {
    tarier5alfya();
})


icoLang.addEventListener('click', () => {
    menuLang.classList.toggle('menulang-active')
})

function searchMB(){
    var Serchrinput = document.querySelector('.search-input').value.toUpperCase();
    var BK = document.querySelectorAll('.list-books .BK');
    var BKName = document.getElementsByTagName('h2');

    for (var i = 0; i<BKName.length; i++) {
        if (BKName[i].innerHTML.toUpperCase().indexOf(Serchrinput) >= 0){
            BK[i].style.display = "";
        } else {
            BK[i].style.display = "none";
        }
    }
}

function searchPC(){
    var box = document.querySelector('.box').value.toUpperCase();
    var BK = document.querySelectorAll('.list-books .BK');
    var BKName = document.getElementsByTagName('h2');

    for (var i = 0; i<BKName.length; i++) {
        if (BKName[i].innerHTML.toUpperCase().indexOf(box) >= 0){
            BK[i].style.display = "";
        } else {
            BK[i].style.display = "none";
        }
    }
}

box.addEventListener('click', () => {
    backList.classList.toggle('back-list-books-active');
})

var chngsrch = false;
opnMenSrch.addEventListener('click', () => {
    backList.classList.toggle('back-list-books-active');
    if(!chngsrch){
        fullSearch.style.display = "block";
        chngsrch = true;
    }else {
        fullSearch.style.display = "none";
        chngsrch = false;
    }
})