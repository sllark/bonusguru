let footerFoldIcon = document.querySelectorAll('.footer__allLink__col__top i');

footerFoldIcon.forEach(ele=>{
    ele.addEventListener('click',e=>{

        if(!(e.target.classList.contains('open'))){

            e.target.parentElement.nextElementSibling.classList.remove('hidde');
            e.target.parentElement.nextElementSibling.previousElementSibling.style.paddingBottom=0;
            e.target.classList.add('open');
            e.target.classList.remove('close');
            e.target.innerHTML="-";

        }else if(e.target.classList.contains('open')){
            e.target.parentElement.nextElementSibling.previousElementSibling.style.paddingBottom='1.5rem';
            e.target.parentElement.nextElementSibling.classList.add('hidde');
                e.target.classList.remove('open');
            e.target.classList.add('close');
            e.target.innerHTML="+";

        }

    })
});

let searchModal=document.querySelector('.searchModal'),
    searchIcon = document.querySelector('.searchIcon img'),
    searchBoxCloseBtn = document.querySelector('.searchModal__content__close');

searchIcon.addEventListener('click',()=>{
    searchModal.classList.remove('closeModal');
});


searchBoxCloseBtn.addEventListener('click',()=>{
    searchModal.classList.add('closeModal');
});


let subscribeModal=document.querySelector('.subscribeModal'),
    subscribeModalBtn = document.querySelector('.header__top__btn'),
    subscribeModalCloseBtn = document.querySelector('.subscribeModalCloseBtn');

subscribeModalBtn.addEventListener('click',()=>{
    subscribeModal.classList.remove('closeModal');
});


subscribeModalCloseBtn.addEventListener('click',()=>{
    subscribeModal.classList.add('closeModal');
});

let giftModal=document.querySelector('.giftModal'),
    giftModalBtn = document.querySelector('.giftIcon'),
    giftModalCloseBtn = document.querySelector('.giftModalCloseBtn');

giftModalBtn.addEventListener('click',()=>{
    giftModal.classList.remove('closeModal');
});


giftModalCloseBtn.addEventListener('click',()=>{
    giftModal.classList.add('closeModal');
});






let headerLiClasses=['headerFirstLi','headerSecLi','headerThirdLi'];

let headerBtnLiClasses=['headerFirstSidebBtn','headerSecondSidebBtn','headerThirdSidebBtn'];


headerLiClasses.forEach(ele=>{

    let element = document.querySelector('.'+ele);

    if(element)
        element.onclick=function (e) {
            element.children[1].classList.toggle('hide');
            if(ele==='thirdBtnOptions'){
                document.querySelector('.'+ele+' img').classList.toggle('rotateUp');
            }
        };
    if(element)
        window.addEventListener('click',(e)=> {
            if (e.target !==element.children[0] && e.target !== element.children[1] && e.target!==element.children[0].children[2]) {
                element.children[1].classList.add('hide');
            }
        });

});

headerBtnLiClasses.forEach(ele=>{

    let element = document.querySelector('.'+ele);

    if(element)
        element.onclick=function (e) {
            document.querySelector('.'+ele+' .header__Content__btns__btnContainer__downIcon__liOptions').classList.toggle('hide');
            if(ele==='headerThirdSidebBtn'){
                document.querySelector('.'+ele+' .header__Content__btns__btnContainer__downIcon img').classList.toggle('rotateUp');
            }
        };
    if(element)
        window.addEventListener('click',(e)=> {
            if (e.target !==element && e.target !==element.children[0] && e.target !==element.children[0].children[0].children[2] && e.target !==element.children[0].children[1] && e.target !==element.children[1] && e.target !==element.children[1].children[0] && e.target !==element.children[1].children[0].children[2]) {
                document.querySelector('.'+ele+' .header__Content__btns__btnContainer__downIcon__liOptions').classList.add('hide');
            }
        });

});


document.querySelectorAll('.itemBtnTwo').forEach(ele=>{
    ele.onclick=function (e) {
        ele.children[1].children[1].classList.toggle('hide');
    };

    window.addEventListener('click',(e)=>{
        if(e.target!==ele && !(ele.contains(e.target))){
            ele.children[1].children[1].classList.add('hide');
        }
    });

});

let nav=document.querySelector('.nav'),
    nav__close=document.querySelector('.nav__close'),
    burgerMenu=document.querySelector('.header__top__all__left__navMenu');


burgerMenu.onclick=function () {
    nav.classList.remove('moveNavAway');
};

nav__close.onclick=function () {
    nav.classList.add('moveNavAway');
};

window.addEventListener('click',(e)=>{
    if(e.target!==nav && e.target!==burgerMenu && e.target!==burgerMenu.children[0]){
        nav.classList.add('moveNavAway');
    }
});




