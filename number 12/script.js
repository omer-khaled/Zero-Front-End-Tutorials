let three = document.querySelector('.three');
let nums = Array.from(document.querySelectorAll('.three .nums .num'));
// console.log(element.textContent); // return content now in div
window.onscroll = function(){
    console.log(three.getBoundingClientRect().top);
    if(three.getBoundingClientRect().top <= 0){
        console.log('start');
        nums.forEach(element=>{
            let  hold =  setInterval(()=>{
                    if(Number(element.innerHTML) < element.dataset.goal){
                        element.innerHTML = Number(element.innerHTML) + 1;
                    }else{
                        clearInterval(hold);
                    }
            }, 2000 / element.dataset.goal);
        });
    }
}