let three = document.querySelector('.three');
window.onscroll = function(){
    // if(window.scrollY >= three.offsetTop){
    //     console.log('resead');
    //     three.style.backgroundColor = 'red';
    // }
    if(three.getBoundingClientRect().top <= 0){
        console.log('resead');
        three.style.backgroundColor = 'red';
    }
    else{
        three.style.backgroundColor = '#ccc';
    }
}