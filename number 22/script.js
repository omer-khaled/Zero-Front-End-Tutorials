// conteiner > serial
// conteiner > generate
// 1 numbers , letters , special character
// serial curacter count

let serial = document.querySelector('.conteiner .serial');
let generate = document.querySelector('.conteiner .generate');
let checkboxes = document.querySelectorAll('.conteiner div input');
let generatedVariable = '';
let listNumbers = [];
generate.onclick = function (){
    generatedVariable = '';
    listNumbers =[];
    let cheracters_biger= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase());
    let spechials= '!@#$%^&*/-~';
    let numbers = '0123456789';
    let all = ' ';
    let checs = false;
    checkboxes.forEach((element)=>{
        if(element.checked){
            if(element.id === 'letters'){
                all=all.concat(cheracters_biger);
            }else if(element.id === 'numbers'){
                all=all.concat(numbers);
            }else if(element.id === 'special'){
                all=all.concat(spechials);
            }
            console.log(all);
            checs = true;
        }
    });
    console.log(all);
    if(checs){
        for(let i = 1 ; i<=10 ; i++){
            // while(1){
                let num = Math.floor(Math.random()*all.length);
                // if(!listNumbers.includes(num)){
                    listNumbers.push(num);
                    generatedVariable += all[num];
                    // break;
                // }
            // }
        }
        // console.log(listNumbers);
        // console.log(generatedVariable);
        serial.innerHTML = generatedVariable;
    }else{
        serial.innerHTML = 'defined check boxes';
    }
}













