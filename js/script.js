let footerFoldIcon = document.querySelectorAll('.footer__allLink__col__top i');

console.log();
footerFoldIcon.forEach(ele=>{
    ele.addEventListener('click',e=>{
        console.log(e.target);

        if(!(e.target.classList.contains('open'))){

            e.target.parentElement.nextElementSibling.classList.remove('hidde');
            e.target.classList.add('open');
            e.target.classList.remove('close');
            e.target.innerHTML="-";

        }else if(e.target.classList.contains('open')){
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
    console.log('hhh');
    searchModal.classList.remove('closeModal');
});


searchBoxCloseBtn.addEventListener('click',()=>{
    console.log('aaaa');
    searchModal.classList.add('closeModal');
});

