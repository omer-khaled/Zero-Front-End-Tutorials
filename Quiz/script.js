let numberOFQuestions = document.querySelector('.quiz-app .quiz-info .count span');
let bullets = document.querySelector('.quiz-app .bullets .spans');
let questionArea = document.querySelector('.quiz-app .quiz-area h2');
let answersArea = document.querySelector('.quiz-app .answers-area');
let Button_submit = document.querySelector('.quiz-app .submit-button');
let results = document.querySelector('.quiz-app .results');
let seconds = document.querySelector('.bullets .countdown .seconds');
let list_Data = [];
let numberOFRightAnaswer = 0;
let numberOFfalseAnaswer = 0;
let holder ;
let cur = 0;

// Fetch Quetions
async function getApi(link){
    const response= await fetch(link);
    return await response.json();
}



// Create Bullets
function createBulletes (parent , Data){
    numberOFQuestions.innerHTML = Data.length;
    for(let i = 0;i < Data.length;i++){
        let span = document.createElement('span');
        if(i === 0){
            span.className = "active";
        }
        parent.appendChild(span);
    }
}

// Add new question
function addNewQuestion(Data){
    while(true){
        cur = Math.floor(Math.random() * Data.length);
        if(!list_Data.includes(cur)){
            list_Data.push(cur);
            break;
        }
    }
    let questions = Data[cur];
    questionArea.innerText = (questions.question);
    addNewAnswers(Data);
}

// Add new answers
function addNewAnswers(Data){
    let answers = Data[cur].answers;
    // console.log(Object.keys(answers));
    answersArea.innerHTML = "";
    // texts
    let text1 = document.createTextNode(answers.answer_a);
    let text2 = document.createTextNode(answers.answer_b);
    let text3 = document.createTextNode(answers.answer_c);
    let text4 = document.createTextNode(answers.answer_d);
    // labels
    let label1 = document.createElement('label');
    label1.setAttribute("for","answer_a");
    let label2 = document.createElement('label');
    label2.setAttribute("for","answer_b");
    let label3 = document.createElement('label');
    label3.setAttribute("for","answer_c");
    let label4 = document.createElement('label');
    label4.setAttribute("for","answer_d");
    // content
    answersArea.innerHTML += `<div class="answer">
        <input type="radio"  id="answer_a" name="questions">
    </div>`;    
    let last_label = document.querySelector('.quiz-app .answers-area .answer:last-child');
    label1.appendChild(text1);
    last_label.appendChild(label1);
    last_label.dataset.aswer = answers.answer_a;
    let checkedInpu = document.querySelector('.quiz-app .answers-area .answer input[type="radio"]');
    let nodeAttrbute = document.createAttribute("checked");
    checkedInpu.setAttributeNode(nodeAttrbute)
    answersArea.innerHTML += `<div class="answer">
        <input type="radio"  id="answer_b" name="questions">
    </div>`;
    last_label = document.querySelector('.quiz-app .answers-area .answer:last-child');
    label2.appendChild(text2);
    last_label.appendChild(label2);
    last_label.dataset.aswer = answers.answer_b;
    answersArea.innerHTML += `<div class="answer">
        <input type="radio"  id="answer_c" name="questions">
    </div>`;
    last_label = document.querySelector('.quiz-app .answers-area .answer:last-child');
    label3.appendChild(text3);
    last_label.appendChild(label3);
    last_label.dataset.aswer = answers.answer_c;
    answersArea.innerHTML += `<div class="answer">
        <input type="radio"  id="answer_d" name="questions">
    </div>`;
    last_label = document.querySelector('.quiz-app .answers-area .answer:last-child');
    label4.appendChild(text4);
    last_label.appendChild(label4);
    last_label.dataset.aswer = answers.answer_d;
}

// CheckAnaswers
function checkAnswer(Data){
    let rightAnsers = Data[cur].correct_answer;
    let radios = document.getElementsByName('questions');
    for(let i=0; i< radios.length; i++){
        if(radios[i].checked){
            if(radios[i].id == rightAnsers){
                numberOFRightAnaswer++;
            }
            else{
                numberOFfalseAnaswer++;
            }
        }
    }
}

// contdown
function countDown(duration,Data){
    let con=duration;
    seconds.innerHTML = (con<10) ?  "0"+con : con;
    holder = setInterval(()=>{
        con--;
        seconds.innerHTML = (con<10) ?  "0"+con : con;
        if(con == 0){
            btnFanctionality(Data);
        }
    },1000);
}

// btn functionality
function btnFanctionality(Data){
    if(list_Data.length === Data.length){
        answersArea.remove();
        Button_submit.remove();
        questionArea.remove();
        clearInterval(holder);
        if(numberOFRightAnaswer > ((Data.length) / 2) && numberOFRightAnaswer < Data.length){
            results.innerHTML = `<span class="good">Good</span>, ${numberOFRightAnaswer} From ${Data.length} IS Good`
        }else if(numberOFRightAnaswer === Data.length){
            results.innerHTML = `<span class="prefect">Prefect</span>, ${numberOFRightAnaswer} From ${Data.length} IS Prefect`
        }else{
            results.innerHTML = `<span class="bad">Bad</span>, ${numberOFRightAnaswer} From ${Data.length} IS Bad`
        }
        results.style.display = "block";   
        document.querySelector('.bullets .countdown').style.display = "none";   
        document.querySelector('.quiz-app .quiz-area').style.display = "none";   
    }
    else{
        checkAnswer(Data);
        addNewQuestion(Data);
        document.querySelector(`.quiz-app .bullets .spans span:nth-child(${list_Data.length})`).classList.add('active');
        clearInterval(holder);
        countDown(8,Data);
    }
}


// Selecet 
let divs = document.querySelectorAll('section div');
divs.forEach((element)=>{
    element.onclick = function(e){ 
        let cur = e.target;
        if(Array.from(cur.classList).includes('type')){
            cur = e.target;
        }else{
            cur = e.target.parentElement;
        }
        let topic = Array.from(cur.classList)[0];
        // Call function getApi(link)
        getApi(`https://quizapi.io/api/v1/questions?apiKey=qLoPDUKYfi9D4Sna5BapO4MIrhmSh0ZBZACR3JOz&category=code&limit=20&tags=${topic}`).then((res)=>{
        let Data =  res;
        return Data;
        }).then((Data)=>{
            createBulletes(bullets,Data);
            addNewQuestion(Data);
            countDown(8,Data);
            Button_submit.onclick = function(){
                btnFanctionality(Data);
            }
        });
        document.querySelector('.quiz-app .quiz-info .category span').innerHTML = topic;
        document.querySelector('.quiz-app').style.display = "block";
        document.querySelector('section').style.display = "none";
    }
})

// take new Quiz
document.querySelector('header>button').onclick = function(){
    window.location.reload();
}
































