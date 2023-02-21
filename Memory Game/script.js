let startGame = document.querySelector('.overlay button');
let name = document.querySelector('.game .info .user .name');
let container = document.querySelector('.game .images');
let counterr = document.querySelector('.game .info .counter .count');
let succc = document.getElementById('sucsess');
let fail = document.getElementById('faild');
let rodumNumbers = [];
// ./assets/angular.png
let images = ['angular.png','css.png','github.png','gulpjs.png','html5.png','jest.png','mongodb.JPG','python.JPG','react.png','vuejs.png'];
let boxes;
startGame.onclick = function(){
    let userName = prompt('Please enter your name' , 'User Name');
    if(userName == '' || userName == 'User Name'){
    }else{
        startGame.parentElement.style.display = 'none';
        name.innerHTML = userName;
        setTimeout(() => {
            boxes.forEach(element => {
                element.classList.remove('show');
            });
        }, 2000);
    }
}
downloadIamges();

// download images and make a game
function downloadIamges(){
    for(let a = 0; a<20 ;a++){
        while(true){
            let num = Math.floor(Math.random() * 20) + 1;
            if(!rodumNumbers.includes(num)){
                rodumNumbers.push(num);
                break;
            }
        }
    }
    images.forEach((element , index)=>{
        // main box
        let box1 = document.createElement('div');
        box1.classList.add('box');
        box1.classList.add('show');
        box1.dataset.technology = element.slice(0 , (element.length - 4));
        // face box
        let face = document.createElement('div');
        face.classList.add('face');
        let i = document.createElement('i');
        i.classList.add('fa-solid');
        i.classList.add('fa-question');
        face.appendChild(i);
        // back box
        let back = document.createElement('div');
        back.classList.add('back');
        let img = document.createElement('img');
        img.setAttribute('src' , `../assets/${element}`);
        back.appendChild(img);
        box1.appendChild(face);
        box1.appendChild(back);
        // -------------------------box1---------------------------------------
        let box2 = document.createElement('div');
        box2.classList.add('box');
        box2.classList.add('show');
        box2.dataset.technology = element.slice(0 , (element.length - 4));
        // face box
        let face1 = document.createElement('div');
        face1.classList.add('face');
        let i1 = document.createElement('i');
        i1.classList.add('fa-solid');
        i1.classList.add('fa-question');
        face1.appendChild(i1);
        // back box
        let back1 = document.createElement('div');
        back1.classList.add('back');
        let img1 = document.createElement('img');
        img1.setAttribute('src' , `../assets/${element}`);
        back1.appendChild(img1);
        box2.appendChild(face1);
        box2.appendChild(back1);
        // -------------------------box2---------------------------------------
        box1.style.cssText = `
            order : ${rodumNumbers.shift()};
        `;
        box2.style.cssText = `
            order : ${rodumNumbers.shift()};
        `;
        container.appendChild(box1);
        container.appendChild(box2);
    });
    boxes = document.querySelectorAll('.game .images .box');
}

// on click on image
let one = '';
let two = '';
let numberOne = 0;
let numberTwo = 0;
let numberWins = 0;
boxes.forEach((element , index) => {
    element.addEventListener('click' , function(){
        succc.pause();
        fail.pause();
        succc.currentTime = 0
        fail.currentTime = 0
        element.classList.add('show');
        if(one === '' && two === ''){
            one = this.dataset.technology;
            numberOne = index;
        }else if(two === '' && one !== ''){
            prevent();
            two = this.dataset.technology;
            numberTwo = index;
            if(one === two){
                succc.play();
                boxes[numberOne].classList.add('no-clickingfoeve');
                boxes[numberTwo].classList.add('no-clickingfoeve');
                numberWins++;
                one = '';
                two = '';
                if(numberWins == 10){
                    console.log(numberWins);
                }
                allow();

            }else{
                fail.play();
                waiting();
                one = '';
                two = '';
                counterr.innerHTML = ++counterr.innerHTML;
            }
        }
    })
}); 

// close all events
function prevent(){
    boxes.forEach(element=>{
            element.classList.add('no-clicking');
    });
}
function allow(){
    boxes.forEach(element=>{
        element.classList.remove('no-clicking');
    });
}
async function waiting(){
    return await new Promise((resolve , reject)=>{
        if(true){
            resolve();
        }else{
            reject();
        }
            }).then(()=>{
                setTimeout(()=>{
                    boxes[numberOne].classList.remove('show');
                    boxes[numberTwo].classList.remove('show');
                },700);
            }).then(()=>{
                setTimeout(()=>{
                    allow();
                },700);
            });
}