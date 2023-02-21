import { words } from "./data.js";
let buttonss = document.querySelector('.continer .row .characters');
let stand = document.querySelector('.continer .row .Hangman-draw .the-draw .the-stand');
let hand = document.querySelector('.continer .row .Hangman-draw .the-draw .the-hand');
let rope = document.querySelector('.continer .row .Hangman-draw .the-draw .the-rope');
let shat = document.querySelector('.continer .row .Hangman-draw .the-draw .the-man .shat');
let head = document.querySelector('.continer .row .Hangman-draw .the-draw .the-man .head');
let body = document.querySelector('.continer .row .Hangman-draw .the-draw .the-man .body .bod');
let handRight = document.querySelector('.continer .row .Hangman-draw .the-draw .the-man .body .hands-right');
let handLeft = document.querySelector('.continer .row .Hangman-draw .the-draw .the-man .body .hands-left');
let legsRight = document.querySelector('.continer .row .Hangman-draw .the-draw .the-man .body .legs-right');
let legsLeft = document.querySelector('.continer .row .Hangman-draw .the-draw .the-man .body .legs-left');
let rightLetters = 0;
let man = {
    0 : stand,
    1 : hand,
    2 : rope,
    3 : shat,
    4 : head,
    5 : body,
    6 : handRight,
    7 : handLeft,
    8 : legsRight,
    9 : legsLeft,
}
let base = 0;
// -------------
let letters = document.querySelector('.characters');
let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let gusser = document.querySelector('.letters-guess');
let audio = document.querySelector('.aud');
// set leeters
let word = rdwWord(words);
setLetters();
createIn(word.length);
console.log(word);

// set leeters function
function setLetters(){
    letters.innerHTML = '';
    alphabet = alphabet.map(element => {
        return element.toUpperCase();
    });
    alphabet.forEach(element=>{
        let span = document.createElement('span');
        let text = document.createTextNode(element);
        span.appendChild(text);
        letters.appendChild(span);
    });
    [...letters.children].forEach(element=>{
        element.addEventListener('click',function(){
            // susbend (no-clicking)
            susbend(element);

            // checker
            checker(element.innerHTML , word);
        });
    });
}


// susbend
function susbend(element){
    element.classList.add('clicked');
}


// random word
function rdwWord(words){
    let keys = Object.keys(words);
    let radnindex = keys[Math.floor(Math.random() * keys.length)];
    document.querySelector('.continer .category span').innerHTML = radnindex;
    let data = words[`${radnindex}`];
    return data[Math.floor(Math.random() * data.length)].toUpperCase();
}

// checker(word)
function checker(letter , wordd){
    console.log(wordd);
    if(wordd.includes(letter)){
        (wordd.split('')).forEach((element , index) => {
            if(element === letter){
                Array.from(gusser.children)[index].innerHTML = letter;
                rightLetters++;
            }
        });
    }else{
        // show pesiec
        man[base].style.cssText = `
            opacity : 1 !important;
        `;
        if(base === 9){
            buttonss.classList.add('finish');
            document.querySelector('.overlay').innerHTML = `Game Over, The Word IS ${wordd}`;
            let button = document.createElement('button');
            let text = document.createTextNode('New Game');
            button.appendChild(text);
            document.querySelector('.overlay').appendChild(button);
            document.querySelector('.overlay').style.backgroundColor = 'red';
            document.querySelector('.overlay').style.display = 'flex';
            document.querySelector('.overlay button').onclick = function(){
                buttonss.classList.remove('finish');
                word = rdwWord(words);
                console.log(word);
                setLetters();
                createIn(word.length);
                document.querySelector('.overlay').style.display = 'none';
                for(let i=0; i<10 ;i++){
                    man[i].style.cssText = `
                        opacity : 0;
                    `;
                }
                base = 0;
                rightLetters = 0;
            }
        }
        base++;
        audio.play();
        setTimeout(()=>{
                // stop audio
            audio.pause();
            audio.currentTime = 0;
        },200)
    }
    if(rightLetters === wordd.length){
        buttonss.classList.add('finish');
        console.log('you Are winner');
        document.querySelector('.overlay').innerHTML = `you Are winner, The Word IS ${wordd}`;
        let button = document.createElement('button');
        let text = document.createTextNode('New Game');
        button.appendChild(text);
        document.querySelector('.overlay').appendChild(button);
        document.querySelector('.overlay').style.backgroundColor = '#007b8c';
        document.querySelector('.overlay').style.display = 'flex';
        document.querySelector('.overlay button').onclick = function(){
            buttonss.classList.remove('finish');
            word = rdwWord(words);
            console.log(word);
            setLetters(word);
            createIn(word.length);
            document.querySelector('.overlay').style.display = 'none';
            for(let i=0; i<10 ;i++){
                man[i].style.cssText = `
                    opacity : 0;
                `;
            }
            base = 0;
            rightLetters = 0;
        }
    }
}

// create inputs
function createIn(len){
    gusser.innerHTML = '';
    console.log('len =  ',len)
    for(let i = 0; i<len ; i++){
        let span = document.createElement('span');
        gusser.appendChild(span);
    }
}





