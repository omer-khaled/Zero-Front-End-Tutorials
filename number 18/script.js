let open = document.querySelector('.toggle');
let close = document.querySelector('nav .close');
let navList = document.querySelector('nav');
open.onclick = function(){
    navList.classList.add('open');
}
close.onclick = function(){
    navList.classList.remove('open');
}