// you can use mult addEventlLisenter in one time
let taps = document.querySelectorAll('ul li');
let divs = document.querySelectorAll('.container div');
taps.forEach((element)=>{
    element.addEventListener('click',()=>{
        let getter = element.dataset.type;
        taps.forEach((elem)=>{
            elem.classList.remove('active');
        });
        element.classList.add('active');
        if(element.dataset.type === 'all'){
            divs.forEach((eleem)=>{
                    eleem.classList.remove('d-none');
                    eleem.classList.remove('none');
            });
        }
        else{
            divs.forEach((eleem)=>{
                if(element.dataset.type === eleem.dataset.type){
                    eleem.classList.remove('d-none');
                    eleem.classList.remove('none');
                }else{
                    eleem.classList.add('d-none');
                    setTimeout(()=>{
                        eleem.classList.add('none');
                    },1500);
                }
            });
        }
    }
)}
);