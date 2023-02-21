let prev = document.getElementById('prev');
let next = document.getElementById('next');
let slideNum = document.getElementById('slide-number');
let controls = document.querySelector('.indicators');
let controlsSpan;
let images = document.querySelectorAll('.slider-conteiner img');
let current = 1;
// make indectors
Indicators();
changeSlide();
controlsSpan = [...controls.children];

// make indectors fuunction
function Indicators(){
    let size = images.length;
    for(let i = 0; i<size ; i++){
        let span = document.createElement('span');
        let text = document.createTextNode(`${i+1}`);
        span.appendChild(text);
        span.dataset.index = i+1;
        if(i===0){
            span.classList.add('active');
        }
        controls.appendChild(span);
    }
}

// prev on click
prev.onclick = function(){
    if(!this.classList.contains('disapled')){
        current--;
        images.forEach(element=>{
            element.classList.remove('active');
        });
        images[current-1].classList.add('active');
        controlsSpan.forEach(element=>{
            element.classList.remove('active');
        });
        controlsSpan[current-1].classList.add('active');
        if(current == 1){
            this.classList.add('disapled');
        }
        next.classList.remove('disapled');
        changeSlide();
    }
}

// next on click
next.onclick = function(){
    if(!this.classList.contains('disapled')){
        current++;
        images.forEach(element=>{
            element.classList.remove('active');
        });
        images[current-1].classList.add('active');
        controlsSpan.forEach(element=>{
            element.classList.remove('active');
        });
        controlsSpan[current-1].classList.add('active');
        if(current == images.length){
            this.classList.add('disapled');
        }
        prev.classList.remove('disapled');
        changeSlide();
    }
}

//controls on click
controlsSpan.forEach(element =>{
    element.onclick = function(){
        let index = element.dataset.index;
        current = index;
        images.forEach(element=>{
            element.classList.remove('active');
        });
        images[index-1].classList.add('active');
        controlsSpan.forEach(elem=>{
            elem.classList.remove('active');
        });
        element.classList.add('active');
        if(index == 1){
            prev.classList.add('disapled');
        }else{  
            prev.classList.remove('disapled');
        }
        if(index == images.length){
            next.classList.add('disapled');
        }else{
            next.classList.remove('disapled');
        }
        changeSlide();
    }
});

// Change Slide number
function changeSlide(){
    slideNum.innerHTML = `Slide #${current} of ${images.length}`;
}
















