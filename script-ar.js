var icnDrk = document.querySelector('.icon-dark button');
var body = document.querySelector('body');
var header = document.querySelector('header');
var headerImg = document.querySelector('header img')
var box = document.querySelector('.box')
var icoLang = document.querySelector('.navi h1')
var menuLang = document.querySelector('.menu-lang')
var Content = document.querySelector('.content')
var typeBooks = document.querySelector('.type-books')
var arCT = document.querySelector('.arCT')
var enCT = document.querySelector('.enCT')
var alCT = document.querySelector('.alCT')
var cntEn = document.querySelector('.cnt-en')
var cntAr = document.querySelector('.cnt-ar')
var typ1 = document.querySelector('.typ-1');
var typ2 = document.querySelector('.typ-2');
var typ3 = document.querySelector('.typ-3');
var typ4 = document.querySelector('.typ-4');
var typ5 = document.querySelector('.typ-5');
var icnTypBooks1 = document.querySelector('.icn-typ-books1');
var icnTypBooks2 = document.querySelector('.icn-typ-books2');
var icnTypBooks3 = document.querySelector('.icn-typ-books3');
var icnTypBooks4 = document.querySelector('.icn-typ-books4');
var icnTypBooks5 = document.querySelector('.icn-typ-books5');
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

window.onload = function(){
    alCT.focus()
}




var isChanged = JSON.parse(localStorage.getItem('l7ala') || false);

function tarier5alfya(){
    if(!isChanged){
        icnDrk.style = "color: rgb(255, 238, 0); transition: 0.2s ease;"
        body.style = "background-color: rgb(32, 32, 32); transition:0.2s ease;"
        header.style = "background-color: rgb(32, 32, 32); transition:0.2s ease; box-shadow: 1px 1px 20px rgba(255, 255, 255, 0.199);"
        headerImg.src = "images/full logo2-ar.png"
        box.style.color = "white"
        icoLang.style.color = "white"
        backList.style = "background-color: rgb(32, 32, 32); color: white; box-shadow: 1px 1px 20px rgba(255, 255, 255, 0.199); transition:0.2s ease;"
        icoLang.style.color = "white"
        menuLang.style = "background-color: rgb(32, 32, 32) ; color: white ; transition:0.2s ease; border-right: white 3px solid; border-bottom: white 3px solid; transition:0.2s ease;"
        Content.style = "background-color: rgb(32, 32, 32); color:white; border-right: white 3px solid; border-bottom: white 3px solid; transition:0.2s ease;"
        typeBooks.style = "background-color: rgb(32, 32, 32); border-right: white 3px solid;border-bottom: white 3px solid; transition:0.2s ease;"
        localStorage.setItem('l7ala', JSON.stringify(false));
        isChanged = true;
    }else {
        icnDrk.style = "color: #B2BABB; transition: 0.2s ease;"
        body.style = "background-color: white; transition:0.2s ease;"
        header.style = "background-color: white; transition:0.2s ease; box-shadow: 15px 15px 35px rgba(0, 0, 0, 0.199);"
        headerImg.src = "images/full logo-ar.png"
        box.style.color = "black"
        icoLang.style.color = "black"
        backList.style = "background-color: white; color: black; box-shadow: 15px 15px 35px rgba(0, 0, 0, 0.199); transition:0.2s ease;"
        icoLang.style.color = "black"
        menuLang.style = "background-color: rgba(255, 255, 255, 0.904); color: black ; transition:0.2s ease; border-right: black 3px solid; border-bottom: black 3px solid; transition:0.2s ease;"
        Content.style = "background-color: white; color:black; border-right: black 3px solid; border-bottom: black 3px solid; transition:0.2s ease;"
        typeBooks.style = "background-color: rgba(255, 255, 255, 0.904); border-right: black 3px solid;border-bottom: black 3px solid; transition:0.2s ease;"
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


arCT.addEventListener('click', () => {
    cntEn.style = "display: none;"
    cntAr.style = "display: grid;"
    typ1.style = "display: none;"
    typ2.style = "display: none;"
    typ3.style = "display: none;"
    typ4.style = "display: none;"
    typ5.style = "display: none;"
})

enCT.addEventListener('click', () => {
    cntAr.style = "display: none;"
    cntEn.style = "display: grid;"
    typ1.style = "display: none;"
    typ2.style = "display: none;"
    typ3.style = "display: none;"
    typ4.style = "display: none;"
    typ5.style = "display: none;"
})

alCT.addEventListener('click', () => {
    cntAr.style = "display: grid;"
    cntEn.style = "display: grid;"
    typ1.style = "display: block;"
    typ2.style = "display: block;"
    typ3.style = "display: block;"
    typ4.style = "display: block;"
    typ5.style = "display: block;"
})

icnTypBooks1.addEventListener('click', () => {
    cntAr.style = "display: none;"
    cntEn.style = "display: none;"
    typ1.style = "display: block;"
    typ2.style = "display: block;"
    typ3.style = "display: block;"
    typ4.style = "display: block;"
    typ5.style = "display: block;"
    typ2.style = "display: none;"
    typ3.style = "display: none;"
    typ4.style = "display: none;"
    typ5.style = "display: none;"
})

icnTypBooks2.addEventListener('click', () => {
    cntAr.style = "display: none;"
    cntEn.style = "display: none;"
    typ1.style = "display: block;"
    typ2.style = "display: block;"
    typ3.style = "display: block;"
    typ4.style = "display: block;"
    typ5.style = "display: block;"
    typ1.style = "display: none;"
    typ3.style = "display: none;"
    typ4.style = "display: none;"
    typ5.style = "display: none;"
})

icnTypBooks3.addEventListener('click', () => {
    cntAr.style = "display: none;"
    cntEn.style = "display: none;"
    typ1.style = "display: block;"
    typ2.style = "display: block;"
    typ3.style = "display: block;"
    typ4.style = "display: block;"
    typ5.style = "display: block;"
    typ1.style = "display: none;"
    typ2.style = "display: none;"
    typ4.style = "display: none;"
    typ5.style = "display: none;"
})

icnTypBooks4.addEventListener('click', () => {
    cntAr.style = "display: none;"
    cntEn.style = "display: none;"
    typ1.style = "display: block;"
    typ2.style = "display: block;"
    typ3.style = "display: block;"
    typ4.style = "display: block;"
    typ5.style = "display: block;"
    typ1.style = "display: none;"
    typ2.style = "display: none;"
    typ3.style = "display: none;"
    typ5.style = "display: none;"
})

icnTypBooks5.addEventListener('click', () => {
    cntAr.style = "display: none;"
    cntEn.style = "display: none;"
    typ1.style = "display: block;"
    typ2.style = "display: block;"
    typ3.style = "display: block;"
    typ4.style = "display: block;"
    typ5.style = "display: block;"
    typ1.style = "display: none;"
    typ2.style = "display: none;"
    typ3.style = "display: none;"
    typ4.style = "display: none;"
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
