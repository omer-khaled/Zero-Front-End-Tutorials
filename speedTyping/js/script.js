import  * as data  from '../js/data.js';
let words = data.w;
let levels = data.l;

// reser default level
let defaultLevelName = 'Normal';
let defaultLevelSeconds ;
// catch selecto
let startButton = document.querySelector('header .container button');
let lvlSpan = document.querySelector('header p .level');
let secondsSpan = document.querySelector('header p .seconds');
let theWord =document.querySelector('header .container .current-word');
let upcomingWords =document.querySelector('header .container .words');
let input =document.querySelector('header .container input');
let timeLeftSpan =document.querySelector('header .container .footer .Timer .conter');
let scoreGot =document.querySelector('header .container .footer .score .start');
let scoreTotal =document.querySelector('header .container .footer .score .end');
let finishMassage =document.querySelector('header .container .finish-massage');

// disaple paste Event
input.onpaste = function(){
    return false;
}

// satrt Game
startButton.onclick = function(){
    this.remove();
    // set defaults
    defaultLevelName  = document.getElementById('selector').value;
    defaultLevelSeconds = (defaultLevelName === 'Normal') ? levels['Normal'] : ((defaultLevelName === 'Easy') ? levels['Easy'] : levels['Hard']);
    console.log(defaultLevelSeconds);
    document.getElementById('selector').style.display = 'none';
    setData();
    // show all elements
    document.querySelector('header .container .footer').classList.remove('d-none');
    input.classList.remove('d-none');
    theWord.classList.remove('d-none');
    upcomingWords.classList.remove('d-none');
    // focus on input feild 
    input.focus();
    // generate Word Function
    genWords();
}

// set all data
function setData (){
    lvlSpan.innerHTML = defaultLevelName;
    secondsSpan.innerHTML = defaultLevelSeconds;
    timeLeftSpan.innerHTML = defaultLevelSeconds + defaultLevelSeconds;
    scoreTotal.innerHTML = words.length;
    scoreGot.innerHTML = 0;
}

// generate Word Function
function genWords(){
    // Get Randowm word from array
    let randowm = Math.floor(Math.random() * words.length);
    theWord.innerHTML = words[randowm];
    // get Word index
    let wordIndex = words.indexOf(words[randowm]);
    // remove From Array
    words = words.filter((element , index) => {
        return index !== wordIndex;
    });
    // add all Words
    upcomingWordsDiv();
    // startPlay function
    startPlay();
}

// add all Words
function upcomingWordsDiv(){
    upcomingWords.innerHTML  = '';
    words.forEach(element=>{
        let spam = document.createElement('span');
        let text = document.createTextNode(element);
        spam.appendChild(text);
        upcomingWords.appendChild(spam);
    });
}

// startPlay function
function startPlay(){
    // timeLeftSpan
    let hold = setInterval(()=>{
        timeLeftSpan.innerHTML = --timeLeftSpan.innerHTML;
        if(timeLeftSpan.innerHTML === '0'){
            // stop Time
            clearInterval(hold);
            // compare words
            if(theWord.innerHTML.toLowerCase() === (input.value).toLowerCase()){
                input.value = '';
                scoreGot.innerHTML = ++scoreGot.innerHTML;
                // site default
                timeLeftSpan.innerHTML = defaultLevelSeconds;
                // reset
                if(words.length > 0){
                    genWords();
                }else{
                    finishMassage.classList.remove('d-none');
                    finishMassage.classList.add('good');
                    finishMassage.innerHTML = 'Congratz';
                }
            }else{
                finishMassage.classList.remove('d-none');
                finishMassage.classList.add('bad');
                finishMassage.innerHTML = 'Game Over';
            }
            
        }
    },1000);
}







